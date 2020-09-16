import React from 'react';
import Recenttranscations from './Recenttranscations';
import Mysavings from './Mysavings';
import MyFinancial from './MyFinancial';
import Mysendmoney from './Mysendmoney';

function Dashboardsavingsmain(props) {
    return (
        <div className='body-conttainer-savingsdashboard'>
            <div className ='one'>
                <Mysavings />
                <MyFinancial />
                <Mysendmoney />
            </div>
            <div className = 'two'>
                <Recenttranscations /> 
            </div>
            
        </div>
    );
}

export default Dashboardsavingsmain;