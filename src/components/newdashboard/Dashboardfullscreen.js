import React from 'react';
import Dashboardrightbar from './Dashboardrightbar';
import Dashboardheader from './Dashboardheader';
import Dashboardmain from './Dashboardmain';

function Dashboardfullscreen(props) {
    return (
        <div>
            <div className='right-cross'>
                
                <div className='first-right-cross'>
                    <Dashboardrightbar />
                </div>

                <div className='second-right-cross'>
                   <Dashboardheader />
                    <Dashboardmain />
                </div>
               
                
            </div>
        </div>
    );
}

export default Dashboardfullscreen;