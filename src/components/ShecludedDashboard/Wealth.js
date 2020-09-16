import React, { useRef, useState, useEffect } from "react";
import WealthInfo from './Info/LoanInfo';
import Status from '../wealth/Status';
import Calculate from '../wealth/Calculate';


function WealthMGT(props) {
    const {history} = props
    const [stage, setStage] = useState("stage1")


    

    return (
        <div className="container">
          <div className="spacing-top">
            <div className="d-flex justify-content-betweenX">
               <div className="w-100">
               <div style={{ width: "100%", padding: "0 32px" }}>
                        <h3 className="mt-4">
                            Edit Profile</h3>
                        <p> Your Wealth, Your Future, Our Commitment!  </p>
                    </div>

                    <div className="mt-4 mb-4">
                        <Status stage={stage}  />
                    </div>

                    <div>
                    <Calculate stage={stage} setStage={setStage} />
                        
                    </div>
               </div>
                <div className='Dashboard-main-page-side'>
                    <WealthInfo />
                </div>

            </div>
        </div>

       
        </div>
    );
}

export default WealthMGT;
