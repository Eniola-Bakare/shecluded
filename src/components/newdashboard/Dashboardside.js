import React from 'react';
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
function Dashboardside(props) {
    // const getItems = ['Loan', 'Savings', 'Analytics', 'Transactions']
    return (
        <div>
            <div className='navformedia-content'>
                <ul className='content'>


                {/* <div className='nav-inner-content'> */}
                        <li><a href='#'>Loan</a></li>  
                        <li><a href='#'>Savings</a></li>  
                        <li><a href='#'>Analytics</a></li>  
                        <li><a href='#'>Transactions</a></li>  
                {/* </div> */}
                {/* <div className='nav-inner-logout'> */}
                    {/* <div> */}
                        <li>

                            <i class="fas fa-arrow-right"></i>
                            <span className='log-out-span'>Log out</span>
                        </li>
                        
                    {/* </div> */}
                 
                    {/* </div> */}
                </ul>
            </div>
        </div>
    );
}

export default Dashboardside;