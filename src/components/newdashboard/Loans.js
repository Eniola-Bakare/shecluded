import React, { Fragment, useState, useEffect } from "react";
import WealthInfo from './WealthInfo';
import { RequestedLoans, TotalLoans, RepaidLoans, ManageLoans, FinanacialCourse, RioCalculator } from './LoanCard'
import { allLoans, timeOut } from "../../api/rootUrls";
import axios from "axios";
import moment from 'moment'
import PriceCard from '../priceCard'
import Empty from '../Empty'




function Dashboardmain(props) {
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

    return (
        <div>
            <div className='Dashboard-main-page'>
                <div className='Dashboard-main-page-main'>
                    <div style={{ width: "100%", padding: "0 32px" }}>
                        <h3 className="mt-4">
                            Current Loan</h3>
                        <p>Lets see how well you’re doing </p>

                    </div>

                    <div className="current-loan">
                        <p className="sub-heading mb-5">
                            Current Loan Overview

                        </p>

                        {
                            loans.filter(item => item.status === "approved").length? (
                                <div className="d-flex justify-content-between mb-4 flex-wrap nd-head-sub">
                                <div className="d-flex flex-column justify-content-center align-items-center price-br">
    
                                    <PriceCard style={{ color: "#1F57AC", background: "rgba(228, 242, 254, 0.7)" }}
                                        value={loanDetails.requestedAmount
                                            ? loanDetails.requestedAmount / 100
                                            : 0}
                                        text={false} />
    
                                    <h5 className="price-h">
                                        Amount Loaned
                                </h5>
                                </div>
    
                                <div className="d-flex flex-column justify-content-center align-items-center price-br">
    
                                    <PriceCard style={{ color: "#AC1F1F", background: "rgba(254, 228, 228, 0.7)" }}
                                        value={loanDetails.totalPaymentAmount
                                            ? loanDetails.totalPaymentAmount / 100
                                            : 0}
                                        text={false} />
    
                                    <h5 className="price-h">
                                        Amount to be paid
                                </h5>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center price-br">
    
                                    <PriceCard style={{ color: "#1FAC46", background: "rgba(229, 254, 228, 0.7)" }}
                                        value={`${
                                            loanDetails.loanPaybacks
                                                ? loanDetails.loanPaybacks[0].interestRate
                                                : 0
                                            }%`}
                                        text={true} />
    
                                    <h5 className="price-h">
                                        Interest Rate
                                </h5>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center">
    
                                    <PriceCard style={{ color: "#A9AC1F", background: "rgba(254, 253, 228, 0.7)" }}
                                        value={moment(loanDetails.nextPaymentDate).format('DD-MM-YYYY')}
                                        text={true} />
    
                                    <h5 className="price-h">
                                        Next payment
                                </h5>
                                </div>
                            </div>
    
                                
                            ): (
                                <Empty name="current"/>
                            )
                        }
                        

                       
                    </div>

                    <div className="mt-5" style={{ width: "100%", padding: "0 32px" }}>
                        <h1 style={{ fontSize: "24px" }} className="mt-4">Loan History</h1>
                        <p> Lets see how well you’re doing </p>

                    </div>
                    <div className="d-flex flex-flow-wrap">
                        <RequestedLoans total ={loans.length} {...props} />
                        <TotalLoans declined={loans.filter(item => item.status === "declined").length} {...props} />
                        <RepaidLoans approved={loans.filter(item => item.status === "approved").length} {...props} />
                    </div>

                    <div className="d-flex flex-flow-wrap mt-5">
                        <ManageLoans {...props} />
                        <RioCalculator {...props} />
                        <FinanacialCourse {...props} />
                    </div>





                </div>

                <div className='Dashboard-main-page-side'>
                    <WealthInfo />
                </div>

            </div>
        </div>
    );
}

export default Dashboardmain;
