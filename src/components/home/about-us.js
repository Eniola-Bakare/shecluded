import React, { Component } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import stars from "../../assets/Stars.svg";
import JEkweme from "../../assets/JEkweme.png";
import Kokehie from "../../assets/Kokehie.png";
import headerBackground from "../../assets/header-background.jpg";
import ListBullet from "../../assets/tick-icon.svg";
import { Link } from "react-router-dom";
import growthIcon from "../../assets/about-growth-blue.svg";
import empathyIcon from "../../assets/about-empathy.svg";
import confidentIcon from "../../assets/about-confident.svg";
import transparentIcon from "../../assets/about-transparent.svg";
import impactIcon from "../../assets/about-impact.svg";
import loanIcon from "../../assets/about-loan.svg";
import growthIcon1 from "../../assets/about-growth.svg";
import educationIcon from "../../assets/about-education.svg";
import savingsIcon from "../../assets/about-savings.svg";
import InViewMonitor from "react-inview-monitor";
import Ifeoma from '../../assets/team-ifeoma.jpeg'
import AboutUtility from "./utilities/AboutUtility";


class AboutUs extends Component {
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

            <div className="row">
              <div className="col-12 section">
                <div className="row justify-content-centerX">
                <div className="col-xl-6 col-lg-4X col-md-7 col-12 d-flex pt-5">
                    <div className="gif-women-holder rounded-bottom">
                      <h1 style={{color: "#C4C4C4", fontSize:"14px", fontWeight: "normal"}}>About us</h1>
                       <h1 className="title text-align-left">
                       Female led enterprises building the future together 
                      </h1>
                    </div>
                  </div>
                 
                  <div className="col-11 col-xl-4 col-lg-6 col-md-7 col-sm-12 pt-5 ml-lg-5">
                    <h2 className="shecluded-intro-text">
                    Launched in 2019, <span>Shecluded</span> has been helping women take an active role in their financial lives.
                    </h2>
                    <p className="font-md mt-4">
                    We place our integrity high above other things, that's why our company policies are geared towards fair business guidlines and frown upon exploitations of our customers 
                    </p>
                  
                  </div>
                 
                </div>
                
              </div>
            </div>
            </div>

          </InViewMonitor>
          
          <div className="container">
              <div className="row">
              <p>
                 <span style={{color:"#ED4F8F"}}>Welcome to Shecluded! </span>Shecluded is helping female led enterprises build their future / Shecluded is helping women achieve their financial goals. <br />  
                 </p>
              <p className="mt-3">
              Many women have limited access to formal financial services from traditional establishments like commercial and microfinance banks. At Shecluded, we believe that when women have access to financial resources and financial education, they can grow and further help others in their society and communities. 
                
              </p>
              </div>
          </div>

          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="container">


            <div className="row">
              <div className="col-12 section">
                <div className="row ">
                <div className="col-xl-6 col-lg-4X col-md-7 col-12 d-flex pt-5">

                    <div className="gif-women-holder rounded-bottom">
                       <h1 className="title text-align-left">
                       Who We Are
                      </h1>

                      <p>
                 Our values define the culture at <span style={{color:"#ED4F8F"}}>Shecluded</span>, who we are, what we do everyday. They are the foundation of our identity and the compass of our interactions with all stake holders: customers, regulators, investors, partners and our community.
                 </p>
                 <p className="mt-3">
                 Many women have limited access to formal financial services from traditional establishments like commercial and microfinance banks. At Shecluded, we believe that when women have access to financial resources and financial education, they can grow and further help others in their society and communities.
                 </p>
                    </div>
                  </div>
                 
