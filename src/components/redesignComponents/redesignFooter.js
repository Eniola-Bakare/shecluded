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
					<li className="footer-links"><Link to={"/aboutUs"}>What we do</Link></li>
					<li className="footer-links"><Link to={"/aboutUs"}>Who we serve</Link></li>
					<li className="footer-links"><Link to={'*'}> Our People</Link></li>
					<li className="footer-links"><Link to={'*'}> Our Services</Link></li>
				</ul>
				<ul>
					<li className="footer-links first-link"><strong>Support</strong></li>
					<li className="footer-links">Help Center</li>
					<li className="footer-links"> <Link to={'/faq'}>FAQs</Link> </li>
					<li className="footer-links"><Link to={'*'}> Community</Link></li>
					<li className="footer-links"><Link to={'/contact'}> Contact Us</Link></li>
					<li className="footer-links"><Link to={'*'}> Careers</Link></li>
				</ul>
				<ul>
					<li className="footer-links first-link"><strong>Legal</strong></li>
					<li className="footer-links"><Link to={'/terms'}> Cookies Policy</Link></li>
					<li className="footer-links"><Link to={'/terms'}> Privacy Policcy</Link></li>
					<li className="footer-links"><Link to={'/terms'}> Terms of Service</Link></li>
					<li className="footer-links"><Link to={'*'}> Error 404</Link></li>
				</ul>
			</div>
			<div className="third- ">
				<div className="socials">
					<p>Connect with us</p>
					<div className="socials-img">
						<button> <i class="uil uil-instagram"></i> </button>
						<button> <i class="uil uil-twitter"></i> </button>
						<button> <i class="uil uil-facebook-f"></i> </button>
						<button> <i class="uil uil-linkedin"></i> </button>
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