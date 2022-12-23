import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../redesignComponents/redesignFooter";
import Navbar from "../redesignComponents/redesignNavbar";


class Error404 extends Component {
  render() {
    return (
      <div className='error-page-wrapper d-flex flex-column justify-content-between align-items-center'>
        <Navbar />
          <div className="error-content d-flex flex-column justify-content-between align-items-center">
              <img src={require ('../../assets/newRedesign-assets/error-image.png')} />
              <h1 className="error-title">Money Isn't Here Yet Sis</h1>
              <h5 className="error-text">You have found a page that doesn't exist yet,<br></br> return to previous page or home page</h5>
              <button className="error-btn"><Link to={'/welcome'}>RETURN TO HOMEPAGE</Link> </button>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Error404;
