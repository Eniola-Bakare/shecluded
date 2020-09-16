import React, {useState} from 'react'
import Logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import DummyProfileImage from "../../assets/profile-image.svg";




const ShecludedNavbar = (props) => {
    const {userInfo} = props
    const [expand, setExpand] = useState(false);
    const logout = () => {
        props.history.push("/login");
        sessionStorage.clear();
      };
    return ( 
        <div>
            <div className="d-flex justify-content-between align-items-center shecluded-dashborad-container">
                <div>
                    <Link to="/">
                    <img width="95px" className="d-md-block" src={Logo} alt="shecluded logo"/>
                    </Link>
                </div>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <img  
                        src={
                            userInfo.ProfilePicture.length
                              ? userInfo.ProfilePicture
                              : DummyProfileImage
                          }
                          className="profile-picture-nav mx-3"
                          alt="Upload Avatar"
                        />
                    <h5 className="m-0 mx-4 shecluded-nav-profile-name">
                        {userInfo.firstName} 
                    </h5>

                </div>
                


                <div onClick={() => setExpand(!expand)} className="shecluded-nav-menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 6H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 18H21" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
            </div>
        </div>

        <div className="shecluded-nav-list-items">
            <div className="mx-4">
            <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/dashboard"}

              >
                Dashboard
              </NavLink>
            </div>
            <div className="mx-4">
            <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/loansdashboard"}
              >
                Loans
              </NavLink>
            </div>
            <div className="mx-4">
               
                <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/wealthapp"}
              >
                Wealth Management
              </NavLink>
            </div>
            <div className="mx-4">
            <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/profile"}
              >
                Profile
              </NavLink>
            </div>
            <div className="mx-4">
            <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/settings"}
              >
                Settings
              </NavLink>
            </div>

            <div className="nav-inner-logout">
                    <span onClick={logout} style={{ cursor: "pointer" }} className="log-out-span">
                    Log out
                    </span>
                </div>
           

        </div>

        <div className={(expand && "box") || "box2"}>
            <div className="d-flex justify-content-between align-items-center shecluded-dashborad-container">
                <div>
                    <Link to="/">
                    <img width="95px" className="d-md-block" src={Logo} alt="shecluded logo"/>
                    </Link>
                </div>

                <div onClick={() => setExpand(!expand)} className="shecluded-nav-menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#363154"/>
                </svg>

                </div>

            </div>
            <div className="d-flex justify-content-between align-items-center flex-column shecluded-nav-list-data">
                <div className="shecluded-nav-list-item">
                    <NavLink
                    activeClassName="shecluded-active3 "
                    exact
                    to={"/dashboard"}

                >
                    Dashboard
                </NavLink>
                    
                </div>
                <div className="shecluded-nav-list-item">
                    <NavLink
                    activeClassName="shecluded-active3"
                    exact
                    to={"/loansdashboard"}

                >
                    Loans
                </NavLink>
                    
                </div>
                <div className="shecluded-nav-list-item">
                    <NavLink
                    activeClassName="shecluded-active3"
                    exact
                    to={"/wealthapp"}

                >
                    Wealth Management
                </NavLink>
                    
                </div>
                <div className="shecluded-nav-list-item">
                    <NavLink
                    activeClassName="shecluded-active3"
                    exact
                    to={"/profile"}

                >
                    Profile
                </NavLink>
                    
                </div>

                <div className="shecluded-nav-list-item">
                    <NavLink
                    activeClassName="shecluded-active3"
                    exact
                    to={"/settings"}

                >
                    Settings
                </NavLink>
                    
                </div>

                <div className="nav-inner-logout">
                    <span onClick={logout} style={{ cursor: "pointer" }} className="log-out-span">
                    Log out
                    </span>
                </div>
               

            </div>
           
            

        </div>
     

        </div>
        
     );
}
 
export default ShecludedNavbar;