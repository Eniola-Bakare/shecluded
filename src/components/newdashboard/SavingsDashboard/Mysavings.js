import React from 'react';
import Savingsheader from './Savingsheader';
import Savingsbodyone from './Savingsbodyone';

function Mysavings(props) {
    return (
        <div>
            <div className='overall-mysavings'>
                <Savingsheader name='my savings' paragraph="Let's see how you are doing" />
                <div className = 'my-savings-inner'>
                 

                    <div className='overall-one-body'>
                        <div className='overall-one'>
                            <div className='saving-body-i'>
                                <i className="fas fa-ellipsis-h i"></i>
                            </div>

                            {/* <img src={props.image} /> */}
                            <h1 className='savings-one-p'>Regular Savings</h1>
                            <p className='p'>Strict savings automatically</p>
                            <p className='p'>Daily, weekly or monthly</p>

                            <div className='inner-savings-body'>
                                <span className='inner-span-one'>N180,000</span>




                            </div>

                        </div>

                    </div>

                    
                    <div className='overall-one-body'>
                        <div className='overall-one'>
                            <div className='saving-body-i'>
                                <i className="fas fa-ellipsis-h i"></i>
                            </div>

                            <img src={require('./savingsimages/Vector (1).png')} />
                            <h1>Target Savings</h1>
                            <p className='p'>Strict savings automatically</p>
                            <p className='p'>Daily, weekly or monthly</p>

                            <div className='inner-savings-body-two'>
                                <span className='inner-span-two'>N180,000</span>




                                {/* <div className= 'lower-save'>
                                    <span className = 'one'>+</span>
                                    <span className = 'two'>Save</span>
                                </div> */}
                            </div>

                        </div>

                    </div>

                    <div className='overall-one-body'>
                        <div className='overall-one'>
                            <div className='saving-body-i'>
                                <i className="fas fa-ellipsis-h i"></i>
                            </div>

                            <img src =  {require('./savingsimages/Vector (2).png')}  />
                            <h1>Pensions</h1>
                            <p className='p'>We love pensions and the</p>
                            <p className='p'>difference they make in people lives</p>

                            <div className='inner-savings-body-three'>
                                <span className='inner-span-three'>COMING SOON</span>




                               
                            </div>

                        </div>

                    </div>




                </div>
                
            </div>
        </div>
    );
}

export default Mysavings;