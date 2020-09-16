import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashboardSidebar from '../guards/dashboard-sidebar';
import { profileUrl, timeOut } from '../../api/rootUrls';
import axios from 'axios';
import IsLoadingData from '../shared/isLoadingData/isLoadingData';

const SourcesOfIncome = () => {
    const [state, setState] = useState({
        employment: [],
        isLoading: false
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
                const { employment } = result.data.respBody;
                setState({
                    ...state,
                    employment
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
    const { employment, isLoading } = state;
	return (
		<Fragment>
			<div className="user-layout">
				<DashboardSidebar 
				/>
				<div className="dashboard-main">
					<div className="sources-of-income-header">
                        <div className="d-flex">
                            <Link to="/user/dashboard"><h3><i className="fa fa-arrow-left"></i></h3></Link>
                            <h3 className="small-bottom-margin">Sources of Income</h3>
                        </div>
                        <button type="submit" className="btn btn-shecluded btn-lg">Add more sources of income</button>
					</div>
                    <div className="sources-of-income-body">
                        {
                            isLoading ? 
                            <IsLoadingData />
                            :
                            <Fragment>
                            {
                                employment.length ? 
                                employment.map((employmentDetails, i) => {
                                    const { employmentType, address, companyName, monthlyIncome, salary } = employmentDetails;
                                    const employmentTypeText = () => {
                                        if(employmentType === 'employer'){
                                            return 'Employed'
                                        } else if (employmentType === 'company'){
                                            return 'Self Employed'
                                        } else if (employmentType === 'business'){
                                            return 'Business Owner'
                                        } else {
                                            return ''
                                        }
                                    }
                                    return (
                                        <div className="card" key={i}>
                                            <div className="card-body">
                                                <h3 className="text-capitalize">{employmentTypeText()}</h3>
                                                <div className="body-layout">
                                                    <div>
                                                        <h5 className="text-capitalize">{companyName}</h5>
                                                        <p className="text-capitalize">{address}</p>
                                                        {/* <p>+234 814 120 0649</p>
                                                        <p>www.shecluded.netlify.com</p> */}
                                                    </div>
                                                    <div className="body-layout-right">
                                                        {/* <div className="text-center">
                                                            <i className="fa fa-book fa-2x"></i>
                                                            <h6></h6>
                                                            <small>No. of employees</small>
                                                        </div> */}
                                                        <div className="text-center mt-2">
                                                            <i className="fa fa-book fa-2x"></i>
                                                            <h6>{salary ? salary : monthlyIncome}</h6>
                                                            <small>Monthly {employmentType === 'employer' ? 'Salary' : 'Profit'}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }):
                                null
                            }
                            </Fragment> 
                        }                       
                    </div>					
				</div>
			</div>
		</Fragment>
	)
}

export default SourcesOfIncome;