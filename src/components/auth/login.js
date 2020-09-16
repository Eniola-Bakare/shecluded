import React, { useState, useEffect } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { timeOut, loginUrl } from "../../api/rootUrls";
import Preloader from "../shared/preloader";
import Alert from "../shared/alert";
import { CometChat } from "@cometchat-pro/chat";
import { COMETCHAT_CONSTANTS } from "../../consts";

const LoginPage = ({ history }) => {
  const [state, setState] = useState({
    passwordsType: "password",
    email: "",
    password: "",
    loggingIn: false,
    loginErrorMessage: "",
  });

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
      loginErrorMessage: "",
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem("userData")) {
      history.push("/dashboard");
    } else {
      sessionStorage.clear();
    }
  }, []);

  const togglePasswordVisibility = () => {
    if (state.passwordsType === "password") {
      setState({ ...state, passwordsType: "text" });
    } else {
      setState({ ...state, passwordsType: "password" });
    }
  };

  const login = (event) => {
    event.preventDefault();
    setState({
      ...state,
      loggingIn: true,
    });
    const { email, password } = state;
    let reqBody = {
      deviceId: "",
      email,
      password,
      shecludedId: "",
    };
    axios({
      url: `${loginUrl}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: timeOut,
      data: reqBody,
    })
      .then((result) => {
        if (result.data.respCode === "Successful") {
          sessionStorage.setItem(
            "userData",
            JSON.stringify(result.data.respBody)
          );
          let apiKey = COMETCHAT_CONSTANTS.API_KEY;
          let uid = result.data.respBody.shecludedId;
          let name = state.email.split("@")[0];

          let user = new CometChat.User(uid);

          user.setName(name);

          CometChat.createUser(user, apiKey).then(
            (user) => {
              console.log("user created");
            },
            (error) => {
              console.log("error", error);
            }
          );
          CometChat.login(uid, apiKey).then(
            (User) => {
              console.log("Login Successful:");
              // User loged in successfully.
            },
            (error) => {
              console.log("Login failed with exception:", { error });
              // User login failed, check error and take appropriate action.
            }
          );
          history.push("/dashboard");
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
        });
        if (!err.response) {
          setState({
            ...state,
            loginErrorMessage: "Network Error",
          });
        } else {
          if (err.response.status === 400 || err.response.status === 401) {
            setState({
              ...state,
              loginErrorMessage: "Invalid Credentials",
            });
          } else {
            setState({
              ...state,
              loginErrorMessage: err,
            });
          }
        }
      });
  };

  const {
    passwordsType,
    email,
    password,
    loggingIn,
    loginErrorMessage,
  } = state;
  if (loggingIn) {
    return <Preloader />;
  }
  return (
    <div>
      <NavBar />
      {loginErrorMessage.length ? <Alert message={loginErrorMessage} /> : null}
      <div className="container main-container no-header" style={{marginTop: "60px"}}> 
        <div className="row">
          <div className="col-12 section small-vertical-padding">
            <h3 className="text-center title">Sign In to Your Account</h3>
            <h6 className="text-center">
              To request for loans or become a lender
            </h6>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-shecluded font-weight-bold">
                Register
              </Link>
            </p>
          </div>
        </div>

        <div className="row justify-content-center auth-row">
          <div className="col-12 col-md-4 small-vertical-padding">
            {loginErrorMessage.length ? (
              <div className="alert alert-danger alert-dismissible">
                {loginErrorMessage}
              </div>
            ) : null}
            <form onSubmit={login}>
              <div className="row">
                <div className="form-group col-12 col-md-12">
                  {/* <label className="text-body" htmlFor="email">Email Address</label> */}
                  <input
                    className="form-control text-input"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <span className="input-label">Email Address</span>
                </div>
              </div>

              <div className="form-group">
                {/* <label className="text-body" htmlFor="email">Password</label> */}
                <div className="input-group">
                  <input
                    className="form-control text-input"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    type={passwordsType}
                    name="password"
                    required
                  />
                  <span className="input-label">Password</span>
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
              <div className="form-group row justify-content-between">
                <div className="form-group col-6 col-md-8 text-body">
                  <input type="checkbox" className="" />
                  <label
                    className="form-check-label"
                    style={{ paddingLeft: "10px" }}
                  >
                    Remember Me?
                  </label>
                </div>
                <div className="form-group col-6 col-md-4">
                  <Link
                    to="/forgot-password"
                    className="helper-text text-shecluded"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-shecluded btn-lg">
                  Login
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
export default LoginPage;