                  <div className="col-11 col-xl-4 col-lg-6 col-md-7 col-sm-12 pt-5 ml-lg-5">
                    <h3 className="shecluded-intro-textX">
                    Meet the Founder
                    </h3>
                    <div className="about-card mt-3 p-4">
                      <p>
                      Shecluded was founded in 2019, after CEO Ifeoma Uddoh realized a serious problem women entrepreneurs face when it comes to raising funds for their businesses. Many women have limited access to formal financial services from traditional establishments like commercial and microfinance banks.  With a focus on solving the financial exclusion faced by women-led businesses from formal financial services, Shecluded has grown to empower thousands of women with funds and resources to take charge. From growth loans to financial education to business advisory and target savings, everything Shecluded does is geared towards helping women stay ahead of all their financial needs. 
                      </p>
                      <a href="#">Information link</a>

                      <div className="d-flex align-items-centerX mt-5">
                        <img style={{width: "28px", height: "28px", borderRadius:"100%"}} className="mt-2" src={Ifeoma} alt="ceo"/>
                        <div className="ml-3">
                          <h5>Ifeoma Uddoh</h5>
                          <p>CEO Shecluded</p>
                        </div>

                      </div>
                    </div>
                  
                  
                  </div>
                 
                </div>
                
              </div>
            </div>
            </div>

          </InViewMonitor>
          

          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="container">


            <div className="row">
              <div className="col-12 section">
                <div className="row ">
                <div className="col-xl-7 col-lg-7 col-md-7 col-12 d-flex pt-5">

                    <div className="about-card d-flex about-flex-flow  justify-content-around align-items-centerX p-3" >
                      
                      <AboutUtility
                        dpath={"M22 14V27H18.8929V17.7143L17.5 18.6429L16 16.373L19.5357 14H22Z"}
                        text={'We encourage big dreams and love to figure out how to achieve them with our clients.'}
                      />

                      <AboutUtility
                        dpath={"M24 23.1339V26H15.1023V23.9528L19.8068 19.0394C20.0114 18.821 20.1955 18.5958 20.3591 18.3638C20.5091 18.1727 20.6386 17.9543 20.7477 17.7087C20.8705 17.463 20.9318 17.2241 20.9318 16.9921C20.9318 16.5827 20.8091 16.2619 20.5636 16.0299C20.3182 15.7843 19.9636 15.6614 19.5 15.6614C18.9818 15.6614 18.5795 15.8047 18.2932 16.0913C18.0068 16.378 17.8636 16.7806 17.8636 17.2992L15 17.0945C15 16.5076 15.1023 15.9685 15.3068 15.4772C15.525 14.9722 15.825 14.5354 16.2068 14.1669C16.6023 13.7984 17.0727 13.5118 17.6182 13.3071C18.1773 13.1024 18.8045 13 19.5 13C20.2091 13 20.8432 13.0955 21.4023 13.2866C21.9614 13.4777 22.4318 13.7507 22.8136 14.1055C23.2091 14.4467 23.5023 14.8562 23.6932 15.3339C23.8977 15.8115 24 16.3302 24 16.8898C24 17.3811 23.8909 17.852 23.6727 18.3024C23.4682 18.7391 23.2364 19.1281 22.9773 19.4693C22.6773 19.8651 22.3364 20.2336 21.9545 20.5748L19.5 23.1339H24Z"}
                        text={'At the core of what we do is a desire to transform lives and create opportunities for more women for career, business and family.'}
                      />

