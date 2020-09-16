import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import PersonalDetails from "./personal-details";
import FinanceDetails from "./finance-details";
import ChangePassword from "./change-password";
import axios from "axios";
import Resizer from "react-image-file-resizer";

import { profileUrl, timeOut, changePasswordUrl } from "../../../api/rootUrls";
import swal from "sweetalert";
import Alert from "../../shared/alert";
import Preloader from "../../shared/preloader";
import {
  UPLOAD_PRESET,
  UPLOAD_URL,
  MAX_PHOTO_SIZE,
  PHOTO_ERROR_MESSAGE
} from "../../../utils";
import PitchVideo from "./pitch-video";

const ManageProfile = ({ history }) => {
  const [state, setState] = useState({
    currentPage: "personal-details",
    isLoading: false,
    profile: {
      firstName: "",
      lastName: "",
      bio: "",
      email: "",
      phoneNumber: "",
      dob: "",
      photo: "",
      shecludedId: "",
      idFile: ""
    },
    socialMedia: {
      facebookDetails: {},
      twitterDetails: {},
      instagramDetails: {}
    },
    fetchedRequestBody: {},
    passwordData: {
      oldPassword: "",
      newPassword: "",
      newPasswordAgain: ""
    },
    errorMessage: "",
    nameOfProfileFilePicture: ""
  });
  const { token } = JSON.parse(sessionStorage.getItem("userData"));
  useEffect(() => {
    setState({
      ...state,
      isLoading: true
    });
    axios({
      url: `${profileUrl}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      timeout: timeOut
    })
      .then(result => {
        if (result.data.respCode === "Successful") {
          const {
            firstName,
            lastName,
            bio,
            email,
            phoneNumber,
            dob,
            photo,
            shecludedId,
            video,
            idFile,
            socialMedia
          } = result.data.respBody;
          const bankInfo = result.data.respBody.banks;
          setState({
            ...state,
            fetchedRequestBody: result.data.respBody,
            profile: {
              ...state.profile,
              firstName,
              lastName,
              bio: bio ? bio : "",
              email,
              phoneNumber,
              dob,
              photo,
              idFile,
              shecludedId,
              video
            },
            bankDetails: bankInfo[bankInfo.length - 1],
            socialMedia: {
              ...state.socialMedia,
              facebookDetails: socialMedia[0],
              twitterDetails: socialMedia[1],
              instagramDetails: socialMedia[2]
            }
          });
        } else {
          setState({
            ...state,
            isLoading: false,
            errorMessage: result.data.respDescription
          });
        }
      })
      .catch(err => {
        setState({
          ...state,
          isLoading: false,
          errorMessage: err
        });
      });
  }, []);

  const updateProfileInformation = async e => {
    e.preventDefault();
    const { firstName, lastName, email, bio, phoneNumber, dob } = state.profile;
    let { photo } = state.profile;

    try {
      const data = await new FormData();
      data.append("file", photo);
      data.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(UPLOAD_URL, {
        method: "POST",
        body: data
      });
      const file = await res.json();
      const image = file.secure_url;
      photo = image;
    } catch (err) {
      setState({
        ...state,
        errorMessage: "Error occured while uploading image.",
        isLoading: false
      });
    }

    // const { facebookDetails, twitterDetails, instagramDetails } = state.socialMedia
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      bio.trim() === "" ||
      dob.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      swal("Empty Fields", "Please fill all fields.", "info");
    } else {
      setState({
        ...state,
        isLoading: true
      });
      let reqBody = {
        ...state.fetchedRequestBody,
        idFile: "",
        pitchVideo: "",
        bankStatement: "",
        photo,
        bio,
        phoneNumber
        // socialMedia: [facebookDetails, twitterDetails, instagramDetails]
      };
      axios({
        method: "put",
        url: `${profileUrl}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: reqBody,
        timeout: timeOut
      })
        .then(result => {
          setState({
            ...state,
            isLoading: false
          });
          if (result.data.respCode === "Successful") {
            swal(
              "Successful Operation",
              "Your profile information have been updated successfully.",
              "success"
            );
            history.push("/dashboard");
          } else {
            setState({
              ...state,
              isLoading: false,
              errorMessage: result.data.respDescription
            });
          }
        })
        .catch(err => {
          setState({
            ...state,
            isLoading: false,
            errorMessage: err
          });
        });
    }
  };

  const handleProfilePicture = event => {
    let file = event.target.files[0];

    if (file.size / 1024 > MAX_PHOTO_SIZE) {
      return swal("Invalid input", PHOTO_ERROR_MESSAGE, "info");
    }

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
            profile: {
              ...state.profile,
              photo: uri
            },
            nameOfProfileFilePicture: value
          });
        },
        "base64"
      );
    }
  };

  const updateFinanceInformation = bankState => {
    const { accountNumber, bankCode } = bankState;
    if (accountNumber.trim() === "" || bankCode.trim() === "") {
      swal("Empty Fields", "Please fill all fields.", "info");
    } else {
      setState({
        ...state,
        isLoading: true
      });
      let reqBody = {
        ...state.fetchedRequestBody,
        idFile: "",
        photo: "",
        pitchVideo: "",
        bankStatement: "",
        banks: [bankState]
      };
      axios({
        method: "put",
        url: `${profileUrl}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: reqBody,
        timeout: timeOut
      })
        .then(result => {
          setState({
            ...state,
            isLoading: false
          });
          if (result.data.respCode === "Successful") {
            swal(
              "Successful Operation",
              "Your profile information have been updated successfully.",
              "success"
            );
            history.push("/dashboard");
          } else {
            setState({
              ...state,
              isLoading: false,
              errorMessage: result.data.respDescription
            });
          }
        })
        .catch(err => {
          setState({
            ...state,
            isLoading: false,
            errorMessage: err
          });
        });
    }
  };

  const changePassword = e => {
    e.preventDefault();
    const { oldPassword, newPassword, newPasswordAgain } = state.passwordData;
    const { shecludedId, email } = state.profile;
    if (newPassword !== newPasswordAgain) {
      swal("Password mismatch", "New passwords do not match.", "info");
    } else {
      setState({
        ...state,
        isLoading: true
      });
      let reqBody = {
        confirmPassword: newPasswordAgain,
        email,
        newPassword,
        oldPassword,
        password: newPassword,
        shecludedId
      };
      axios({
        method: "post",
        url: `${changePasswordUrl}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        data: reqBody,
        timeout: timeOut
      })
        .then(result => {
          setState({
            ...state,
            isLoading: false
          });
          if (result.data.respCode === "Successful") {
            swal(
              "Successful Operation",
              "Your password has been changed successfully. Please login with your new password.",
              "success"
            );
            history.push("/login");
          } else {
            setState({
              ...state,
              isLoading: false,
              errorMessage: result.data.respDescription
            });
          }
        })
        .catch(err => {
          setState({
            ...state,
            isLoading: false,
            errorMessage: err
          });
        });
    }
  };

  const setCurrentPage = currentPage => {
    setState({
      ...state,
      currentPage
    });
  };

  const onProfileChange = e => {
    setState({
      ...state,
      profile: {
        ...state.profile,
        [e.target.name]: e.target.value
      }
    });
  };

  const onKeyPress = e => {
    if (e.target.value > 12) {
      e.target.value = e.target.value.slice(0, 12);
    }
  };

  const onSocialChange = e => {
    let name = e.target.name;
    if (name === "facebook") {
      setState({
        ...state,
        socialMedia: {
          ...state.socialMedia,
          facebookDetails: {
            ...state.socialMedia.facebookDetails,
            socialLink: e.target.value
          }
        }
      });
    } else if (name === "twitter") {
      setState({
        ...state,
        socialMedia: {
          ...state.socialMedia,
          twitterDetails: {
            ...state.socialMedia.twitterDetails,
            socialLink: e.target.value
          }
        }
      });
    } else if (name === "instagram") {
      setState({
        ...state,
        socialMedia: {
          ...state.socialMedia,
          instagramDetails: {
            ...state.socialMedia.instagramDetails,
            socialLink: e.target.value
          }
        }
      });
    }
  };
  const onPasswordChange = e => {
    setState({
      ...state,
      passwordData: {
        ...state.passwordData,
        [e.target.name]: e.target.value
      }
    });
  };

  const {
    currentPage,
    errorMessage,
    isLoading,
    nameOfProfileFilePicture
  } = state;
  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div className="dashboard-mainX">
      {errorMessage.length ? <Alert message={errorMessage} /> : null}
      <div className="manage-profileX">
        <div className="mb-0">
          
          <div className="manage-profile-header">
            <div className={currentPage === "personal-details" ? "activeX" : "personal-detailsX"}>
              <h6
                className={currentPage === "personal-details" ? "active" : null}
                onClick={() => setCurrentPage("personal-details")}
              >
                Personal
              </h6>

            </div>
            <div className={currentPage === "finance-details" ? "activeX" : "personal-detailsX"}>
            <h6
              className={currentPage === "finance-details" ? "active" : null}
              onClick={() => setCurrentPage("finance-details")}
            >
              Finance
            </h6>

            </div>
            <div className={currentPage === "change-password" ? "activeX" : "personal-detailsX"}>
            <h6
              className={currentPage === "change-password" ? "active" : null}
              onClick={() => setCurrentPage("change-password")}
            >
              Change Password
            </h6>

            </div>
            
            
          </div>
       
        </div>
        <div className="manage-profile-card">
          {(function() {
            switch (currentPage) {
              case "personal-details":
                return (
                  <PersonalDetails
                    profile={state.profile}
                    socialMedia={state.socialMedia}
                    onProfileChange={onProfileChange}
                    handleProfilePicture={handleProfilePicture}
                    nameOfProfileFilePicture={nameOfProfileFilePicture}
                    updateProfileInformation={updateProfileInformation}
                    onSocialChange={onSocialChange}
                    onKeyPress={onKeyPress}
                    fetchedRequestBody={state.fetchedRequestBody}
                  />
                );
              case "finance-details":
                return (
                  <FinanceDetails
                    bankDetails={state.bankDetails}
                    updateFinanceInformation={updateFinanceInformation}
                  />
                );
              case "change-password":
                return (
                  <ChangePassword
                    passwordData={state.passwordData}
                    onPasswordChange={onPasswordChange}
                    changePassword={changePassword}
                  />
                );
              case "pitch-video":
                return (
                  <PitchVideo
                    profile={state.profile}
                    fetchedRequestBody={state.fetchedRequestBody}
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default withRouter(ManageProfile);
