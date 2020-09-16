import React from 'react';
import { transactions } from './SavingsDashboard/Data';

function Maindashboardforth(props) {
    return (
        <div>
            <div className='fourth-inner-bottom-layer'>
                <div className='mdbb-top-forth'>
                    <div>
                        <h1>Recent Transactions</h1>
                        <p>View all Transactions</p>
                    </div>
                    <div>
                        <i class="fas fa-bars"></i>
                    </div>
                </div>


                <div className='mdbb-bottom'>
                    {/* <div className='mdbb-bottom-inner'>
                        <div className='container-mbb-inner'>
                            <div className='mdbb-inner-span'>
                                <span>s</span>
                            </div>
                            <div className='mdbb-inner-div'>
                                <h3>Savings Account Debited</h3>
                                <span>09 April 2020</span>
                                <a href='#'>click for more</a>
                            </div>
                        </div>
                        <div className='mdbb-inner-span-two'>
                            <span>-N37,000</span>
                        </div>
                    </div>

                    

                    <div className='mdbb-bottom-inner'>
                        <div className='container-mbb-inner'>
                            <div className='mdbb-inner-span'>
                                <span>s</span>
                            </div>
                            <div className='mdbb-inner-div'>
                                <h3>Savings Account Debited</h3>
                                <span>09 April 2020</span>
                                <a href='#'>click for more</a>
                            </div>
                        </div>
                        <div className='mdbb-inner-span-two'>
                            <span>-N37,000</span>
                        </div>
                    </div>

                    
                    <div className='mdbb-bottom-inner'>
                        <div className='container-mbb-inner'>
                            <div className='mdbb-inner-span'>
                                <span>s</span>
                            </div>
                            <div className='mdbb-inner-div'>
                                <h3>Savings Account Debited</h3>
                                <span>09 April 2020</span>
                                <a href='#'>click for more</a>
                            </div>
                        </div>
                        <div className='mdbb-inner-span-two'>
                            <span>-N37,000</span>
                        </div>
                    </div>
 */}
                    
                    {transactions.map(item => {
                        return (

                            <div key={item.id} >
                                {
                                    (item.state === 'debit') ?
                                        <div className='itemstransactions'>

                                            <div className='items-transactions'>
                                                {/* <div className = 'items-tranactions-inner'> */}
                                                <span>S</span>
                                                {/* </div> */}
                                                <div>
                                                    <h1>{item.title}</h1>
                                                    <p className='p'>{item.date}</p>
                                                    <a href='#'> click for more</a>

                                                </div>






                                            </div>
                                            <p className='debit'>+{item.amount}</p>
                                        </div>




                                        :
                                        (item.state === 'credit') ?

                                            <div className='itemstransactions'>

                                                <div className='items-transactions'>

                                                    <span>S</span>

                                                    <div>
                                                        <h1>{item.title}</h1>
                                                        <p className='p'>{item.date}</p>
                                                        <a href='#'> click for more</a>

                                                    </div>






                                                </div>
                                                <p className='savings'>-{item.amount}</p>
                                            </div>



                                            :
                                            (item.state === 'pending') ?

                                                <div className='itemstransactions'>

                                                    <div className='items-transactions'>

                                                        <span>P</span>

                                                        <div>
                                                            <h1>{item.title}</h1>
                                                            <p className='p'>{item.date}</p>
                                                            <a href='#'> click for more</a>

                                                        </div>






                                                    </div>
                                                    <p className='pending'>{item.amount}</p>
                                                </div>

                                                :
                                                (item.state === 'approved') ?

                                                    <div className='itemstransactions'>

                                                        <div className='items-transactions'>

                                                            <span>L</span>

                                                            <div>
                                                                <h1>{item.title}</h1>
                                                                <p className='p'>{item.date}</p>
                                                                <a href='#'> click for more</a>

                                                            </div>






                                                        </div>
                                                        <p className='loan'>{item.amount}</p>
                                                    </div>

                                                    :

                                                    <div className='itemstransactions'>

                                                        <div className='items-transactions'>

                                                            <span>A</span>

                                                            <div>
                                                                <h1>{item.title}</h1>
                                                                <p className='p'>{item.date}</p>
                                                                <a href='#'> click for more</a>

                                                            </div>






                                                        </div>
                                                        <p className='savings'>{item.amount}</p>
                                                    </div>





                                }
                            </div>
                        )
                    })}

                  
                </div>
            </div>
        </div>
    );
}

export default Maindashboardforth;