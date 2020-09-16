import React from 'react';
import { Link } from 'react-router-dom';
import LadyWithPhone from '../../assets/lady-with-phone.png';

export default function WelcomePage({ name }) {
    return (
      <div className="row justify-content-center auth-row">
        <div
          className="col-12 col-md-7 small-vertical-padding"
          id="registerPage"
        >
          <div className="text-center" style={{ marginTop: "90px" }}>
            <img
              src={LadyWithPhone}
              style={{ height: "200px", width: "auto" }}
              alt="welcome"
            />
          </div>
          <div className="row">
            <div className="small-vertical-padding">
              <h2 className="title text-center">Welcome to Shecluded</h2>
              <br />
              <p className="title text-center" style={{ fontSize: "20px" }}>
                Please note that before you can apply for loans, there will be
                need for you to add your card details. Kindly take your time to
                add your card and also update your profile information.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/maindashboard">
              <button type="button" className="btn btn-shecluded btn-lg">
                Continue to Dashboard
              </button>
            </Link>
            {/* <Link to="/user/dashboard"><button type="button" className="btn btn-shecluded btn-lg">Continue to Dashboard</button></Link> */}
          </div>
        </div>
      </div>
    );
}
