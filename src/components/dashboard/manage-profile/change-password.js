import React from "react";

const ChangePassword = ({
  onPasswordChange,
  changePassword,
  passwordData: { oldPassword, newPassword, newPasswordAgain }
}) => {
  return (
    <div>
      <h4>Password</h4>
      <div>
        <div className="row">
          <div className="col-md-8 col-sm-12 manage-profile-form-fields">
            <form onSubmit={changePassword}>
              <div className="row">
                <div className="form-group col-12 col-md-4">
                  <label
                    className="text-body"
                    htmlFor="current-password"
                  ></label>
                </div>
                <div className="form-group col-12 col-md-8">
                  <input
                    className="form-control"
                    value={oldPassword}
                    name="oldPassword"
                    onChange={onPasswordChange}
                    required
                    type="password"
                    placeholder="Current Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-4">
                  <label className="text-body" htmlFor="new-password"></label>
                </div>
                <div className="form-group col-12 col-md-8">
                  <input
                    className="form-control"
                    value={newPassword}
                    name="newPassword"
                    onChange={onPasswordChange}
                    required
                    type="password"
                    placeholder="New Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-4">
                  <label
                    className="text-body"
                    htmlFor="new-password-again"
                  ></label>
                </div>
                <div className="form-group col-12 col-md-8">
                  <input
                    className="form-control"
                    value={newPasswordAgain}
                    name="newPasswordAgain"
                    onChange={onPasswordChange}
                    required
                    type="password"
                    placeholder="Re-type New Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12 col-md-4"></div>
                <div className="form-group col-12 col-md-8">
                  <button type="submit" className="btn btn-shecluded btn-lg">
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
