import React from 'react';
import { transactions } from './Data';


function Recenttranscations(props) {
    return (
        <div>
            <div className='over-all-recenttransactions'>
                <div className='Recent-transations'>
                    <h1>Recent Transcations</h1>
                    <p>View all Transcations</p>
                </div>
                <div className= 'recent-transaction-body'>
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

export default Recenttranscations;