import React, { useState } from 'react';
import Dashboardheader from './Dashboardheader';
import Dashboardrightbar from './Dashboardrightbar';
import Dashboardmain from './Dashboardmain';
import Dashboardbackdraw from './Dashboardbackdraw';
import Dashboardside from './Dashboardside';
import Dashboardtoggle from './Dashboardtoggle';
import Dashboardviewmobileside from './Dashboardviewmobileside';
import Dashboardfullscreen from './Dashboardfullscreen';
import Dashboardopen from './Dashboardopen';


function Newdashboard(props) {

    
    const [view, setView] = useState(false);
    const [dismiss, setDismiss ] = useState(false)


    
    const drawToggleClickhandler = () => {
      
        view ? setView(false) : setView(true)
    };

    const toggleClickhandler = () => {
        dismiss ? setDismiss(false) : setDismiss(true)
    };
 
       


  

    return (
        <div>
            <div className='mobile'>
            {
                (view) ?
                    <div className='full-cross'>
                        <div className='full-cross-content'>
                            <div className='side-left-cross'>
                                <Dashboardbackdraw drawhandler={drawToggleClickhandler} />
                            </div>
                            <div className='side-right-cross'>
                                <Dashboardheader />
                            </div>
                        </div>

                        <div className='body-cross'>
                            <Dashboardside />
                        </div>
                    </div> :
                    
                    
                    
                    
                    <div className='right-cross'>

                        <div className='first-right-cross'>
                            <Dashboardopen drawhandler={drawToggleClickhandler} />
                        </div>

                        <div className='second-right-cross'>
                            <Dashboardheader />
                        
                            <Dashboardmain />
                        </div>


                    </div> 
                    
                    
                
                   
            }
                 
            </div>     
 


            <div className='smallscreen'>
            {
                (dismiss) ?
                        <div className='tablet-view'>

                            <div className='first-tablet-view'>
                                <div className='navfortab navformedia' onClick={toggleClickhandler} >
                                    <i class="fas fa-times inner"></i>
                                </div > 
                                {/* <Dashboardtoggle toggleClickhandler={toggleClickhandler}/> */}
                               
                            </div>

                            <div className='second-tablet-view'>
                                <Dashboardheader />
                                <Dashboardside />
                                <Dashboardmain />
                            </div>


                        </div> :
                    
                    
                    
                    
                    <div className='right-main'>

                    <div className='first-right-main'>
                                <div className='navformedia' onClick={toggleClickhandler} >
                                    <i className="fas fa-bars inner"></i>
                                </div>
                    </div>

                    <div className='second-right-main'>
                        <Dashboardheader />
                        <Dashboardmain />
                    </div>


                </div> 
                    
                    
                
                   
            }
                 
            </div>   
            
            <div className='large-screen'>
                <Dashboardfullscreen />
            </div>
        </div>
    );
}

export default Newdashboard;
