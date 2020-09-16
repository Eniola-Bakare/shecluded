import React from 'react';
import Savingsheader from './Savingsheader';
import Financialinner from './Financialinner';

function MyFinancial(props) {
    return (
        <div className='overall-mysavings'>
            <Savingsheader name='financial analytics' paragraph="Let's see how you are doing" />
            <Financialinner />
        </div>
    );
}

export default MyFinancial;