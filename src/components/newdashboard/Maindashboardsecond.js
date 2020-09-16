import React from 'react';

function Maindashboardsecond(props) {
    return (
        <div>
            <div className='second-inn-inner-top-layer'>
                <div className='mdbs-top'>
                    <div>
                        <h1>My Savings</h1>
                        <p>Lets see how well you are doing</p>
                    </div>
                    {/* <div>
                        <i class="fas fa-bars"></i>
                    </div> */}
                </div>

                <div className='mdbs-middle'>
                    <div className='mdbs-middle-inner'>
                        <div className='first-mdbs-icon'>
                            <i class="fas fa-ellipsis-h first-mdbs-icon-i"></i>
                        </div>
                        <div className='mdbs-middle-inner-text'>
                            <h6>Total Savings</h6>
                            <h1>N860,000</h1>
                        </div>
                        <div className='mbds-span'><div className = 'mbds-inner-span'></div></div>

                        <div className='mdbs-lower-text'>
                            <div className='l-lower-text'>
                                <i class="fas fa-exclamation mdbs-lower-text-i"></i>
                            </div>
                            
                            <span>N240,000,000 - till target</span>
                        </div>
                    </div>







                    <div className='mdbs-side-middle-inner'>

                        <div className='mdbs-side-first'>
                            <div className='md-first-top'>
                                <div className='md-first-top-d'>
                                    <i className="fas fa-percentage md-first-top-d-i"></i>
                                </div>
                                <div className='first-top-div-m'>
                                    <h5>N72,000</h5>
                                    <span>Outcome in this month</span>
                                </div>
                            </div>


                            <div className='mds-first-bottom-div'>
                                <div className='md-first-bottom'>
                                    <span>Balance down by</span>
                                    <div className='mds-bottom'>
                                        <i className="fas fa-arrow-down mds-bottom-i"></i>
                                        <span className="span-i">-12.57%</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                        <div className='mdbs-side-second'>
                            <div className='md-first-top'>
                                <div className='md-first-top-d'>
                                    <i className="fas fa-percentage md-first-top-d-i"></i>
                                </div>
                                <div>
                                    <h5>N29,100</h5>
                                    <span>Income in this month</span>
                                </div>
                            </div>


                            <div className='mds-first-bottom-div'>
                                <div className='md-first-bottom'>
                                    <span>Balance up by</span>
                                    <div className='mds-bottom-b'>
                                        <i className="fas fa-arrow-up mds-bottom-i"></i>
                                        {/* <i class="fas fa-arrow-up"></i> */}
                                        <span className="span-i">-12.57%</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


                <div className='mdbs-lower'>
                    <div className = 'mdbs-lower-innner'>
                        <div className='lower-mdbs-icon'>
                            <i class="fas fa-ellipsis-h lower-mdbs-icon-i"></i>
                        </div>
                        <div className='overall-for-lower-mdbs-div'>
                            <div className='lower-mdbs-div'>
                                <div className='lower-mdbs-span-one' >VISA</div>
                                <span className='lower-mdbs-span-two'>7098****2091</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>

                            <div className='sub-lower'>
                                <span>Amount</span>
                                <h1>N7,500</h1>
                            </div>

                        </div>

                        <div className = 'overall-sub-bottom'>
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
            
        </div>
    );
}

export default Maindashboardsecond;