                      <AboutUtility
                        dpath={"M15.0968 16.9375C15.1226 16.4125 15.2387 15.9167 15.4452 15.45C15.6645 14.9688 15.9613 14.5531 16.3355 14.2031C16.7097 13.8385 17.1548 13.5469 17.671 13.3281C18.2 13.1094 18.7935 13 19.4516 13C20.1097 13 20.6968 13.1094 21.2129 13.3281C21.7419 13.5323 22.1871 13.8167 22.5484 14.1813C22.9226 14.5313 23.2065 14.9396 23.4 15.4062C23.6065 15.8583 23.7097 16.3323 23.7097 16.8281C23.7097 17.324 23.6194 17.7542 23.4387 18.1188C23.271 18.4688 23.0839 18.7604 22.8774 18.9937C22.6452 19.2562 22.3742 19.4823 22.0645 19.6719C22.4258 19.8615 22.7484 20.1094 23.0323 20.4156C23.2774 20.6781 23.4968 21.0281 23.6903 21.4656C23.8968 21.9031 24 22.4354 24 23.0625C24 23.5875 23.8968 24.0906 23.6903 24.5719C23.4968 25.0385 23.2065 25.4542 22.8194 25.8188C22.4452 26.1688 21.9806 26.4531 21.4258 26.6719C20.871 26.8906 20.2452 27 19.5484 27C18.8516 27 18.2258 26.8906 17.671 26.6719C17.1161 26.4531 16.6452 26.1615 16.2581 25.7969C15.871 25.4323 15.5677 25.0094 15.3484 24.5281C15.1419 24.0323 15.0258 23.5073 15 22.9531L17.8065 22.7344C17.8581 23.1135 18.0194 23.449 18.2903 23.7406C18.5742 24.0177 18.9613 24.1563 19.4516 24.1563C19.9935 24.1563 20.4 24.0104 20.671 23.7188C20.9548 23.4271 21.0968 23.0625 21.0968 22.625C21.0968 22.2458 20.9484 21.9177 20.6516 21.6406C20.3677 21.349 19.9355 21.2031 19.3548 21.2031H18.1935V18.5781H19.3548C19.8968 18.5781 20.2903 18.4542 20.5355 18.2063C20.7806 17.9583 20.9032 17.6448 20.9032 17.2656C20.9032 16.8865 20.7677 16.5583 20.4968 16.2813C20.2258 15.9896 19.8452 15.8438 19.3548 15.8438C18.9161 15.8438 18.5742 15.9677 18.329 16.2156C18.0968 16.4635 17.9548 16.7771 17.9032 17.1563L15.0968 16.9375Z"}
                        text={'We’re committed to helping each other succeed, dedicated to our customers, team and investors and focused on investing in our community.'}
                      />

                    </div>
                </div>
                 
                  <div className="col-11 col-xl-4 col-lg-6 col-md-7 col-sm-12 pt-5 ml-lg-5">
                    <h3 className="shecluded-intro-textX">
                    Meet the Co-Founder
                    </h3>
                    <div className="about-card mt-3 p-4">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae est massa nisi, nisl velit vitae morbi fermentum. Egestas senectus netus ac fermentum egestas et id. netus ac fermentum egestas et id. Blandit diam.
                      </p>
                      <a href="#">Information link</a>

                      <div className="d-flex align-items-centerX mt-5">
                        <img style={{width: "28px", height: "28px", borderRadius:"100%"}} className="mt-2" src={Ifeoma} alt="ceo"/>
                        <div className="ml-3">
                          <h5>Co-Founder's Name</h5>
                          <p>CEO Shecluded</p>
                        </div>

                      </div>
                    </div>
                  
                  
                  </div>
                 
                </div>
                
              </div>
            </div>
            </div>

          </InViewMonitor>
          
         
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="container">


            <div className="row">
              <div className="col-12 section">
                <div className="row ">
                <div className="col-xl-5 col-md-7 col-12 d-flex pt-5">

                    <div className="gif-women-holder rounded-bottom">
                       <h1 className="title text-align-left">
                       Helping Women Achieve <br></br>Financial Security.
                      </h1>

                      <p className="mt-4">
                 They are grilling celebrities in their own right. You’ve seen them on TV and you see their cookbooks lined along the shelves of your local bookstore.
                 </p>
                
                    </div>
                  </div>
                 
                  <div className="col-11 col-xl-6 col-lg-6 col-md-7 col-sm-12 pt-5 ml-lg-5">
                    <h3 >
                      {/*  */}
                    </h3>
                    <div className="about-cardX mt-5 p-4">
                      <h3>We aim to;</h3>
                      <div className="d-flex mt-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#FFE9F6" fill-opacity="0.5"/>
                      <path d="M7 10L9 12L13 8" stroke="#ED4F8F" stroke-width="1.5"/>
                      </svg>
                      <p className="ml-3">Provide the seamless financial services in a friendly professional manner </p>

