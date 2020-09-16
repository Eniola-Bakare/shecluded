import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import { validateEmailUrl, timeOut } from '../../../../api/rootUrls';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import RegisterImage from "../../../../assets/indoor-portrait-beautiful-brunette-young-260nw-640005220-removebg-preview.png";
// import RegisterImage from "../../../../assets/gorgeous-african-woman-in-traditional-clothes-presenting-on-white-E6KKJB-removebg-preview.png";
// import RegisterImage from '../../../../assets/afro-attractive-beautiful.jpg'

const PhoneNumberComponent = ({ history, verificationCode, handleInputChange, generatedVerificationCode, state: { email, password, first_name, last_name, phoneNumber } }) => {
    const [state, setState] = useState({
        loggingIn: false,
        loginErrorMessage: '',
        sentCode: ''
    })
    useEffect(() => {
        setState({
            ...state,
            sentCode: generatedVerificationCode
        })
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        if (state.sentCode === verificationCode){
            sessionStorage.setItem('registrationDetails', JSON.stringify({
                email,
                password,
                first_name,
                last_name, 
                phoneNumber
            }))
            history.push('/complete-registration')
        } else {
            swal('Failed', 'Wrong code entered, please try again', 'error')
        }
    }
    const sendVerificationCodeAgain = (event) => {
        event.preventDefault();
            setState({
                ...state,
                loggingIn: true
            })
            axios({
                url: `${validateEmailUrl}`,
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: timeOut,
                data: email
            })
            .then(result => {
                if(result.data.respCode === '00'){
                    setState({
                        ...state,
                        sentCode: result.data.respBody
                    })
                    swal('Sent', `The verification code has been re-sent to your email address: ${email}`, 'success')
                } else {
                    setState({
                        ...state,
                        loggingIn: false,
                        loginErrorMessage: result.data.respDescription
                    })
                }
            })
            .catch(err => {
                setState({
                    ...state,
                    loggingIn: false,
                    loginErrorMessage: err
                })
            })
    }
    return (
        <div className="row justify-content-center auth-row">	
            <div className="col-12 col-md-6 small-vertical-padding" id="registerPage">	
                <div className="row">
                    <div className="col-12  small-vertical-padding">
                        <h3 className="text-left title">Verify your email</h3>
                        <h6 className="text-left"><small>Please enter the verification code sent to your email: {email}. <br/><span className="text-shecluded">** If you can't find the verification mail in your inbox, please check your spam or junk folder. **</span></small></h6>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="form-group col-12 col-md-12">
                            {/* <label className="text-body" htmlFor="name">Verfication Code</label> */}
                            <input className="form-control" value={verificationCode} onChange={handleInputChange} name="verificationCode" required type="text" placeholder="Verification code"/>
                            <span className="input-label">Verification code</span>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-shecluded btn-lg">Verify</button>
                </form>
                <div className="col-12 small-vertical-padding">
                    <p className="text-center">Didn't get a code? <Link to="#" onClick={sendVerificationCodeAgain} className="text-shecluded font-weight-bold">Send again</Link></p>
                </div>
            </div>
            <div className="col-12 col-md-6 small-vertical-padding">
                <img src={RegisterImage} id="registerImage" alt="register" />
            </div>
        </div>
    )
}
export default withRouter(PhoneNumberComponent);
