import React from 'react';
import { NavLink, Link } from "react-router-dom";


function Dashboardrightbar(props) {
  const { Setres } = props

  const logout = () => {
    props.history.push("/login");
    sessionStorage.clear();
  };
  return (
    <div>
      <div className="nav-bar-bar-fixed">
        <nav className="firsthalf-nav-bar">
          <div className="firsthalf-nav-inner">
            <div className="firsthalf-nav-inner-text">
              <Link to="/">
                <img src={require("../Images/logo.png")} />
              </Link>
            </div>
          </div>

          <div className="nav-inner-content">
            <div className="cedffdiv" onClick={() => Setres(true)}>
              <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/dashboard"}

              >
                Dashboard
              </NavLink>

            </div>

            <div className="cedffdiv" onClick={() => Setres(true)}>
              <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/wealthapp"}
              >
                Wealth
              </NavLink>
            </div>
            <div className="cedffdiv" onClick={() => Setres(true)}>
              <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/loansdashboard"}
              >
                Loans
              </NavLink>
            </div>
            <div className="cedffdiv" onClick={() => Setres(true)}>

              <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/profile"}
              >
                Profile
              </NavLink>
            </div>
            <div className="cedffdiv" onClick={() => Setres(true)}>

              <NavLink
                activeClassName="shecluded-active2"
                exact
                to={"/settings"}
              >
                Settings
              </NavLink>
            </div>

           

          </div>

          <div className="nav-inner-logout">
            <i class="fas fa-arrow-right log-out-i"></i>
            <span onClick={logout} style={{ cursor: "pointer" }} className="log-out-span">
              Log out
              </span>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Dashboardrightbar;
