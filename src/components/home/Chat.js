

import React, {useState, useRef, useEffect} from 'react'
import Teamifeoma from "../../assets/team-ifeoma.jpeg";
import moment from 'moment'
import { css } from 'glamor';
import ScrollToBottom from 'react-scroll-to-bottom';
import axios from "axios";
import { registerUrl, timeOut } from "../../api/rootUrls";
import swal from "sweetalert";
import Preloader from '../shared/preloader'



 


const Chat = (props) => {
    const { history } = props
    const [employment, setEmployment ] = useState({
        nameOfCompany: '',
        position: '',
        address: '',
        website: '',
        phoneNumber: "",
        monthlySalary: '',
        hasSideHustle: false,
        years: '',
        sideHustle: {
            description: '',
            amountBeingMadeMonthly: ''
        }
    })
    const [businessOwner, setBusinessOwner] = useState({
        companyName: '',
        businessLocation: '',
        address: '',
        website: 'www.eg.com',
        phoneNumber: '',
        lengthInBusiness: '',
        monthlyRevenue: '',
        numberOfEmployees: '',
        cacRegNumber: '',
        instagramHandle: 'www.instagram.com/username',
        sector: '',
        country: '',
    })

    useEffect(() => {
        if (sessionStorage.getItem("registrationDetails")) {
          const {
            email,
            password,
            first_name,
            last_name,
            phoneNumber
          } = JSON.parse(sessionStorage.getItem("registrationDetails"));
          setState({
            ...state,
            email,
            password,
            first_name,
            last_name
          });
    
        } else {
          history.push("/register");
        }
      }, []);

      const [employmentType, setEmploymentType] = useState(null);

    const [state, setState] = useState({
        registrationStep: 1,
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        phoneNumber: "",
        profilePicture: "",
        idCard: "",
        bio: "",
        dob: "",
        address: "",
        jobTitle: "",
        maritalStatus: "",
        socialMediaHandle1: "www.linkedIn.com/username",
        socialMediaHandle2: "www.twitter.com/username",
        socialMediaHandle3: "www.instagram.com/username",
        state_of_residence: "",
        targetAmount: "",
        employmentType: "",
        businessOwner: {},
        fetchingData: false,
        errorMessage: "",
        nameOfFile: "",
        nameOfProfileFile: "",
      });

    const ROOT_CSS = css({
        height: "80vh",
      });

    const getGreetings = () => {
        const d = new Date();
        const time = d.getHours();
        if (time < 10) {
            return "Good morning"
          } else if (time < 20) {
            return "Good day"
          } else {
            return "Good evening"
          }
    }

    const handleEmploymentChange = (e) => {
        setEmployment({
            ...employment,
            [e.target.name]: e.target.value
        })
    }
    const handleBusinessOwnerChange = (e) => {
        setBusinessOwner({
            ...businessOwner,
            [e.target.name]: e.target.value
        })
    }
    const handleInputChange = event => {
        setState({
          ...state,
          [event.target.name]: event.target.value
        });
      };
    
    const [display, setDisplay] = useState("avatar");
    const [stage, setStage] = useState("avatar");

    const handleSideHustleChange = (e) => {
        setEmployment({
            ...employment,
            sideHustle: {
                ...employment.sideHustle,
                [e.target.name]: e.target.value
            }
        })
    }
    
    const [sourceShow, setSourceShow] = useState({
        show: true,
        value: ""
    });

    const [nineToFive, setNineToFive] = useState({
        position: {
            show: true,
            value: ""
        },
        nameOfCompany: {
            show: true,
            value: ""
        },
    });

    const employmentActiont = () => {
        if (employmentType === "business") {
          return {
            address: businessOwner.address,
            companyRcNumber: businessOwner.cacRegNumber,
            country: "Nigeria",
            email: "",
            businessLocation: businessOwner.businessLocation,
            monthlyExpense: null,
            monthlyIncome: businessOwner.monthlyRevenue,
            companyName: businessOwner.companyName,
            phoneNumber: businessOwner.phoneNumber,
            state: "",
            country:"",
            website: businessOwner.website,
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: businessOwner.lengthInBusiness,
            employmentType: "business",
            id: 0,
            position: "",
            salary: "",
            sector: businessOwner.sector,
            sideHustle: "",
            sideIncome: "",
            updatedAt: new Date(),
            version: 0
          };
        } else if (employmentType === "employer") {
          return {
            address: employment.address,
            country: "Nigeria",
            email: "",
            companyName: employment.nameOfCompany,
            phoneNumber: employment.phoneNumber,
            salary: employment.monthlySalary,
            state: "",
            website: employment.website,
            companyRcNumber: "",
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: null,
            employmentType: "employer",
            id: 0,
            monthlyExpense: null,
            monthlyIncome: 0,
            position: "",
            sideHustle: employment.sideHustle.description,
            sideIncome: employment.sideHustle.amountBeingMadeMonthly,
            updatedAt: new Date(),
            version: 0

          };
        } else {
          return null;
        }
      };


    const [mogul, setMogul] = useState(false);
    const [chick, setChick] = useState(false);

    const [showInput, setShowInput] = useState("");

    const [questionShow, setQuestionShow] = useState({
        Employmentposition: false,
        EmploymentnameOfCompany: false,
        Employmentaddress: false,
        EmploymentamountBeingMadeMonthly: false,
        Employmentyears: false,
        Userdob: false,
        Useraddress: false,
        Userstate: false,
        UserphoneNumber: false,
        UserInstagram: false,
        UserLinkedin: false,
        BusinessOwnerbusinessLocation: false,
        BusinessOwneraddress: false,
        BusinessOwnercompanyName: false,
        BusinessOwnersector: false,
        BusinessOwnercacRegNumber: false,
        BusinessOwnermonthlyRevenue: false,
        BusinessOwnernumberOfEmployees: false,
        BusinessOwnerwebsite: false,
        BusinessOwnerinstagramHandle: false,
    });



    const registerAnAccount = async () => {
        setState({
          ...state,
          fetchingData: true
        });
    
        let { profilePicture } = state;
    
        // if (profilePicture) {
        //   try {
        //     let data = await new FormData();
        //     let data1 = data;
        //     data1.append("file", profilePicture);
        //     data1.append("upload_preset", UPLOAD_PRESET);
    
        //     const res1 = await fetch(UPLOAD_URL, {
        //       method: "POST",
        //       body: data1
        //     });
        //     const file1 = await res1.json();
        //     const image1 = file1.secure_url;
        //     profilePicture = image1;
        //   } catch (err) {
        //     setState({
        //       ...state,
        //       fetchingData: false,
        //       errorMessage: "Error Uploading Images"
        //     });
        //   }
        // }
    
        let reqBody = {
          address: employment.address,
          business: {
            address: businessOwner.address,
            companyRcNumber: businessOwner.cacRegNumber,
            country: "Nigeria",
            email: "",
            businessLocation: businessOwner.businessLocation,
            monthlyExpense: null,
            monthlyIncome: businessOwner.monthlyRevenue,
            companyName: businessOwner.companyName,
            phoneNumber: businessOwner.phoneNumber,
            state: "",
            country:"",
            website: businessOwner.website,
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: businessOwner.lengthInBusiness,
            employmentType: "business",
            id: 0,
            position: "",
            salary: "",
            sector: businessOwner.sector,
            sideHustle: "",
            sideIncome: "",
            updatedAt: new Date(),
            version: 0
          },
          cards: [],
          createdAt: new Date(),
          country: "Nigeria",
          dob: state.dob,
          email: state.email,
          emailVerified: true,
          employer: {
            address: employment.address,
            country: "Nigeria",
            email: "",
            companyName: employment.nameOfCompany,
            phoneNumber: employment.phoneNumber,
            salary: employment.monthlySalary,
            state: "",
            website: employment.website,
            companyRcNumber: "",
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: null,
            employmentType: "employer",
            id: 0,
            monthlyExpense: null,
            monthlyIncome: 0,
            position: "",
            sideHustle: employment.sideHustle.description,
            sideIncome: employment.sideHustle.amountBeingMadeMonthly,
            updatedAt: new Date(),
            version: 0

          },
          employment: [employmentActiont()],
          employmentStatus: employmentType,
          financialGoal: state.targetAmount,
          firstName: state.first_name,
          gender: "Female",
          idFile: "",
          idNumber: "",
          identificationType: "",
          jobTitle: state.jobTitle,
          lastName: state.last_name,
          maritalStatus: state.maritalStatus,
          password: state.password,
          phoneNumber: state.phoneNumber,
          phoneVerified: true,
          photo: profilePicture,
          idCard: "",
          shecludedId: "",
          socialMedia: [
            {
              accessToken: "",
              id: 0,
              platform: "facebook",
              socialId: "",
              socialLink: `${state.socialMediaHandle1}`,
              username: "",
              version: 0
            },
            {
              accessToken: "",
              id: 0,
              platform: "twitter",
              socialId: "",
              socialLink: `${state.socialMediaHandle2}`,
              username: "",
              version: 0
            },
            {
              accessToken: "",
              id: 0,
              platform: "instagram",
              socialId: "",
              socialLink: `${state.socialMediaHandle3}`,
              username: "",
              version: 0
            }
          ],
          state: state.state_of_residence
        };
        axios({
          url: `${registerUrl}`,
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          timeout: timeOut,
          data: reqBody
        })
          .then(result => {
            if (result.data.respCode === "Successful") {
              const { authToken, shecludedId } = result.data.respBody;
              swal("Successful Registration", "Welcome to Shecluded", "success");
              sessionStorage.removeItem("registrationDetails");
              sessionStorage.setItem(
                "userData",
                JSON.stringify({
                  token: authToken,
                  shecludedId
                })
              );
              history.push("/dashboard");
            } else {
              setState({
                ...state,
                fetchingData: false,
                errorMessage: result.data.respDescription
              });
            }
          })
          .catch(err => {
            setState({
              ...state,
              fetchingData: false
            });
            if (!err.response) {
              setState({
                ...state,
                loginErrorMessage: "Network Error"
              });
            } else {
              if (err.response.status === 400 || err.response.status === 401) {
                setState({
                  ...state,
                  errorMessage: "An error occured, please try again."
                });
              } else {
                setState({
                  ...state,
                  errorMessage: err
                });
              }
            }
          });
      };
    






    
    return ( 
        <div className="chat-wrapper">
            <div className="chat-header">
                <img src={Teamifeoma} alt="profile"/>
            </div>
           
                <div className="chat-message-container">
                <ScrollToBottom className={ ROOT_CSS }>
                <div className="chat-message">

                    <div className="reciever-wrapper">
                        <div className="reciever">
                            <div className="d-flex">
                                <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                <h5> Hi, nice to meet you again </h5>

                            </div>
                            <div className="d-flex justify-content-end">
                                <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                            </div>
                        </div>

                    </div>

                    {
                        sourceShow.show? (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> {getGreetings()} please what is your source of income ?</h5>
                                            <div className="d-flex justify-content-center align-items-center flex-column">
                                                <button 
                                                onClick={() => {
                                                    setEmploymentType("business")
                                                    setSourceShow({
                                                        ...sourceShow,
                                                        show: false,
                                                        value: "Business mogul"
                                                    })
                                                    setMogul(true)
                                                    setShowInput("BusinessOwnerbusinessLocation")
                                                    
                                                }} 
                                                style={{width: "200px" }} className="btn-shecluded btn-lg cursor m-2">Business mogul</button>
                                                <button 
                                                onClick={() => {
                                                    setEmploymentType("employer")

                                                    setSourceShow({
                                                        ...sourceShow,
                                                        show: false,
                                                        value: "9-5 chick"
                                                    })
                                                    setChick(true)
                                                    setShowInput("Employmentposition")
                                                }} 
                                                style={{width: "200px"}}  className="btn-shecluded btn-lg cursor m-2">9-5 chick</button>
                                            </div>
                                            
                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ): null
                    }

                    
                    {
                        !sourceShow.show?(
                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {sourceShow.value} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ): null
                    }

                    {/* questin and answer */}

                    {
                        questionShow.Employmentposition? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> I work as a ? </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {employment.position} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }

                    {
                        questionShow.EmploymentnameOfCompany? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is the name of your Company </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {employment.nameOfCompany} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }

                    {
                        questionShow.Employmentaddress? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> Your Company is located at ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {employment.address} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.EmploymentamountBeingMadeMonthly? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> How much do you make monthly ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {employment.sideHustle.amountBeingMadeMonthly} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.Employmentyears? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> How many years have you worked ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {employment.years} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.Userdob? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> We'd love to know more about you</h5>
                                        
                                    </div>
                                    <h5> When were you born ?</h5>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {state.dob} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.Useraddress? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> Where do you live ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {state.address} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.Userstate? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> Which state are you in ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {state.state_of_residence} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.UserphoneNumber? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your mobile number ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {state.phoneNumber} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.UserInstagram? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Instagram handle ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {state.socialMediaHandle3} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.UserLinkedin? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Linkedin handle ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {state.socialMediaHandle1} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnerbusinessLocation? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> Where are you working from ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.businessLocation} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwneraddress? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your business address ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.address} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnercompanyName? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Business/Company name ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.companyName} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnersector? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What's your business sector ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.sector} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnercacRegNumber? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Business/Company CAC number is ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.cacRegNumber} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnermonthlyRevenue? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Business/Company monthly revenue ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.monthlyRevenue} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnernumberOfEmployees? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Business/Company number of employees ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.numberOfEmployees} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnerwebsite? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Business/Company website ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.website} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        questionShow.BusinessOwnerinstagramHandle? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is your Business/Company Instagram handle ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            <div className="sender-wrapper">
                                <div className="sender">
                                    <div>
                                        <h5> {businessOwner.instagramHandle} </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }
                    {
                        state.fetchingData? (
                            <div>
                                 <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> Please wait</h5>

                                    </div>
                                    <h5 className="ml-3 mt-3"> loading...</h5>
                                    {/* <div>
                                        <Preloader />
                                    </div> */}
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>

                            </div>
                        ): null
                    }


                     {/* End questin and answer */}


                    {{
                        Employmentposition: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> I work as a ? </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        EmploymentnameOfCompany: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> What is the name of your Company </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        Employmentaddress: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> Your Company is located at ? </h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        EmploymentamountBeingMadeMonthly: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> How much do you make monthly ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        Employmentyears: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> How many years have you worked ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        Userdob: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <h5> We'd love to know more about you</h5>
                                        

                                    </div>
                                        <h5 className="ml-3 mt-3"> When were you born ?</h5>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        Useraddress: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                       
                                        <h5> Where do you live ?</h5>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        Userstate: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> Which state are you in? </h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        UserphoneNumber: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your mobile number ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        UserInstagram: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Instagram handle ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        UserLinkedin: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Linkedin handle ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnerbusinessLocation: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> Where are you working from ? </h5>
                                            <div className="d-flex justify-content-center align-items-center flex-column">
                                                <button 
                                                onClick={() => {
                                                    setBusinessOwner({
                                                        ...businessOwner,
                                                        businessLocation: "Home"
                                                    })
                                                    setShowInput("BusinessOwneraddress")
                                                    setQuestionShow({
                                                        ...questionShow,
                                                        BusinessOwnerbusinessLocation: true
                    
                                                    })
                                                }} 
                                                style={{width: "200px" }} className="btn-shecluded btn-lg cursor m-2">Home</button>
                                                
                                                <button 
                                                onClick={() => {
                                                    setBusinessOwner({
                                                        ...businessOwner,
                                                        businessLocation: "An Office"
                                                    })
                                                    setShowInput("BusinessOwneraddress")
                                                    setQuestionShow({
                                                        ...questionShow,
                                                        BusinessOwnerbusinessLocation: true
                    
                                                    })
                                                }} 
                                                style={{width: "200px"}}  className="btn-shecluded btn-lg cursor m-2">
                                                    An Office
                                                </button>
                                                
                                            </div>

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwneraddress: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your business address ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnercompanyName: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Business/Company name ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnersector: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What's your business sector ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnercacRegNumber: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Business/Company CAC number is ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnermonthlyRevenue: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Business/Company monthly revenue ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnernumberOfEmployees: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Business/Company number of employees ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnerwebsite: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Business/Company website ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),
                        BusinessOwnerinstagramHandle: (
                            <div className="reciever-wrapper">
                                <div className="reciever">
                                    <div className="d-flex">
                                        <img className="mr-2" style={{width: "25px", height: "25px", borderRadius: "100%"}} src={Teamifeoma} alt="profile"/>
                                        <div>
                                            <h5> What is your Business/Company Instagram handle ?</h5>
                                            

                                        </div>

                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <p className="p-0 m-0"> {moment().format('LLLL')} </p>
                                    </div>
                                </div>

                            </div>
                        ),

                    }[showInput]}
                    
                    
                    <div id="ContainerElementID" />
                   
                </div>
                </ScrollToBottom>

                <div className="chat-input">
                    {{
                        Employmentposition: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                name="position"
                                required
                                value={employment.position}
                                onChange={handleEmploymentChange}
                                onKeyPress={event =>{
                                    if(event.key === 'Enter'){
                                        if(employment.position.length){
                                            setShowInput("EmploymentnameOfCompany")
                                                setQuestionShow({
                                                    ...questionShow,
                                                    Employmentposition: true
                
                                                })

                                        }
                                        

                                    }

                                } } 
                                type="text"
                                placeholder="Position at company"
                            />
                                <div onClick={e => {
                                    if(employment.position.length){
                                        setShowInput("EmploymentnameOfCompany")
                                            setQuestionShow({
                                                ...questionShow,
                                                Employmentposition: true
            
                                            })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        EmploymentnameOfCompany: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                name="nameOfCompany"
                                required
                                value={employment.nameOfCompany}
                                onChange={handleEmploymentChange}
                                onKeyPress={event =>{
                                    if(event.key === 'Enter'){
                                        if(employment.nameOfCompany.length){
                                            setShowInput("Employmentaddress")
                                        setQuestionShow({
                                            ...questionShow,
                                            EmploymentnameOfCompany: true
        
                                        })

                                        }
                                        
                                    }

                                } }
                                type="text"
                                placeholder="Name of company"
                            />
                                <div onClick={e => {
                                   if(employment.nameOfCompany.length){
                                    setShowInput("Employmentaddress")
                                setQuestionShow({
                                    ...questionShow,
                                    EmploymentnameOfCompany: true

                                })

                                }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        Employmentaddress: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="address"
                                    required
                                    value={employment.address}
                                    onChange={handleEmploymentChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(employment.address.length){
                                                setShowInput("EmploymentamountBeingMadeMonthly")
                                            setQuestionShow({
                                                ...questionShow,
                                                Employmentaddress: true
            
                                            })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="Address"
                                />
                                <div onClick={e => {
                                    if(employment.address.length){
                                        setShowInput("EmploymentamountBeingMadeMonthly")
                                    setQuestionShow({
                                        ...questionShow,
                                        Employmentaddress: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        EmploymentamountBeingMadeMonthly: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="amountBeingMadeMonthly"
                                    required
                                    value={employment.sideHustle.amountBeingMadeMonthly}
                                    onChange={handleSideHustleChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(employment.sideHustle.amountBeingMadeMonthly.length){
                                                setShowInput("Employmentyears")
                                                setQuestionShow({
                                                    ...questionShow,
                                                    EmploymentamountBeingMadeMonthly: true
                
                                                })
    
                                            }

                                            
                                        }
        
                                    } }
                                    type="number"
                                    placeholder="How much do you make?"
                                />
                                <div onClick={e => {
                                    if(employment.sideHustle.amountBeingMadeMonthly.length){
                                        setShowInput("Employmentyears")
                                        setQuestionShow({
                                            ...questionShow,
                                            EmploymentamountBeingMadeMonthly: true
        
                                        })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        Employmentyears: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="years"
                                    required
                                    value={employment.years}
                                    onChange={handleEmploymentChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(employment.years.length){
                                                setShowInput("Userdob")
                                            setQuestionShow({
                                                ...questionShow,
                                                Employmentyears: true
            
                                            })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="number"
                                    placeholder="Number of years you have worked"
                                />
                                <div onClick={e => {
                                    if(employment.years.length){
                                        setShowInput("Userdob")
                                    setQuestionShow({
                                        ...questionShow,
                                        Employmentyears: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        Userdob: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="dob"
                                    required
                                    value={state.dob}
                                    onChange={handleInputChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(state.dob.length){
                                                setShowInput("Useraddress")
                                            setQuestionShow({
                                                ...questionShow,
                                                Userdob: true
            
                                            })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="date"
                                    placeholder="Date of Birth"
                                />
                                <div onClick={e => {
                                    if(state.dob.length){
                                        setShowInput("Useraddress")
                                    setQuestionShow({
                                        ...questionShow,
                                        Userdob: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        Useraddress: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="address"
                                    required
                                    value={state.address}
                                    onChange={handleInputChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(state.address.length){
                                                setShowInput("Userstate")
                                            setQuestionShow({
                                                ...questionShow,
                                                Useraddress: true
            
                                            })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="address"
                                    placeholder="House Address"
                                />
                                <div onClick={e => {
                                    if(state.address.length){
                                        setShowInput("Userstate")
                                    setQuestionShow({
                                        ...questionShow,
                                        Useraddress: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        Userstate: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="state_of_residence"
                                    required
                                    value={state.state_of_residence}
                                    onChange={handleInputChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(state.state_of_residence.length){
                                                setShowInput("UserphoneNumber")
                                                setQuestionShow({
                                                    ...questionShow,
                                                    Userstate: true
                
                                                })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="State of residence"
                                />
                                <div onClick={e => {
                                    if(state.state_of_residence.length){
                                        setShowInput("UserphoneNumber")
                                        setQuestionShow({
                                            ...questionShow,
                                            Userstate: true
        
                                        })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        UserphoneNumber: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="phoneNumber"
                                    required
                                    value={state.phoneNumber}
                                    onChange={handleInputChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(state.phoneNumber.length){
                                                setShowInput("UserInstagram")
                                            setQuestionShow({
                                                ...questionShow,
                                                UserphoneNumber: true
            
                                            })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="number"
                                    placeholder="Phone number"
                                />
                                <div onClick={e => {
                                     if(state.phoneNumber.length){
                                        setShowInput("UserInstagram")
                                    setQuestionShow({
                                        ...questionShow,
                                        UserphoneNumber: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        UserInstagram: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="socialMediaHandle3"
                                    required
                                    value={state.socialMediaHandle3}
                                    onChange={handleInputChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(state.socialMediaHandle3.length){
                                                setShowInput("UserLinkedin")
                                            setQuestionShow({
                                                ...questionShow,
                                                UserInstagram: true
            
                                            })
    
                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="e.g www.instagram.com/shecluded"
                                />
                                <div onClick={e => {
                                    if(state.socialMediaHandle3.length){
                                        setShowInput("UserLinkedin")
                                    setQuestionShow({
                                        ...questionShow,
                                        UserInstagram: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        UserLinkedin: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="socialMediaHandle1"
                                    required
                                    value={state.socialMediaHandle1}
                                    onChange={handleInputChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(state.socialMediaHandle1.length){
                                                setState({
                                                    ...state,
                                                    fetchingData: true
                                                  });
                                                  setShowInput("kkkk")
                                                registerAnAccount()
    
                                            }
                                            

                                        }
        
                                    } }
                                    type="text"
                                    placeholder="www.linkedin.com/shecluded"
                                />
                                <div onClick={e => {
                                    if(state.socialMediaHandle1.length){
                                        setState({
                                            ...state,
                                            fetchingData: true
                                          });
                                          setShowInput("kkkk")
                                        registerAnAccount()

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwneraddress: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="address"
                                    required
                                    value={businessOwner.address}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.address.length){
                                                setShowInput("BusinessOwnercompanyName")
                                            setQuestionShow({
                                                ...questionShow,
                                                BusinessOwneraddress: true
            
                                            })

                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="Business Location"
                                />
                                <div onClick={e => {
                                    if(businessOwner.address.length){
                                        setShowInput("BusinessOwnercompanyName")
                                    setQuestionShow({
                                        ...questionShow,
                                        BusinessOwneraddress: true
    
                                    })
                                }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnercompanyName: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="companyName"
                                    required
                                    value={businessOwner.companyName}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.companyName.length){
                                                setShowInput("BusinessOwnersector")
                                                setQuestionShow({
                                                    ...questionShow,
                                                    BusinessOwnercompanyName: true
                
                                                })

                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="Business Name"
                                />
                                <div onClick={e => {
                                    if(businessOwner.companyName.length){
                                        setShowInput("BusinessOwnersector")
                                        setQuestionShow({
                                            ...questionShow,
                                            BusinessOwnercompanyName: true
        
                                        })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnersector: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="sector"
                                    required
                                    value={businessOwner.sector}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.sector.length){
                                                setShowInput("BusinessOwnercacRegNumber")
                                            setQuestionShow({
                                                ...questionShow,
                                                BusinessOwnersector: true
            
                                            })

                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="eg. Real estate, Online influencer"
                                />
                                <div onClick={e => {
                                    if(businessOwner.sector.length){
                                        setShowInput("BusinessOwnercacRegNumber")
                                    setQuestionShow({
                                        ...questionShow,
                                        BusinessOwnersector: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnercacRegNumber: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="cacRegNumber"
                                    required
                                    value={businessOwner.cacRegNumber}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(event.key === 'Enter'){
                                                if(businessOwner.cacRegNumber.length){
                                                    setShowInput("BusinessOwnermonthlyRevenue")
                                                    setQuestionShow({
                                                ...questionShow,
                                                BusinessOwnercacRegNumber: true
            
                                            })
    
                                                }
                                                
                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="CAC number"
                                />
                                <div onClick={e => {
                                    if(businessOwner.cacRegNumber.length){
                                        setShowInput("BusinessOwnermonthlyRevenue")
                                        setQuestionShow({
                                    ...questionShow,
                                    BusinessOwnercacRegNumber: true

                                })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnermonthlyRevenue: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="monthlyRevenue"
                                    required
                                    value={businessOwner.monthlyRevenue}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.monthlyRevenue.length){
                                                setShowInput("BusinessOwnernumberOfEmployees")
                                            setQuestionShow({
                                                ...questionShow,
                                                BusinessOwnermonthlyRevenue: true
            
                                            })

                                            }
                                            
                                        }
        
                                    } }
                                    type="number"
                                    placeholder="Monthly Revenue"
                                />
                                <div onClick={e => {
                                    if(businessOwner.monthlyRevenue.length){
                                        setShowInput("BusinessOwnernumberOfEmployees")
                                    setQuestionShow({
                                        ...questionShow,
                                        BusinessOwnermonthlyRevenue: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnernumberOfEmployees: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="numberOfEmployees"
                                    required
                                    value={businessOwner.numberOfEmployees}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.numberOfEmployees.length){
                                                setShowInput("BusinessOwnerwebsite")
                                            setQuestionShow({
                                                ...questionShow,
                                                BusinessOwnernumberOfEmployees: true
            
                                            })

                                            }
                                            
                                        }
        
                                    } }
                                    type="number"
                                    placeholder="Number of Employees"
                                />
                                <div onClick={e => {
                                    if(businessOwner.numberOfEmployees.length){
                                        setShowInput("BusinessOwnerwebsite")
                                    setQuestionShow({
                                        ...questionShow,
                                        BusinessOwnernumberOfEmployees: true
    
                                    })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnerwebsite: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="website"
                                    required
                                    value={businessOwner.website}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.website.length){
                                                setShowInput("BusinessOwnerinstagramHandle")
                                                setQuestionShow({
                                                    ...questionShow,
                                                    BusinessOwnerwebsite: true
                
                                                })

                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="Website"
                                />
                                <div onClick={e => {
                                    if(businessOwner.website.length){
                                        setShowInput("BusinessOwnerinstagramHandle")
                                        setQuestionShow({
                                            ...questionShow,
                                            BusinessOwnerwebsite: true
        
                                        })

                                    }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                        BusinessOwnerinstagramHandle: (
                            <div className="d-flex align-items-center w-100">
                            <input
                                    name="instagramHandle"
                                    required
                                    value={businessOwner.instagramHandle}
                                    onChange={handleBusinessOwnerChange}
                                    onKeyPress={event =>{
                                        if(event.key === 'Enter'){
                                            if(businessOwner.website.length){
                                                setShowInput("Userdob")
                                            setQuestionShow({
                                                ...questionShow,
                                                BusinessOwnerinstagramHandle: true
            
                                            })

                                            }
                                            
                                        }
        
                                    } }
                                    type="text"
                                    placeholder="Instagram Handle"
                                />
                                <div onClick={e => {
                                   if(businessOwner.website.length){
                                    setShowInput("Userdob")
                                    setQuestionShow({
                                        ...questionShow,
                                        BusinessOwnerinstagramHandle: true

                                    })

                                }
                                }} className="btn btn-shecluded btn-lg cursor ml-2" style={{height: "60px", paddingTop: "18px"}} >
                                
                                    Send
                                </div>
                            </div>
                        ),
                    }[showInput]}
                </div>
            </div>


          
            



        </div>
     );
}
 
export default Chat;
