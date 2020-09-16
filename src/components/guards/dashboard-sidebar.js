import React, { useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { profileUrl, timeOut } from '../../api/rootUrls';
import axios from 'axios';
import DummyProfileImage from '../../assets/profile-image.svg';
import IsLoadingData from '../shared/isLoadingData/isLoadingData';

const DashboardSidebar = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        ProfilePicture: '',
        bio: '',
        isLoading: false,
        socialMediaDetails: []
    })
    useEffect(() => {
        setState({
			...state,
			isLoading: true
		})
		const { token } = JSON.parse(sessionStorage.getItem('userData'));
		axios({
			url: `${profileUrl}`,
			method: 'get',
			headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
			timeout: timeOut
		})
		.then(result => {
			if(result.data.respCode === "Successful"){
                const {firstName, lastName, bio, socialMedia, photo } = result.data.respBody;
                setState({
                    ...state,
                    firstName,
                    lastName,
                    bio,
                    socialMediaDetails: socialMedia,
                    ProfilePicture: photo
                })
			} else {
				setState({
					...state,
					isLoading: false,
					loginErrorMessage: result.data.respDescription
				})
			}
		})
		.catch(err => {
			setState({
				...state,
				isLoading: false,
				loginErrorMessage: err
			})
		})
    }, [])
    const { firstName, lastName, ProfilePicture, bio, isLoading, socialMediaDetails } = state;
    return (
        <div>
            <div className="dashboard-sidebar">
                {
                    isLoading ? 
                    <IsLoadingData />
                    :
                    <div className="dashboard-sidebar-card">
                        <img src={ProfilePicture ? ProfilePicture : DummyProfileImage} alt="Profile" className="profile-picture" />
                        <h5>{firstName} {lastName}</h5>
                        <p><small>{bio}</small></p>
                        <div className="dashboard-social-media-icons">
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
                                            <a target="_blank" rel="noopener noreferrer" href={linkVerifier()}><i className={`fab fa-${platform}`}></i></a>
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
                }
                
                <div>
                    <Link to="/user/manage-profile"><button className="btn btn-shecluded btn-lg">Edit Profile</button></Link>
                </div>
            </div>
        </div>
    )
}
export default DashboardSidebar;