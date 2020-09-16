import React from 'react';
import Dashboardtoggle from './Dashboardtoggle';
import Dashboardheader from './Dashboardheader';
import Dashboardside from './Dashboardside';

function Dashboardviewmobileside(props) {
    return (
        <div>
            <div className='full-cross'>
                <div className='full-cross-content'>
                    <div className='side-left-cross'>
                        {/* <Dashboardrightbar /> */}
                        <Dashboardtoggle />
                    </div>
                    <div className='side-right-cross'>
                        <Dashboardheader />
                    </div>
                </div>

                <div className='body-cross'>
                    <Dashboardside />
                </div>
            </div>
        </div>
    );
}

export default Dashboardviewmobileside;