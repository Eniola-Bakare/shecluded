import React from 'react';

function Dashboardopen(props) {
    return (
        <div>
            <div className='navformedia' onClick={props.drawhandler} >
                <i className="fas fa-bars inner"></i>
            </div>
        </div>
    );
}

export default Dashboardopen;