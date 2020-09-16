import React from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../../../shared/preloader';
import Alert from '../../../shared/alert';
import TermsAndConditions from '../../../../dev-data/shecluded-terms-and-conditions.pdf';
import Modal from 'react-animated-modal'
export default function BasicProfile(props) {
    const { validateEmail, passwordsType, first_name, last_name, password, email, phoneNumber, togglePasswordVisibility, handleInputChange, agree, loggingIn, loginErrorMessage } = props
    
    

    if (loggingIn) {
        return <Preloader />
    }
    return (
        <div className="row justify-content-center auth-row">
            <Modal visible={true} closemodal={() => props.history.push("/")} type="slideInDown">
                <div className="register-modal-container">
                    <div className="register-top-modal">
                        <h3>Create Account</h3>
                        <div className="mt-5">
                            <h1>Hi there!</h1>
                            <p>You're only a few steps away to take control of your financial future</p>
                        </div>
                    </div>

                {
        		loginErrorMessage.length ? 
        		    <Alert message={loginErrorMessage} />
        		:
        		null
        	}
           
            <form onSubmit={validateEmail} className="p-5">
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label className="text-body" htmlFor="name">First name</label>
                        <input className="form-control text-input" value={first_name} onChange={handleInputChange} name="first_name" required type="text" placeholder="Firstname"/>

                    </div>

                    <div className="form-group col-12 col-md-6">
                        <label className="text-body" htmlFor="name">Last name</label>
                        <input className="form-control text-input" value={last_name} onChange={handleInputChange} name="last_name" required type="text" placeholder="Lastname"/>

                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-12 col-md-12">
                        <label className="text-body" htmlFor="email">Email Address</label>
                        <input className="form-control text-input" value={email} onChange={handleInputChange} name="email" type="email" required placeholder="Email Address"/>

                    </div>
                </div>

                {/* <div className="row">
                    <div className="form-group col-12 col-md-12">
                        <label className="text-body" htmlFor="email">Phone Number</label>
                        <input className="form-control text-input" value={phoneNumber} onChange={handleInputChange} name="phoneNumber" type="tel" required placeholder="Phone Number"/>

                    </div>
                </div> */}

                <div className="form-group">
                    <label className="text-body" htmlFor="password">Password</label>
                    <div className="input-group">
                        <input className="form-control text-input" value={password} onChange={handleInputChange} type={passwordsType} required placeholder="Your secret password" name="password"/>

                        <div className="input-group-append show-password" onClick={togglePasswordVisibility}>
                            <div className="input-group-text"><i className="fa fa-eye"></i></div>
                        </div>
                    </div>
                </div>

                <div className="form-group col-12 text-body">
                    <input type="checkbox" value={agree} onChange={handleInputChange} name="agree" required className="form-check-input"/>
                    <label className="form-check-label" style={{paddingLeft: "10px"}}>
                        By clicking on Sign up, you agree to our terms and conditions and privacy policy. 
                        <a href={TermsAndConditions} target="_blank" rel="noopener noreferrer" className="text-shecluded"> Read terms and conditions </a>
                    </label>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-shecluded btn-lg">Sign Up</button>
                </div>

            </form>
            <div className="col-12 small-vertical-padding">
                <p className="text-center">Already have an account? <Link to="/login" className="text-shecluded font-weight-bold">Login</Link></p>
            </div>
                </div>
                </Modal>	
        
        </div>
       

    )
}
