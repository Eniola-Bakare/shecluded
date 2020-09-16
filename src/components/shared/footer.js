import React from 'react';
import { Link } from 'react-router-dom'
import Privacy from '../../assets/Shecluded-privacy.pdf';
import TermsAndConditions from '../../dev-data/shecluded-terms-and-conditions.pdf';
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <div>
      <footer class="page-footer font-small mdb-color lighten-3 pt-4">
        <div className="p-3">
          <div className="pb-5 footer-section-wrapper">
            <div className="left-footer">
              <div className="sub-footer">
                <h1>About </h1>
                <hr />
                <div>
                  <div>
                  
                  <HashLink to="/story#Story">Our Story </HashLink>

                  </div>
                  <div>
                   
                  <HashLink to="/story#Values">Our Values </HashLink>


                  </div>
                  <div>
                   
                  {/* <HashLink to="/story#Impact">Our Impact </HashLink> */}
                  <Link to={"/business-showcase"}>
                      <a href=""> Yellow page </a>
                    </Link>

                  </div>
                  
                  

                </div>

              </div>
              <div className="mt-footer sub-footer">
                <h1>Community </h1>
                <hr />

                <div>
                  <div>
                  <Link to={"/blog"}>
                      <a href=""> Blog </a>
                    </Link>
                    {/* <a target="_blank" href="https://medium.com/@shecluded" rel="noopener noreferrer"> Blog  </a> */}
                  </div>
                  <div>
                    <Link to={"/team"}>
                      <a href=""> Our Team </a>
                    </Link>
                    

                  </div>
                  <div>
                    
                    <HashLink to="/story#Mission">Our Mision </HashLink>
                    

                  </div>
                 

                </div>
              </div>
              <div className="mt-footer sub-footer">
                <h1>Legal </h1>
                <hr />
                <div>
                  <div>
                    <Link to={"/faq"}>FAQ</Link>
                  </div>
                  <div>
                    <Link to={"/terms"}>
                    Terms and Conditions
                    </Link>

                  </div>
                  <div>
                    <a target="_blank" href={Privacy} rel="noopener noreferrer"> Privacy Policy </a>

                  </div>
                  

                </div>
              </div>
            </div>
            <div className="right-footer mt-footer">
              <h1>Social </h1>
              <hr />
              <div className="d-flex">
                {/* <div className="p-2">
                  <a href="#"> <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="white" />
                    <path d="M12.3616 20H14.9774V13.4463H16.8023L16.9944 11.2542H14.9774C14.9774 11.2542 14.9774 10.435 14.9774 10.0056C14.9774 9.48588 15.0791 9.28249 15.5819 9.28249C15.9831 9.28249 17 9.28249 17 9.28249V7C17 7 15.5085 7 15.1864 7C13.2373 7 12.3616 7.85876 12.3616 9.49718C12.3616 10.9266 12.3616 11.2486 12.3616 11.2486H11V13.4689H12.3616V20Z" fill="#ED4F8F" />
                  </svg>  </a>
                </div> */}
                <div className="p-2">
                  <a href="https://twitter.com/shecluded" target="_blank" > <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="white" />
                    <path d="M8 17.8653C9.08822 18.5813 10.3834 19 11.7733 19C16.3391 19 18.9236 15.0437 18.7698 11.4879C19.2489 11.1299 19.6688 10.6869 20 10.1833C19.5564 10.3835 19.0833 10.517 18.5865 10.5777C19.0951 10.2682 19.4855 9.77063 19.6688 9.18204C19.1957 9.4733 18.6693 9.67961 18.1074 9.7949C17.652 9.3034 17.0133 9 16.3036 9C14.7127 9 13.5476 10.5231 13.9083 12.1007C11.862 11.9976 10.0463 10.9903 8.83391 9.46117C8.18926 10.5959 8.50271 12.0825 9.59685 12.835C9.19468 12.8167 8.81617 12.7075 8.47905 12.5194C8.4554 13.6845 9.27156 14.7828 10.4544 15.0255C10.1055 15.1226 9.72696 15.1468 9.34253 15.068C9.65599 16.0692 10.5668 16.8034 11.6432 16.8216C10.6082 17.6529 9.30705 18.0231 8 17.8653Z" fill="#ED4F8F" />
                  </svg>
                  </a>

                </div>
                <div className="p-2">
                  <a target="_blank" href="https://www.linkedin.com/company/shecluded/"> <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="white" />
                    <path d="M11.4906 12.6648H9.21913V19.9943H11.4906V12.6648Z" fill="#ED4F8F" />
                    <path d="M10.3433 11.7082C11.087 11.7082 11.6866 11.1032 11.6866 10.3541C11.6866 9.60503 11.087 9 10.3433 9C9.59958 9 9 9.60503 9 10.3541C9 11.1032 9.59958 11.7082 10.3433 11.7082Z" fill="#ED4F8F" />
                    <path d="M15.1168 16.1508C15.1168 15.1193 15.5896 14.5086 16.5005 14.5086C17.3364 14.5086 17.7342 15.0963 17.7342 16.1508C17.7342 17.2053 17.7342 19.9999 17.7342 19.9999H19.9942C19.9942 19.9999 19.9942 17.3205 19.9942 15.3556C19.9942 13.3907 18.8815 12.4399 17.3249 12.4399C15.7683 12.4399 15.1168 13.65 15.1168 13.65V12.6647H12.9434V19.9941H15.1226C15.1168 19.9999 15.1168 17.2802 15.1168 16.1508Z" fill="#ED4F8F" />
                  </svg>
                  </a>
                </div>
                <div className="p-2">
                  <a target="_blank" href="https://www.youtube.com/channel/UCw-HgPM7ZkveoxnYuths-LQ"> <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="white" />
                    <path d="M19.7471 11.4069C19.608 10.8549 19.2034 10.4174 18.6849 10.2693C17.7524 10 14 10 14 10C14 10 10.2476 10 9.31191 10.2693C8.79663 10.4174 8.38883 10.8515 8.24974 11.4069C8 12.4099 8 14.5 8 14.5C8 14.5 8 16.5935 8.24974 17.5965C8.38883 18.1485 8.79347 18.586 9.31191 18.7341C10.2476 19.0034 14 19.0034 14 19.0034C14 19.0034 17.7524 19.0034 18.6881 18.7341C19.2034 18.586 19.6112 18.1518 19.7503 17.5965C20 16.5935 20 14.5 20 14.5C20 14.5 20 12.4099 19.7471 11.4069Z" fill="#ED4F8F" />
                    <path d="M12.7734 16.3981V12.6016L15.9094 14.4998L12.7734 16.3981Z" fill="white" />
                  </svg>
                  </a>
                </div>


              </div>
            </div>

          </div>
          <hr />
          <div className="d-flex flex-wrap justify-content-center justify-content-lg-end p-1">
            <h1 className="mr-2">Copyright 2020 Shecluded, PLC. </h1> 
            <div className="mr-2">
              <Link to={"/terms"}>
                    Terms and Conditions
                    </Link>


            </div> 
            <div className="mr-2">
              <a target="_blank" href={Privacy} rel="noopener noreferrer"> Privacy Policy </a>

            </div>
          </div>
        </div>


      </footer>


    </div>
  );
};

export default Footer;