                      </div>

                      <div className="d-flex">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#FFE9F6" fill-opacity="0.5"/>
                      <path d="M7 10L9 12L13 8" stroke="#ED4F8F" stroke-width="1.5"/>
                      </svg>
                      <p className="ml-3">Encourage wise use of credit facilities </p>

                      </div>

                      <div className="d-flex">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#FFE9F6" fill-opacity="0.5"/>
                      <path d="M7 10L9 12L13 8" stroke="#ED4F8F" stroke-width="1.5"/>
                      </svg>
                      <p className="ml-3">Educate and enhance management skills of our helping them to manage their finances </p>

                      </div>
                      <div className="d-flex">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#FFE9F6" fill-opacity="0.5"/>
                      <path d="M7 10L9 12L13 8" stroke="#ED4F8F" stroke-width="1.5"/>
                      </svg>
                      <p className="ml-3">Provide our employees with a challenging and rewarding career.</p>

                      </div>
                      
                    </div>
                  
                  
                  </div>
                 
                </div>
                
              </div>
            </div>
            </div>

          </InViewMonitor>

          <div className="row justify-content-center">
            <div className="col-12 col-xl-7 col-lg-9 section focus-section">
              <div className="row justify-content-center">
                <h1 className="col-11 col-xl-8 col-lg-8 title text-center pb-4">
                Start using form today
                </h1>
                <p className="col-11 col-lg-12 w-25 text-center font-md">
                Your information is secure and encrypted, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat ad minim.
                </p>
                <p className="pt-2 mt-2">
                    <Link to={"/register"} className="btn btn-shecluded btn-lg">
                      Get Started
                  </Link>
                  </p>
              </div>
             
            </div>
          </div>
          

