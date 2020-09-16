import React, { useRef, useState, useEffect } from "react";
import WealthInfo from './Info/LoanInfo';
import { profileUrl, timeOut, changePasswordUrl } from "../../api/rootUrls";
import swal from "sweetalert";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import moment from 'moment'
import {
    UPLOAD_PRESET,
    UPLOAD_URL,
    MAX_PHOTO_SIZE,
    PHOTO_ERROR_MESSAGE
} from "../../utils";
import UploadIdCard from "../dashboard/manage-profile/upload-idcard";


import ManageProfile from  '../dashboard/manage-profile/manage-profile'



function EditProfile(props) {
    const {history} = props

    let profileImage = useRef();
    const [state, setState] = useState({
        currentPage: "personal-details",
        isLoading: false,
        profile: {
            firstName: "meeeee",
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

    const handleChange = (e) => {
        setState({
          ...state,
          profile: {
            ...state.profile,
            [e.target.name]: e.target.value,
        }, 
        });
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

const {
    firstName,
    lastName,
    bio,
    email,
    phoneNumber,
    dob,
    photo,
    shecludedId,
    idFile,
} = state.profile

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
            history.push("/user/dashboard");
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


    return (
        <div className="container">
          <div className="spacing-top">
            <div className="d-flex justify-content-betweenX">
               <div className="w-100">
               <div style={{ width: "100%", padding: "0 32px" }}>
                        <h3 className="mt-4">
                            Edit Profile</h3>
                        <p>Lets see how well you’re doing </p>
                    </div>

                    <div>
                        <ManageProfile />
                        
                    </div>
               </div>
                <div className='Dashboard-main-page-side'>
                    <WealthInfo />
                </div>

            </div>
        </div>

       
        </div>
    );
}

export default EditProfile;
