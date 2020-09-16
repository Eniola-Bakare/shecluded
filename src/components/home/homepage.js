import React, { Component } from "react";
import homepageHeaderImage from "../../assets/onewomanlaptop.png";
import yourpath from "../../assets/yourpath.png";
import homepageHeaderImage3 from "../../assets/onewoman2-removebg-preview.png";
import InViewMonitor from "react-inview-monitor";
import ListBullet from "../../assets/tick-icon.svg";
import loanImage from "../../assets/shecluded loan.jpg";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import { Link } from "react-router-dom";
import AdvertCard from "./AdvertCard";

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
                <div className="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12 header-text">
                  <h1 className="title text-align-left">
                    Digital Financial Inclusion Company for Women
                </h1>
                  <p className="font-md pt-3  mb-5 shecluded-text-details">
                  Get access to loans, wealth management, and business advisory. 
                </p>                 
                  <p className="pt-2 mt-2">
                    <Link to={"/register"} className="btn btn-shecluded btn-lg">
                      Get Started
                  </Link>
                  </p>
                </div>
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
              </div>
            </div>

            <div className="container">
              <div class="row p-0 p-lg-5 p-md-5">
                <div class="col-xs-6 col-sm-4">
                  <div className="d-flex align-items-start">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#ED4F8F" strokeWidth="2"/>
                <path d="M8 15.6875L13.551 21L24 11" stroke="#ED4F8F" strokeWidth="2"/>
                </svg>
                  <h1 className="font-lg font-weight-bold ml-3 text-align-left">
                  Loans
                </h1>

                  </div>
                
                  <p className="shecluded-info-text-details pt-3  mb-5">
                  You can access loans to help you prioritize your entrepreneurial goals. We make it fairly quick and easy. 
                </p>
                </div>

                <div class="col-xs-6 col-sm-4">
                <div className="d-flex align-items-start">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#ED4F8F" strokeWidth="2"/>
                <path d="M8 15.6875L13.551 21L24 11" stroke="#ED4F8F" strokeWidth="2"/>
                </svg>
                  <h1 className="font-lg font-weight-bold ml-3 text-align-left">
                  Advisory services
                </h1>
                  </div>
                
                  <p className="shecluded-info-text-details pt-3  mb-5">
                  Our experts work with you and tailor advisory services to your personal finances or business and career growth. 
                    </p>
                </div>

                <div class="col-xs-6 col-sm-4">
                <div className="d-flex align-items-start">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#ED4F8F" strokeWidth="2"/>
                <path d="M8 15.6875L13.551 21L24 11" stroke="#ED4F8F" strokeWidth="2"/>
                </svg>
                  <h1 className="font-lg font-weight-bold ml-3">
                  Savings and Health Insurance 

                </h1>
                  </div>
                  <p className="shecluded-info-text-details  pt-3  mb-5">
                  Our savings options include a targeted savings plan and a pension plan to help you plan for your future. Our Health insurance is affordable and reliable. 
                          </p>
                </div>

              </div>
            </div>
          </InViewMonitor>

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
                        src={homepageHeaderImage}
                        alt="woman"
                        className="rounded img-fluid"
                      />
                    </div>
                  </div>
                  
                  <div className="col-11 col-xl-4  col-lg-5 col-md-7 col-sm-12 pt-5 mr-2">
                    <h2 className="title">
                    Start your financial  journey <br/> with us</h2>
                    
                    <p className="font-md">
                    We work with women just like you everyday to help them achieve financial goals. We provide financial solutions and use your insights to help us improve. 
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
                          Accessible 
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
                          Relatable
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img src={ListBullet} alt="circle list bullet" />{" "}
                          Digital/Digital driven
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img src={ListBullet} alt="circle list bullet" />{" "}
                          Powered by Women
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img src={ListBullet} alt="circle list bullet" />{" "}
                          Flexible
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <img src={ListBullet} alt="circle list bullet" />{" "}
                          Savings
                        </li>
                      </InViewMonitor>
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>
          </InViewMonitor>

  

          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
            <div className="row">
              <div className="col-12 section">
                <div className="row justify-content-center">
                  <div className="col-11 col-xl-4 col-lg-5 col-md-7 col-sm-12 pt-5">
                    <h2 className="title">
                        Defining your path
                    </h2>
                    <p className="font-md">
                    We are committed to meeting our customer’s needs at the quickest possible time, we understand the fact that life wouldn’t hold, neither should our clients.
                    </p>
                    <div class="row mt-5 mb-3">
                      <div class="col-xs-6 col-sm-4">
                      <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.6548 14.5295L20.6552 14.529C20.7618 14.3538 20.912 14.2092 21.091 14.1093C21.27 14.0094 21.4718 13.9575 21.6767 13.9586M20.6548 14.5295L21.6771 13.9586C21.6769 13.9586 21.6768 13.9586 21.6767 13.9586M20.6548 14.5295L14.9093 24.1054L11.6277 20.8449C11.5213 20.7309 11.3923 20.6402 11.2489 20.5788C11.1051 20.5171 10.95 20.4862 10.7935 20.488H2.08824C1.7731 20.488 1.47086 20.6132 1.24803 20.8361C1.02519 21.0589 0.9 21.3611 0.9 21.6763C0.9 21.9914 1.02519 22.2936 1.24803 22.5165C1.47086 22.7393 1.7731 22.8645 2.08824 22.8645H10.2958L14.3134 26.8605C14.4198 26.9746 14.5488 27.0653 14.6922 27.1267C14.8361 27.1884 14.9912 27.2193 15.1476 27.2175H15.2776V27.2184L15.2914 27.2165C15.4702 27.1918 15.6414 27.128 15.7928 27.0298C15.9443 26.9315 16.0723 26.8012 16.1678 26.648L16.1687 26.6465L22.3426 16.3351H28.2053C28.3618 16.3369 28.5169 16.306 28.6607 16.2444C28.8041 16.1829 28.9332 16.0922 29.0396 15.9781M20.6548 14.5295L29.0396 15.9781M21.6767 13.9586H27.7075M21.6767 13.9586H27.7075M27.7075 13.9586L40.4322 1.25556L40.4323 1.2555M27.7075 13.9586L40.4323 1.2555M40.4323 1.2555C40.6531 1.03476 40.9525 0.910742 41.2647 0.910742C41.5769 0.910742 41.8764 1.03478 42.0972 1.25556C42.318 1.47635 42.442 1.7758 42.442 2.08804C42.442 2.40028 42.318 2.69973 42.0972 2.92052L29.0396 15.9781M40.4323 1.2555L29.0396 15.9781" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.2"/>
                        <path d="M40.4245 7.28139C40.6473 7.50422 40.9495 7.62941 41.2647 7.62941C41.5798 7.62941 41.882 7.50422 42.1049 7.28139C42.3277 7.05855 42.4529 6.75632 42.4529 6.44118V2.08824C42.4529 1.7731 42.3277 1.47086 42.1049 1.24803C41.882 1.02519 41.5798 0.9 41.2647 0.9H36.9117C36.5966 0.9 36.2943 1.02519 36.0715 1.24803C35.8487 1.47086 35.7235 1.7731 35.7235 2.08824C35.7235 2.40337 35.8487 2.70561 36.0715 2.92844C36.2943 3.15128 36.5966 3.27647 36.9117 3.27647H40.0764V6.44118C40.0764 6.75632 40.2016 7.05855 40.4245 7.28139Z" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.2"/>
                        <path d="M34.7352 38.1003H41.2646C41.5798 38.1003 41.882 37.9751 42.1048 37.7522C42.3277 37.5294 42.4529 37.2272 42.4529 36.912V15.1473C42.4529 14.8322 42.3277 14.5299 42.1048 14.3071C41.882 14.0843 41.5798 13.9591 41.2646 13.9591H34.7352C34.4201 13.9591 34.1178 14.0843 33.895 14.3071C33.6722 14.5299 33.547 14.8322 33.547 15.1473V36.912C33.547 37.2272 33.6722 37.5294 33.895 37.7522C34.1178 37.9751 34.4201 38.1003 34.7352 38.1003ZM40.0764 16.3356V35.7238H35.9234V16.3356H40.0764Z" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.2"/>
                        <path d="M23.8529 38.1003H30.3823C30.6974 38.1003 30.9997 37.9752 31.2225 37.7523C31.4453 37.5295 31.5705 37.2272 31.5705 36.9121V19.5003C31.5705 19.1852 31.4453 18.883 31.2225 18.6601C30.9997 18.4373 30.6974 18.3121 30.3823 18.3121H23.8529C23.5377 18.3121 23.2355 18.4373 23.0127 18.6601C22.7898 18.883 22.6646 19.1852 22.6646 19.5003V36.9121C22.6646 37.2272 22.7898 37.5295 23.0127 37.7523C23.2355 37.9752 23.5377 38.1003 23.8529 38.1003ZM29.1941 20.6886V35.7239H25.0411V20.6886H29.1941Z" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.2"/>
                        <path d="M12.9706 38.0998H19.5C19.8151 38.0998 20.1173 37.9746 20.3402 37.7518C20.563 37.529 20.6882 37.2267 20.6882 36.9116V30.3822C20.6882 30.067 20.563 29.7648 20.3402 29.542C20.1173 29.3191 19.8151 29.1939 19.5 29.1939H12.9706C12.6554 29.1939 12.3532 29.3191 12.1304 29.542C11.9075 29.7648 11.7823 30.067 11.7823 30.3822V36.9116C11.7823 37.2267 11.9075 37.529 12.1304 37.7518C12.3532 37.9746 12.6554 38.0998 12.9706 38.0998ZM18.3117 31.5704V35.7234H14.1588V31.5704H18.3117Z" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.2"/>
                        <path d="M2.08824 38.0997H8.61765C8.93279 38.0997 9.23502 37.9746 9.45786 37.7517C9.68069 37.5289 9.80588 37.2266 9.80588 36.9115V26.0292C9.80588 25.714 9.68069 25.4118 9.45786 25.1889C9.23502 24.9661 8.93279 24.8409 8.61765 24.8409H2.08824C1.7731 24.8409 1.47086 24.9661 1.24803 25.1889C1.02519 25.4118 0.9 25.714 0.9 26.0292V36.9115C0.9 37.2266 1.02519 37.5289 1.24803 37.7517C1.47086 37.9746 1.7731 38.0997 2.08824 38.0997ZM7.42941 27.2174V35.7233H3.27647V27.2174H7.42941Z" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.2"/>
                        </svg>

                        <h1 className="font-md mt-3">Growth</h1>
                        <p>We encourage big dreams and love to figure out how to achieve them with our clients.</p>
                      </div>
                      <div class="col-xs-6 col-sm-4">
                      <svg width="51" height="34" viewBox="0 0 51 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.8897 18.2776L27.9495 18.2926L28.0025 18.2611C30.4833 16.7901 33.768 16.0156 37.4 16.0156C40.9256 16.0156 44.1324 16.7557 46.5878 18.1389C49.0444 19.5226 50.85 21.7165 50.85 24.365V32.2978C50.85 32.7088 50.6866 33.103 50.396 33.3937C50.1053 33.6843 49.7111 33.8477 49.3 33.8477H34.1417V33.8476L34.1354 33.8478C34.0924 33.8496 34.0493 33.8496 34.0062 33.8478L34.0062 33.8476L33.9984 33.8477C33.9877 33.8478 33.9769 33.8478 33.9661 33.8477H33.9646H18.8771V33.8475L18.8693 33.8479C18.8155 33.8507 18.7616 33.8507 18.7078 33.8479L18.7078 33.8477H18.7H1.70002C1.28894 33.8477 0.894711 33.6843 0.60403 33.3937C0.313356 33.103 0.150041 32.7088 0.15 32.2978V26.6138C0.15 24.5269 1.63831 22.8738 3.48588 21.9311C5.33339 20.9884 7.65162 20.5486 10.2 20.5486C11.2456 20.5486 12.2517 20.6242 13.2044 20.7769L13.2728 20.7879L13.3255 20.743C15.6529 18.7578 19.2011 17.7155 23.1979 17.7155C24.8559 17.7155 26.4404 17.9152 27.8897 18.2776ZM47.6 30.7479H47.75V30.5979V24.365C47.75 23.1034 46.8934 21.8891 45.0528 20.8523C43.2068 19.8125 40.4677 19.1154 37.4 19.1154C35.4999 19.1154 33.7362 19.4 32.2221 19.8475L31.9149 19.9383L32.1813 20.1161C34.1259 21.414 35.5146 23.2716 35.5146 25.4982V30.5979V30.7479H35.6646H47.6ZM32.2646 30.7479H32.4146V30.5979V25.4982C32.4146 24.4569 31.6768 23.3566 30.0374 22.4112C28.3922 21.4625 25.9404 20.8152 23.1979 20.8152C20.97 20.8152 18.9605 21.2594 17.4015 21.9251L17.1308 22.0407L17.3834 22.1918C19.0094 23.1645 20.25 24.7067 20.25 26.6138V30.5979V30.7479H20.4H32.2646ZM17 30.7479H17.15V30.5979V26.6138C17.15 26.2673 17.0486 25.9391 16.786 25.619C16.5276 25.3038 16.1175 25.0018 15.5098 24.6918L15.4417 24.8254L15.5098 24.6918C14.2846 24.0666 12.3607 23.6484 10.2 23.6484C8.03931 23.6484 6.11535 24.0666 4.89016 24.6918L4.95833 24.8254L4.89015 24.6918C4.28253 25.0018 3.87243 25.3038 3.61397 25.619C3.35144 25.9391 3.25 26.2673 3.25 26.6138V30.5979V30.7479H3.4H17ZM30.1833 7.36618C30.1833 3.40094 33.4345 0.15 37.4 0.15C41.3655 0.15 44.6167 3.40094 44.6167 7.36618C44.6167 11.3314 41.3655 14.5823 37.4 14.5823C33.4345 14.5823 30.1833 11.3314 30.1833 7.36618ZM41.5167 7.36618C41.5167 5.07261 39.6937 3.24976 37.4 3.24976C35.1063 3.24976 33.2833 5.07261 33.2833 7.36618C33.2833 9.65974 35.1063 11.4826 37.4 11.4826C39.6937 11.4826 41.5167 9.65974 41.5167 7.36618ZM17.1146 10.7659C17.1146 7.42659 19.8583 4.68302 23.1979 4.68302C26.5375 4.68302 29.2812 7.42659 29.2812 10.7659C29.2812 14.1053 26.5375 16.8489 23.1979 16.8489C19.8583 16.8489 17.1146 14.1053 17.1146 10.7659ZM26.1812 10.7659C26.1812 9.09825 24.8657 7.78278 23.1979 7.78278C21.5301 7.78278 20.2146 9.09825 20.2146 10.7659C20.2146 12.4336 21.5301 13.7491 23.1979 13.7491C24.8657 13.7491 26.1812 12.4336 26.1812 10.7659ZM5.25 14.7323C5.25 12.0189 7.48631 9.78268 10.2 9.78268C12.9137 9.78268 15.15 12.0189 15.15 14.7323C15.15 17.4458 12.9137 19.682 10.2 19.682C7.48631 19.682 5.25 17.4458 5.25 14.7323ZM12.05 14.7323C12.05 13.6905 11.2419 12.8824 10.2 12.8824C9.15814 12.8824 8.35 13.6905 8.35 14.7323C8.35 15.7741 9.15814 16.5822 10.2 16.5822C11.2419 16.5822 12.05 15.7741 12.05 14.7323Z" fill="#ED4F8F" stroke="white" strokeWidth="0.3"/>
                        </svg>

                        <h1 className="font-md mt-3">Impact</h1>
                        <p> At the core of what we do is a desire to transform lives and create opportunities for more women for career, business and family.</p>
                      </div>
                      <div class="col-xs-6 col-sm-4">
                      <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.0621 13.6335L25.0613 13.6327C23.6521 12.1987 21.7458 11.3929 19.7575 11.3929C17.7706 11.3929 15.8655 12.1976 14.4567 13.6297L13.9842 14.0794L13.5492 13.6334C12.5015 12.5582 11.1654 11.825 9.70963 11.5278C8.25382 11.2306 6.7448 11.3829 5.37387 11.9653C4.00302 12.5475 2.83254 13.5333 2.0099 14.7966C1.18757 16.0595 0.749516 17.5435 0.75047 19.0607C0.739428 20.0629 0.92293 21.0574 1.29044 21.9865C1.65814 22.9161 2.20278 23.7617 2.89291 24.4741L2.89351 24.4747L13.0973 34.9347C13.2872 35.13 13.5446 35.2437 13.8162 35.2499L13.8162 35.25H13.8219H13.931H14.04V35.2501L14.0457 35.2499C14.3172 35.2437 14.5745 35.1302 14.7643 34.935C14.7644 34.9349 14.7645 34.9348 14.7646 34.9347L25.0611 24.4755L25.0621 24.4745C26.4638 23.035 27.25 21.0854 27.25 19.054C27.25 17.0226 26.4638 15.0731 25.0621 13.6335ZM4.40426 23.0077L4.40433 23.0076L4.39948 23.0029C3.87201 22.4906 3.44967 21.8748 3.15771 21.1917C2.86575 20.5086 2.71019 19.7723 2.70037 19.0261C2.69054 18.28 2.82667 17.5396 3.10056 16.8486C3.37445 16.1577 3.78046 15.5304 4.2943 15.0036C4.80814 14.4769 5.41937 14.0614 6.09174 13.7813C6.76409 13.5013 7.48415 13.3622 8.20944 13.3723C8.93474 13.3823 9.6509 13.5412 10.3157 13.8398C10.9805 14.1383 11.5806 14.5706 12.0804 15.1114L12.0804 15.1115L12.0851 15.1163L12.5224 15.5646L4.83289 23.4471L4.40426 23.0077ZM23.5559 23.0029L23.5559 23.0028L23.5512 23.0077L23.1225 23.4471L15.4331 15.5646L15.8704 15.1163L15.8704 15.1164L15.875 15.1114C16.3748 14.5706 16.9749 14.1383 17.6397 13.8398C18.3045 13.5412 19.0207 13.3823 19.746 13.3723C20.4713 13.3622 21.1913 13.5013 21.8637 13.7813C22.5361 14.0614 23.1473 14.4769 23.6611 15.0036C24.175 15.5304 24.581 16.1577 24.8549 16.8486C25.1288 17.5396 25.2649 18.28 25.2551 19.0261C25.2452 19.7723 25.0897 20.5086 24.7977 21.1917C24.5058 21.8748 24.0834 22.4906 23.5559 23.0029ZM21.5581 24.8272L13.9777 32.5978L6.39729 24.8272L13.9777 17.0565L21.5581 24.8272ZM13.9778 11.0236C14.9756 11.0234 15.9503 10.7186 16.7775 10.1488C17.6046 9.57903 18.2466 8.77038 18.6225 7.8266C18.9984 6.88288 19.0915 5.84612 18.8903 4.84823C18.6891 3.85031 18.2024 2.93556 17.4914 2.22094C16.7802 1.50624 15.8768 1.02409 14.896 0.836943C13.9151 0.64979 12.9021 0.766353 11.9866 1.17145C11.071 1.57651 10.2949 2.2514 9.75641 3.10912C9.21794 3.96678 8.94112 4.96876 8.96061 5.9874C8.9863 7.33031 9.52478 8.61053 10.4622 9.55267C11.3999 10.495 12.662 11.0239 13.9778 11.0236ZM13.9783 2.86297C14.562 2.86309 15.1331 3.04054 15.6194 3.37365C16.106 3.70694 16.4862 4.18131 16.7109 4.73748C16.9356 5.2937 16.9945 5.90609 16.8799 6.49696C16.7652 7.0878 16.4824 7.6297 16.0681 8.05445C15.6538 8.47912 15.1267 8.7676 14.5539 8.88441C13.9811 9.00121 13.3873 8.94132 12.8473 8.71204C12.3073 8.48274 11.8447 8.09398 11.5188 7.59398C11.1929 7.09406 11.0186 6.50572 11.0185 5.90334C11.0224 5.09628 11.337 4.32461 11.8919 3.75574C12.4466 3.18708 13.1966 2.867 13.9783 2.86297Z" fill="#ED4F8F" stroke="#ED4F8F" strokeWidth="0.5"/>
                      </svg>

                        <h1 className="font-md mt-3">Empathy</h1>
                        <p>We’re committed to helping each other succeed, dedicated to our customers, team and investors and focused on investing in our community.
                       </p>
                      </div>
                    </div>
                   
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-7 col-12 d-flex justify-content-center pt-5">
                    <div className="gif-women-holder rounded-bottom">
                      <img
                        src={yourpath}
                        alt="woman"
                        className="rounded img-fluid"
                      />
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
            <div className="row">
              <div className="col-12 section">
                <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-7 col-12 d-flex justify-content-center pt-5">
                    <div className="gif-women-holder rounded-bottom">
                      
                       <h1 className="title text-align-left">
                       Female led enterprises building the future together 
                      </h1>
                    </div>
                  </div>
                 
                  <div className="col-11 col-xl-4 col-lg-6 col-md-7 col-sm-12 pt-5">
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
          </InViewMonitor>


         

       
          <AdvertCard />



          <div className="row justify-content-center">
            <div className="col-12 col-xl-7 col-lg-9 section focus-section">
              <div className="row justify-content-center">
                <h1 className="col-11 col-xl-8 col-lg-8 title text-center pb-4">
                Join the <span style={{color:"#ED4F8F"}}>Shecluded</span> family today 
                </h1>
                <p className="col-11 col-lg-12 w-25 text-center font-md">
                Magic happens when you combine a smart woman access to credit and the power of a collaborative community 
                </p>
                <p className="pt-2 mt-2">
                    <Link to={"/register"} className="btn btn-shecluded btn-lg">
                      Get Started
                  </Link>
                  </p>
              </div>
             
            </div>
          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Homepage;

