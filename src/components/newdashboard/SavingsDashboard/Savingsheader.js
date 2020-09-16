import React from 'react';

function Savingsheader(props) {
    return (
        <div>
            <div className='savings-header'>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.paragraph}</p>
                   
                </div>
                <i class="fas fa-bars"></i>
                
            </div>

        </div>
    );
}

export default Savingsheader;