import React from 'react';
import {ManageLoans, RioCalculator} from "./LoanCard"
import WOMAN from "../../assets//image 11.png"



function Maindashboardfirst(props) {
  const {applyForLoan} = props

    // const handleApply = () => {
    //     props.history.push("/loanapplication");
    // }
    return (
      <div className="overall-inn-inner">
        <div className="inn-inner-top-layer">
          <div className="mdbf-top">
            <div>
              <h1>Loans</h1>
              <p>You have quick easy, access to our growth loans</p>
            </div>
            {/* <div>
              <i class="fas fa-bars"></i>
            </div> */}
          </div>

          <div className="mdbf-middle">
            <div className="mdbf-text">
              <div className="h1-mdbf-text">
                <h1>Get Instant Offer</h1>
              </div>
              <div className="mdbf-text-div">
                <span>Get an instant preliminary financial offer</span>
              </div>

              <div>
                <button style={{cursor: "pointer"}} onClick={applyForLoan}>Apply now</button>
                {/* <Link to="/loanapplication">Apply now</Link> */}
              </div>

              <div className="smaller-mdbf-text">
                <span>Read FAQ</span>
                <span>Terms and Condition apply </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mdbf-middle-img-div">
          <img
            className="mdbf-middle-img"
            src={WOMAN}
          />
        </div>

        <div className="mdbf-bottom">
          {/* <div className="mdbf-bottom-text-first cursor" onClick={() => props.history.push("/roi-calculator")}>
            <div className="icon-first">
              <i class="fas fa-wallet icon-first-i"></i>
            </div>

            <div className="mdbf-text-fist">
              <h1>ROI calculator</h1>
              <p>
                A profitable measure that evalutes the performance of your
                business{" "}
              </p>
            </div>
            <div className="last-icon">
              <i class="fas fa-ellipsis-h last-icon-i"></i>
            </div>
            
          </div> */}
          <RioCalculator {...props} />
          <ManageLoans {...props}/>
          {/* <div className="mdbf-bottom-text-second">
            <div className="icon-second">
              <i class="fas fa-university icon-second-i"></i>
            </div>

            <div className="mdbf-text-second">
              <h1>ROI calculator</h1>
              <p>
                A profitable measure that evalutes the performance of your
                business{" "}
              </p>
            </div>
            <div className="last-icon">
              <i class="fas fa-ellipsis-h last-icon-i"></i>
            </div>
          </div> */}
        </div>

        {/* <hr className='hr' /> */}
      </div>
    );
}

export default Maindashboardfirst;
