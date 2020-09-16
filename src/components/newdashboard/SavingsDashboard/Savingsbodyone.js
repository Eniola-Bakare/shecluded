import React from 'react';

function Savingsbodyone(props) {
    return (
        <div className='overall-one-body'>
            <div className= 'overall-one'>
                <div className='saving-body-i'>
                    <i className="fas fa-ellipsis-h i"></i>
                </div>

                <img src={props.image} />
                <h1>{props.name}</h1>
                <p className='p'>{props.paragraph}</p>
                <p className='p'>{props.paragraphone}</p>

                <div className='inner-savings-body'>
                    <span className='inner-span-one'>{props.inner}</span>


                    

                    <div>
                        <span>{props.ooo}</span>
                        <span>Save</span>
                    </div>
                </div>

            </div>

        </div>
        
    );
    
}
// Savingsbodyone.defaultProps = {
//     image: ''
// }

export default Savingsbodyone;