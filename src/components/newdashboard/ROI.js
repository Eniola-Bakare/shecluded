import React, { useState} from 'react';
import WealthInfo from './WealthInfo';
import Calculate from '../wealth/Calculate';
import Advart from './Advart'
import Status from '../wealth/Status';
import Roi from '../home/roi-calculator'


function Dashboardmain(props) {
    const [stage, setStage] = useState("stage1")

    return (
        <div>
            <div className='Dashboard-main-page'>
                <div className='Dashboard-main-page-main'>
                    <Advart
                        heading="ROI Calculator "
                        content="See how Shecluded funds can work for your business"
                    />
                    
                    <div>
                        <Roi />
                    </div>
                    


                </div>
                <div className='Dashboard-main-page-side'>
                    <WealthInfo />
                </div>
            </div>
        </div>
    );
}

export default Dashboardmain;
