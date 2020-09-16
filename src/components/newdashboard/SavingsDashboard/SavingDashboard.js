import React, { useState } from 'react';
import Dashboardheader from '../Dashboardheader' 
import Dashboardrightbar from '../Dashboardrightbar'
import Dashboardsavingsmain from './Dashboardsavingsmain';
import Dashboardopen from '../Dashboardopen';
import Dashboardside from '../Dashboardside';
import Dashboardbackdraw from '../Dashboardbackdraw';

function SavingDashboard(props) {
    const [view, setView] = useState(false);
    const [dismiss, setDismiss] = useState(false)



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
                                {/* <Dashboardheader />

                                <Dashboardmain /> */}

                                <Dashboardheader />
                                <Dashboardsavingsmain />
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
                                <Dashboardsavingsmain />
                            </div>


                        </div> :




                        <div className='right-cross'>

                            <div className='first-right-cross'>
                                <div className='navformedia' onClick={toggleClickhandler} >
                                    <i className="fas fa-bars inner"></i>
                                </div>
                            </div>

                            <div className='second-right-cross'>
                                <Dashboardheader />
                                <Dashboardsavingsmain />
                                
                            </div>


                        </div>




                }

            </div>


            <div className='large-screen'>
                <div className='right-cross'>

                    <div className='first-right-cross'>
                        <Dashboardrightbar />
                    </div>

                    <div className='second-right-cross'>
                        <Dashboardheader />
                        <Dashboardsavingsmain />
                    </div>


                </div>
            </div>

        </div>
    );
}

export default SavingDashboard;
