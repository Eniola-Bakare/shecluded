import React from 'react';
// import DummyProfileImage from '../../assets/profile-image.svg';
import { Link } from "react-router-dom";


function Dashboardheader(props) {
    const { Setres, res } = props;

    return (
      <div>
        <header className="Header-container">
          <div className="first-ihehd">
            {
              !res? null : (<div >
              <Link to="/">
                <img src={require("../Images/logo.png")} />
              </Link>
            </div>)
            }
          </div>
        <div
               className={`secondhalf-header ${res ? "non-mover" : "mover"}`}
             >
              
               <div className="secondhalf-inner">
                 <svg
                   onClick={() => Setres(!res)}
                   width="16"
                   height="16"
                   viewBox="0 0 16 16"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M0 4H4V0H0V4ZM6 16H10V12H6V16ZM4 16H0V12H4V16ZM0 10H4V6H0V10ZM10 10H6V6H10V10ZM12 0V4H16V0H12ZM10 4H6V0H10V4ZM12 10H16V6H12V10ZM16 16H12V12H16V16Z"
                     fill="black"
                     fillOpacity="0.54"
                   />
                 </svg>
               </div>
               
             </div>
         
        </header>
      </div>
    );
}

export default Dashboardheader;
