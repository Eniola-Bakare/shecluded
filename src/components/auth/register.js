import React, { Component } from 'react';
import Footer from '../shared/footer';
import NavBar from '../shared/navbar';
import BasicProfile from './registrationFiles/FirstPart/basic-profile';
import PhoneNumberComponent from './registrationFiles/FirstPart/phone-number';
import { validateEmailUrl, timeOut } from '../../api/rootUrls';
import axios from "axios";

class RegisterPage extends Component {
    state = {
		passwordsType: 'password',
		redirectToDashboard: false,
		email: "", 
		password: "",
		agree: false, 
		first_name:"", 
		last_name: "", 
		name: "",
		phoneNumber: '',
		socialResponse: {},
		showEnterEmail: false,
		socialEmail: "",
		currentProvider: "",
		registrationPage: 'basic-profile',
		verificationCode: '',
		generatedVerificationCode: '',
		loggingIn: false,
		loginErrorMessage: ''
    };

	handleInputChange = (event) => {
		if(event.target.type === 'checkbox'){
			this.setState({
				agree: !this.state.agree
			})
		}
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	togglePasswordVisibility = () => {
		if (this.state.passwordsType === "password") {
			this.setState({passwordsType: 'text'});
		} else {
			this.setState({passwordsType: 'password'});
		}
	}

	changeRegistrationPage = (registrationPage) => {
		this.setState({
			registrationPage: registrationPage
		})
	}

	validateEmail = (event) => {
		event.preventDefault();
			this.setState({
				loggingIn: true
			})
			const { email, first_name, last_name, password, phoneNumber } = this.state;
			const reqBody2 = {
				email,
				first_name,
				last_name,
				password,
				phoneNumber
			}
			const reqBody = {
				email,
				firstName: first_name,
				lastName: last_name,
				password,
				phoneNumber
			}
			sessionStorage.setItem(
				"registrationDetails",
				JSON.stringify(reqBody2)
			  );
			axios({
				url: `${validateEmailUrl}`,
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				timeout: timeOut,
				data: reqBody
			})
			.then(result => {
				if(result.data.respCode === "Successful"){
					this.setState({
						generatedVerificationCode: result.data.respBody
					})
					// this.changeRegistrationPage('phone-number')
					this.props.history.push('/complete-registration')
					// this.props.history.push('/chat')
				} else {
					this.setState({
						loggingIn: false,
						loginErrorMessage: result.data.respDescription
					})
				}
			})
			.catch(err => {
				this.setState({
					loggingIn: false,
					loginErrorMessage: err
				})
			})
	}

	render() {
		const {passwordsType, first_name, last_name, password, agree, email, phoneNumber, registrationPage, verificationCode, generatedVerificationCode, loggingIn, loginErrorMessage } = this.state;
		return (
			<div>
				<NavBar/>
				<div className="main-container no-header">
					{(() => {
						switch(registrationPage) {
						case 'basic-profile':
							return <BasicProfile 
								first_name={first_name}
								last_name={last_name} 
								password={password}  
								agree={agree}
								loggingIn={loggingIn} 
								loginErrorMessage={loginErrorMessage}
								validateEmail={this.validateEmail}
								email={email}
								phoneNumber={phoneNumber}
								passwordsType={passwordsType}
								handleInputChange={this.handleInputChange}
								togglePasswordVisibility={this.togglePasswordVisibility}
								{...this.props}
							/>
						case 'phone-number':
							return <PhoneNumberComponent
								generatedVerificationCode={generatedVerificationCode}
								verificationCode={verificationCode}
								handleInputChange={this.handleInputChange}
								state={this.state}
							/>;
						// case 'welcome-page':
						// 	return <WelcomePage 
						// 		name={`${first_name.charAt(0).toUpperCase()}${first_name.substring(1)}`}
						// 		state={this.state}
						// 	/>;
						default:
							return null;
						}
					})()}
				</div>
				{/* <Footer/> */}
			</div>
		)
	}
}

export default RegisterPage;