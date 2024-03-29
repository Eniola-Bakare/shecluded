import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './redesignFooter'
import Navbar from './redesignNavbar'

const redesignTerms = () => {

    const tabLink1 = document.getElementById('1');
    const tabLink2 = document.getElementById('2');
    const tabLink3 = document.getElementById('3');
    if(tabLink1){
      tabLink1.addEventListener('click', () => {
        console.log('aaaaaa')
        tabLink1.classList.toggle('active')
        tabLink1.parentElement.classList.toggle('active')

        tabLink2.classList.remove('active')
        tabLink2.parentElement.classList.remove('active')

        tabLink3.classList.remove('active')
        tabLink3.parentElement.classList.remove('active')
      })
    }
       
    if(tabLink2){
      tabLink2.addEventListener('click', () =>{
        console.log('bbbb')
        tabLink1.classList.remove('active')
        tabLink1.parentElement.classList.remove('active')

        tabLink2.classList.toggle('active')
        tabLink2.parentElement.classList.toggle('active')

        tabLink3.classList.remove('active')
        tabLink3.parentElement.classList.remove('active')
      })
    }
      
    if(tabLink3){
      tabLink3.addEventListener('click', ()=>{
        console.log('ccc')
        tabLink1.classList.remove('active')
        tabLink1.parentElement.classList.remove('active')

        tabLink2.classList.remove('active')
        tabLink2.parentElement.classList.remove('active')

        tabLink3.classList.toggle('active')
        tabLink3.parentElement.classList.toggle('active')
      })
    }
    

  return (
    <>
        <div className="terms-wrapper d-flex flex-column justify-content-center mx-auto">
            <div className="terms-header d-flex flex-column align-items-center">
                <Navbar />
                <div className="mb-5 terms-header-content d-flex flex-column align-items-center">
                    <h1 className='legal-info mb-5'>Legal Information</h1>
                    <div className="tab-container px-2 py-0 px-md-2 py-md-3 d-flex justify-content-between align-items-center">
                      <div className="tab d-flex justify-content-center align-items-center">
                        <a id='1' className='tab-links' href="#privacy">Privacy Policy</a>
                      </div>
                      <div className="divider"></div>
                      <div className="tab d-flex justify-content-center align-items-center">
                        <a id='2' className='tab-links' href="#risk-disclosure">Risk Disclosure Notice</a>
                      </div>
                      <div className="divider"></div>
                      <div className="tab d-flex justify-content-center align-items-center">
                        <a id='3' className='tab-links' href="#cookies">Cookie Policy</a>
                      </div>
                    </div>
                </div>
            </div>

            <div className="terms-body mx-auto">
              <h5 id='privacy'>The following information is to help you understand how we collect, use, disseminate and safeguard the data you provide while accessing and using Nigerian Mockups.<br></br>
                  Nigerian Mockups and its affiliates and subsidiaries (“Nigerian Mockups”, “we” or “us”) are committed to protecting your privacy and safeguarding your personal information. The purpose of this privacy policy (the “Privacy Policy”) is to inform you about our privacy practices, including how we collect, use and disclose your personal information.<br></br>
                  This Privacy Policy applies to our website, mobile applications and related services (collectively, the “NM Services”). By visiting, accessing, or using the NM Services, you consent to the policies and practices of this Privacy Policy so please read them carefully. If any policies or practices of this Privacy Policy are unacceptable to you, please do not visit, access, or use the NM Services.</h5>
                <br></br>
                <br></br>

              <h5 id='risk-disclosure'>Personal Information We Collect</h5>
              <br></br>
              <br></br>

              <h5 >The personal information we collect about you may include the following. In each case, we identify the grounds that we rely on to process your personal information under the Nigerian Data Protection Regulation 2019 (the “NDPR”): </h5>
              <br></br>
              <br></br>

              <ul>
                <li> 
                  <h5>
                    Account Profile – when you open an account, we may collect your first name, last name, email address, username and password. You may also provide additional details on your account profile, such as your profile picture, photos, location data, personal website, Instagram username, Twitter username and Facebook profile. Applicable legal grounds: contract performance, consent, legitimate interests (to enable us to perform our obligations and provide our services);
                  </h5>
                </li>
                <br></br>
                <br></br>

                <li> 
                  <h5>
                    Device Information – information that is automatically collected about your device, such as hardware, operating system, browser, etc. Applicable legal grounds: legitimate interests (to allow us to provide the content and services on the website), consent, contract performance;
                  </h5>
                </li>
                <br></br>
                <br></br>

                <li> 
                  <h5>
                    Location Information – information that is automatically collected via analytics systems providers to determine your location, including your IP address and/or domain name and any external page that referred you to us. Applicable legal grounds: legitimate interests (to allow us to provide the content and services on the website), consent, contract performance;
                  </h5>
                </li>
                <br></br>
                <br></br>

                <li> 
                  <h5>
                    Server Log Information – information that is generated by your use of the NM Services that is automatically collected and stored in our server logs. This may include, but is not limited to, device-specific information, location information, system activity and any internal and external information related to Nigerian Mockup pages that you visit. Applicable legal grounds: legitimate interests (to allow us to provide the content and services on the website), consent, contract performance;
                  </h5>
                </li>
                <br></br>
                <br></br>

                <li> 
                  <h5>
                  Correspondence – information that you provide to us in correspondence, such as when you submit questions or inquiries and with respect to ongoing customer support. Applicable legal grounds: legitimate interests (to enable us to perform our obligations and provide our services), consent, contract performance.
                  </h5>
                </li>
              </ul>
              <br></br>
              <br></br>

              <h5>
                We respect and are committed to protecting your privacy. We do not sell or otherwise provide personal information to other companies for the marketing of their own products or services. We will retain your personal information for as long as your account is active or as needed to provide you services or as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
              </h5>
              <br></br>
              <br></br>

              <h5>
                We reserve the right to disclose your personal information as required by law (e.g., to comply with a subpoena, warrant, or court order) and when we believe that disclosure is necessary to protect our rights, avoid litigation, protect your safety or the safety of others, investigate fraud, and/or respond to a government request. We may also disclose information about you if we determine that such disclosure should be made for reasons of national security, law enforcement, or other issues of public importance.
              </h5>
              <br></br>
              <br></br>

              <h5 id='cookies'>Cookies</h5>
              <br></br>
              <br></br>

              <h5>Nigerian Mockups may also make use of the standard practice of placing tiny data files called cookies, flash cookies, pixel tags, or other tracking tools (“Cookies”) on your computer or other devices used to access the NM Services. A cookie is a small file containing a string of characters that is sent to your computer when you visit a website. When you visit the website again, the cookie allows that site to recognize your browser. Cookies are used on Nigerian Mockups to store visitor preferences and other technical information required for the functionality of the website. </h5>
              <br></br>
              <br></br>

              <h5>We use these technologies to help us recognize you as a user, collect information about your use of the NM Services to better customize our services and content for you however no personal information is stored in these cookies. By using the NM Services, you acknowledge and agree that we may collect and/or transmit any data collected to our third-party service providers, such as analytics providers, which may also make use of such technologies described above. You can reset your browser to refuse all cookies or to indicate when a cookie is being sent. However, some website features or services may not function properly without cookies and you will not be able to use some or all of the NM Services.</h5>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
            
        </div>
        <Footer />
    </>
  )
  }


export default redesignTerms