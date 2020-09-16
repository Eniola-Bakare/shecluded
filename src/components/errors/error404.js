import React, { Component } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";

class Error404 extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid main-container my-5">
          <div className="row hero-header lg-vertical-padding my-5">
            <div className="col-12 d-flex justify-content-center">
              <div className="align-self-center my-3">
                <h1 className="text-center alt-font text-shecluded heading-xl">
                  404
                </h1>
                <h4 className="text-center">Page Not Found</h4>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Error404;
