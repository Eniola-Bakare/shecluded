import React from 'react';
import Savingsheader from './Savingsheader';

function Mysendmoney(props) {
    return (
        <div className='overall-sendmoney'>
            <div className='overall-mysavings'>
            <Savingsheader name='Send Money' paragraph="Let's see how you are doing" />
            </div>
            

            <div className='mdbs-lower'>
                <div className='mdbs-lower-innner'>
                    <div className='lower-mdbs-icon'>
                        <i class="fas fa-ellipsis-h lower-mdbs-icon-i"></i>
                    </div>
                    <div className='overall-for-lower-mdbs-div'>
                        <div className='lower-mdbs-div'>
                            <div className='lower-mdbs-span-one' >VISA</div>
                            <input className='lower-mdbs-span-two' placeholder='7098****2091'/>
                            {/* </span> */}
                            <i class="fas fa-chevron-down"></i>
                        </div>

                        <div className='sub-lower'>
                            <span>Amount</span>
                            <h1>N7,500</h1>
                        </div>

                    </div>

                    <div className='overall-sub-bottom'>
                        <div className='sub-bottom'>
                            <span>Amount</span>
                            <h1>N1,1860,000</h1>
                        </div>

                        <div className='mdso-bottom'>
                            <i className="fas fa-arrow-down mdso-bottom-i"></i>
                            <span className="span-io">-12.57%</span>
                        </div>

                        <div className='mdso-div'>
                            <span>Send money</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mysendmoney;