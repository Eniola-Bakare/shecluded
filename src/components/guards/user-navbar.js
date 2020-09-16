import React from "react";
import Logo from "../../assets/logo.png";
import { withRouter, Link, NavLink } from "react-router-dom";

const UserNavbar = ({ history }) => {
  const logout = () => {
    history.push("/login");
    sessionStorage.clear();
  };
  return (
    <nav
      className={"navbar navbar-expand-lg navbar-light fixed-top bg-white"}
      id="mainNav"
    >
      <div className="container-fluid">
        <span
          style={{ cursor: "pointer" }}
          className="navbar-brand js-scroll-trigger"
        >
          <Link to="/">
            <img
              width="100px"
              style={{ marginTop: "2px" }}
              className="d-md-block"
              src={Logo}
              alt=""
            />
          </Link>
        </span>

        <div className="d-flex align-items-center">
          {/* <NavLink
            className={"nav-link js-scroll-trigger"}
            activeClassName="shecluded-active"
            to={"/community"}
          >
            Community
          </NavLink> */}
          <button
            className="btn btn-shecluded"
            onClick={logout}
          >
            Logout <i className="fa fa-logout"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(UserNavbar);
