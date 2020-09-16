import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DashboardSidebar from '../guards/dashboard-sidebar';
import { allTransactions, timeOut } from '../../api/rootUrls';
import axios from 'axios';
import IsLoadingData from '../shared/isLoadingData/isLoadingData';
import Pagination from "react-js-pagination";

import Alert from '../shared/alert';

const Transactions = () => {
	const [state, setState] = useState({
		transactions: [],
		page: 0,
        size: 20,
        totalCount: 0,
        fetchingData: false,
        errorMessage: ''
	})
	useEffect(() => {
		setState({
			...state,
			fetchingData: true
		})
		const { page, size } = state;

		const { token, shecludedId } = JSON.parse(sessionStorage.getItem('userData'));
		let reqBody = {
			pageNumber: page,
			pageSize: size,
			shecludedId
		}
		axios({
			url: `${allTransactions}`,
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
            },
			timeout: timeOut,
			data: reqBody
		})
		.then(result => {
			setState({
				...state,
				fetchingData: false
			})
			if(result.data.respCode === "00"){
				const { content, totalElements } = result.data.respBody;
				// console.log(result.data.respBody)
				setState({
					...state,
                    transactions: content,
                    totalCount: totalElements
				})
			} else {
				setState({
					...state,
					errorMessage: result.data.respDescription
				})
			}
		})
		.catch(err => {
			setState({
				...state,
				fetchingData: false
			})
			if (!err.response) {
				setState({
					...state,
					loginErrorMessage: 'Network Error'
				})
			} else {
				if(err.response.status === 400 || err.response.status === 401){
					setState({
						...state,
						errorMessage: 'An error occured, please try again.'
					})
				} else{
					setState({
						...state,
						errorMessage: err
					})
				}
			}
		})
    }, [state.page, state.errorMessage])
    const changeCurrentPage = (pageNumber) => {
        setState({
            ...state, 
            page: pageNumber - 1
        })
	}
	const { transactions, fetchingData, page, size, totalCount, errorMessage } = state;
	return (
		<Fragment>
            {
				errorMessage.length ? 
				<Alert message={errorMessage} />
				:
				null
			}
			<div className="user-layout">
				<DashboardSidebar
				/>
				<div className="dashboard-main">
					<div className="manage-profile-head">
						<Link to="/user/dashboard"><h3><i className="fa fa-arrow-left"></i></h3></Link>
						<h3 className="small-bottom-margin">My Transactions</h3>
					</div>

					<div className="loan-table">
						<div className="loan-table-body">
							<div className="card-body">
								{
									fetchingData ? 
									<IsLoadingData />
                                    :
                                    <Fragment>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">S/N</th>
                                                    <th className="text-center">Date</th>
                                                    <th className="text-center">Type</th>
                                                    {/* <th>Status</th> */}
                                                    <th className="text-center">Amount</th>
                                                </tr>
                                            </thead>							
                                            <tbody>
                                                {
                                                    transactions.length ? 
                                                    transactions.map((transaction, i) => {
                                                        const { amountPaid, createdAt, transactionType } = transaction;															

                                                        // const styleForButton = (status) => {
                                                        //     if(status === 'success'){ return 'green'} 
                                                        //     else if (status === 'pending'){ return 'yellow'}
                                                        //     else {return 'red'}
                                                        // }
                                                        // style={{background: styleForButton(status)}}
                                                        return (
                                                            <tr key={i}>
                                                                <td className="text-center">{i+1}</td>
                                                                <td className="text-center">{createdAt.substring(0,10)}</td>
                                                                <td className="text-center">{transactionType.split('_').join(' ')}</td>
                                                                {/* <td className="text-center"><button className="btn btn-success ">Success</button></td> */}
																<td className="text-center">N{amountPaid ? amountPaid / 100 : 0}</td>
                                                            </tr>
                                                        )
                                                    })
                                                    : null
                                                }										
                                            </tbody>
                                        </table>
                                       

										<Pagination
										activePage={page + 1}
										itemsCountPerPage={size}
										totalItemsCount={totalCount}
										pageRangeDisplayed={2}
										onChange={changeCurrentPage}
										firstPageText={<svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M3.3085 5.76256L7.36396 1.70711C7.75449 1.31658 7.75449 0.683418 7.36396 0.292893C6.97344 -0.0976311 6.34027 -0.0976311 5.94975 0.292893L0.292893 5.94975C0.0538216 6.18882 -0.0388949 6.51882 0.0147438 6.82843C-0.0388949 7.13803 0.0538216 7.46803 0.292893 7.70711L5.94975 13.364C6.34027 13.7545 6.97344 13.7545 7.36396 13.364C7.75449 12.9734 7.75449 12.3403 7.36396 11.9497L3.17678 7.76256H24.5126C25.0648 7.76256 25.5126 7.31485 25.5126 6.76256C25.5126 6.21028 25.0648 5.76256 24.5126 5.76256H3.3085Z" fill="#222222"/>
										</svg>
										
										}
										lastPageText={<svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0666 6.76238L19.0412 2.73701C18.6507 2.34649 18.6507 1.71332 19.0412 1.3228L19.1014 1.26262C19.4919 0.872095 20.1251 0.872095 20.5156 1.26262L26.1725 6.91947C26.4193 7.16631 26.5101 7.51008 26.445 7.82824C26.5101 8.14641 26.4193 8.49018 26.1725 8.73701L20.5156 14.3939C20.1251 14.7844 19.4919 14.7844 19.1014 14.3939L19.0412 14.3337C18.6507 13.9432 18.6507 13.31 19.0412 12.9195L23.1983 8.76238H1C0.447715 8.76238 0 8.31466 0 7.76238C0 7.21009 0.447715 6.76238 1 6.76238H23.0666Z" fill="#222222"/>
										</svg>
										
										}
									/>
                                    </Fragment>
								}								
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Transactions;