import React from 'react'
import empty from '../../assets/empty.png'
import {Link} from "react-router-dom"

const EmptyState = ({name}) => {
    return (  
        <div className="empty-state">
            <img src={empty} className="img-responsive" alt="empty state"/>
            <p className="mt-4"> No {name} Loan Records </p>
            {/* <div className="d-flex align-items-center flex-wrap justify-content-center">
            <p className="m-0 mr-2">To access our loan offers, </p>
            <Link to="/loanapplication"> Apply Now</Link>
            </div> */}
        </div>
    );
}
 
export default EmptyState;