import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className={"navbar navbar-expand-lg navbar-light bg-white"}
      id="mainNav"
    >
      <div className="container-fluid">
        <span
          style={{ cursor: "pointer" }}
          className="navbar-brand js-scroll-trigger"
        >
          <Link to="/">
            <img width="95px" className="d-md-block" src={Logo} alt="" />
          </Link>
        </span>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                className={"nav-link js-scroll-trigger"}
                activeClassName="shecluded-active"
                exact
                to={"/aboutUs"}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={"nav-link js-scroll-trigger"}
                activeClassName="shecluded-active"
                exact
                to={"/blog"}
              >
                Blog
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                activeClassName="shecluded-active"
                target="_blank"
                href="https://medium.com/@shecluded"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li> */}
            <li className="nav-item">
              <NavLink
                className={"nav-link js-scroll-trigger"}
                activeClassName="shecluded-active"
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={"nav-link js-scroll-trigger"}
                activeClassName="shecluded-active"
                to={"/loan"}
              >
                Loan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={"nav-link js-scroll-trigger"}
                activeClassName="shecluded-active"
                to={"/wealth"}
              >
                Wealth management
              </NavLink>
            </li>
          </ul>
          {!sessionStorage.getItem("userData") ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to={"/login"}
                  className="btn btn-shecluded-outlineX btn-md"
                  style={{ width: "75px" }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="btn btn-shecluded btn-md">
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/dashboard"} className="btn btn-shecluded btn-md">
                  Dashboard
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);


