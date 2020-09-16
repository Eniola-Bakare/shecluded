import React, { useState} from 'react';
import WealthInfo from './WealthInfo';
import Calculate from '../wealth/Calculate';
import Advart from './Advart'
import Status from '../wealth/Status';


function Dashboardmain(props) {
    const [stage, setStage] = useState("stage1")

    return (
        <div>
            <div className='Dashboard-main-page'>
                <div className='Dashboard-main-page-main'>
                    <Advart
                        heading="Wealth Management"
                        content="We help you visualize your finances and develop customized strategies around your wealth to attain your financial goal."
                    />
                    <div className="mt-4 mb-4">
                        <Status stage={stage}  />
                    </div>
                    <Calculate stage={stage} setStage={setStage} />


                </div>
                <div className='Dashboard-main-page-side'>
                    <WealthInfo />
                </div>
            </div>
        </div>
    );
}

export default Dashboardmain;
