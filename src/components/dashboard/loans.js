import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../guards/dashboard-sidebar";
import { allLoans, timeOut } from "../../api/rootUrls";
import axios from "axios";
import IsLoadingData from "../shared/isLoadingData/isLoadingData";

import Pagination from "react-js-pagination";

import Alert from "../shared/alert";
import Empty from '../Empty'
import moment from 'moment'

const Loans = (props) => {
  const [state, setState] = useState({
    loans: [],
    isLoading: false,
    page: 0,
    size: 10,
    totalCount: 0,
    errorMessage: "",
  });
  const [show, setShow] = useState("All")
  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });
    const { token, shecludedId } = JSON.parse(
      sessionStorage.getItem("userData")
    );
    let reqBody = {
      pageNumber: page,
      pageSize: size,
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

  const changeCurrentPage = (pageNumber) => {
    setState({
      ...state,
      page: pageNumber - 1,
    });
  };
  const { loans, isLoading, page, size, totalCount, errorMessage } = state;

  return (
    <Fragment>
      <div className="user-layout">
        {errorMessage.length ? <Alert message={errorMessage} /> : null}
        <div>
        <div className="loan-table-heading">
          <div className="d-flex align-items-center">
           <h1 className="heading">Manage Loan</h1>
          </div>
           <div className="d-flex align-items-center mr-5">
              <div className="ml-2 cursor" onClick={() => window.location.reload()}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92066 1.98574C9.92066 0.389607 8.13055 -0.552042 6.81527 0.352215L4.36735 2.03516C3.22163 2.82284 3.22163 4.51454 4.36735 5.30222L6.81527 6.98516C8.13055 7.88942 9.92066 6.94777 9.92066 5.35163V1.98574ZM4.61777 10.929C4.61777 10.9874 4.615 11.0451 4.60959 11.1021H4.61616C4.86613 13.8121 7.14573 15.9341 9.92095 15.9341C12.8633 15.9341 15.2485 13.5488 15.2485 10.6065C15.2485 7.66421 12.8633 5.27899 9.92095 5.27899V1.74824C14.8129 1.74879 18.7785 5.71469 18.7785 10.6068C18.7785 15.4993 14.8124 19.4654 9.91995 19.4654C5.34815 19.4654 1.58524 16.0021 1.11163 11.556C1.03943 11.3606 1 11.1494 1 10.929C1 9.92994 1.80986 9.12007 2.80888 9.12007C3.8079 9.12007 4.61777 9.92994 4.61777 10.929Z" fill="#828282"/>
                </svg>
              </div>
           </div>
           
          </div>
          
          <div className="d-flex align-items-center loan-state mt-5">
            <div onClick={() => setShow("All")} className={`aa m-3 ${show === "All" ? "active": ""}`}>All</div>
            <div onClick={() => setShow("Approved")}  className={`ab m-3 ${show === "Approved" ? "active": ""}`}>Approved</div>
            <div  onClick={() => setShow("Declined")} className={`ac m-3 ${show === "Declined" ? "active": ""}`}>Declined</div>
            <div onClick={() => setShow("Pending")}  className={`ad m-3 ${show === "Pending" ? "active": ""}`}>Pending</div>
          </div>
          {{
            All: (
              <div className="loan-table">
          
            <div className="loan-table-body">
              <div className="card-body">
              
                
                {isLoading ? (
                  <IsLoadingData />
                ) : (
                    <Fragment>
                      {
                        loans.length? (<div>
                          <table className="table table-striped">

                            <thead>
                              <tr>
                                <th className="text-center">Date</th>
                                <th>Amount</th>
                                <th>Loan Term</th>
                                <th>Interest Rate</th>
                                <th>Duration</th>
                                <th className="text-center">Status</th>
                                <th>Total Repayment</th>
                                <th>Repayment Status</th>
                                <th>View Details</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                loans.map((loan, i) => {
                                  const {
                                    requestedAmount,
                                    durationType,
                                    extendedLoanDuration,
                                    totalPaymentAmount,
                                    status,
                                    loanId,
                                    interestRate,
                                    completed,
                                    createdAt,
                                  } = loan;
                                  const styleForButton = (status) => {
                                    if (status === "approved") {
                                      return "#0ACF83";
                                    } else if (status === "pending") {
                                      return "#F2C94C";
                                    } else {
                                      return "#EB5757";
                                    }
                                  };
                                  const initialInterestRate = () => {
                                    if (interestRate) {
                                      return interestRate;
                                    } else if (
                                      durationType.toLowerCase() === "weekly"
                                    )
                                      return 2.5;
                                    else {
                                      return 7;
                                    }
                                  };
                                  const loanDuration = () => {
                                    if (durationType.toLowerCase() === "weekly")
                                      return "weeks";
                                    else {
                                      return "months";
                                    }
                                  };
                                 
                                  return (
                                   
                                    <tr key={i}>
                                        <td>{moment(createdAt).format('DD-MM-YYYY')}</td>
                                        <td>N{requestedAmount / 100}</td>
                                        <td className="text-capitalize">
                                        {durationType}
                                      </td>
                                        <td>{initialInterestRate()}%</td>
                                        <td>{`${extendedLoanDuration} ${loanDuration()}`}</td>

                                      <td className="loan-status-boxX">
                                        <div
                                          className="loan-status-buttonX"
                                          style={{
                                            color: styleForButton(status),
                                            textTransform: "capitalize"
                                          }}
                                        >
                                          {status}
                                        </div>
                                      </td>
                                      
                                      
                                      <td>N{totalPaymentAmount / 100}</td>
                                      <td>
                                        
                                        {
                                          completed? (<div style={{color: "#0ACF83"}}>Paid</div>): (<div style={{color: "#F44336"}}>Unpaid</div>)
                                        }
                                        
                                      </td>
                                      <td>
                                        <Link to={`loans/${loanId}`}>
                                        <svg width="119" height="50" viewBox="0 0 119 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g filter="url(#filter0_d)">
                                          <rect x="11.0674" y="6.5" width="97" height="29" rx="3.5" stroke="#4F4F4F"/>
                                          </g>
                                          <path d="M43.7041 13.1816H45.1055L47.5596 19.9697L50.0068 13.1816H51.4082L48.1885 22H46.9307L43.7041 13.1816ZM53.0904 22H51.8326V15.6973H53.0904V22ZM52.4615 14.7197C52.2473 14.7197 52.065 14.6468 51.9146 14.501C51.7642 14.3506 51.689 14.166 51.689 13.9473C51.689 13.7331 51.7642 13.5531 51.9146 13.4072C52.065 13.2568 52.2473 13.1816 52.4615 13.1816C52.6757 13.1816 52.858 13.2568 53.0084 13.4072C53.1588 13.5531 53.2339 13.7331 53.2339 13.9473C53.2339 14.1615 53.1588 14.3438 53.0084 14.4941C52.858 14.6445 52.6757 14.7197 52.4615 14.7197ZM59.6739 20.1816C59.5691 20.4414 59.437 20.6852 59.2775 20.9131C59.118 21.141 58.9265 21.3415 58.7032 21.5146C58.4799 21.6878 58.2202 21.8245 57.9239 21.9248C57.6323 22.0205 57.3042 22.0684 56.9396 22.0684C56.5203 22.0684 56.1284 21.9909 55.7638 21.8359C55.3992 21.6764 55.0802 21.4554 54.8068 21.1729C54.5333 20.8857 54.3191 20.5462 54.1642 20.1543C54.0092 19.7624 53.9318 19.3271 53.9318 18.8486C53.9318 18.3747 54.0092 17.9417 54.1642 17.5498C54.3191 17.1579 54.5288 16.8206 54.7931 16.5381C55.0574 16.251 55.3696 16.0277 55.7296 15.8682C56.0896 15.7087 56.4702 15.6289 56.8712 15.6289C57.2723 15.6289 57.6528 15.7087 58.0128 15.8682C58.3728 16.0277 58.685 16.251 58.9493 16.5381C59.2137 16.8206 59.4233 17.1579 59.5782 17.5498C59.7332 17.9417 59.8107 18.3747 59.8107 18.8486C59.8107 18.9215 59.8061 18.9945 59.797 19.0674C59.7879 19.1357 59.7788 19.195 59.7696 19.2451C59.7605 19.3089 59.7514 19.3636 59.7423 19.4092H55.2579C55.2762 19.6051 55.3331 19.792 55.4288 19.9697C55.5245 20.1475 55.643 20.3047 55.7843 20.4414C55.9301 20.5736 56.1033 20.6807 56.3038 20.7627C56.5043 20.8402 56.7163 20.8789 56.9396 20.8789C57.3224 20.8789 57.6254 20.7969 57.8488 20.6328C58.0766 20.4688 58.2407 20.3184 58.3409 20.1816H59.6739ZM56.8712 16.8184C56.4519 16.8184 56.0965 16.9619 55.8048 17.249C55.5177 17.5316 55.3354 17.903 55.2579 18.3633H58.6212C58.5483 17.9076 58.3614 17.5361 58.0607 17.249C57.7644 16.9619 57.368 16.8184 56.8712 16.8184ZM64.3639 17.8711L63.0309 22H61.985L59.8796 15.6973H61.1442L62.5456 20.0381L63.9401 15.6973H64.7809L66.1823 20.0381L67.5837 15.6973H68.8415L66.7429 22H65.6901L64.3639 17.8711Z" fill="#4F4F4F"/>
                                          <defs>
                                          <filter id="filter0_d" x="0.567383" y="0" width="118" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                          <feOffset dy="4"/>
                                          <feGaussianBlur stdDeviation="5"/>
                                          <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.560784 0 0 0 0 0.0509804 0 0 0 0.2 0"/>
                                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                          </filter>
                                          </defs>
                                          </svg>

                                        </Link>
                                      </td>
                                    </tr>
                                   
                                  );
                                })

                              }


                      </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
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
                        
                      </div>
                        </div>): (<div className="d-flex justify-content-center align-items-center w-100">
                        <Empty />
                      </div>)

                      }

                    </Fragment>
                  )}
              </div>
            </div>
          </div>
        
            ),
            Approved: (
              <div className="loan-table">
          
            <div className="loan-table-body">
              <div className="card-body">
              
                
                {isLoading ? (
                  <IsLoadingData />
                ) : (
                    <Fragment>
                      {
                        loans.length && loans.filter(item => item.status === "approved").length? (<div>
                          <table className="table table-striped">

                            <thead>
                              <tr>
                                <th className="text-center">Date</th>
                                <th>Amount</th>
                                <th>Loan Term</th>
                                <th>Interest Rate</th>
                                <th>Duration</th>
                                <th className="text-center">Status</th>
                                <th>Total Repayment</th>
                                <th>Repayment Status</th>
                                <th>View Details</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                loans.filter(item => item.status === "approved").map((loan, i) => {
                                  const {
                                    requestedAmount,
                                    durationType,
                                    extendedLoanDuration,
                                    totalPaymentAmount,
                                    status,
                                    loanId,
                                    interestRate,
                                    completed,
                                    createdAt,
                                  } = loan;
                                  const styleForButton = (status) => {
                                    if (status === "approved") {
                                      return "#0ACF83";
                                    } else if (status === "pending") {
                                      return "#F2C94C";
                                    } else {
                                      return "#EB5757";
                                    }
                                  };
                                  const initialInterestRate = () => {
                                    if (interestRate) {
                                      return interestRate;
                                    } else if (
                                      durationType.toLowerCase() === "weekly"
                                    )
                                      return 2.5;
                                    else {
                                      return 7;
                                    }
                                  };
                                  const loanDuration = () => {
                                    if (durationType.toLowerCase() === "weekly")
                                      return "weeks";
                                    else {
                                      return "months";
                                    }
                                  };
                                 
                                  return (
                                   
                                    <tr key={i}>
                                        <td>{moment(createdAt).format('DD-MM-YYYY')}</td>
                                        <td>N{requestedAmount / 100}</td>
                                        <td className="text-capitalize">
                                        {durationType}
                                      </td>
                                        <td>{initialInterestRate()}%</td>
                                        <td>{`${extendedLoanDuration} ${loanDuration()}`}</td>

                                      <td className="loan-status-boxX">
                                        <div
                                          className="loan-status-buttonX"
                                          style={{
                                            color: styleForButton(status),
                                            textTransform: "capitalize"
                                          }}
                                        >
                                          {status}
                                        </div>
                                      </td>
                                      
                                      
                                      <td>N{totalPaymentAmount / 100}</td>
                                      <td>
                                        
                                        {
                                          completed? (<div style={{color: "#0ACF83"}}>Paid</div>): (<div style={{color: "#F44336"}}>Unpaid</div>)
                                        }
                                        
                                      </td>
                                      <td>
                                        <Link to={`loans/${loanId}`}>
                                        <svg width="119" height="50" viewBox="0 0 119 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g filter="url(#filter0_d)">
                                          <rect x="11.0674" y="6.5" width="97" height="29" rx="3.5" stroke="#4F4F4F"/>
                                          </g>
                                          <path d="M43.7041 13.1816H45.1055L47.5596 19.9697L50.0068 13.1816H51.4082L48.1885 22H46.9307L43.7041 13.1816ZM53.0904 22H51.8326V15.6973H53.0904V22ZM52.4615 14.7197C52.2473 14.7197 52.065 14.6468 51.9146 14.501C51.7642 14.3506 51.689 14.166 51.689 13.9473C51.689 13.7331 51.7642 13.5531 51.9146 13.4072C52.065 13.2568 52.2473 13.1816 52.4615 13.1816C52.6757 13.1816 52.858 13.2568 53.0084 13.4072C53.1588 13.5531 53.2339 13.7331 53.2339 13.9473C53.2339 14.1615 53.1588 14.3438 53.0084 14.4941C52.858 14.6445 52.6757 14.7197 52.4615 14.7197ZM59.6739 20.1816C59.5691 20.4414 59.437 20.6852 59.2775 20.9131C59.118 21.141 58.9265 21.3415 58.7032 21.5146C58.4799 21.6878 58.2202 21.8245 57.9239 21.9248C57.6323 22.0205 57.3042 22.0684 56.9396 22.0684C56.5203 22.0684 56.1284 21.9909 55.7638 21.8359C55.3992 21.6764 55.0802 21.4554 54.8068 21.1729C54.5333 20.8857 54.3191 20.5462 54.1642 20.1543C54.0092 19.7624 53.9318 19.3271 53.9318 18.8486C53.9318 18.3747 54.0092 17.9417 54.1642 17.5498C54.3191 17.1579 54.5288 16.8206 54.7931 16.5381C55.0574 16.251 55.3696 16.0277 55.7296 15.8682C56.0896 15.7087 56.4702 15.6289 56.8712 15.6289C57.2723 15.6289 57.6528 15.7087 58.0128 15.8682C58.3728 16.0277 58.685 16.251 58.9493 16.5381C59.2137 16.8206 59.4233 17.1579 59.5782 17.5498C59.7332 17.9417 59.8107 18.3747 59.8107 18.8486C59.8107 18.9215 59.8061 18.9945 59.797 19.0674C59.7879 19.1357 59.7788 19.195 59.7696 19.2451C59.7605 19.3089 59.7514 19.3636 59.7423 19.4092H55.2579C55.2762 19.6051 55.3331 19.792 55.4288 19.9697C55.5245 20.1475 55.643 20.3047 55.7843 20.4414C55.9301 20.5736 56.1033 20.6807 56.3038 20.7627C56.5043 20.8402 56.7163 20.8789 56.9396 20.8789C57.3224 20.8789 57.6254 20.7969 57.8488 20.6328C58.0766 20.4688 58.2407 20.3184 58.3409 20.1816H59.6739ZM56.8712 16.8184C56.4519 16.8184 56.0965 16.9619 55.8048 17.249C55.5177 17.5316 55.3354 17.903 55.2579 18.3633H58.6212C58.5483 17.9076 58.3614 17.5361 58.0607 17.249C57.7644 16.9619 57.368 16.8184 56.8712 16.8184ZM64.3639 17.8711L63.0309 22H61.985L59.8796 15.6973H61.1442L62.5456 20.0381L63.9401 15.6973H64.7809L66.1823 20.0381L67.5837 15.6973H68.8415L66.7429 22H65.6901L64.3639 17.8711Z" fill="#4F4F4F"/>
                                          <defs>
                                          <filter id="filter0_d" x="0.567383" y="0" width="118" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                          <feOffset dy="4"/>
                                          <feGaussianBlur stdDeviation="5"/>
                                          <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.560784 0 0 0 0 0.0509804 0 0 0 0.2 0"/>
                                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                          </filter>
                                          </defs>
                                          </svg>

                                        </Link>
                                      </td>
                                    </tr>
                                   
                                  );
                                })

                              }


                      </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
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
                        
                      </div>
                        </div>): (<div className="d-flex justify-content-center align-items-center w-100">
                        <Empty name="Approved"/>
                      </div>)

                      }

                    </Fragment>
                  )}
              </div>
            </div>
          </div>
        
            ),
            Declined: (
              <div className="loan-table">
          
            <div className="loan-table-body">
              <div className="card-body">
              
                
                {isLoading ? (
                  <IsLoadingData />
                ) : (
                    <Fragment>
                      {
                        loans.length && loans.filter(item => item.status === "declined").length? (<div>
                          <table className="table table-striped">

                            <thead>
                              <tr>
                                <th className="text-center">Date</th>
                                <th>Amount</th>
                                <th>Loan Term</th>
                                <th>Interest Rate</th>
                                <th>Duration</th>
                                <th className="text-center">Status</th>
                                <th>Total Repayment</th>
                                <th>Repayment Status</th>
                                <th>View Details</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                loans.filter(item => item.status === "declined").map((loan, i) => {
                                  const {
                                    requestedAmount,
                                    durationType,
                                    extendedLoanDuration,
                                    totalPaymentAmount,
                                    status,
                                    loanId,
                                    interestRate,
                                    completed,
                                    createdAt,
                                  } = loan;
                                  const styleForButton = (status) => {
                                    if (status === "approved") {
                                      return "#0ACF83";
                                    } else if (status === "pending") {
                                      return "#F2C94C";
                                    } else {
                                      return "#EB5757";
                                    }
                                  };
                                  const initialInterestRate = () => {
                                    if (interestRate) {
                                      return interestRate;
                                    } else if (
                                      durationType.toLowerCase() === "weekly"
                                    )
                                      return 2.5;
                                    else {
                                      return 7;
                                    }
                                  };
                                  const loanDuration = () => {
                                    if (durationType.toLowerCase() === "weekly")
                                      return "weeks";
                                    else {
                                      return "months";
                                    }
                                  };
                                 
                                  return (
                                   
                                    <tr key={i}>
                                        <td>{moment(createdAt).format('DD-MM-YYYY')}</td>
                                        <td>N{requestedAmount / 100}</td>
                                        <td className="text-capitalize">
                                        {durationType}
                                      </td>
                                        <td>{initialInterestRate()}%</td>
                                        <td>{`${extendedLoanDuration} ${loanDuration()}`}</td>

                                      <td className="loan-status-boxX">
                                        <div
                                          className="loan-status-buttonX"
                                          style={{
                                            color: styleForButton(status),
                                            textTransform: "capitalize"
                                          }}
                                        >
                                          {status}
                                        </div>
                                      </td>
                                      
                                      
                                      <td>N{totalPaymentAmount / 100}</td>
                                      <td>
                                        
                                        {
                                          completed? (<div style={{color: "#0ACF83"}}>Paid</div>): (<div style={{color: "#F44336"}}>Unpaid</div>)
                                        }
                                        
                                      </td>
                                      <td>
                                        <Link to={`loans/${loanId}`}>
                                        <svg width="119" height="50" viewBox="0 0 119 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g filter="url(#filter0_d)">
                                          <rect x="11.0674" y="6.5" width="97" height="29" rx="3.5" stroke="#4F4F4F"/>
                                          </g>
                                          <path d="M43.7041 13.1816H45.1055L47.5596 19.9697L50.0068 13.1816H51.4082L48.1885 22H46.9307L43.7041 13.1816ZM53.0904 22H51.8326V15.6973H53.0904V22ZM52.4615 14.7197C52.2473 14.7197 52.065 14.6468 51.9146 14.501C51.7642 14.3506 51.689 14.166 51.689 13.9473C51.689 13.7331 51.7642 13.5531 51.9146 13.4072C52.065 13.2568 52.2473 13.1816 52.4615 13.1816C52.6757 13.1816 52.858 13.2568 53.0084 13.4072C53.1588 13.5531 53.2339 13.7331 53.2339 13.9473C53.2339 14.1615 53.1588 14.3438 53.0084 14.4941C52.858 14.6445 52.6757 14.7197 52.4615 14.7197ZM59.6739 20.1816C59.5691 20.4414 59.437 20.6852 59.2775 20.9131C59.118 21.141 58.9265 21.3415 58.7032 21.5146C58.4799 21.6878 58.2202 21.8245 57.9239 21.9248C57.6323 22.0205 57.3042 22.0684 56.9396 22.0684C56.5203 22.0684 56.1284 21.9909 55.7638 21.8359C55.3992 21.6764 55.0802 21.4554 54.8068 21.1729C54.5333 20.8857 54.3191 20.5462 54.1642 20.1543C54.0092 19.7624 53.9318 19.3271 53.9318 18.8486C53.9318 18.3747 54.0092 17.9417 54.1642 17.5498C54.3191 17.1579 54.5288 16.8206 54.7931 16.5381C55.0574 16.251 55.3696 16.0277 55.7296 15.8682C56.0896 15.7087 56.4702 15.6289 56.8712 15.6289C57.2723 15.6289 57.6528 15.7087 58.0128 15.8682C58.3728 16.0277 58.685 16.251 58.9493 16.5381C59.2137 16.8206 59.4233 17.1579 59.5782 17.5498C59.7332 17.9417 59.8107 18.3747 59.8107 18.8486C59.8107 18.9215 59.8061 18.9945 59.797 19.0674C59.7879 19.1357 59.7788 19.195 59.7696 19.2451C59.7605 19.3089 59.7514 19.3636 59.7423 19.4092H55.2579C55.2762 19.6051 55.3331 19.792 55.4288 19.9697C55.5245 20.1475 55.643 20.3047 55.7843 20.4414C55.9301 20.5736 56.1033 20.6807 56.3038 20.7627C56.5043 20.8402 56.7163 20.8789 56.9396 20.8789C57.3224 20.8789 57.6254 20.7969 57.8488 20.6328C58.0766 20.4688 58.2407 20.3184 58.3409 20.1816H59.6739ZM56.8712 16.8184C56.4519 16.8184 56.0965 16.9619 55.8048 17.249C55.5177 17.5316 55.3354 17.903 55.2579 18.3633H58.6212C58.5483 17.9076 58.3614 17.5361 58.0607 17.249C57.7644 16.9619 57.368 16.8184 56.8712 16.8184ZM64.3639 17.8711L63.0309 22H61.985L59.8796 15.6973H61.1442L62.5456 20.0381L63.9401 15.6973H64.7809L66.1823 20.0381L67.5837 15.6973H68.8415L66.7429 22H65.6901L64.3639 17.8711Z" fill="#4F4F4F"/>
                                          <defs>
                                          <filter id="filter0_d" x="0.567383" y="0" width="118" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                          <feOffset dy="4"/>
                                          <feGaussianBlur stdDeviation="5"/>
                                          <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.560784 0 0 0 0 0.0509804 0 0 0 0.2 0"/>
                                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                          </filter>
                                          </defs>
                                          </svg>

                                        </Link>
                                      </td>
                                    </tr>
                                   
                                  );
                                })

                              }

                      </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
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
                        
                      </div>
                        </div>): (<div className="d-flex justify-content-center align-items-center w-100">
                        <Empty name="Declined" />
                      </div>)

                      }

                    </Fragment>
                  )}
              </div>
            </div>
          </div>
        
            ),
            Pending: (
              <div className="loan-table">
          
            <div className="loan-table-body">
              <div className="card-body">
              
                
                {isLoading ? (
                  <IsLoadingData />
                ) : (
                    <Fragment>
                      {
                        loans.length && loans.filter(item => item.status === "pending").length? (<div>
                          <table className="table table-striped">

                            <thead>
                              <tr>
                                <th className="text-center">Date</th>
                                <th>Amount</th>
                                <th>Loan Term</th>
                                <th>Interest Rate</th>
                                <th>Duration</th>
                                <th className="text-center">Status</th>
                                <th>Total Repayment</th>
                                <th>Repayment Status</th>
                                <th>View Details</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                loans.filter(item => item.status === "pending").map((loan, i) => {
                                  const {
                                    requestedAmount,
                                    durationType,
                                    extendedLoanDuration,
                                    totalPaymentAmount,
                                    status,
                                    loanId,
                                    interestRate,
                                    completed,
                                    createdAt,
                                  } = loan;
                                  const styleForButton = (status) => {
                                    if (status === "approved") {
                                      return "#0ACF83";
                                    } else if (status === "pending") {
                                      return "#F2C94C";
                                    } else {
                                      return "#EB5757";
                                    }
                                  };
                                  const initialInterestRate = () => {
                                    if (interestRate) {
                                      return interestRate;
                                    } else if (
                                      durationType.toLowerCase() === "weekly"
                                    )
                                      return 2.5;
                                    else {
                                      return 7;
                                    }
                                  };
                                  const loanDuration = () => {
                                    if (durationType.toLowerCase() === "weekly")
                                      return "weeks";
                                    else {
                                      return "months";
                                    }
                                  };
                                 
                                  return (
                                   
                                    <tr key={i}>
                                        <td>{moment(createdAt).format('DD-MM-YYYY')}</td>
                                        <td>N{requestedAmount / 100}</td>
                                        <td className="text-capitalize">
                                        {durationType}
                                      </td>
                                        <td>{initialInterestRate()}%</td>
                                        <td>{`${extendedLoanDuration} ${loanDuration()}`}</td>

                                      <td className="loan-status-boxX">
                                        <div
                                          className="loan-status-buttonX"
                                          style={{
                                            color: styleForButton(status),
                                            textTransform: "capitalize"
                                          }}
                                        >
                                          {status}
                                        </div>
                                      </td>
                                      
                                      
                                      <td>N{totalPaymentAmount / 100}</td>
                                      <td>
                                        
                                        {
                                          completed? (<div style={{color: "#0ACF83"}}>Paid</div>): (<div style={{color: "#F44336"}}>Unpaid</div>)
                                        }
                                        
                                      </td>
                                      <td>
                                        <Link to={`loans/${loanId}`}>
                                        <svg width="119" height="50" viewBox="0 0 119 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g filter="url(#filter0_d)">
                                          <rect x="11.0674" y="6.5" width="97" height="29" rx="3.5" stroke="#4F4F4F"/>
                                          </g>
                                          <path d="M43.7041 13.1816H45.1055L47.5596 19.9697L50.0068 13.1816H51.4082L48.1885 22H46.9307L43.7041 13.1816ZM53.0904 22H51.8326V15.6973H53.0904V22ZM52.4615 14.7197C52.2473 14.7197 52.065 14.6468 51.9146 14.501C51.7642 14.3506 51.689 14.166 51.689 13.9473C51.689 13.7331 51.7642 13.5531 51.9146 13.4072C52.065 13.2568 52.2473 13.1816 52.4615 13.1816C52.6757 13.1816 52.858 13.2568 53.0084 13.4072C53.1588 13.5531 53.2339 13.7331 53.2339 13.9473C53.2339 14.1615 53.1588 14.3438 53.0084 14.4941C52.858 14.6445 52.6757 14.7197 52.4615 14.7197ZM59.6739 20.1816C59.5691 20.4414 59.437 20.6852 59.2775 20.9131C59.118 21.141 58.9265 21.3415 58.7032 21.5146C58.4799 21.6878 58.2202 21.8245 57.9239 21.9248C57.6323 22.0205 57.3042 22.0684 56.9396 22.0684C56.5203 22.0684 56.1284 21.9909 55.7638 21.8359C55.3992 21.6764 55.0802 21.4554 54.8068 21.1729C54.5333 20.8857 54.3191 20.5462 54.1642 20.1543C54.0092 19.7624 53.9318 19.3271 53.9318 18.8486C53.9318 18.3747 54.0092 17.9417 54.1642 17.5498C54.3191 17.1579 54.5288 16.8206 54.7931 16.5381C55.0574 16.251 55.3696 16.0277 55.7296 15.8682C56.0896 15.7087 56.4702 15.6289 56.8712 15.6289C57.2723 15.6289 57.6528 15.7087 58.0128 15.8682C58.3728 16.0277 58.685 16.251 58.9493 16.5381C59.2137 16.8206 59.4233 17.1579 59.5782 17.5498C59.7332 17.9417 59.8107 18.3747 59.8107 18.8486C59.8107 18.9215 59.8061 18.9945 59.797 19.0674C59.7879 19.1357 59.7788 19.195 59.7696 19.2451C59.7605 19.3089 59.7514 19.3636 59.7423 19.4092H55.2579C55.2762 19.6051 55.3331 19.792 55.4288 19.9697C55.5245 20.1475 55.643 20.3047 55.7843 20.4414C55.9301 20.5736 56.1033 20.6807 56.3038 20.7627C56.5043 20.8402 56.7163 20.8789 56.9396 20.8789C57.3224 20.8789 57.6254 20.7969 57.8488 20.6328C58.0766 20.4688 58.2407 20.3184 58.3409 20.1816H59.6739ZM56.8712 16.8184C56.4519 16.8184 56.0965 16.9619 55.8048 17.249C55.5177 17.5316 55.3354 17.903 55.2579 18.3633H58.6212C58.5483 17.9076 58.3614 17.5361 58.0607 17.249C57.7644 16.9619 57.368 16.8184 56.8712 16.8184ZM64.3639 17.8711L63.0309 22H61.985L59.8796 15.6973H61.1442L62.5456 20.0381L63.9401 15.6973H64.7809L66.1823 20.0381L67.5837 15.6973H68.8415L66.7429 22H65.6901L64.3639 17.8711Z" fill="#4F4F4F"/>
                                          <defs>
                                          <filter id="filter0_d" x="0.567383" y="0" width="118" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                          <feOffset dy="4"/>
                                          <feGaussianBlur stdDeviation="5"/>
                                          <feColorMatrix type="matrix" values="0 0 0 0 0.988235 0 0 0 0 0.560784 0 0 0 0 0.0509804 0 0 0 0.2 0"/>
                                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                          </filter>
                                          </defs>
                                          </svg>

                                        </Link>
                                      </td>
                                    </tr>
                                   
                                  );
                                })

                              }

                      </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
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
                        
                      </div>
                        </div>): (<div className="d-flex justify-content-center align-items-center w-100">
                        <Empty name="Pending" />
                      </div>)

                      }

                    </Fragment>
                  )}
              </div>
            </div>
          </div>
        
            ),

          }[show]}
          
        </div>
      </div>
    </Fragment>
  );
};

export default Loans;
