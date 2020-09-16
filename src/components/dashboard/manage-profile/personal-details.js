import React, { useRef } from "react";
import DummyProfileImage from "../../../assets/profile-image.svg";
import DummyCardImage from "../../../assets/id-card.png";
import UploadIdCard from "./upload-idcard";

const PersonalDetails = ({
  updateProfileInformation,
  nameOfProfileFilePicture,
  profile: { firstName, lastName, bio, email, phoneNumber, dob, photo, idFile },
  socialMedia: { facebookDetails, twitterDetails, instagramDetails },
  onProfileChange,
  onKeyPress,
  onSocialChange,
  handleProfilePicture,
  fetchedRequestBody
}) => {
  let profileImage = useRef();
  console.log(dob, "dob js skjdsk djks djjkskdjsdk")
  return (
    <div>
      
      <div>
        <div className="row justify-content-center">
          <div className="manage-profile-form-fieldsX w-100">
            <form onSubmit={updateProfileInformation}>
              <div className="row">
                <div className="form-group col-12 col-md-12">
                  <input
                    className="form-control d-none cursor"
                    ref={profileImage}
                    onChange={handleProfilePicture}
                    name="photo"
                    type="file"
                    accept="image/*"
                  />
                  <div className="text-center ">
                    <img
                      src={photo ? photo : DummyProfileImage}
                      className="profile-picture cursor"
                      onClick={() => profileImage.current.click()}
                      alt="Upload Avatar"
                    />
                    {nameOfProfileFilePicture}
                    <small
                      className="text-body d-block col-12 col-md-12"
                      htmlFor="name"
                    >
                      Update Profile Picture
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
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="form-control text-input"
                    name="firstName"
                    onChange={onProfileChange}
                    value={firstName}
                   
                    type="text"
                    placeholder="First Name"
                  />
                </div>

                <div className="form-group col-md-6">
                <label className="text-body" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={onProfileChange}
                  
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="Email">
                    Email
                  </label>
                  <input
                    className="form-control text-input"
                    name="email"
                    value={email}
                    // readOnly
                    onChange={onProfileChange}
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Phone Number </label>
                  <input
                    className="form-control text-input"
                    name="phoneNumber"
                    onChange={onProfileChange}
                    value={phoneNumber}
                  
                    type="number"
                    placeholder="Mobile Number"
                    onKeyPress={onKeyPress}
                  />
                </div>
              </div>
              
              <div className="row">
                <div className="form-group col-12 col-md-12">
                  <label className="text-body" htmlFor="lastName">
                    Date of Birth
                  </label>
                  <input
                    className="form-control text-input"
                    name="dob"
                    // readOnly
                    onChange={onProfileChange}
                    value={dob ? dob.substring(0, 10): dob}
                  
                    type="date"
                    placeholder="DD/MM/YYYY"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-12">
                  <label className="text-body" htmlFor="firstName">
                    ID Card
                  </label>
                  <input
                    className="form-control d-none"
                    name="photo"
                    type="file"
                    accept="image/*"
                  />
                  <div
                    className="text-center"
                    data-toggle="modal"
                    data-target="#IdcardModalCenter"
                  >
                    <img
                      src={idFile ? idFile : DummyCardImage}
                      className="id-picture"
                      alt="Upload Id Card"
                    />
                    {nameOfProfileFilePicture}
                    <small
                      className="text-shecluded d-block"
                      style={{ cursor: "pointer" }}
                      htmlFor="name"
                    >
                      Click to update ID
                    </small>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="form-group col-md-12">
                  <label className="text-body" htmlFor="bio">
                    Edit Bio
                  </label>
                  <textarea
                    className="form-control text-input"
                    name="bio"
                    onChange={onProfileChange}
                    value={bio}
                    id="textarea"
                    rows="5"
                    maxLength="200"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                {/* <div className="form-group col-12 col-md-4"></div> */}
                <div className="form-group col-12 col-md-12 mx-auto">
                  <button type="submit" className="btn btn-shecluded btn-lg ">
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <UploadIdCard fetchedRequestBody={fetchedRequestBody} />
    
    </div>
  );
};
export default PersonalDetails;
