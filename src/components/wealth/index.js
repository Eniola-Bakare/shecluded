import React, { Component } from "react";
import walletPNG from "../../assets/wallet.png";
import yourpath from "../../assets/yourpath.png";
import homepageHeaderImage3 from "../../assets/onewoman2-removebg-preview.png";
import InViewMonitor from "react-inview-monitor";
import ListBullet from "../../assets/tick-icon.svg";
import Money from "../../assets/money.png";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div>

        <NavBar />

        <div className="container-fluid main-container">
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="container">

              <div className="row main-header homepage-header">

                <div
                  className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-none d-lg-block d-md-block"
                  style={{ overflow: "hidden" }}
                >
                  <div className="image-holder">
                    <img
                      className="img-fluid kkp"
                      src={homepageHeaderImage3}
                      alt="woman teaching woman"
                    />
                  </div>
                </div>

                <div className="col-12 col-xl-5 col-lg-6 col-md-6 col-sm-12 header-text">
                  <h1 className="title text-align-left">
                    Empowering women with information and funds to take charge
                </h1>
                  <p className="font-md pt-3  mb-5 shecluded-text-details">
                    You have now entered a women powered growth eco-system built specially to grow your business
                </p>
                  <p className="pt-2 mt-2">
                    <Link to={"/wealthapp"} className="btn btn-shecluded btn-lg">
                      Start Now
                  </Link>
                  </p>
                </div>
              </div>
            </div>

          </InViewMonitor>

        </div>

        <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          > 
        <div className="ifeoma-info">
          <div className="container ifeoma-wrap">
            <div className="ifeoma-text">
              <p>As a women centric company working with women has been both fulfilling and revealing... A lot of women are making money but don't know how to grow money.. We are led to fix this. </p>
              <p>- Ifeoma Hope Uddoh </p>


            </div>


          </div>
        </div>

        </InViewMonitor>


        <div className="container-fluid main-container">
      
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="row">
              <div className="col-12 section">
                <div className="row justify-content-center">
                  
                  
                  <div className="col-11 col-xl-4  col-lg-5 col-md-7 col-sm-12 pt-5 mr-2">
                    <h2 className="title">
                    Why do Women require wealth  <br/> management plan? </h2>
                    
                    <p className="font-md">
                    When it comes to managing money, women may be making a crucial financial mistake that is making them poorer. We offer topnotch solution to this challenge
                    </p>
                    <ul className="list-group bullet-list list-weight">
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img
                            src={ListBullet}
                            alt="circle list bullet"
                            className="d-inline-block"
                          />{" "}
                          Create Wealth 
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img
                            src={ListBullet}
                            alt="circle list bullet"
                            className="d-inline-block"
                          />{" "}
                          Grow Wealth
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img src={ListBullet} alt="circle list bullet" />{" "}
                          Protect Wealth
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img src={ListBullet} alt="circle list bullet" />{" "}
                          Transfer Wealth
                        </li>
                      </InViewMonitor>
                     
                      
                    </ul>
                    
                  </div>
                 
                  <div className="col-xl-4 col-lg-5 col-md-7 col-12 d-flex justify-content-center pt-5">
                    <div className="gif-women-holder rounded-bottom">
                      <img
                        src={Money}
                        alt="woman"
                        className="rounded img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </InViewMonitor>

          <div className="row">
              <div className="section">
                <div className="wealth-card-home">
                <div className="row justify-content-between">
                 
                 <div className="col-12 col-xl-4 col-lg-4 col-md-4 d-flex align-items-start">
                   <svg width="52" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="16" cy="16" r="15" stroke="#ED4F8F" stroke-width="2"/>
                   <path d="M8 15.6875L13.551 21L24 11" stroke="#ED4F8F" stroke-width="2"/>
                   </svg>

                   <div className="ml-3">
                     <h4 > Learn your income spread </h4>
                     <p>Through our step by step platform, you can truly learn what drives your valuation.</p>
                   </div>
                 </div>

                 <div className="col-12 col-xl-4 col-lg-4 col-md-4 d-flex align-items-start">
                   <svg width="52" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="16" cy="16" r="15" stroke="#ED4F8F" stroke-width="2"/>
                   <path d="M8 15.6875L13.551 21L24 11" stroke="#ED4F8F" stroke-width="2"/>
                   </svg>

                   <div className="ml-3">
                     <h4 > Transparently discuss it </h4>
                     <p>Leverage this knowledge, packed into clear and detailed report, for your meeting with an advisor.</p>
                   </div>
                 </div>

                 <div className=" col-12 col-xl-4 col-lg-4 col-md-4 d-flex align-items-start">
                   <svg width="52" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="16" cy="16" r="15" stroke="#ED4F8F" stroke-width="2"/>
                   <path d="M8 15.6875L13.551 21L24 11" stroke="#ED4F8F" stroke-width="2"/>
                   </svg>

                   <div className="ml-3">
                     <h4> Set financial goals  </h4>
                     <p>Work with an advisor, start the wealth process now. Work with an advisor, start the wealth process now.</p>
                   </div>
                 </div>

               </div>

               <div className="justify-content-center row mt-4 text-left text-lg-center text-md-center pt-sm-2 align-self-center">
                   <Link
                     to={"/wealthapp"}
                     className="btn btn-shecluded btn-lg btn-margin"
                   >
                     Get Started
                   </Link>
                 </div>

                </div>
               
              </div>
            </div>
         
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="row">
              <div className="col-12 section">
                <div className="row justify-content-center">

                <div className="col-xl-4 col-lg-5 col-md-7 col-12 d-flex justify-content-center pt-5">
                    <div className="gif-women-holder rounded-bottom">
                      <img
                        src={walletPNG}
                        alt="woman"
                        className="rounded img-fluid"
                      />
                    </div>
                  </div>
                  
                  
                  <div className="col-11 col-xl-4  col-lg-5 col-md-7 col-sm-12 pt-5 mr-2">
                    <h2 className="title">
                    WHAT WE  <br/> DO FOR YOU </h2>
                    
                    <p style={{lineHeight: "51px"}} className="font-md mt-3">
                    Gain an in-depth understanding of your current financial situation. Work with you to identify and prioritize your short and long term goals. Research var ious financial solutions based on your financial circumstance, risk profile and investment objectives.
                    </p>
                    
                  </div>
                 
                  
                </div>
              </div>
            </div>
          </InViewMonitor>

  






        </div>


        <Footer />
      </div>
    );
  }
}

export default Homepage;
