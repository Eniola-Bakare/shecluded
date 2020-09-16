import React, { useRef } from "react";
import DummyProfileImage from "../../../../assets/profile-image.svg";
import { STATES } from "../../../../dev-data/states";

export default function AboutYouComponent({
  changeRegistrationStep,
  handleFileUpload,
  handleProfilePicture,
  handleInputChange,
  state: {
    dob,
    address,
    socialMediaHandle1,
    socialMediaHandle2,
    socialMediaHandle3,
    maritalStatus,
    first_name,
    state_of_residence,
    nameOfProfileFile,
    nameOfFile,
    profilePicture
  }
}) {
  const onSubmit = e => {
    e.preventDefault();
    changeRegistrationStep(2);
  };
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

  return (
    <div className="small-vertical-padding">
      <div className="row">
        <div className="col-12 small-vertical-padding">
          <h3 className="text-center title text-shecluded">
            We'd love to know more about you {first_name}
          </h3>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="form-group col-12 col-md-12">
            <input
              className="form-control d-none"
              ref={profileImage}
              onChange={handleProfilePicture}
              name="profilePicture"
              type="file"
            />
            <div className="text-center">
              <img
                src={profilePicture.length ? profilePicture : DummyProfileImage}
                className="profile-picture"
                onClick={() => profileImage.current.click()}
                alt="Upload Avatar"
              />
              <label onClick={() => profileImage.current.click()}>
                {nameOfProfileFile}
              </label>
              <small
                className="text-body d-block col-12 col-md-12"
                htmlFor="name"
              >
                Click avatar to upload a picture, wanna be sure there's no
                intruder in the girl zone.
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

        <div className="row">
          <div className="form-group col-12 col-md-6">
            <small className="text-body col-12 col-md-6 p-0">
              What's your date of birth
            </small>
            <input
              className="form-control"
              value={dob}
              onChange={handleInputChange}
              name="dob"
              required
              type="date"
              max={maxDate}
              placeholder="Date of Birth"
            />
          </div>
          <div className="form-group col-12 col-md-6">
            <small className="text-body col-12 col-md-6 p-0">
              What's your marital status?
            </small>
            <select
              className="form-control"
              required
              name="maritalStatus"
              value={maritalStatus}
              onChange={handleInputChange}
            >
              <option value="" defaultValue>
                Marital Status
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widow">Widow</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-12 col-md-12">
            <label className="text-body" htmlFor="address">
              How about your house address?
            </label>
            <input
              className="form-control"
              value={address}
              onChange={handleInputChange}
              name="address"
              required
              type="address"
              placeholder="House Address"
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-12 col-md-12">
            <label className="text-body" htmlFor="facebook">
              Facebook Username
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text group-facebook">
                  <i class="fab fa-facebook"></i>
                </span>
              </div>
              <input
                className="form-control"
                value={socialMediaHandle1}
                onChange={handleInputChange}
                name="socialMediaHandle1"
                type="text"
                placeholder="e.g www.facebook.com/shecluded"
              />
            </div>
          </div>
          <div className="form-group col-12 col-md-12">
            <label className="text-body" htmlFor="twitter">
              Twitter Handle
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text group-twitter">
                  <i class="fab fa-twitter"></i>
                </span>
              </div>
              <input
                className="form-control"
                value={socialMediaHandle2}
                onChange={handleInputChange}
                name="socialMediaHandle2"
                type="text"
                placeholder="e.g www.twitter.com/shecluded"
              />
            </div>
          </div>
          <div className="form-group col-12 col-md-12">
            <label className="text-body" htmlFor="instagram">
              Intagram Handle
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text group-instagram">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </span>
              </div>
              <input
                className="form-control"
                value={socialMediaHandle3}
                onChange={handleInputChange}
                name="socialMediaHandle3"
                type="text"
                placeholder="e.g www.instagram.com/shecluded"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-12 col-md-12">
            <label className="text-body" htmlFor="state">
              What's your state of Residence
            </label>
            <select
              className="form-control"
              required
              name="state_of_residence"
              value={state_of_residence}
              onChange={handleInputChange}
            >
              <option value="" defaultValue>
                State
              </option>
              {STATES.map(state => {
                return (
                  <option value={state} key={state}>
                    {state}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-12 col-md-12">
            <button type="submit" className="btn btn-shecluded btn-lg">
              Next
            </button>
          </div>
        </div>
     
      </form>
    </div>
  );
}
