import React, { useState, useEffect } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { withRouter } from "react-router-dom";
import SourceOfIncome from "./registrationFiles/SecondPart/source-of-income";
import AboutYouComponent from "./registrationFiles/SecondPart/about-you";
import { registerUrl, timeOut } from "../../api/rootUrls";
import axios from "axios";
import swal from "sweetalert";
import Preloader from "../shared/preloader";
import Alert from "../shared/alert";
import {
  UPLOAD_PRESET,
  UPLOAD_URL,
  MAX_PHOTO_SIZE,
  PHOTO_ERROR_MESSAGE
} from "../../utils";
import Resizer from "react-image-file-resizer";

const CompleteRegistration = ({ history }) => {
  const [state, setState] = useState({
    registrationStep: 1,
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phoneNumber: "",
    profilePicture: "",
    idCard: "",
    bio: "",
    dob: "",
    address: "",
    jobTitle: "",
    maritalStatus: "",
    socialMediaHandle1: "www.facebook.com/username",
    socialMediaHandle2: "www.twitter.com/username",
    socialMediaHandle3: "www.instagram.com/username",
    state_of_residence: "",
    targetAmount: "",
    employmentType: "",
    businessOwner: {},
    fetchingData: false,
    errorMessage: "",
    nameOfFile: "",
    nameOfProfileFile: ""
  });
  const [employed, setEmployedData] = useState(null);
  const [businessOwner, setBusinessOwnerData] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);
  const [completedRegistration, setCompletedRegistration] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("registrationDetails")) {
      const {
        email,
        password,
        first_name,
        last_name,
        phoneNumber
      } = JSON.parse(sessionStorage.getItem("registrationDetails"));
      setState({
        ...state,
        email,
        password,
        first_name,
        last_name,
        phoneNumber
      });
    } else {
      history.push("/register");
    }

    if (completedRegistration) {
      registerAnAccount();
    }
  }, [completedRegistration]);
  const setEmployed = async employedData => {
    await setEmployedData(employedData);
    await setEmploymentType("employer");
  };

  const setBusinessOwner = async businessOwnerData => {
    await setBusinessOwnerData(businessOwnerData);
    await setEmploymentType("business");
  };

  const handleInputChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleProfilePicture = event => {
    let file = event.target.files[0];

    if (file.size / 1024 > MAX_PHOTO_SIZE) {
      return swal("Invalid input", PHOTO_ERROR_MESSAGE, "info");
    }

    let nameOfField = event.target.name;
    let value = event.target.value;
    value = value.split("\\")[2];
    if (file) {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        50,
        0,
        uri => {
          setState({
            ...state,
            nameOfProfileFile: value,
            [nameOfField]: uri
          });
        },
        "base64"
      );
    }
  };

  const changeRegistrationStep = stepNumber => {
    setState({
      ...state,
      registrationStep: stepNumber
    });
  };

  const employment = () => {
    if (employmentType === "business") {
      return businessOwner;
    } else if (employmentType === "employer") {
      return employed;
    } else {
      return null;
    }
  };

  //Registration API call
  const registerAnAccount = async () => {
    setState({
      ...state,
      fetchingData: true
    });

    let { profilePicture } = state;

    if (profilePicture) {
      try {
        let data = await new FormData();
        let data1 = data;
        data1.append("file", profilePicture);
        data1.append("upload_preset", UPLOAD_PRESET);

        const res1 = await fetch(UPLOAD_URL, {
          method: "POST",
          body: data1
        });
        const file1 = await res1.json();
        const image1 = file1.secure_url;
        profilePicture = image1;
      } catch (err) {
        setState({
          ...state,
          fetchingData: false,
          errorMessage: "Error Uploading Images"
        });
      }
    }

    let reqBody = {
      address: state.address,
      business: businessOwner,
      cards: [],
      createdAt: new Date(),
      country: "Nigeria",
      dob: state.dob,
      email: state.email,
      emailVerified: true,
      employer: employed,
      employment: [employment()],
      employmentStatus: employmentType,
      financialGoal: state.targetAmount,
      firstName: state.first_name,
      gender: "Female",
      idFile: "",
      idNumber: "",
      identificationType: "",
      jobTitle: state.jobTitle,
      lastName: state.last_name,
      maritalStatus: state.maritalStatus,
      password: state.password,
      phoneNumber: state.phoneNumber,
      phoneVerified: true,
      photo: profilePicture,
      idCard: "",
      shecludedId: "",
      socialMedia: [
        {
          accessToken: "",
          id: 0,
          platform: "facebook",
          socialId: "",
          socialLink: `${state.socialMediaHandle1}`,
          username: "",
          version: 0
        },
        {
          accessToken: "",
          id: 0,
          platform: "twitter",
          socialId: "",
          socialLink: `${state.socialMediaHandle2}`,
          username: "",
          version: 0
        },
        {
          accessToken: "",
          id: 0,
          platform: "instagram",
          socialId: "",
          socialLink: `${state.socialMediaHandle3}`,
          username: "",
          version: 0
        }
      ],
      state: state.state_of_residence
    };
    axios({
      url: `${registerUrl}`,
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      timeout: timeOut,
      data: reqBody
    })
      .then(result => {
        if (result.data.respCode === "Successful") {
          const { authToken, shecludedId } = result.data.respBody;
          swal("Successful Registration", "Welcome to Shecluded", "success");
          sessionStorage.removeItem("registrationDetails");
          sessionStorage.setItem(
            "userData",
            JSON.stringify({
              token: authToken,
              shecludedId
            })
          );
          history.push("/welcome-page");
        } else {
          setState({
            ...state,
            fetchingData: false,
            errorMessage: result.data.respDescription
          });
        }
      })
      .catch(err => {
        setState({
          ...state,
          fetchingData: false
        });
        if (!err.response) {
          setState({
            ...state,
            loginErrorMessage: "Network Error"
          });
        } else {
          if (err.response.status === 400 || err.response.status === 401) {
            setState({
              ...state,
              errorMessage: "An error occured, please try again."
            });
          } else {
            setState({
              ...state,
              errorMessage: err
            });
          }
        }
      });
  };

  const { registrationStep, errorMessage, fetchingData } = state;
  function dynamicWidth() {
    if (registrationStep === 2) {
      return "100%";
    } else if (registrationStep === 1) {
      return "0%";
    }
  }
  let stepperStyles = {
    background: "#EC008C",
    width: dynamicWidth()
  };

  if (fetchingData) {
    return <Preloader />;
  }
  return (
    <div>
      <NavBar />
      {errorMessage.length ? <Alert message={errorMessage} /> : null}
      <div className="container main-container no-header">
        <div className="registration-page-layout">
          <div className="row">
            <div className="col-12 small-vertical-padding">
              <div className="registration-stepper">
                <div
                  className="registration-stepper-background"
                  style={stepperStyles}
                ></div>
                <ul className="registration-stepper-buttons">
                  <li>
                    <div className="active"></div>
                  </li>
                  <li>
                    <div
                      className={registrationStep > 1 ? "active" : null}
                    ></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {(() => {
            switch (registrationStep) {
              case 1:
                return (
                  <AboutYouComponent
                    changeRegistrationStep={changeRegistrationStep}
                    state={state}
                    handleProfilePicture={handleProfilePicture}
                    handleInputChange={handleInputChange}
                  />
                );
              case 2:
                return (
                  <SourceOfIncome
                    changeRegistrationStep={changeRegistrationStep}
                    setEmployed={setEmployed}
                    setBusinessOwner={setBusinessOwner}
                    setCompletedRegistration={setCompletedRegistration}
                  />
                );
              // case 3:
              //     return <FinancialGoals
              //         changeRegistrationStep={changeRegistrationStep}
              //         setCompletedRegistration={setCompletedRegistration}
              //         targetAmount={targetAmount}
              //         handleInputChange={handleInputChange}
              //     />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default withRouter(CompleteRegistration);
