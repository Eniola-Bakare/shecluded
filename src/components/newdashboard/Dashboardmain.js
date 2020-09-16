import React from 'react';
import Dashboardleftside from './Dashboardleftside';
import Dashboardcenter from './Dashboardcenter';
import Dashboardmiddle from './Dashboardmiddle';
import LoanRequest from '../dashboard/request-loan'

function Dashboardmain(props) {
    return (
        <div>
            <div className='Dashboard-main-page'>
                <div className='Dashboard-main-page-main'>
                    <Dashboardcenter />
                    <Dashboardmiddle />
                    <LoanRequest />

                    
                </div>
                <div className='Dashboard-main-page-side'>
                    <Dashboardleftside />
                </div>
            </div>
        </div>
    );
}

export default Dashboardmain;