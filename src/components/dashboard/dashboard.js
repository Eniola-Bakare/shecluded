import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import DashboardSidebar from "../guards/dashboard-sidebar";
import contract from "../../assets/file-contract-solid.svg";
import calculator from "../../assets/calculator-solid.svg";
import axios from "axios";
import Alert from "../shared/alert";
import IsLoadingData from "../shared/isLoadingData/isLoadingData";
import {
  allTransactions,
  timeOut,
  profileUrl,
  getNextLoanDetails,
} from "../../api/rootUrls";
import PaystackButton from "react-paystack";
import swal from "sweetalert";

const Dashboard = ({ history }) => {
  const showPaymentModal = useRef();
  const dismissPaymentModal = useRef();
  const [state, setState] = useState({
    transactions: [],
    page: 0,
    size: 5,
    fetchingData: false,
    errorMessage: "",
    email: "",
    last_name: "",
    first_name: "",
    cardDetails: [],
    fetchedRequestBody: {},
    // Card Verification State
    cardToken: "",
    customerToken: "",
    defaultCard: false,
    key: "pk_live_f23f6c56185fef862a989e2925a39154125e2dc8",
    amount: 10000, //Equal to 100 naira,
    nextPaymentDate: "",
    amountRemaining: "",
    amountPaid: "",
    amountLoaned: "",
  });

  const { token, shecludedId } = JSON.parse(sessionStorage.getItem("userData"));

  useEffect(() => {
    setState({
      ...state,
      fetchingData: true,
    });
    //Handling Card Verification
    if (state.defaultCard) {
      addCardDetails();
    }

    const { page, size } = state;
    let reqBody = {
      pageNumber: page,
      pageSize: size,
      shecludedId,
    };
    axios
      .all([
        axios({
          url: `${profileUrl}`,
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          timeout: timeOut,
        }),
        axios({
          url: `${allTransactions}`,
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          timeout: timeOut,
          data: reqBody,
        }),
        axios({
          url: `${getNextLoanDetails}`,
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          timeout: timeOut,
        }),
      ])
      .then(
        axios.spread((result1, result2, result3) => {
          setState({
            ...state,
            fetchingData: false,
          });
          if (
            result1.data.respCode === "Successful" &&
            result2.data.respCode === "00"
          ) {
            const {
              amountRemaining,
              amountPaid,
              nextPaymentDate,
              amountLoaned,
            } = result3.data.respBody;
            const { email, cards } = result1.data.respBody;
            setState({
              ...state,
              fetchedRequestBody: result1.data.respBody,
              email,
              cardDetails: cards,
              transactions: result2.data.respBody.content,
              amountRemaining,
              amountPaid,
              nextPaymentDate,
              amountLoaned,
            });
          } else {
            setState({
              ...state,
              errorMessage: result2.data.respDescription,
            });
          }
        })
      )
      .catch((err) => {
        setState({
          ...state,
          fetchingData: false,
        });
        if (!err.response) {
          setState({
            ...state,
            loginErrorMessage: "Network Error",
          });
        } else {
          if (err.response.status === 400 || err.response.status === 401) {
            setState({
              ...state,
              errorMessage: "An error occured, please try again.",
            });
          } else {
            setState({
              ...state,
              errorMessage: err,
            });
          }
        }
      });
  }, [state.defaultCard]);

  const {
    transactions,
    fetchingData,
    errorMessage,
    email,
    cardDetails,
    amountRemaining,
    amountPaid,
    nextPaymentDate,
    amountLoaned,
  } = state;

  const applyForLoan = () => {
    if (cardDetails.length) {
      history.push("/user/request-loan");
    } else {
      showPaymentModal.current.click();
    }
  };

  const addCardDetails = () => {
    dismissPaymentModal.current.click();
    setState({
      ...state,
      fetchingData: true,
    });
    let reqBody = {
      ...state.fetchedRequestBody,
      idFile: "",
      photo: "",
      pitchVideo: "",
      bankStatement: "",
      cards: [
        {
          authDetails: "",
          cardToken: state.cardToken,
          createdAt: new Date().toISOString(),
          customerDetails: "",
          customerToken: state.customerToken,
          defaultCard: true,
          delFlag: "",
          id: 0,
          updatedAt: new Date().toISOString(),
          version: 0,
        },
      ],
    };
    axios({
      method: "put",
      url: `${profileUrl}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: reqBody,
      timeout: timeOut,
    })
      .then((result) => {
        setState({
          ...state,
          fetchingData: false,
        });
        if (result.data.respCode === "Successful") {
          window.location.reload();
          swal(
            "Successful Operation",
            "Your profile information have been updated successfully.",
            "success"
          );
        } else {
          setState({
            ...state,
            fetchingData: false,
            errorMessage: result.data.respDescription,
          });
        }
      })
      .catch((err) => {
        setState({
          ...state,
          fetchingData: false,
          errorMessage: err,
        });
      });
  };

  const callback = async (response) => {
    setState({
      ...state,
      cardToken: response.trxref,
      customerToken: response.transaction,
      defaultCard: true,
    });
  };

  const close = () => {
    // console.log("Payment closed");
  };

  const getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };
  const paystackButtonText = () => {
    if (cardDetails.length) {
      return "Update";
    } else {
      return "Add";
    }
  };

  return (
    <Fragment>
      <div className="user-layout">
        {errorMessage.length ? <Alert message={errorMessage} /> : null}
        <DashboardSidebar />
        <div className="dashboard-main">
          {fetchingData ? (
            <IsLoadingData />
          ) : (
            <div className="row justify-content-center">
              <div className="col-12 col-md-12 col-sm-12">
                {/* Header */}
                <div className="card dashboard-header-container">
                  <div className="card-header">
                    <div className="dashboard-header">
                      <div>Overview</div>
                      {cardDetails.length ? (
                        ""
                      ) : (
                        <button
                          className="btn btn-shecluded"
                          onClick={() => showPaymentModal.current.click()}
                        >
                          {`${paystackButtonText()} Card`}
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3 dashboard-header-content">
                        <i className="fa fa-money-bill fa-2x fa-shecluded"></i>
                        <h3>{`N${Number(amountLoaned / 100)}`}</h3>
                        <p>Amount Loaned</p>
                      </div>
                      <div className="col-md-3 dashboard-header-content">
                        <i className="fa fa-money-bill fa-2x fa-shecluded"></i>
                        <h3>{`N${
                          Number(amountPaid) + Number(amountRemaining) / 100
                        }`}</h3>
                        <p>Amount to be Paid</p>
                      </div>
                      <div className="col-md-3 dashboard-header-content">
                        <i className="fa fa-check-square fa-2x fa-shecluded"></i>
                        <h3>{`N${Number(amountPaid / 100)}`}</h3>
                        <p>Amount Paid</p>
                      </div>
                      <div className="col-md-3 dashboard-header-content">
                        <i className="fa fa-calendar fa-2x fa-shecluded"></i>
                        <h3>
                          {nextPaymentDate
                            ? nextPaymentDate.substring(0, 10)
                            : "--/--/--"}
                        </h3>
                        <p>Next Payment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle */}
                <div className="dashboard-middle">
                  <Link to="#" onClick={applyForLoan}>
                    <div className="dashboard-middle-content">
                      <h5>Apply for loan</h5>
                      <img
                        src={contract}
                        width="30.998"
                        height="31.688"
                        alt="Apply for Loan"
                      ></img>
                    </div>
                  </Link>
                  <Link to="/user/loans">
                    <div className="dashboard-middle-content">
                      <h5>View my loans</h5>
                      <i className="fa fa-eye fa-2x fa-shecluded"></i>
                    </div>
                  </Link>
                  <Link to="/user/source-of-income">
                    <div className="dashboard-middle-content">
                      <h5>Sources of income</h5>
                      <i className="fa fa-briefcase fa-2x fa-shecluded"></i>
                    </div>
                  </Link>
                </div>

                {/* Footer */}
                <div className="dashboard-bottom">
                  <div className="dashboard-bottom-left">
                    <Link to="#">
                      <div className="dashboard-bottom-content">
                        <h5>Take a loan course</h5>
                        <i className="fa fa-book fa-2x fa-shecluded"></i>
                      </div>
                    </Link>
                    <Link to="/user/roi-calculator/">
                      <div className="dashboard-bottom-content">
                        <h5>ROI Calculator</h5>
                        <img
                          src={calculator}
                          width="30.998"
                          height="31.688"
                          alt="ROI Calculator"
                        ></img>
                      </div>
                    </Link>
                  </div>
                  <div className="dashboard-bottom-right">
                    <div className="card dashboard-header-container">
                      <div className="card-header">
                        <div className="dashboard-header">
                          <div>Transactions</div>
                          <div>
                            <Link to="/user/transactions">
                              <button className="btn btn-shecluded">
                                View All
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Transaction Type</th>
                              <th>Status</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {transactions.length
                              ? transactions.map((transaction, i) => {
                                  const {
                                    transferAmount,
                                    createdAt,
                                    transactionType,
                                  } = transaction;
                                  return (
                                    <tr key={i}>
                                      <td>{createdAt.substring(0, 10)}</td>
                                      <td>
                                        {transactionType.split("_").join(" ")}
                                      </td>
                                      <td>
                                        <button className="btn btn-success btn-sm">
                                          Success
                                        </button>
                                      </td>
                                      <td>N{transferAmount / 100}</td>
                                    </tr>
                                  );
                                })
                              : null}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Card Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Before you can apply for loan, you have to add your card details
              and a charge of 100 Naira will be deducted from your account to confirm the validity of your card.
						  <br />
              <span style={{ color: "red" }}>
							  Note <span style={{ fontWeight: "bold" }}>VISA</span> cards are not allowed for now
              </span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                ref={dismissPaymentModal}
                data-dismiss="modal"
              >
                Close
              </button>
              <div>
                <PaystackButton
                  text="Add Card"
                  class="btn btn-shecluded"
                  callback={callback}
                  close={close}
                  disabled={false} /*disable payment button*/
                  embed={
                    false
                  } /*payment embed in your app instead of a pop up*/
                  reference={getReference()}
                  email={email}
                  amount={state.amount}
                  paystackkey={state.key}
                  tag="button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <button
        type="button"
        ref={showPaymentModal}
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
    </Fragment>
  );
};

export default withRouter(Dashboard);
