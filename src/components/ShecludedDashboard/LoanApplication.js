import React from 'react';
import LoanRequest from '../dashboard/request-loan'
import LoanInfo from './Info/LoanInfo'


const LoanApplication = () => {
    return ( 
        <div className="spacing-top">
            <div className="d-flex justify-content-betweenX">
               <div className="w-100">
               <LoanRequest />
               </div>
                <div className='Dashboard-main-page-side'>
                    <LoanInfo />
                </div>

            </div>
        </div>
     );
}
 
export default LoanApplication;