import React from 'react';
import DashboardLoans from '../dashboard/loans'
import { Link } from "react-router-dom";




function Dashboardmain(props) {

    return (
        <div>
            <div className='Dashboard-main-page'>
                <div style={{width: "100%", padding: "0 3px", margin: "20px 10px"}}>
                    {/* <h1 className="mt-4"><Link to="#" onClick={() => props.history.goBack()}>
                            <i style={{fontSize: "20px"}} className="fa fa-arrow-left"></i>
                        </Link>My Loans</h1>
                   <p>Lets see how well you’re doing </p> */}
                   <DashboardLoans {...props}/>
                   


                </div>

            </div>
        </div>
    );
}

export default Dashboardmain;
