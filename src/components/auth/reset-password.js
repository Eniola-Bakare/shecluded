import React, { useState, useEffect } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { timeOut, resetPasswordUrl } from "../../api/rootUrls";
import Preloader from "../shared/preloader";
import Alert from "../shared/alert";
import swal from "sweetalert";

const ResetPasswordPage = () => {
  const [state, setState] = useState({
    passwordsType: "password",
    passwordsType2: "password",
    pin: "",
    newPassword: "",
    newPasswordAgain: "",
    loggingIn: false,
    errorMessage: "",
  });
  const history = useHistory();
  const match = useRouteMatch();
  console.log(match.params.id);

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      errorMessage: "",
    });
  };

  useEffect(() => {
    sessionStorage.clear();
  }, [state.errorMessage]);

  const togglePasswordVisibility = () => {
    if (state.passwordsType === "password") {
      setState({ ...state, passwordsType: "text" });
    } else {
      setState({ ...state, passwordsType: "password" });
    }
  };
  const togglePasswordVisibility2 = () => {
    if (state.passwordsType2 === "password") {
      setState({ ...state, passwordsType2: "text" });
    } else {
      setState({ ...state, passwordsType2: "password" });
    }
  };

  const resetPassword = (event) => {
    event.preventDefault();
    const { newPassword, newPasswordAgain } = state;
    if (newPassword !== newPasswordAgain) {
      return swal("Incorrect credentials", "Passwords do not match!", "info");
    }
    setState({
      ...state,
      loggingIn: true,
    });
    // const pinSeparator = pin.split("_");
    let reqBody = {
      confirmPassword: newPasswordAgain,
      password: newPassword,
      newPassword,
      shecludedId: match.params.id,
      token: match.params.token,
      email: "",
      oldPassword: "",
    };
    axios({
      url: `${resetPasswordUrl}`,
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
            "Successful Reset",
            "You have reset your password, you can now log in with your new password.",
            "success"
          );
          history.push("/login");
        } else {
          setState({
            ...state,
            loggingIn: false,
            errorMessage: result.data.respDescription,
          });
        }
      })
      .catch((err) => {
        setState({
          ...state,
          loggingIn: false,
        });
        if (!err.response) {
          setState({
            ...state,
            errorMessage: "Network Error",
          });
        } else {
          if (err.response.status === 400) {
            setState({
              ...state,
              errorMessage: "Bad Request",
            });
          } else {
            setState({
              ...state,
              errorMessage: err,
            });
          }
        }
      });
  };

  const {
    passwordsType,
    passwordsType2,
    newPassword,
    newPasswordAgain,
    loggingIn,
    pin,
    errorMessage,
  } = state;
  if (loggingIn) {
    return <Preloader />;
  }
  return (
    <div>
      <NavBar />
      {errorMessage.length ? <Alert message={errorMessage} /> : null}
      <div className="container main-container no-header">
        <div className="row">
          <div className="col-12 section small-vertical-padding">
            <h3 className="text-center title">Set New Password</h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-4 small-vertical-padding mb-5">
            {errorMessage.length ? (
              <div className="alert alert-danger alert-dismissible">
                {errorMessage}
              </div>
            ) : null}
            <form onSubmit={resetPassword} >
              {/* <div className="form-group">
                <div className="input-group">
                  <input
                    className="form-control text-input"
                    value={pin}
                    onChange={handleInputChange}
                    placeholder="Token"
                    type="text"
                    name="pin"
                    required
                  />
                  <span className="input-label"> Token</span>
                  <div
                    className="input-group-append show-password"
                    onClick={togglePasswordVisibility}
                  >
                    <div className="input-group-text">
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="form-group">
                <div className="input-group">
                  <input
                    className="form-control text-input"
                    value={newPassword}
                    onChange={handleInputChange}
                    placeholder="New Password"
                    type={passwordsType}
                    name="newPassword"
                    required
                  />
                  <span className="input-label"> New Password</span>
                  <div
                    className="input-group-append show-password"
                    onClick={togglePasswordVisibility}
                  >
                    <div className="input-group-text">
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input
                    className="form-control text-input"
                    value={newPasswordAgain}
                    onChange={handleInputChange}
                    placeholder="New Password Again"
                    type={passwordsType2}
                    name="newPasswordAgain"
                    required
                  />
                  <span className="input-label">New Password Again</span>
                  <div
                    className="input-group-append show-password"
                    onClick={togglePasswordVisibility2}
                  >
                    <div className="input-group-text">
                      <i className="fa fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-shecluded w-100">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ResetPasswordPage;
