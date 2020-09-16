import React from "react";
import { Link } from "react-router-dom";

const PriceAndPlan = () => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="d-flex justify-content-center mt-2 mb-5">
          <h1>Loan Details</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Standard
                </h5>
                <h6 className="card-price text-center">
                  N0 - N999,999
                  {/* <span className="period">/month</span> */}
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>

                    <strong>5% Cost of Capital </strong>
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    2% Business Support Services
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Review rates after your first 2 transaction
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Business support services
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Access to business growth initiatives
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Access to all our market reach
                  </li>
                </ul>
                {/* <Link
                  to={"/login"}
                  className="btn btn-block text-uppercase btn-shecluded"
                >
                  Get Started
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Plus
                </h5>
                <h6 className="card-price text-center ">
                  N1,000,000 - N2,500,000
                </h6>
                <hr />
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    <strong>3% Cost of Capital </strong>
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    2% Business Support Services
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>

                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Review rates after your first two transaction
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Business support services
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Access to business growth initiatives
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Access to all our market reach
                  </li>
                </ul>

                {/* <Link
                  to={"/login"}
                  className="btn btn-block text-uppercase btn-shecluded"
                >
                  Get Started
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceAndPlan;
