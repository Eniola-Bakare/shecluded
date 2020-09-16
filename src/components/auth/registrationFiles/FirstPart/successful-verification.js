import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessfulVerification({ changeRegistrationPage }) {
    return (
        <div className="row justify-content-center auth-row">	
            <div className="col-12 col-md-5 small-vertical-padding" id="registerPage">	
                <div className="row">
                    <div className="small-vertical-padding">
                        <h3 className="title text-center">Your email has been verified</h3>
                    </div>
                </div>
                <div className="text-center" onClick={() => changeRegistrationPage('welcome-page')}>
                    <i className="fa fa-5x fa-check-circle" style={{color: '#EC008C'}}></i>
                </div>
                <div className=" small-vertical-padding">
                    <p style={{fontSize: '16px'}} className="text-center">
                        We have sent you an email. Please click on the verification link in your email to confirm your registration.
                        <Link to="#" onClick={() => changeRegistrationPage('welcome-page')} className="text-shecluded font-weight-bold">Continue</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
