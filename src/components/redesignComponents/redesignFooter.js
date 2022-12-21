import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="div-1-footer">
				<div className="first-">
					<img className='logo-white' src={require ('../../assets/newRedesign-assets/footerAssets/logo-white.png')} />
					<p>Subscribe to our newsletter</p>
					<div className='newsletter-div'>
						<input type="text" placeholder='Email address'/>
						<button> <img src={require ('../../assets/newRedesign-assets/footerAssets/submitArrow.png')} /></button>
					</div>
				</div>
				<div className="second-">
					<ul>
						<li className="footer-links first-link"><strong>Who We Are</strong></li>
						<li className="footer-links"><Link to={"/aboutUs"}>About Us</Link></li>
						<li className="footer-links"><a href='#what-we-do'>What We do</a></li>
						<li className="footer-links"><a href='#who-we-serve'>Who we serve</a></li>
						<li className="footer-links">Our People</li>
						<li className="footer-links">Our Services</li>
					</ul>
					<ul>
						<li className="footer-links first-link"><strong>Support</strong></li>
						<li className="footer-links">Help Center</li>
						<li className="footer-links">FAQs</li>
						<li className="footer-links">Community</li>
						<li className="footer-links"><Link to={'/contact'}> Contact Us</Link></li>
						<li className="footer-links">Careers</li>
					</ul>
					<ul>
						<li className="footer-links first-link"><strong>Legal</strong></li>
						<li className="footer-links">Cookies Policy</li>
						<li className="footer-links">Privacy Policy</li>
						<li className="footer-links">Terms of Service</li>
					</ul>
				</div>
				<div className="third-">
					<div className="socials">
						<p>Connect with us</p>
						<div className="socials-img">
							<button><img src={require ('../../assets/newRedesign-assets/footerAssets/IG.png')} /> </button>
							<button><img src={require ('../../assets/newRedesign-assets/footerAssets/twitter.png')} /> </button>
							<button><img src={require ('../../assets/newRedesign-assets/footerAssets/facebook.png')} /> </button>
							<button><img src={require ('../../assets/newRedesign-assets/footerAssets/linkedIn.png')} /> </button>
						</div>
					</div>

					<div className="install-div">
						<p> Install App </p>
						<div className="install-apps">
							<img src={require ('../../assets/newRedesign-assets/footerAssets/googlePlay.png')} alt="Google Play download button" />
							<img src={require ('../../assets/newRedesign-assets/footerAssets/appStore.png')} alt="Apple Store download button" />
						</div>
					</div>
				</div>
			</div>
			<div className="div-2-footer">
				<div className="text-footer">
					<p className='cookie-policy'> This site uses cookies. <span>Cookies and Privacy.</span> I agree to the <span>terms of use, </span> and the <span>Disclaimer Policy.</span> This information will not be used for marketing purposes.</p>
					<hr></hr>
					<p className='copyright'>Copyright 2021 Shecluded Solutions Ltd.</p>
				</div>
			</div>
    </div>
  )
}

export default Footer