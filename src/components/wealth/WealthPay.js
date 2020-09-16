import React from 'react';
import InViewMonitor from "react-inview-monitor";
import { Link } from "react-router-dom";
import tablet_light from '../../assets/tablet_light.png'
import NavBar from "../shared/navbar";



const App = () => {
    return (
        <div>
            <NavBar />
            <div className="pay-wealth">
            <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp"
          >
               <div className="wealth-hero-container">
                <h1 className="wealth-heading">Wealth <span>Management</span></h1>
                <h3 className="wealth-info">Your Wealth, Your Future, Our Commitment!</h3>
                </div>

                <div className="wealth-price-content-wrapper">
                   <div className="content">
                       <p>As a finance company working with only women, we have identified this as the big missing part of the puzzle for women.</p>
                        <p className="mt-5">Do you know that we can help you visualise your finances and develop customized strategies around your wealth to attain your financial goal.</p>
                        <p className="mt-5">Join the list of woman who have achieved financial freedom by using our wealth calculator to know their financial strength </p>
                        <h2>Pay ₦0 to get started</h2>
                        <Link to={"/wealthapp"} className="btn use-wealth-cal mt-5">
                            Get started
                        </Link>
                     
                   </div>
                   <div>
                        <img src={tablet_light} className="img-fluid" alt="wealth table"/>
                        
                   </div>
                   
                </div>
                
          </InViewMonitor>
        </div>
    
        </div>
       
    )
}

export default App
