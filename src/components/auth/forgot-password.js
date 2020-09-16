import React, { useState } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { withRouter } from "react-router-dom";
import { forgotPasswordUrl, timeOut } from "../../api/rootUrls";
import axios from "axios";
import Alert from "../shared/alert";
import Preloader from "../shared/preloader";
import swal from "sweetalert";

const ForgotPassword = ({ history }) => {
  const [state, setState] = useState({
    email: "",
    loggingIn: false,
    loginErrorMessage: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const sendResetLink = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loggingIn: true,
    });
    let reqBody = {
      email: state.email,
    };
    axios({
      url: `${forgotPasswordUrl}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: timeOut,
      data: reqBody,
    })
      .then((result) => {
        if (result.data.respCode === "Successful") {
          swal(
            "Successful Reset Request",
            "Please check your email for a Link to set a new password",
            "success"
          );
          history.push("/");
        } else {
          setState({
            ...state,
            loggingIn: false,
            loginErrorMessage: result.data.respDescription,
          });
        }
      })
      .catch((err) => {
        setState({
          ...state,
          loggingIn: false,
          loginErrorMessage: err,
        });
      });
  };

  const { email, loggingIn, loginErrorMessage } = state;
  if (loggingIn) {
    return <Preloader />;
  }
  return (
    <div>
      <NavBar />
      {loginErrorMessage.length ? <Alert message={loginErrorMessage} /> : null}
      <div className="container main-container no-header">
        <div className="row">
          <div className="col-12 section small-vertical-padding">
            <h3 className="text-center title">Reset Password</h3>
            <h6 className="text-center text-shecluded">
              Enter email you registered with
            </h6>
          </div>
        </div>

        <div className="row auth-row">
          <div className="col-12 col-md-8 section small-vertical-padding">
            {loginErrorMessage.length ? (
              <div className="alert alert-danger alert-dismissible">
                {loginErrorMessage}
              </div>
            ) : null}
            <form onSubmit={sendResetLink}>
              <div className="form-group">
                <label className="text-body">Email Address</label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-shecluded btn-lg">
                Send Reset Link
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(ForgotPassword);
