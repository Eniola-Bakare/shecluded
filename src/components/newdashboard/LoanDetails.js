import React, { useState } from 'react';
import DashboardLoansDetails from '../dashboard/loan-details'
import { Link } from "react-router-dom";



function Dashboardmain(props) {
    const [stage, setStage] = useState("stage1")

    return (
        <div>
            <div className='Dashboard-main-page'>
                <div style={{width: "100%", padding: "0 3px", margin: "20px 10px"}}>
                    
                   <DashboardLoansDetails />
                   


                </div>

            </div>
        </div>
    );
}

export default Dashboardmain;
