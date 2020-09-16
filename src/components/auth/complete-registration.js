
import React, { useState, useEffect, useRef } from "react";
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
import Modal from 'react-animated-modal'
import loanIcon from "../../assets/Loan-icon.svg";
import financeIcon from "../../assets/Finance-icon.svg";
import growthIcon from "../../assets/Growth-icon.svg";
import targetIcon from "../../assets/Target-icon.svg";
import DummyProfileImage from "../../assets/profile-image.svg";
import { STATES } from "../../dev-data/states";
import BusinessOwner from "./registrationFiles/SecondPart/sources-of-income/business-owner";
import EmployedComponent from "./registrationFiles/SecondPart/sources-of-income/employed";


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
    socialMediaHandle1: "www.linkedIn.com/username",
    socialMediaHandle2: "www.twitter.com/username",
    socialMediaHandle3: "www.instagram.com/username",
    state_of_residence: "",
    targetAmount: "",
    employmentType: "",
    businessOwner: {},
    fetchingData: false,
    errorMessage: "",
    nameOfFile: "",
    nameOfProfileFile: "",
  });
  const [employed, setEmployedData] = useState(null);
  const [businessOwner, setBusinessOwnerData] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);
  const [completedRegistration, setCompletedRegistration] = useState(false);
  const [slide, setSlide] = useState("entrance")
  const [unslide, setUnslide] = useState(true)
  const [showModal, setShowModal] = useState({
    content: true,
    modal: true
  })
  const [display, setDisplay] = useState("infoDetails");
  let profileImage = useRef();

  let date = new Date();
  let month =
    (date.getMonth() + 1).toString().length !== 1
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
  let day =
    date.getDate().toString().length !== 1
      ? date.getDate()
      : `0${date.getDate()}`;
  const maxDate = `${date.getFullYear() - 20}-${month}-${day}`;


  
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
        last_name
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
    setDisplay("infoDetails")
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
          history.push("/dashboard");
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
      {/* <NavBar /> */}
      {errorMessage.length ? <Alert message={errorMessage} /> : null}
      {/* <Modal
        visible={showModal.modal}
        closemodal={() =>
          setShowModal({
            content: true,
            modal: false,
          })
        }
        type="zoomIn"
      >
        <div className="complete-reg-success-modal">
          <h1>Got it, keep an eye on your inbox </h1>
          <p>A confirmation email is on the way</p>
          <button
            onClick={() =>
              setShowModal({
                content: true,
                modal: false,
              })
            }
            className="btn btn-shecluded btn-lg mt-5"
          >
            {" "}
            OKAY
          </button>
        </div>
      </Modal> */}
      
      {showModal.content && (
        <div className="no-headerXX">
          {
            {
              fHealth: (
                <div style={{ height: "70vhx" }} className="f-health ">
                  <h1 className="mb-5">Financial health matters</h1>
                  <div className="d-flex justify-content-between align-items-center mt-5 flex-flow-wrap">
                    <div className="m-3 f-health f-health-sub">
                      <img src={loanIcon} alt="loan" />
                      <h3 className="mt-4">Loan</h3>
                      <p className="mt-4 mb-5">
                        You have quick, easy access to our growth loans so that
                        you can seize the opportunity of a liftime.
                      </p>
                    </div>
                    <div className="m-3 f-health f-health-sub">
                      <img src={financeIcon} alt="loan" />
                      <h3 className="mt-4">Financial Education</h3>
                      <p className="mt-4 mb-5">
                        Our series of courses and interventions will put you
                        back in control of your finances
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => {
                        setDisplay("fsavings");
                        setUnslide(true);
                      }}
                      className="btn btn-shecluded btn-lg mt-5"
                    >
                      {" "}
                      Next
                    </button>
                  </div>
                </div>
              ),
              fsavings: (
                <div style={{ height: "70vh" }} className="f-health">
                  <h1 className="mb-5">Financial health matters</h1>
                  <div className="d-flex justify-content-between align-items-center mt-5 flex-flow-wrap">
                    <div className="m-3 f-health f-health-sub">
                      <img src={growthIcon} alt="loan" />
                      <h3 className="mt-4">Growth Advisory</h3>
                      <p className="mt-4 mb-5">
                        Our business is to grow your business. That could mean
                        reigniting your slaes with tailored marketing and
                        communications
                      </p>
                    </div>
                    <div className="m-3 f-health f-health-sub ">
                      <img src={targetIcon} alt="loan" />
                      <h3 className="mt-4">Target Savings</h3>
                      <p className="mt-4 mb-5">
                        There's something special about saving enough to buy
                        that apartment, where ever you are on your journey, we
                        go together.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div
                      onClick={() => {
                        setUnslide(false);
                        // console.log(slide)
                        setSlide("exit");
                        // console.log(slide)

                        setTimeout(() => {
                          setDisplay("fHealth");
                        }, 1000);
                      }}
                      style={{ cursor: "pointer", color: "#f0008c" }}
                      className="mb-4 "
                    >
                      {" "}
                      Go Back
                    </div>
                    <button
                      onClick={() => setDisplay("avatar")}
                      className="btn btn-shecluded btn-lg"
                    >
                      {" "}
                      Next
                    </button>
                  </div>
                </div>
              ),
              avatar: (
                <div className="avatar-wrapper">
                  <h1>Hi {state.first_name}, let’s start with the basics</h1>
                  <p>upload your avatar</p>

                  <div className="row ">
                    <div className="form-group col-12 col-md-12 user-avatar">
                      <input
                        className="form-control d-none"
                        ref={profileImage}
                        onChange={handleProfilePicture}
                        name="profilePicture"
                        type="file"
                      />
                      <div className="text-center">
                        <img
                          src={
                            state.profilePicture.length
                              ? state.profilePicture
                              : DummyProfileImage
                          }
                          className="profile-picture"
                          onClick={() => profileImage.current.click()}
                          alt="Upload Avatar"
                        />
                        {/* <label onClick={() => profileImage.current.click()}>
                          {state.nameOfProfileFile}
                        </label> */}
                        <small
                          className="text-body d-block col-12 col-md-12"
                          htmlFor="name"
                        >
                          Click avatar to upload a picture, wanna be sure
                          there's no intruder in the girl zone.
                        </small>
                        <small
                          className="text-shecluded d-block col-12 col-md-12"
                          htmlFor="name"
                        >
                          Maximum size is 1mb
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 f-health">
                    {/* <div
                      onClick={() => setDisplay("fsavings")}
                      style={{ cursor: "pointer", color: "#f0008c" }}
                      className="mb-4 "
                    >
                      {" "}
                      Go Back
                    </div> */}
                    <button
                      onClick={() => setDisplay("infoDetails")}
                      className="btn btn-shecluded btn-lg"
                    >
                      {" "}
                      Next
                    </button>
                  </div>
                </div>
              ),
              infoDetails: (
                <div className="header-regis">
                  <h1 className="mb-5"> We'd love to know more about you</h1>

                  <div className="d-flex flex-flow-wrap align-items-center mt-5">
                    <h4>
                      My name is {state.first_name}, I was born on
                      <input
                        className="form-controlX mr-3 ml-3"
                        value={state.dob}
                        onChange={handleInputChange}
                        name="dob"
                        required
                        type="date"
                        max={maxDate}
                        placeholder="Date of Birth"
                      />
                      .{" "}
                    </h4>
                    <h4> I live at</h4>
                    <input
                      className="form-controlX"
                      value={state.address}
                      onChange={handleInputChange}
                      name="address"
                      required
                      type="address"
                      placeholder="House Address"
                    />

                    <div className="d-flex flex-flow-wrap align-items-center mt-1">
                      <h4>
                        {" "}
                        Which is in
                        <input
                          className="form-controlX"
                          onChange={handleInputChange}
                          type="text"
                          placeholder="State"
                          name="state_of_residence"
                          value={state.state_of_residence}
                          
                        />
                        {/* <select
                          className="form-controlX"
                          required
                          name="state_of_residence"
                          value={state.state_of_residence}
                          onChange={handleInputChange}
                        >
                          <option value="" defaultValue>
                            State
                          </option>
                          {STATES.map((state) => {
                            return (
                              <option value={state} key={state}>
                                {state}
                              </option>
                            );
                          })}
                        </select> */}
                        Nigeria.{" "}
                      </h4>
                      <h4 className="ml-2">
                        {" "}
                        And I am
                        <select
                          className="form-controlX"
                          required
                          name="maritalStatus"
                          value={state.maritalStatus}
                          onChange={handleInputChange}
                        >
                         <option value="Maried" defaultValue>
                          Maried
                          </option>
                          <option value="Single">
                          Single
                          </option>
                          <option value="Divorced" >
                          Divorced
                          </option>
                        </select>
                      </h4>
                      
                      <h4>
                        {" "}
                        My mobile number is
                        <input
                          className="form-controlX"
                          onChange={(e) => {
                            if(e.target.value.match(/^[0-9]*$/)){
                              handleInputChange(e)

                            }
                          }}
                          type="text"
                          placeholder=" e.g 080XXXXXXXX"
                          name="phoneNumber"
                          maxlength="11"
                          value={state.phoneNumber}
                        />
                        .{" "}
                      </h4>
                    </div>
                    <div>
                      <h4>
                        {" "}
                        And you can find me on instagram on
                        <input
                          className="form-controlX"
                          value={state.socialMediaHandle3}
                          onChange={(e) => {
                            if(state.socialMediaHandle3.includes("www.instagram.com/") ){
                              handleInputChange(e)
                            }else{
                              setState({
                                ...state,
                                [e.target.name]: "www.instagram.com/"
                              });

                            }
                          }}
                          name="socialMediaHandle3"
                          type="text"
                          placeholder="e.g www.instagram.com/shecluded"
                        />
                        . Oh i am also on
                      </h4>
                      {/* <h4></h4> */}
                      <h4>
                        {" "}
                        linkedIn on
                        <input
                          className="form-controlX"
                          // onChange={handleInputChange}
                          onChange={(e) => {
                            if(state.socialMediaHandle1.includes("www.linkedIn.com/") ){
                              handleInputChange(e)
                            }else{
                              setState({
                                ...state,
                                [e.target.name]: "www.linkedIn.com/"
                              });

                            }
                          }}
                          value={state.socialMediaHandle1}
                          name="socialMediaHandle1"
                          type="text"
                          placeholder="www.linkedin.com/shecluded"
                        />
                        .{" "}
                      </h4>
                    </div>
                  </div>

                  <div className="mt-5 f-health">
                    {/* <div
                      onClick={() => setDisplay("avatar")}
                      style={{ cursor: "pointer", color: "#f0008c" }}
                      className="mb-4 "
                    >
                      {" "}
                      Go Back
                    </div> */}
                    <button
                      onClick={() => setDisplay("source")}
                      className="btn btn-shecluded btn-lg"
                    >
                      {" "}
                      Next
                    </button>
                  </div>
                </div>
              ),
              source: (
                <div
                style={{height: "100vh"}}
                  className="f-health"
                >
                  <div>
                    <h1 className="mb-3">Source Of Income</h1>
                    <p>Please click on your source of income</p>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-5 flex-flow-wrap mb-5">
                    <div
                      onClick={() => setDisplay("Business")}
                      className="m-3 f-health f-health-sub cursor"
                    >
                      <img src={growthIcon} alt="loan" />
                      <h3 className="mt-4">Business Mogul</h3>
                    </div>

                    <div
                      onClick={() => setDisplay("Employed")}
                      className="m-3 f-health f-health-sub cursor"
                    >
                      <img src={targetIcon} alt="loan" />
                      <h3 className="mt-4">9-5 chick</h3>
                    </div>
                  </div>
                  <div
                    onClick={() => setDisplay("infoDetails")}
                    style={{ cursor: "pointer", color: "#f0008c" }}
                    className="mb-4 "
                  >
                    {" "}
                    Go Back
                  </div>
                </div>
              ),

              Employed: (
                <EmployedComponent
                  changeRegistrationStep={setDisplay}
                  setEmployed={setEmployed}
                  setCompletedRegistration={setCompletedRegistration}
                />
              ),
              Business: (
                <BusinessOwner
                  changeRegistrationStep={setDisplay}
                  setBusinessOwner={setBusinessOwner}
                  setCompletedRegistration={setCompletedRegistration}
                />
              ),
            }[display]
          }
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
};
export default withRouter(CompleteRegistration);
