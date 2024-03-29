import React, { Fragment, useState, useEffect } from "react";
import WealthInfo from './Info/LoanInfo';
// import { RequestedLoans, TotalLoans, RepaidLoans, ManageLoans, FinanacialCourse, RioCalculator } from './LoanCard'
import { allLoans, timeOut } from "../../api/rootUrls";
import axios from "axios";
import moment from 'moment'
// import PriceCard from '../priceCard'
import IsLoadingData from "../shared/isLoadingData/isLoadingData";

import DummyProfileImage from '../../assets/profile-image.svg';




function Profile(props) {
    const {user} = props
    const [state, setState] = useState({
        loans: [],
        isLoading: false,
        page: 0,
        size: 20,
        totalCount: 0,
        errorMessage: "",
    });

    useEffect(() => {
        setState({
            ...state,
            isLoading: true,
        });
        const { token, shecludedId } = JSON.parse(
            sessionStorage.getItem("userData")
        );
        let reqBody = {
            pageNumber: state.page,
            pageSize: state.size,
            shecludedId,
        };
        axios({
            url: `${allLoans}`,
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            timeout: timeOut,
            data: reqBody,
        })
            .then((result) => {
                if (result.data.respCode === "00") {
                    const { content, totalElements } = result.data.respBody;
                    setState({
                        ...state,
                        loans: content,
                        totalCount: totalElements,
                    });
                } else {
                    setState({
                        ...state,
                        isLoading: false,
                        errorMessage: result.data.respDescription,
                    });
                }
            })
            .catch((err) => {
                setState({
                    ...state,
                    isLoading: false,
                    errorMessage: err,
                });
            });
    }, [state.page]);

    const { loans, isLoading} = state;
    const loanDetails = loans[0] || {}
    const { firstName, lastName, ProfilePicture, bio, socialMediaDetails, phoneNumber, email,address,employmentStatus  } = user;

    return (
        <div className="container">

        <div className="spacing-top">
            <div className="d-flex justify-content-betweenX">
            {
                       isLoading?(
                        <IsLoadingData />
                       ):(
                        <div className="w-100">
                  
                        <div style={{ width: "100%", padding: "0 32px" }}>
                                 <h3 className="mt-4">
                                 My Profile</h3>
                                 <p>Lets see how well you’re doing </p>
         
                             </div>
                             <div className="d-flex flex-wrap justify-content-centerX align-items-center mt-3">
                                 <div className="profile-image-wraaper d-flex flex-wrap justify-content-center align-items-center flex-column">
                                     <div className="img-rel">
                                     <img
                                         className="img-responsive"
                                         src={ProfilePicture ? ProfilePicture : DummyProfileImage} 
                                     />
                                     <div onClick={() => props.history.push("/settings")}>
                                     <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <circle cx="15" cy="15" r="15" fill="#F0008C"/>
                                     <g clip-path="url(#clip0)">
                                     <path d="M15.4707 22.5H14.5293C13.7679 22.5 13.1484 21.8805 13.1484 21.1192V20.8007C12.8247 20.6972 12.5102 20.5667 12.2081 20.4103L11.9824 20.636C11.4357 21.1834 10.5601 21.1673 10.0293 20.6358L9.36393 19.9705C8.83222 19.4394 8.81692 18.564 9.3641 18.0174L9.58963 17.7919C9.43327 17.4898 9.30275 17.1753 9.19931 16.8516H8.88085C8.11948 16.8516 7.5 16.2321 7.5 15.4707V14.5293C7.5 13.7679 8.11948 13.1484 8.88088 13.1484H9.19934C9.30278 12.8247 9.4333 12.5102 9.58966 12.2081L9.36396 11.9824C8.8171 11.4362 8.83219 10.5607 9.36413 10.0293L10.0296 9.36396C10.5616 8.83122 11.437 8.81792 11.9826 9.36413L12.2081 9.58963C12.5102 9.4333 12.8247 9.30275 13.1484 9.19931V8.88085C13.1484 8.11945 13.7679 7.5 14.5293 7.5H15.4707C16.2321 7.5 16.8516 8.11945 16.8516 8.88085V9.19934C17.1753 9.30275 17.4898 9.4333 17.7919 9.58966L18.0176 9.36396C18.5643 8.81663 19.4399 8.83269 19.9707 9.36416L20.636 10.0295C21.1678 10.5606 21.183 11.436 20.6359 11.9826L20.4103 12.2081C20.5667 12.5102 20.6972 12.8247 20.8007 13.1484H21.1191C21.8805 13.1484 22.5 13.7679 22.5 14.5293V15.4707C22.5 16.2321 21.8805 16.8516 21.1191 16.8516H20.8007C20.6972 17.1753 20.5667 17.4898 20.4103 17.7919L20.636 18.0176C21.1829 18.5639 21.1678 19.4393 20.6359 19.9707L19.9704 20.6361C19.4384 21.1688 18.563 21.1821 18.0174 20.6359L17.7919 20.4104C17.4898 20.5667 17.1753 20.6973 16.8516 20.8007V21.1192C16.8516 21.8805 16.2321 22.5 15.4707 22.5ZM12.355 19.4874C12.7747 19.7356 13.2265 19.9232 13.6977 20.0448C13.8918 20.0948 14.0273 20.2699 14.0273 20.4703V21.1192C14.0273 21.3959 14.2525 21.6211 14.5293 21.6211H15.4707C15.7475 21.6211 15.9727 21.3959 15.9727 21.1192V20.4703C15.9727 20.2699 16.1083 20.0948 16.3023 20.0448C16.7735 19.9232 17.2253 19.7356 17.645 19.4874C17.8177 19.3853 18.0376 19.413 18.1795 19.5549L18.6391 20.0146C18.8373 20.213 19.1555 20.2084 19.3488 20.0148L20.0146 19.349C20.2075 19.1564 20.2139 18.8381 20.0148 18.6393L19.555 18.1794C19.4131 18.0376 19.3854 17.8177 19.4875 17.645C19.7357 17.2253 19.9232 16.7735 20.0448 16.3023C20.0949 16.1082 20.2699 15.9727 20.4703 15.9727H21.1192C21.3959 15.9727 21.6211 15.7475 21.6211 15.4707V14.5293C21.6211 14.2525 21.3959 14.0274 21.1192 14.0274H20.4703C20.2699 14.0274 20.0949 13.8918 20.0448 13.6978C19.9232 13.2265 19.7357 12.7748 19.4875 12.355C19.3854 12.1824 19.4131 11.9625 19.555 11.8206L20.0146 11.361C20.2133 11.1625 20.2081 10.8444 20.0148 10.6513L19.349 9.98549C19.1561 9.79225 18.8378 9.78659 18.6393 9.98531L18.1795 10.4451C18.0377 10.587 17.8177 10.6148 17.6451 10.5127C17.2253 10.2644 16.7736 10.0769 16.3024 9.95528C16.1083 9.90521 15.9727 9.7302 15.9727 9.52978V8.88085C15.9727 8.60408 15.7475 8.37891 15.4707 8.37891H14.5293C14.2526 8.37891 14.0274 8.60408 14.0274 8.88085V9.52972C14.0274 9.73014 13.8918 9.90516 13.6977 9.95522C13.2265 10.0768 12.7748 10.2644 12.355 10.5126C12.1823 10.6147 11.9624 10.5869 11.8206 10.4451L11.3609 9.98543C11.1628 9.78703 10.8445 9.79163 10.6513 9.98522L9.98543 10.651C9.7926 10.8436 9.78615 11.1619 9.98525 11.3607L10.4451 11.8206C10.5869 11.9624 10.6147 12.1823 10.5126 12.355C10.2644 12.7747 10.0769 13.2265 9.95525 13.6977C9.90516 13.8918 9.73014 14.0273 9.52975 14.0273H8.88088C8.60411 14.0273 8.37891 14.2525 8.37891 14.5293V15.4707C8.37891 15.7475 8.60411 15.9727 8.88088 15.9727H9.52972C9.73014 15.9727 9.90513 16.1082 9.95522 16.3023C10.0768 16.7735 10.2644 17.2253 10.5126 17.645C10.6147 17.8177 10.5869 18.0376 10.445 18.1794L9.9854 18.6391C9.78671 18.8375 9.79189 19.1557 9.98522 19.3488L10.651 20.0145C10.844 20.2078 11.1623 20.2134 11.3607 20.0147L11.8205 19.5549C11.925 19.4504 12.1425 19.3617 12.355 19.4874Z" fill="white"/>
                                     <path d="M15.0001 18.2637C13.2005 18.2637 11.7365 16.7996 11.7365 15C11.7365 13.2004 13.2005 11.7363 15.0001 11.7363C16.7997 11.7363 18.2638 13.2004 18.2638 15C18.2638 16.7996 16.7997 18.2637 15.0001 18.2637ZM15.0001 12.6152C13.6851 12.6152 12.6154 13.685 12.6154 15C12.6154 16.315 13.6852 17.3848 15.0001 17.3848C16.3151 17.3848 17.3849 16.315 17.3849 15C17.3849 13.685 16.3151 12.6152 15.0001 12.6152Z" fill="white"/>
                                     </g>
                                     <defs>
                                     <clipPath id="clip0">
                                     <rect width="15" height="15" fill="white" transform="translate(7.5 7.5)"/>
                                     </clipPath>
                                     </defs>
                                     </svg>
         
         
                                     </div>
         
                                     </div>
                                     
                                      <h3 className="mt-3">{firstName} {lastName} </h3>
                                      
                                      <div className="d-flex w-100 justify-content-center">
                                      {
                                         socialMediaDetails.length ?
                                         socialMediaDetails.map((socialMedia, i) => {
                                             const { platform, socialLink } = socialMedia;
                                             const linkVerifier = () => {
                                                 if(socialLink.includes('http')){
                                                     return socialLink
                                                 } else {
                                                     return `http://${socialLink}`
                                                 }
                                             }
                                             return(
                                                 <Fragment key={i} >
                                                 {
                                                     socialLink.length ?
                                                     <a className="mx-3" target="_blank" rel="noopener noreferrer" href={linkVerifier()}><i className={`fab fa-${platform}`}></i></a>
                                                     : null
                                                 }
                                                 </Fragment>
                                             )
                                         })
                                         :
                                         null
                                     } 
                                          
                                          
                                      </div>
                                 </div>
                                 <div className="profile-detials-wrapper">
                                     <div className="d-flex">
                                         <h5 className="mr-2 ww">Phone:</h5>
                                          <p> {phoneNumber}</p>
                                     </div>
                                     <div className="d-flex ">
                                         <h5 className="mr-2 ww">Email:</h5>
                                         <p> {email} </p>
                                     </div>
                                     <div className="d-flex">
                                         <h5 className="mr-2 ww">Location:</h5>
                                         <p> {address} </p>
                                     </div>
                                     <div className="d-flex">
                                         <h5 className="mr-2 ww">State:</h5>
                                         <p>{user.state}</p>
                                     </div>
                                     <div className="d-flex">
                                         <h5 className="mr-2 ww">Employment:</h5>
                                         <p> {employmentStatus} </p>
                                     </div>
                                 </div>
                             </div>
         
                        </div>
                         
                       )
                   }
               
                <div className='Dashboard-main-page-side'>
                    <WealthInfo />
                </div>

            </div>
        </div>

        </div>
    );
}

export default Profile;
