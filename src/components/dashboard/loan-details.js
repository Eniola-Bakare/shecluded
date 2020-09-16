import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import DashboardSidebar from "../guards/dashboard-sidebar";
import { individualLoanRequest, timeOut } from "../../api/rootUrls";
import axios from "axios";
import IsLoadingData from "../shared/isLoadingData/isLoadingData";
// import IsLoadingData from '../shared/isLoadingData/isLoadingData';
import moment from 'moment'
import PriceCard from '../priceCard'
import numeral from "numeral";



const LoanDetails = ({ match, history }) => {
  const [state, setState] = useState({
    loanDetails: [],
    isLoading: false,
  });
  const { token } = JSON.parse(sessionStorage.getItem("userData"));
  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    axios({
      method: "get",
      url: `${individualLoanRequest}/${match.params.id}/details`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      timeout: timeOut,
    })
      .then((result) => {

        setState({
          ...state,
          isLoading: false,
        });
        if (result.data.respCode === "Successful") {
          setState({
            ...state,
            loanDetails: result.data.respBody,
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
  }, [state.errorMessage]);
  const { loanDetails, isLoading } = state;

  return (
    <Fragment>
      <div className="user-layout">
        <div className="dashboard-mainXX">

          <div className="card">
            <div className="loan-table-heading">
              <div className="d-flex align-items-center">
                <div onClick={() => history.goBack()} className="mr-3 cursor">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11H1" stroke="#EC008C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11 21L1 11L11 1" stroke="#EC008C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>

                <h1 className="heading">Loan Details</h1>
              </div>
              <div className="d-flex align-items-center mr-5">
                {/* <div className="input-group" >
                  <div>
                    <span style={{ background: "#FAFAFA", height: "100%" }} className="input-group-text" id="basic-addon1">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5139 2.96518C12.5987 5.05144 12.5987 8.43394 10.5139 10.5202C8.42906 12.6065 5.04891 12.6065 2.9641 10.5202C0.879287 8.43394 0.879287 5.05144 2.9641 2.96518C5.04891 0.87892 8.42906 0.87892 10.5139 2.96518ZM12.1361 10.7808C14.1145 8.13979 13.9037 4.37673 11.5035 1.97489C8.87212 -0.658296 4.60585 -0.658296 1.97449 1.97489C-0.656863 4.60807 -0.656863 8.87731 1.97449 11.5105C4.37484 13.9125 8.13564 14.1234 10.7749 12.1431L16.3456 17.7178C16.7215 18.0939 17.331 18.0939 17.7069 17.7178C18.0828 17.3416 18.0828 16.7317 17.7069 16.3555L12.1361 10.7808Z" fill="#828282" />
                      </svg>

                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div> */}

                <div className="ml-2 cursor" onClick={() =>  window.location.reload()}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92066 1.98574C9.92066 0.389607 8.13055 -0.552042 6.81527 0.352215L4.36735 2.03516C3.22163 2.82284 3.22163 4.51454 4.36735 5.30222L6.81527 6.98516C8.13055 7.88942 9.92066 6.94777 9.92066 5.35163V1.98574ZM4.61777 10.929C4.61777 10.9874 4.615 11.0451 4.60959 11.1021H4.61616C4.86613 13.8121 7.14573 15.9341 9.92095 15.9341C12.8633 15.9341 15.2485 13.5488 15.2485 10.6065C15.2485 7.66421 12.8633 5.27899 9.92095 5.27899V1.74824C14.8129 1.74879 18.7785 5.71469 18.7785 10.6068C18.7785 15.4993 14.8124 19.4654 9.91995 19.4654C5.34815 19.4654 1.58524 16.0021 1.11163 11.556C1.03943 11.3606 1 11.1494 1 10.929C1 9.92994 1.80986 9.12007 2.80888 9.12007C3.8079 9.12007 4.61777 9.92994 4.61777 10.929Z" fill="#828282" />
                  </svg>

                </div>

              </div>

            </div>



            <div className="card-body overflow-auto p-0">
              <div className="card-headerX-sub-head">
                <div className="d-flex justify-content-between align-items-center first-head-sub">
                  {
                    !isLoading && loanDetails.createdAt ? (<p className="text-capitalize" style={{ color: "#828282" }}>
                      <span style={{ color: "#333333", fontWeight: "500" }}>Date: </span>  {moment(loanDetails.createdAt).format('DD-MM-YYYY')}
                    </p>) : (<p className="text-capitalize">Loading...</p>)

                  }

                  {
                    loanDetails.status ? (<div className="d-flex align-items-center ">
                      {
                        loanDetails.status === "approved" ? (<div className="d-flex align-items-center ">
                          Status: {" "}
                          <PriceCard style={{ color: "#219653", background: "rgba(229, 254, 228, 0.7)" }} value={loanDetails.status} text={true} />
                        </div>) : loanDetails.status === "pending" ? (<div className="d-flex align-items-center ">
                          Status: {" "}
                          <PriceCard style={{ color: "#A9AC1F", background: "rgba(254, 253, 228, 0.7);" }} value={loanDetails.status} text={true} />
                        </div>) : (<div className="d-flex align-items-center ">
                          Status: {" "}
                          <PriceCard style={{ color: "#AC1F1F", background: "rgba(254, 228, 228, 0.7)" }} value={loanDetails.status} text={true} />
                        </div>)
                      }


                    </div>) : (<p className="text-capitalize">
                      Loading...
                    </p>)

                  }


                </div>
                <div className="d-flex justify-content-between mb-4 flex-wrap nd-head-sub">
                  {isLoading ? (
                    <IsLoadingData />
                  ) : (
                      <Fragment>
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
                            value={`${
                              loanDetails.durationType
                                ? loanDetails.durationType
                                : 0
                              }`}
                            text={true} />

                          <h5 className="price-h">
                            Loan Term
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

                        <div className="d-flex flex-column justify-content-center align-items-center price-br">

                          <PriceCard style={{ color: "#A9AC1F", background: "rgba(254, 253, 228, 0.7)" }}
                            value={`${
                              loanDetails.loanDuration
                                ? loanDetails.loanDuration
                                : 0
                              } Months`}
                            text={true} />

                          <h5 className="price-h">
                            Duation
                            </h5>
                        </div>

                        <div className="d-flex flex-column justify-content-center align-items-center">

                          <PriceCard style={{ color: "#A9AC1F", background: "rgba(254, 253, 228, 0.7)" }}
                            value={loanDetails.totalPaymentAmount
                              ? loanDetails.totalPaymentAmount / 100
                              : 0}
                            text={false} />

                          <h5 className="price-h">
                            Amount to be paid
                            </h5>
                        </div>

                      </Fragment>
                    )}
                </div>
              </div>
              <div className="card-body mt-5" style={{ overflowX: "auto" }}>
                <h5>Repayment Schedule</h5>
                <div>
                  {isLoading ? (
                    <IsLoadingData />
                  ) : (
                      <div className="table-responsive">
                        <table className="table" style={{ overflowX: "auto" }}>
                          <thead>
                            <tr>
                              <th>Month</th>
                              <th>Capital</th>
                              <th>Interest</th>
                              <th>Repayment Amount</th>
                              <th>Repayment Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {loanDetails.loanPaybacks
                              ? loanDetails.loanPaybacks.map((loan, i) => {
                                const {
                                  currentPrincipal,
                                  interest,
                                  payableAmount,
                                  paymentDate,
                                  status,
                                } = loan;
                                const styleForButton = (status) => {
                                  if (status === "approved") {
                                    return "#219653";
                                  } else if (status === "pending") {
                                    return "#F2C94C";
                                  } else {
                                    return "#EB5757";
                                  }
                                };
                                return (
                                  <tr key={i}>
                                    <th scope="row"> {i + 1}</th>
                                    <td> {"\u20A6"}
                                      {numeral(
                                        currentPrincipal / 100
                                      ).format("0,0")}</td>
                                    <td> {"\u20A6"}
                                      {numeral(
                                        interest / 100
                                      ).format("0,0")}</td>
                                    <td> {"\u20A6"}
                                      {numeral(
                                        payableAmount / 100
                                      ).format("0,0")}</td>
                                    <td>
                                      {paymentDate
                                        ? paymentDate.substring(0, 10)
                                        : ""}
                                    </td>
                                    <td>
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
                                  </tr>
                                );
                              })
                              : null}
                          </tbody>
                        </table>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(LoanDetails);
