import React, { useState } from 'react'
import RedesignCallToDownload from './redesignCallToDownload'
import Footer from './redesignFooter'
import Navbar from './redesignNavbar'

const redesignContactUs = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [purpose, setPurpose] = useState('')
	const [message, setMessage] = useState('')


	const handleClick = (e) => {
		console.log(name, email, message, purpose)
	}
  return (
    <div className='contact-wrapper'>
        <Navbar />

        <div className="contact-div">
			<div className="form">
				<p className='contact-title mb-5'>Contact Us</p>
				<div className="form-details d-flex flex-column flex-md-row justify-content-between">
					<form >
						<div className='mb-5'>
							<p className='contact-how-can-we-help'>How can we help?</p>
							<p className='contact-fill-form'>Have an inquiry? Fill the form below and we we'll get back to you within 24 hours</p>
						</div>

						<div className="form-input-div d-flex flex-column justify-content-between">
							<div className="name-email d-flex flex-column flex-lg-row justify-content-between">
								<input
									type="text"
									placeholder='Full Name'
									value={name} onChange={e => setName(e.target.value)}
								/>
								<input
									type="email"
									placeholder='Email'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="purpose">
								<input
									type="text"
									placeholder='Purpose'
									value={purpose}
									onChange={e => setPurpose(e.target.value)}
								/>
							</div>
							<div className="message">
								<input
									type="text"
									placeholder='Message'
									value={message}
									onChange={e => setMessage(e.target.value)}
								/>
							</div>
							<div className="btn-div">
								<button className="send-btn" onClick={handleClick()}>SEND MESSAGE</button>
							</div>
						</div>
						
					</form>

					<div className="form-img-div">
						<img src={require ('../../assets/newRedesign-assets/contact-image.png')} alt="woman image" />
					</div>
				</div>
			</div>
			
			{/* get in touch */}
			<div className="get-in-touch">
				<p>Get in touch with us</p>
				<div className="contact-div">
					<div className="contact">
						<p>Adress</p>
						<p className='contact-info'>16A Nike Art Gallery Way, Lekki Lagos</p>
					</div>
					<div className="contact">
						<p>Email</p>
						<p className='contact-info'>hello@shecluded.com</p>
					</div>
					<div className="contact">
						<p>Phone Number</p>
						<p className='contact-info'>+234-809-500-0026</p>
					</div>
				</div>
			</div>
        </div>

        <RedesignCallToDownload />
        <Footer />
    </div>
  )
}

export default redesignContactUs