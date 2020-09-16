import React from 'react';

function Dashboardbackdraw(props) {
    return (
        <div>
            <div   onClick={props.drawhandler} >
                    <i class="fas fa-times inner"></i>
            </div >    
        </div>
    );
}

export default Dashboardbackdraw;