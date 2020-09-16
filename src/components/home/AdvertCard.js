import React from 'react';
import loanImage from "../../assets/download-removebg-preview.png";


function AdvertCard(props) {
    return (
        <div>
            <div className='cover-div'>
                <div className='home-page-div'>
                    <div className='div-overall'>
                        <div className='div-one'>
                            <h2 className="title pb-4 pt-4" style={{ fontSize: "2.5em" }}>
                                Shecluded Pension.
                             </h2>
                            <p className="font-md">
                                Join the Shecluded Female Entrepreneurship Pension Scheme with
                                Stanbic IBTC Pension Managers
                             </p>
                            <p className="pt-4">
                                <a
                                    href="https://forms.gle/k1NabKqd3Pu5pbYX7"
                                    className="btn btn-shecluded btn-lg"
                                    target="_blank"
                                >
                                    Get Started
                            </a>
                            </p>

                        </div>

                        <div className='div-two'>
                            <img
                                src={loanImage}
                                className="img-response loan-img"
                                alt="woman teaching woman"
                            />

                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='Lower-div'>
                <div className='lower-div-one'>
                    <div className='upper-div'>
                        <img src={require('../Images/image1.jpg')} /> 
                    </div>

                    <div className='lower-div-p'>
                        <h5>Provide financial advice by our customers </h5>
                        
                        <p className='style-p'>Our mission is create an avenue for you to actualize the opportunites around you</p>
                    </div>
                        
                </div>

                <div className='lower-div-two'>
                    <div className='upper-div'>
                       
                            <img src={require('../Images/image2.jpg')} />
                        
                            
                        
                        
                    </div>

                    <div className='lower-div-p'>
                        <h5>Provide financial advice by our customers </h5>

                        <p>Our mission is create an avenue for you to actualize the opportunites around you</p>
                    </div>

                </div>


                <div className='lower-div-three'>
                    <div className='upper-div'>
                        <img src={require('../Images/image3.jpg')} />
                    </div>

                    <div className='lower-div-p'>
                        <h5>Provide financial advice by our customers </h5>

                        <p>Our mission is create an avenue for you to actualize the opportunites around you</p>
                    </div>

                </div>
                
                
            </div>
         */}
        </div>
       
    );
}

export default AdvertCard;
