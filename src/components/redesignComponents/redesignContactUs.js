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
			<div className="form-section ">
				<p className='contact-title mb-5'>Contact Us</p>
				<div className="form-details d-flex flex-column flex-xl-row justify-content-between align-items-xl-end">
					<form >
						<div className='mb-5'>
							<p className='contact-how-can-we-help '>How can we help?</p>
							<p className='contact-fill-form'>Have an inquiry? Fill the form below and we we'll get back to you within 24 hours</p>
						</div>

						<div className="form-input-div d-flex flex-column justify-content-between">
							<div className="name-email mb-5 d-flex flex-column flex-lg-row justify-content-between">
								<input
									type="text"
									placeholder='Full Name'
									value={name} onChange={e => setName(e.target.value)}
									className='mb-5 mb-lg-0'
								/>
								<input
									type="email"
									placeholder='Email'
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="purpose mb-5">
								<input
									type="text"
									placeholder='Purpose'
									value={purpose}
									onChange={e => setPurpose(e.target.value)}
								/>
							</div>
							<div className="message mb-5">
								<textarea
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

					<div className="form-img-div mt-5 mt-xl-0">
						<img src={require ('../../assets/newRedesign-assets/contact-image.png')} alt="woman image" />
					</div>
				</div>
			</div>
			
			{/* get in touch */}
			<div className="get-in-touch">
				<p className='get-in-touch-title'>Get in touch with us</p>
				<div className="contact-address-div d-flex flex-column flex-lg-row justify-content-between">
					<div className="contact">
						<p className='contact-address-title'>Address</p>
						<p className='contact-info d-flex align-items-center pl-4 pl-lg-3 justify-content-lg-center'>16A Nike Art Gallery Way, Lekki Lagos</p>
					</div>
					<div className="contact">
						<p className='contact-address-title'>Email</p>
						<p className='contact-info d-flex align-items-center pl-4 pl-lg-3 '>hello@shecluded.com</p>
					</div>
					<div className="contact">
						<p className='contact-address-title'>Phone Number</p>
						<p className='contact-info d-flex align-items-center pl-4 pl-lg-3 '>+234-809-500-0026</p>
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