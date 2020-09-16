import React, { useState } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import axios from "axios";
import { sendEmailToSupport, timeOut } from "../../api/rootUrls";
import swal from "sweetalert";
import Preloader from "../shared/preloader";
import InViewMonitor from "react-inview-monitor";
import { Link } from "react-router-dom";




const ContactUs = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    isLoading: false,
  });

  const { name, email, message, isLoading } = state;

  const onSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      isLoading: true,
    });

    let reqBody = {
      customerEmail: email,
      message,
      name,
    };

    axios({
      url: `${sendEmailToSupport}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: timeOut,
      data: reqBody,
    })
      .then((result) => {
        setState({
          ...state,
          isLoading: false,
        });
        if (result.data.respCode === "Successful") {
          swal(
            "Success",
            "Your email has been sent, you will be contacted shortly!",
            "success"
          );
        } else {
          setState({
            ...state,
            errorMessage: result.data.respDescription,
          });
        }
      })
      .catch((err) => {
        setState({
          ...state,
          isLoading: false,
        });
        if (!err.response) {
          setState({
            ...state,
            errorMessage: "Network Error",
          });
        } else {
          if (err.response.status === 400 || err.response.status === 401) {
            setState({
              ...state,
              errorMessage: err.response.data.respDescription,
            });
          } else {
            setState({
              ...state,
              errorMessage: err,
            });
          }
        }
      });
  };
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <NavBar />
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-12 small-header about-header ">
            {/* <img src={headerBackground} alt="smiling black girl with afro" /> */}
            <div className="small-header-overlay">
              <h1 className="text-center text-black title">
                Contact Us
              </h1>
              <p className="text-center text-black title">
                Fill out the form below and a Shecluded representative will contact you as soon
              as possible. <br /> For immediate assistance, please call our sales line or email our customer support.
              </p>
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

                <div className="col-11 col-xl-4 col-lg-5 col-md-6 col-sm-12 pt-5 ">
                  <h2 className="title">
                  We’d love to hear from you
                    </h2>
                  <p className="font-md">
                  They are grilling celebrities in their own right. You’ve seen them on TV and you see their cookbooks lined along the shelves of your local bookstore.
                    </p>
                  <ul className="list-group bullet-list">
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <svg  className="mr-3" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="22.5" cy="22.5" r="22.5" fill="#FFE9F6" fill-opacity="0.5"/>
                          <path d="M26.4803 27.3533C26.5961 27.247 26.7447 27.1863 26.9005 27.1846C26.9893 27.1836 27.0771 27.2018 27.1587 27.2378C27.159 27.238 27.1594 27.2381 27.1597 27.2383L27.0988 27.3754L26.4803 27.3533ZM26.4803 27.3533C26.3647 27.4593 26.2889 27.6037 26.2632 27.7606M26.4803 27.3533L26.2632 27.7606M26.2632 27.7606C26.2375 27.9175 26.2631 28.0796 26.3366 28.2195M26.2632 27.7606L26.3366 28.2195M26.3366 28.2195C26.4101 28.3592 26.5276 28.4695 26.6715 28.5287M26.3366 28.2195L26.6715 28.5287M26.6715 28.5287C27.3917 28.8358 27.958 29.2253 28.3223 29.6282L28.4335 29.5276L28.3223 29.6282C28.6862 30.0308 28.8423 30.4183 28.8423 30.8013C28.8423 31.4475 28.3497 32.1727 27.2874 32.77C26.2312 33.364 24.7019 33.7592 23 33.7592C21.2981 33.7592 19.7688 33.364 18.7126 32.77C17.6503 32.1727 17.1578 31.4475 17.1578 30.8013C17.1578 30.4188 17.3141 30.0313 17.6784 29.6289C18.0429 29.2262 18.6093 28.8374 19.328 28.5315C19.4096 28.498 19.4834 28.4477 19.5456 28.3842C19.608 28.3204 19.6575 28.2444 19.6917 28.161C19.7259 28.0776 19.7443 27.9881 19.7461 27.8976C19.7479 27.8071 19.7331 27.7168 19.7023 27.6321C19.6715 27.5473 19.6252 27.4692 19.5655 27.4027C19.5059 27.3361 19.4339 27.2823 19.3534 27.2451C19.273 27.2079 19.186 27.1881 19.0976 27.1873C19.0096 27.1866 18.9226 27.2047 18.8419 27.2403C18.8415 27.2404 18.8412 27.2406 18.8409 27.2407L18.9016 27.3779L26.6715 28.5287ZM22.492 30.8167L22.492 30.8167C22.5524 30.896 22.629 30.9608 22.717 31.0057C22.8049 31.0505 22.9016 31.0741 23 31.0741C23.0984 31.0741 23.1951 31.0505 23.2831 31.0057C23.371 30.9608 23.4476 30.896 23.508 30.8167L23.5081 30.8167C24.4453 29.5866 25.9602 27.2973 27.26 24.8826C27.9094 23.676 28.5134 22.4507 28.9553 21.2916C29.3965 20.1342 29.6802 19.0323 29.6802 18.0751C29.6802 14.1033 26.6946 10.85 23 10.85C19.3054 10.85 16.3199 14.1033 16.3199 18.0751C16.3199 19.0323 16.6036 20.1342 17.0448 21.2916C17.4866 22.4507 18.0906 23.676 18.7401 24.8826C20.0398 27.2973 21.5547 29.5866 22.492 30.8167ZM19.8749 24.1913L19.7428 24.2624L19.8749 24.1913C19.2454 23.0217 18.6821 21.817 18.2767 20.7392C17.8695 19.6568 17.6276 18.7183 17.6276 18.0751C17.6276 14.8349 20.0386 12.2408 23 12.2408C25.9614 12.2408 28.3724 14.8349 28.3724 18.0751C28.3724 18.7183 28.1305 19.6568 27.7233 20.7392C27.3179 21.817 26.7546 23.0217 26.1251 24.1913C25.0839 26.1256 23.8807 28.0038 23 29.2465C22.1193 28.0038 20.9161 26.1256 19.8749 24.1913ZM23 14.3984C21.1556 14.3984 19.6721 16.027 19.6721 17.9912C19.6721 19.9574 21.1555 21.5866 23 21.5866C24.8445 21.5866 26.3279 19.9574 26.3279 17.9912C26.3279 16.027 24.8444 14.3984 23 14.3984ZM23 15.7891C24.1105 15.7891 25.0202 16.7587 25.0202 17.9912C25.0202 19.2269 24.1105 20.1959 23 20.1959C21.8895 20.1959 20.9799 19.2269 20.9799 17.9912C20.9799 16.7587 21.8895 15.7891 23 15.7891Z" fill="#ED4F8F" stroke="#ED4F8F" stroke-width="0.3"/>
                          </svg>
                          333 Address place P.O Box 
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <svg className="mr-3" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="22.5" cy="22.5" r="22.5" fill="#FFE9F6" fill-opacity="0.5"/>
                          <path d="M26.4803 27.3533C26.5961 27.247 26.7447 27.1863 26.9005 27.1846C26.9893 27.1836 27.0771 27.2018 27.1587 27.2378C27.159 27.238 27.1594 27.2381 27.1597 27.2383L27.0988 27.3754L26.4803 27.3533ZM26.4803 27.3533C26.3647 27.4593 26.2889 27.6037 26.2632 27.7606M26.4803 27.3533L26.2632 27.7606M26.2632 27.7606C26.2375 27.9175 26.2631 28.0796 26.3366 28.2195M26.2632 27.7606L26.3366 28.2195M26.3366 28.2195C26.4101 28.3592 26.5276 28.4695 26.6715 28.5287M26.3366 28.2195L26.6715 28.5287M26.6715 28.5287C27.3917 28.8358 27.958 29.2253 28.3223 29.6282L28.4335 29.5276L28.3223 29.6282C28.6862 30.0308 28.8423 30.4183 28.8423 30.8013C28.8423 31.4475 28.3497 32.1727 27.2874 32.77C26.2312 33.364 24.7019 33.7592 23 33.7592C21.2981 33.7592 19.7688 33.364 18.7126 32.77C17.6503 32.1727 17.1578 31.4475 17.1578 30.8013C17.1578 30.4188 17.3141 30.0313 17.6784 29.6289C18.0429 29.2262 18.6093 28.8374 19.328 28.5315C19.4096 28.498 19.4834 28.4477 19.5456 28.3842C19.608 28.3204 19.6575 28.2444 19.6917 28.161C19.7259 28.0776 19.7443 27.9881 19.7461 27.8976C19.7479 27.8071 19.7331 27.7168 19.7023 27.6321C19.6715 27.5473 19.6252 27.4692 19.5655 27.4027C19.5059 27.3361 19.4339 27.2823 19.3534 27.2451C19.273 27.2079 19.186 27.1881 19.0976 27.1873C19.0096 27.1866 18.9226 27.2047 18.8419 27.2403C18.8415 27.2404 18.8412 27.2406 18.8409 27.2407L18.9016 27.3779L26.6715 28.5287ZM22.492 30.8167L22.492 30.8167C22.5524 30.896 22.629 30.9608 22.717 31.0057C22.8049 31.0505 22.9016 31.0741 23 31.0741C23.0984 31.0741 23.1951 31.0505 23.2831 31.0057C23.371 30.9608 23.4476 30.896 23.508 30.8167L23.5081 30.8167C24.4453 29.5866 25.9602 27.2973 27.26 24.8826C27.9094 23.676 28.5134 22.4507 28.9553 21.2916C29.3965 20.1342 29.6802 19.0323 29.6802 18.0751C29.6802 14.1033 26.6946 10.85 23 10.85C19.3054 10.85 16.3199 14.1033 16.3199 18.0751C16.3199 19.0323 16.6036 20.1342 17.0448 21.2916C17.4866 22.4507 18.0906 23.676 18.7401 24.8826C20.0398 27.2973 21.5547 29.5866 22.492 30.8167ZM19.8749 24.1913L19.7428 24.2624L19.8749 24.1913C19.2454 23.0217 18.6821 21.817 18.2767 20.7392C17.8695 19.6568 17.6276 18.7183 17.6276 18.0751C17.6276 14.8349 20.0386 12.2408 23 12.2408C25.9614 12.2408 28.3724 14.8349 28.3724 18.0751C28.3724 18.7183 28.1305 19.6568 27.7233 20.7392C27.3179 21.817 26.7546 23.0217 26.1251 24.1913C25.0839 26.1256 23.8807 28.0038 23 29.2465C22.1193 28.0038 20.9161 26.1256 19.8749 24.1913ZM23 14.3984C21.1556 14.3984 19.6721 16.027 19.6721 17.9912C19.6721 19.9574 21.1555 21.5866 23 21.5866C24.8445 21.5866 26.3279 19.9574 26.3279 17.9912C26.3279 16.027 24.8444 14.3984 23 14.3984ZM23 15.7891C24.1105 15.7891 25.0202 16.7587 25.0202 17.9912C25.0202 19.2269 24.1105 20.1959 23 20.1959C21.8895 20.1959 20.9799 19.2269 20.9799 17.9912C20.9799 16.7587 21.8895 15.7891 23 15.7891Z" fill="#ED4F8F" stroke="#ED4F8F" stroke-width="0.3"/>
                          </svg>

                          234 xxx xxx xxxx
                        </li>
                      </InViewMonitor>
                      <InViewMonitor
                        classNameNotInView="vis-hidden"
                        classNameInView="animated fadeInUp"
                      >
                        <li className="list-group-item">
                          <svg className="mr-3" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="22.5" cy="22.5" r="22.5" fill="#FFE9F6" fill-opacity="0.5"/>
                          <path d="M26.4803 27.3533C26.5961 27.247 26.7447 27.1863 26.9005 27.1846C26.9893 27.1836 27.0771 27.2018 27.1587 27.2378C27.159 27.238 27.1594 27.2381 27.1597 27.2383L27.0988 27.3754L26.4803 27.3533ZM26.4803 27.3533C26.3647 27.4593 26.2889 27.6037 26.2632 27.7606M26.4803 27.3533L26.2632 27.7606M26.2632 27.7606C26.2375 27.9175 26.2631 28.0796 26.3366 28.2195M26.2632 27.7606L26.3366 28.2195M26.3366 28.2195C26.4101 28.3592 26.5276 28.4695 26.6715 28.5287M26.3366 28.2195L26.6715 28.5287M26.6715 28.5287C27.3917 28.8358 27.958 29.2253 28.3223 29.6282L28.4335 29.5276L28.3223 29.6282C28.6862 30.0308 28.8423 30.4183 28.8423 30.8013C28.8423 31.4475 28.3497 32.1727 27.2874 32.77C26.2312 33.364 24.7019 33.7592 23 33.7592C21.2981 33.7592 19.7688 33.364 18.7126 32.77C17.6503 32.1727 17.1578 31.4475 17.1578 30.8013C17.1578 30.4188 17.3141 30.0313 17.6784 29.6289C18.0429 29.2262 18.6093 28.8374 19.328 28.5315C19.4096 28.498 19.4834 28.4477 19.5456 28.3842C19.608 28.3204 19.6575 28.2444 19.6917 28.161C19.7259 28.0776 19.7443 27.9881 19.7461 27.8976C19.7479 27.8071 19.7331 27.7168 19.7023 27.6321C19.6715 27.5473 19.6252 27.4692 19.5655 27.4027C19.5059 27.3361 19.4339 27.2823 19.3534 27.2451C19.273 27.2079 19.186 27.1881 19.0976 27.1873C19.0096 27.1866 18.9226 27.2047 18.8419 27.2403C18.8415 27.2404 18.8412 27.2406 18.8409 27.2407L18.9016 27.3779L26.6715 28.5287ZM22.492 30.8167L22.492 30.8167C22.5524 30.896 22.629 30.9608 22.717 31.0057C22.8049 31.0505 22.9016 31.0741 23 31.0741C23.0984 31.0741 23.1951 31.0505 23.2831 31.0057C23.371 30.9608 23.4476 30.896 23.508 30.8167L23.5081 30.8167C24.4453 29.5866 25.9602 27.2973 27.26 24.8826C27.9094 23.676 28.5134 22.4507 28.9553 21.2916C29.3965 20.1342 29.6802 19.0323 29.6802 18.0751C29.6802 14.1033 26.6946 10.85 23 10.85C19.3054 10.85 16.3199 14.1033 16.3199 18.0751C16.3199 19.0323 16.6036 20.1342 17.0448 21.2916C17.4866 22.4507 18.0906 23.676 18.7401 24.8826C20.0398 27.2973 21.5547 29.5866 22.492 30.8167ZM19.8749 24.1913L19.7428 24.2624L19.8749 24.1913C19.2454 23.0217 18.6821 21.817 18.2767 20.7392C17.8695 19.6568 17.6276 18.7183 17.6276 18.0751C17.6276 14.8349 20.0386 12.2408 23 12.2408C25.9614 12.2408 28.3724 14.8349 28.3724 18.0751C28.3724 18.7183 28.1305 19.6568 27.7233 20.7392C27.3179 21.817 26.7546 23.0217 26.1251 24.1913C25.0839 26.1256 23.8807 28.0038 23 29.2465C22.1193 28.0038 20.9161 26.1256 19.8749 24.1913ZM23 14.3984C21.1556 14.3984 19.6721 16.027 19.6721 17.9912C19.6721 19.9574 21.1555 21.5866 23 21.5866C24.8445 21.5866 26.3279 19.9574 26.3279 17.9912C26.3279 16.027 24.8444 14.3984 23 14.3984ZM23 15.7891C24.1105 15.7891 25.0202 16.7587 25.0202 17.9912C25.0202 19.2269 24.1105 20.1959 23 20.1959C21.8895 20.1959 20.9799 19.2269 20.9799 17.9912C20.9799 16.7587 21.8895 15.7891 23 15.7891Z" fill="#ED4F8F" stroke="#ED4F8F" stroke-width="0.3"/>
                          </svg>

                          hello@shecluded.com 
                        </li>
                      </InViewMonitor>
                      
                    </ul>
                    
                </div>
                <div className="col-xl-4 col-lg-5 col-md-8 col-12 d-flex justify-content-center pt-5 ">
                  <div className="row justify-content-center ml-3 mr-3">
                      <form className="contact-form" onSubmit={onSubmit}>
                        <div className="form-row">
                          <div className="form-group col-12 col-md-12">
                            <h6 className="title">Full Name</h6>
                            <input
                              type="text"
                              onChange={onChange}
                              value={name}
                              name="name"
                              className="ollpp"
                              required
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="form-group col-12 col-md-12 mt-2">
                            <h6 className="title">Email Address</h6>
                            <input
                              type="email"
                              onChange={onChange}
                              value={email}
                              name="email"
                              className="ollpp"
                              id="inputEmail4"
                              required
                              placeholder="Enter your email address"
                            />
                          </div>

                          <div className="form-group col-12 col-md-12 mt-2">
                            <h6 className="title">Message</h6>
                            <textarea
                              name="message"
                              onChange={onChange}
                              rows="4"
                              value={message}
                              className="ollpp2"
                              required
                              placeholder="Write something..."
                            ></textarea>
                          </div>
                        </div>
                        <button className="btn btn-shecluded btn-lg" type="submit">
                          Send Message
                        </button>
                      </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </InViewMonitor>


        <div style={{background: "rgba(229, 229, 229, 0.2)"}} className="row justify-content-center mt-5">
            <div className="col-12 col-xl-7 col-lg-9 section focus-section">
              <div className="row justify-content-center">
                <h1 className="col-11 col-xl-8 col-lg-8 title text-center pb-4">
                Start using from today
                </h1>
                <p className="col-11 col-lg-12 w-25 text-center font-md">
                Your information is secure and encrypted, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliquat ad minim. 
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
};

export default ContactUs;
