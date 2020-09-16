import React, { Component } from "react";
import Footer from "../shared/footer";
import NavBar from "../shared/navbar";
import FaqHeaderImage from "../../assets/faq.png";
import DownCaret from "../../assets/down-caret.svg";

class Faq extends Component {
  constructor(props) {
    super(props)
    this.state = {
        caret1: false,
        caret2: false,
        caret3: false,
        caret4: false,
        caret5: false,
        caret6: false,
        caret7: false,
        caret8: false,
        caret9: false,
        caret10: false,
        caret11: false,
        caret12: false,
        caret13: false,
        caret14: false,
        caret15: false,
        caret16: false,
        caret17: false,
        caret18: false,
        caret19: false,
        caret20: false,
        caret22: false,
        caret23: false,
        caret24: false,
        caret25: false,
        caret26: false,
    }
}

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid main-container">
          <div className="row">
            <div className="align-items-center col-12 p-0 mt-5">
              <div className="mt-5 mb-3">
                <h1 className="text-center text-whiteX">Frequently asked questions.</h1>
                {/* <p className="font-md text-white text-center">Find Answers</p> */}
              </div>
            </div>
          </div>

          <div className="container faq-container">
            <div className="row">
              <div className="col-12 section large-vertical-padding">
                <ul className="list-group list-group-flush text-body">
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-1"
                    aria-expanded="true"
                    aria-controls="faq-1"
                    onClick={() => this.setState({...this.state, caret1: !this.state.caret1})}
                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      What is Shecluded?{" "}
                    </h5>
                    {/* <img
                      src={DownCaret}
                      className="img-responsive"
                      alt="down caret"
                    /> */}
                    {
                      this.state.caret1? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                    

                  </li>
                  <li id="faq-1" className="collapse list-group-item">
                    Shecluded is a digital financial inclusion company that is 
                    focused on providing women with access to credit,
                     financial education, business advisory, wealth management
                     and pension in order to help them achieve sustainable growth 
                     in their personal life, career and business.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2"
                    aria-expanded="true"
                    aria-controls="faq-2"
                    onClick={() => this.setState({...this.state, caret2: !this.state.caret2})}
                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Why Shecluded?
                    </h5>
                    {
                      this.state.caret2 ? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2" className="collapse list-group-item">
                    We are more than a loan company as we extend to helping
                    women with the growth of their businesses and careers.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-3"
                    aria-expanded="true"
                    aria-controls="faq-3"
                    onClick={() => this.setState({...this.state, caret3: !this.state.caret3})}
                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      How do I Join the community?
                    </h5>
                    
                    {
                      this.state.caret3 ? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-3" className="collapse list-group-item">
                    {/* To join our community simply register on our platform and
                    sign up to our mailing list. You could also take a course on
                    Borrowing for (SME and Personal) and apply for loans */}
                    To join our community simply register on our platform and sign up to our mailing list.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-3x"
                    aria-expanded="true"
                    aria-controls="faq-3x"
                    onClick={() => this.setState({...this.state, caret4: !this.state.caret4})}
                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      How do I apply for a loan?
                    </h5>
                    {
                      this.state.caret4? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-3x" className="collapse list-group-item">
                     You would need to register to join our community then provide us with information on your current
                     source of income or your monthly revenue.
                     Also, we would like to know more about your business and the stage it is in.
                     Kindly proceed to apply here (Insert registration link)
                  </li>

                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-12x"
                    aria-expanded="true"
                    aria-controls="faq-12x"
                    onClick={() => this.setState({...this.state, caret5: !this.state.caret5})}

                  >
                    <h5 className="question text-shecluded">
                      What are the loan requirements?
                    </h5>
                    {
                      this.state.caret5? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-12x" className="collapse list-group-item">
                    <ul>
                      <p className="font-weight-bold">
                        For eligibility and requirements
                      </p>
                      <li>You need to have a regular source of income.</li>
                      <li>
                        You shouldn't have any loan currently running (If you
                        do, kindly let us know)
                      </li>
                      <li>A valid purpose of the loan</li>
                    </ul>
                    <ul className="mt-3">
                      <p className="font-weight-bold">The terms</p>
                      <li>
                        Our interest rate is 5%
                      </li>
                      <li>
                        Our repayment plan is flexible, we are open to fitting it to your capability
                      </li>
                      <li>
                        Our loan processing time is fast as long as we agree on
                        repayment terms and rate
                      </li>
                    </ul>
                  </li>

                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2xx"
                    aria-expanded="true"
                    aria-controls="faq-2xx"
                    onClick={() => this.setState({...this.state, caret6: !this.state.caret6})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      What are your loan limits?
                    </h5>
                    {
                      this.state.caret6? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2xx" className="collapse list-group-item">
                    We give loans up to 2.5 million naira. For larger amounts, 
                    we prepare and shortlist qualified candidates and refer
                    them to our financial partners to handle.
                  </li>

                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2rate"
                    aria-expanded="true"
                    aria-controls="faq-2rate"
                    onClick={() => this.setState({...this.state, caret7: !this.state.caret7})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      What are the interest rates?
                    </h5>
                    {
                      this.state.caret7? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2rate" className="collapse list-group-item">
                    Our interest rates vary from 4% to 7% depending on your
                    ratings.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2loan"
                    aria-expanded="true"
                    aria-controls="faq-2loan"
                    onClick={() => this.setState({...this.state, caret8: !this.state.caret8})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      What makes me eligible for a loan with Shecluded?
                    </h5>
                    {
                      this.state.caret8? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2loan" className="collapse list-group-item">
                    To be eligible for a loan with Shecluded, you must have a
                    regular source of income and a valid reason to apply for a
                    loan.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2access"
                    aria-expanded="true"
                    aria-controls="faq-2access"
                    onClick={() => this.setState({...this.state, caret9: !this.state.caret9})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Is location a criteria to access loans?
                    </h5>
                    {
                      this.state.caret9? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2access" className="collapse list-group-item">
                    No it is not. We give loans to businesses based anywhere
                    provided you meet our criteria.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2approval"
                    aria-expanded="true"
                    aria-controls="faq-2approval"
                    onClick={() => this.setState({...this.state, caret10: !this.state.caret10})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      What’s the loan approval timeline?
                    </h5>
                    {
                      this.state.caret10? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2approval" className="collapse list-group-item">
                    We usually approve loans from 24 hours after applications
                    have been processed.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2repaymentx"
                    aria-expanded="true"
                    aria-controls="faq-2repaymentx"
                    onClick={() => this.setState({...this.state, caret11: !this.state.caret11})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      How do I process loan repayment?
                    </h5>
                    {
                      this.state.caret11? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2repaymentx" className="collapse list-group-item">
                    The loan repayment is automatic, the money is deducted from
                    your card.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2payx"
                    aria-expanded="true"
                    aria-controls="faq-2payx"
                    onClick={() => this.setState({...this.state, caret12: !this.state.caret12})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Can you have two running loans together?
                    </h5>
                    {
                      this.state.caret12? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2payx" className="collapse list-group-item">
                    No you can not, you have to pay back your previous loan
                    before applying for another.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-2receivex"
                    aria-expanded="true"
                    onClick={() => this.setState({...this.state, caret13: !this.state.caret13})}
                    aria-controls="faq-2receivex"
                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      I would like to receive some business advice
                    </h5>
                    {
                      this.state.caret13? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-2receivex" className="collapse list-group-item">
                    You can book an appointment to speak with an expert today. 
                    Kindly click this link to book your consultation session.
                  </li>

                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-4"
                    aria-expanded="true"
                    aria-controls="faq-4"
                    onClick={() => this.setState({...this.state, caret14: !this.state.caret14})}

                  >
                    
                    
                    <h5 className="question text-shecluded">
                      {" "}
                      I want to apply for a loan to start up a business.
                    </h5>
                    {
                      this.state.caret14? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-4" className="collapse list-group-item">
                    <ul>
                      <li>Do you have any source of income currently?</li>
                      <li>If you do how much?</li>
                      <li>
                        You can also let us know about your business and what
                        stage it's in.
                      </li>
                    </ul>
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-5"
                    aria-expanded="true"
                    aria-controls="faq-5"
                    onClick={() => this.setState({...this.state, caret15: !this.state.caret15})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Do you give loans?{" "}
                    </h5>
                    {
                      this.state.caret15? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-5" className="collapse list-group-item">
                    Yes, we give loans up to 2.5 million. For larger amounts, we
                    prepare and shortlist qualified candidates and refer them to
                    our financial partners to handle.
                  </li>

                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-16"
                    aria-expanded="true"
                    aria-controls="faq-5"
                    onClick={() => this.setState({...this.state, caret16: !this.state.caret16})}

                  >
                    
                    



                    <h5 className="question text-shecluded">
                      {" "}
                      What is shecluded interest rate and how it work?{" "}
                    </h5>
                    {
                      this.state.caret16? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-16" className="collapse list-group-item">
                    Our interest rates range between 4-7% depending on your
                    rating. We offer a flexible repayment plan and we are open
                    to fit the plan to your capability. Our loan processing time
                    is fast as long as we agree on repayment terms and rates.
                  </li>

                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-6"
                    aria-expanded="true"
                    aria-controls="faq-6"
                    onClick={() => this.setState({...this.state, caret17: !this.state.caret17})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Who do you finance?
                    </h5>
                    {
                      this.state.caret17? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-6" className="collapse list-group-item">
                    We finance eligible applicants. To be eligible, you have to
                    either be employed or running a small business.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-7"
                    aria-expanded="true"
                    aria-controls="faq-7"
                    onClick={() => this.setState({...this.state, caret18: !this.state.caret18})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      What do i need to have to be able to qualify for a loan?
                    </h5>
                    {
                      this.state.caret18? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-7" className="collapse list-group-item">
                    You need to have a regular source of income and a valid
                    reason for the loan.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-8"
                    aria-expanded="true"
                    aria-controls="faq-8"
                    onClick={() => this.setState({...this.state, caret19: !this.state.caret19})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      I am a small business, Can I get a loan?
                    </h5>
                    {
                      this.state.caret19? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-8" className="collapse list-group-item">
                    Yes! most women in our community are small business owners
                    just like you.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-9"
                    aria-expanded="true"
                    aria-controls="faq-9"
                    onClick={() => this.setState({...this.state, caret20: !this.state.caret20})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      I am interested in Shecluded but I do not want a loan, how
                      can I benefit?
                    </h5>
                    {
                      this.state.caret20? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-9" className="collapse list-group-item">
                    We can help you with financial education and advisory for
                    your business. Your business can benefit from us through our
                    courses, connecting you with other women in your sector and
                    advice on how to grow your business{" "}
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-10"
                    aria-expanded="true"
                    aria-controls="faq-10"
                    onClick={() => this.setState({...this.state, caret21: !this.state.caret21})}

                  >
                    <h5 className="question text-shecluded">
                      How can I get involved with that?
                    </h5>
                    {
                      this.state.caret21? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-10" className="collapse list-group-item">
                    Send us an email stating the service you would like us to
                    offer you
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-11"
                    aria-expanded="true"
                    aria-controls="faq-11"
                    onClick={() => this.setState({...this.state, caret22: !this.state.caret22})}

                  >
                    <h5 className="question text-shecluded">
                      Aside Loans, what other funding option is available
                    </h5>
                    {
                      this.state.caret22? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-11" className="collapse list-group-item">
                    We do seed funding for selected companies that we have
                    network and passion to push. We would have worked with them
                    closely for about 6 months before we consider them for seed
                    funding based on their growth.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-12"
                    aria-expanded="true"
                    aria-controls="faq-12"
                    onClick={() => this.setState({...this.state, caret23: !this.state.caret23})}

                  >
                    <h5 className="question text-shecluded">
                      What are the benefits of joining?
                    </h5>
                    {
                      this.state.caret23? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-12" className="collapse list-group-item">
                    <ul>
                      <li>
                        An easy, confidential access to loans at any time!
                      </li>
                      <li>
                        Most women in our network are in retail and we do events
                        and regular discounts on lovable items
                      </li>
                      <li>
                        Free Advisory on your matters relating to assess funds
                        for your business
                      </li>
                    </ul>
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-13"
                    aria-expanded="true"
                    aria-controls="faq-13"
                    onClick={() => this.setState({...this.state, caret24: !this.state.caret24})}

                  >
                    <h5 className="question text-shecluded">
                      Do you only give loans to businesses based in Lagos?
                    </h5>
                    {
                      this.state.caret24? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-13" className="collapse list-group-item">
                    No, we give loans to businesses based anywhere provided you
                    meet our criteria.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-14"
                    aria-expanded="true"
                    aria-controls="faq-14"
                    onClick={() => this.setState({...this.state, caret25: !this.state.caret25})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Where are you located?{" "}
                    </h5>
                    {
                      this.state.caret25? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-14" className="collapse list-group-item">
                    We are located in Lekki Lagos at Freeme space on Nike art
                    gallery street, Lekki.
                  </li>
                  <li
                    className="list-group-item collapser"
                    data-toggle="collapse"
                    data-target="#faq-15"
                    aria-expanded="true"
                    aria-controls="faq-15"
                    onClick={() => this.setState({...this.state, caret26: !this.state.caret26})}

                  >
                    <h5 className="question text-shecluded">
                      {" "}
                      Why Shecluded SME?{" "}
                    </h5>
                    {
                      this.state.caret26? (<svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L7.5 7L13 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>
                      ): (<svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13L7 7.5L2 2" stroke="#ED4F8F" stroke-width="3"/>
                      </svg>)
                    }
                  </li>
                  <li id="faq-15" className="collapse list-group-item">
                    If you are looking to start or grow your business, you need
                    a committed partner who can provide finance and business
                    support that is structured according to your needs. Turn to
                    us we work with you to achieve your ambitions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
       
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default Faq;