          {/* <div className="row">
            <div className="col-12 small-header about-header">
              <img src={headerBackground} alt="smiling black girl with afro" />
              <div className="small-header-overlay">
                <h1 className="text-center text-black title">
                  Empowering Female Led
                </h1>
                <h1 className="text-center text-black title">
                  Enterprises build the{" "}
                  <span className="text-shecluded">future</span>
                </h1>
                <p className="text-center font-md text-secondary w-75 w-md-50 w-lg-25 pt-4 ml-auto mr-auto">
                  Magic happens when you combine a smart woman access to credit
                  and the power of a collaborative community
                </p>
                <p className="pt-2 text-center">
                  <Link to={"/register"} className="btn btn-shecluded btn-lg">
                    Apply Now
                  </Link>
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="row ml-auto mr-auto about-section">
            <div className="col-12 section">
              <h2 className="text-black title text-left">
                Helping women achieve <br></br>
                <span className="text-shecluded">financial security</span>
              </h2>
              <div className="row justify-content-between">
                <div className="col-12 col-lg-5 pt-0 pt-lg-5">
                  <p className="font-md text-secondary">
                    {" "}
                    Shecluded is a credit company which is dedicated to building
                    a community that fosters finanacial education
                  </p>
                </div>
                <div className="col-12 col-lg-7 pt-4 pt-lg-0">
                  <h3 className="title">We aim too:</h3>
                  <ul className="list-group bullet-list">
                    <li className="list-group-item mt-0">
                      <img
                        src={ListBullet}
                        alt="circle list bullet align-top mr-0"
                      />
                      <p id="list-item" className="font-md text-secondary">
                        Provide the seamless financial services in a friendly
                        professional manner
                      </p>
                    </li>
                    <li className="list-group-item">
                      <img
                        src={ListBullet}
                        alt="circle list bullet align-top mr-0"
                      />
                      <p id="list-item" className="font-md text-secondary">
                        Provide our employees with a challenging and rewarding
                        career.
                      </p>
                    </li>
                    <li className="list-group-item">
                      <img
                        src={ListBullet}
                        alt="circle list bullet align-top mr-0"
                      />
                      <p id="list-item" className="font-md text-secondary">
                        Educate and enhance management skills of our helping
                        them to manage their finances
                      </p>
                    </li>
                    <li className="list-group-item">
                      <img
                        src={ListBullet}
                        alt="circle list bullet align-top mr-0"
                      />
                      <p id="list-item" className="font-md text-secondary">
                        Encourage wise use of credit facilities
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="homepage-hr d-none d-md-block d-lg-block"></hr>

          <div className="row justify-content-center">
            <div className="col-12 col-xl-7 col-lg-9 col-md-9 section focus-section">
              <div className="row justify-content-start ml-lg-5 ml-md-5 ml-0">
                <h1 className="col-12 col-lg-7 title pb-4">What Defines Us</h1>
                <p className="col-lg-7 font-md text-secondary">
                  Our values define the culture at shecluded, who we are, what
                  we do everyday. They are the foundation of our identity and
                  the compass of our interactions with all stake holders:
                  customers, regulators, investors, partners and our community.
                </p>
              </div>
              <div className="row justify-content-between feature-section about-feature">
                <div className="col-11 col-sm-4 col-lg-5 col-md-9 mb-auto ml-3 ml-lg-5 ml-md-5 feature-item">
                  <span className="d-inline-block">
                    <img
                      className="img-fluid"
                      src={growthIcon}
                      width="40px"
                      height="40px"
                      alt="Growth icon"
                    />
                  </span>
                  <h4 className="font-weight-bold padding-header d-inline-block">
                    Growth
                  </h4>
                  <p className="padding-body text-secondary">
                    We encourage big dreams and love to figure out how to
                    achieve them with our client.
                  </p>
                </div>

                <div className="col-11 col-sm-4 col-lg-5 col-md-9 ml-3 ml-lg-0 ml-md-5 mb-auto feature-item">
                  <span className="d-inline-block">
                    <img
                      className="img-fluid"
                      src={impactIcon}
                      width="40px"
                      height="40px"
                      alt="Impact icon"
                    />
                  </span>
                  <h4 className="font-weight-bold padding-header d-inline-block">
                    Impact
                  </h4>
                  <p className="padding-body text-secondary">
                    At the core of what we do is a desige to impact lives and
                    create opportunities for more women.
                  </p>
                </div>

                <div className="col-11 col-sm-4 col-lg-5 col-md-9 mb-auto ml-3 ml-lg-5 ml-md-5 feature-item">
                  <span className="d-inline-block">
                    <img
                      className="img-fluid"
                      src={empathyIcon}
                      width="40px"
                      height="40px"
                      alt="Empathy icon"
                    />
                  </span>
                  <h4 className="font-weight-bold padding-header d-inline-block">
                    Empathy
                  </h4>
                  <p className="padding-body text-secondary">
                    We are committed to helping each other succeed. Dedicated to
                    our customers, team and investors in the she community.
                  </p>
                </div>

                <div className="col-11 col-sm-4 col-lg-5 col-md-9 ml-3 ml-mg-0 ml-md-5  mb-auto feature-item">
                  <span className="d-inline-block">
                    <img
                      className="img-fluid"
                      src={confidentIcon}
                      width="40px"
                      height="40px"
                      alt="Confidentiality icon"
                    />
                  </span>
                  <h4 className="font-weight-bold padding-header d-inline-block">
                    Confidentiality
                  </h4>
                  <p className="padding-body text-secondary">
                    We take to heart our customers needs and privacy in certain
                    situations to ensure trust and honesty.
                  </p>
                </div>

                <div className="col-11 col-sm-4 col-lg-5 col-md-9 mb-auto ml-3 ml-md-5 ml-lg-5 feature-item">
                  <span className="d-inline-block">
                    <img
                      className="img-fluid"
                      src={transparentIcon}
                      width="40px"
                      height="40px"
                      alt="Transparency icon"
                    />
                  </span>
                  <h4 className="font-weight-bold padding-header d-inline-block">
                    Transparency
                  </h4>
                  <p className="padding-body text-secondary">
                    We pride ourselves in making decisions and ensuring
                    integrity is embedded in all our actions and relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-12 col-xl-5 col-lg-6 col-md-7">
              <div>
                <h1 className="title">Our Mission</h1>
                <p className="font-md text-secondary">
                  We are on a mission to provide women access to the financial
                  services needed to thrive in business and ability to unlock
                  new social economic opportunities for themselves and their
                  families .
                </p>
              </div>
              <div className="pt-3">
                <h1 className="title">Our Vision</h1>
                <p className="font-md text-secondary">
                  To ignite the growth of the new economic opportunities for
                  women in Africa through access to inclusive financial
                  services.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-4 mt-4">
              <div className="row justify-response">
                <div className="col-5 col-md-6 col-lg-4">
                  <img src={loanIcon} alt="Loan Icon"></img>
                  <h5 className="title pt-1 pb-2">Loans </h5>
                </div>
                <div className="col-5 col-md-6 col-lg-5">
                  <img src={growthIcon1} alt="Growth Icon"></img>
                  <h5 className="title pt-1 pt-1 pb-2">Growth </h5>
                </div>
                <div className="col-5 col-md-6 col-lg-4">
                  <img src={educationIcon} alt="Education Icon"></img>
                  <h5 className="title pt-1">Education </h5>
                </div>
                <div className="col-5 col-md-6 col-lg-5">
                  <img src={savingsIcon} alt="Savings Icon"></img>
                  <h5 className="title pt-1">Savings </h5>
                </div>
              </div>
            </div>
          </div>

          <hr className="homepage-hr d-none d-md-block d-lg-block mt-5 mb-5"></hr>

          <div className="row justify-content-center">
            <h1 className="col-12 title text-center pb-0 pb-lg-4 pb-md-4 pt-4 pt-lg-0 pt-md-0">
              Check what people are saying
            </h1>
            <div
              id="carouselExampleControls"
              className="carousel slide mt-3 mb-5"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item bg-white active">
                  <div className="row justify-content-center pl-5 pr-5">
                    <div className="col-12 col-xl-5 col-lg-5 col-md-6 pb-4 pb-lg-0 pb-md-0">
                      <img src={stars} alt="Stars"></img>
                      <h5 className="title text-dark mt-3">
                        IF I COULD GIVE YOU MORE STARS TO THIS REVIEW I WOULD
                      </h5>
                      <p className="text-secondary">
                        It was a very simple process and I recieved the funds
                        within two days. Great experience!
                      </p>
                      <img
                        src={JEkweme}
                        alt="Joy Ekueme"
                        className="d-inline-block"
                      ></img>
                      <h6 className="text-dark d-inline-block pl-2">
                        Joy Ekueme
                      </h6>
                      <br></br>
                      <span className="text-secondary pt-1">
                        Interior design Specialist
                      </span>
                    </div>
                    <div className="col-12 col-xl-5 col-lg-5 col-md-6">
                      <img src={stars} alt="Stars"></img>
                      <h5 className="title text-dark mt-3">
                        THE CUSTOMER SERVICE WAS AWESOME AND QUICK.
                      </h5>
                      <p className="text-secondary">
                        I love Shecluded. I was able to setup my small business
                        with their help. Highly recommend.
                      </p>
                      <img src={Kokehie} alt="Kelechi Okehie"></img>
                      <h6 className="text-dark d-inline-block pl-2">
                        Kelechi Okehie
                      </h6>
                      <br></br>
                      <span className="text-secondary pt-1">
                        Interior design Specialist
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
         */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
