import React from 'react'

const AboutUtility = ({dpath, text}) => {
    return (
        <div>
             <div className="px-2">
                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#FFE9F6" fill-opacity="0.5"/>
                        <path d={dpath} fill="#ED4F8F"/>
                        </svg>

                       <p className="mt-5">{text}</p>
            </div>  
        </div>
    )
}

export default AboutUtility
