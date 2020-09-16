import React from 'react';
import {Analysis} from './Finicialdata'

function Financialinner(props) {
    return (
        <div className='overall-overall'> 
            <div className= 'overall-inner-body'>
                {Analysis.map(use => {
                    return (
                        <div className='inner-finincail' key={use.id}>
                            {
                                
                                (use.balance === 'Balance went up by') ?
                                    <div className='financial-inner'>
                                        <div className='financial-inner-i'>
                                            <div className='saving-body-i'>
                                                <i className="fas fa-ellipsis-h i"></i>
                                            </div>
                                            <div className='firstone'>
                                                <div className='img-first'>
                                                    <img src={require("./savingsimages/Vector (3).png")} />
                                                </div>
                                                <div className='lower-lower'>
                                                    <h1>{use.amount}</h1>
                                                    <p> {use.result}</p>
                                                </div>

                                            </div>
                                            <div className='secondone'>
                                                <div className='for-p'>
                                                    <p>{use.balance}</p>
                                                    <a href='#'>View details</a>
                                                </div>
                                                <div className='for-lower'>
                                                    <div className='for-lower-fin'>
                                                        <i className="fas fa-arrow-up fin-i"></i>
                                                    </div>
                                                    <span className='lower-span'>+{use.amountby}% </span>
                                                </div>

                                            </div>
                                        </div>
                                    


                                     </div>

                                    : (use.balance === 'Balance went down by') ?
                                        
                                        <div className='financial-inner'>
                                            <div className='financial-inner-i'>
                                            <div className='saving-body-i'>
                                                <i className="fas fa-ellipsis-h i"></i>
                                            </div>
                                            <div className='firstone'>
                                                <div className='img-second'>
                                                    <img src={require("./savingsimages/Vector (4).png")} />
                                                </div>
                                                <div className='lower-lower'>
                                                    <h1>{use.amount}</h1>
                                                    <p>{use.result}</p>
                                                </div>

                                            </div>
                                            <div className='secondone'>
                                                <div className='for-p'>
                                                    <p>{use.balance}</p>
                                                    <a href='#'>View details</a>
                                                </div>
                                                <div className='for-lower'>
                                                    <div className='for-lower-fin-1'>
                                                        <i className="fas fa-arrow-down fin-i-1"></i>
                                                    </div>
                                                    <span className='lower-span-1'>+{use.amountby}% </span>
                                                </div>
                                            </div>
                                            </div>


                                        </div> :
                                        (use.balance === 'saved went up by') ?
                                        <div className='financial-inner'>
                                            <div className='financial-inner-i'>
                                                
                                        <div className='saving-body-i'>
                                            <i className="fas fa-ellipsis-h i"></i>
                                        </div>
                                        <div className='firstone'>
                                            <div className='img-thrid'>
                                                <img src={require("./savingsimages/Vector (5).png")} />
                                            </div>
                                                    <div className='lower-lower'>
                                                <h1>{use.amount}</h1>
                                                <p>{use.result}</p>
                                            </div>
                                            
                                        </div>
                                        <div className='secondone'>
                                            <div className='for-p'>
                                                <p>{use.balance}</p>
                                                <a href='#'>View details</a>
                                            </div>
                                                <div className='for-lower'>
                                                        <div className='for-lower-fin'>
                                                            <i className="fas fa-arrow-up fin-i"></i>
                                                </div>
                                                <span className='lower-span'>+{use.amountby}% </span>
                                            </div>
                                          </div>
                                        </div>


                                            </div> :
                                            <p></p>
                                            
                                
                            }

                        </div>



                    )
                })}
            </div>

        </div>
    );
}

export default Financialinner;