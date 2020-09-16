import React, { useState } from 'react'
// import { STATES } from "../../../../../dev-data/states";

export default function BusinessOwner({ changeRegistrationStep, setBusinessOwner, setCompletedRegistration}) {
    const [state, setState] = useState({
        companyName: '',
        businessLocation: '',
        address: '',
        website: '',
        phoneNumber: '',
        lengthInBusiness: '',
        monthlyRevenue: '',
        numberOfEmployees: '',
        cacRegNumber: '',
        instagramHandle: 'www.instagram.com/',
        sector: '',
        country: '',
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const goBack = () =>{
        changeRegistrationStep("source")
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await setBusinessOwner({
            address: state.address,
            companyRcNumber: state.cacRegNumber,
            country: "Nigeria",
            email: "",
            businessLocation: state.businessLocation,
            monthlyExpense: null,
            monthlyIncome: state.monthlyRevenue,
            companyName: state.companyName,
            phoneNumber: state.phoneNumber,
            state: "",
            country:"",
            website: state.website,
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: state.lengthInBusiness,
            employmentType: "business",
            id: 0,
            position: "",
            salary: "",
            sector: state.sector,
            sideHustle: "",
            sideIncome: "",
            updatedAt: new Date(),
            version: 0
        })
        await setCompletedRegistration(true)
    }
    const { companyName, businessLocation, address, website, phoneNumber, country, lengthInBusiness, monthlyRevenue, numberOfEmployees, cacRegNumber, instagramHandle, sector} = state;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="header-owner">
            <div className="row d-flex flex-flow-wrap align-items-center mt-2">
              <h4>I am an entrepreneur working from</h4>
              <label className="text-body" htmlFor="companyName"></label>

              <select
                className="form-controlX mr-3 ml-3"
                name="businessLocation"
                value={businessLocation}
                onChange={handleInputChange}
                required
                type="text"
              >
                <option value="Home" defaultValue>
                  Home
                </option>
                <option value="An Office">An Office</option>
              </select>
              {/* <input className="form-controlX mr-3 ml-3" name="companyName" value={companyName} onChange={handleInputChange} required type="text" placeholder="Business Name" /> */}

              <h4>, We work from</h4>
              <label className="text-body" htmlFor="businessLocation"></label>
              <input
                className="form-controlX mr-3 ml-3"
                name="address"
                value={address}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Business Location"
              />
            </div>

            {/* <div className="row d-flex flex-flow-wrap align-items-center mt-2">
              <h4>In</h4>

              <label className="text-body" htmlFor="state"></label>
              <input
                className="form-controlX mr-3 ml-3form-controlX"
                name="state_of_residence"
                required
                value={state.state_of_residence}
                onChange={handleInputChange}
                type="address"
                placeholder="State"
              />
              <select
                className="form-controlX"
                required
                name="state_of_residence"
                // value={state.state_of_residence}
                onChange={handleInputChange}
              >
                <option value="" >
                  State
                </option>
                {STATES.map((state) => {
                  return (
                    <option value={state} key={state}>
                      {state}
                    </option>
                  );
                })}
              </select>

              <h4>,</h4>

              <label className="text-body" htmlFor="country"></label>
              <input
                className="form-controlX mr-3 ml-3form-controlX"
                name="country"
                required
                value={state.country}
                onChange={handleInputChange}
                type="address"
                placeholder="country"
              />

              <h4>.</h4>
            </div> */}

            <div className="row d-flex flex-flow-wrap align-items-center mt-5">
              <h4>The name of my business is</h4>
              <label className="text-body" htmlFor="companyName"></label>
              <input
                className="form-controlX mr-3 ml-3"
                name="companyName"
                value={companyName}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Business Name"
              />

              <h4>I run a</h4>
              <input
                className="form-controlX mr-3 ml-3"
                name="sector"
                value={sector}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Your business sector?"
              />


              {/* <label className="text-body" htmlFor="sector"></label>
              <select
                className="form-controlX mr-3 ml-3"
                required="required"
                name="sector"
                value={sector}
                onChange={handleInputChange}
              >
                <option value="" defaultValue>
                  What's your business sector?
                </option>
                <option value="Catering">Retail - Catering</option>
                <option value="Dropshipping">Retail - Dropshipping</option>
                <option value="F- Skincare and cosmetics">
                  Retail - Skincare and Cosmetics
                </option>
                <option value="Events">Retail - Events</option>
                <option value="Real estate">Retail - Real estate</option>
                <option value="Hair">Retail - Hair</option>
                <option value="Online influencer">Online influencer</option>
                <option value="Style Consultant">Style consultant</option>
                <option value="Fashion">Manufacturing - Fashion</option>
                <option value="M- Skincare and cosmetics">
                  Manufacturing - Skincare and Cosmetics
                </option>
                <option value="Social media">Digital - Social media</option>
                <option value="FMCG">Retail - FMCG</option>
                <option value="Export">Export</option>
                <option value="Other">Other</option>
              </select>
               */}
              <h4>business.</h4>
            </div>

            <div className="row d-flex flex-flow-wrap align-items-center mt-2">
              <h4>My business CAC number is </h4>
              {/* <select
                className="form-controlX mr-3 ml-3"
                name="companyName"
                value={cacRegNumber}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Business Name"
              >
                <option value="" defaultValue>
                  Registered with CAC
                </option>
                <option value="An Office">Not registered with CAC.</option>
              </select> */}

              <input
                className="form-controlX mr-3 ml-3"
                name="cacRegNumber"
                value={cacRegNumber}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="CAC number"
              />

              <h4>My business makes</h4>
              {/* <label className="text-body" htmlFor="monthlyRevenue"></label> */}
              <input
                className="form-controlX mr-3 ml-3"
                name="monthlyRevenue"
                value={monthlyRevenue}
                onChange={(e) => {
                  if(e.target.value.match(/^[0-9]*$/)){
                    handleInputChange(e)

                  }
                }}
                required
                type="text"
                placeholder="Monthly Revenue?"
              />
              {/* <select
                className="form-controlX mr-3 ml-3"
                required="required"
                name="monthlyRevenue"
                value={monthlyRevenue}
                onChange={handleInputChange}
              >
                <option value="" defaultValue>
                  Monthly Revenue
                </option>
                <option value="0-100,000">0 - 100,000</option>
                <option value="100,001-200,000">100,001 - 200,000</option>
                <option value="200,001-400,000">200,001 - 400,000</option>
                <option value="400,001-600,000">400,001 - 600,000</option>
                <option value="600,001-800,000">600,001 - 800,000</option>
                <option value="800,001-1,000,000">800,001 - 1,000,000</option>
                <option value="1,000,001-3,000,000">
                  1,000,001 - 3,000,000
                </option>
                <option value="3,000,001-5,000,000">3,000,001-5,000,000</option>
                <option value="5,000,001+">5,000,001 - more</option>
              </select> */}

              <h4>Monthly.</h4>
            </div>

            <div className="row d-flex flex-flow-wrap align-items-center mt-5 ">
              <h4>I have </h4>
              <input
                className="form-controlX mr-3 ml-3"
                name="numberOfEmployees"
                value={numberOfEmployees}
                onChange={(e) => {
                  if(e.target.value.match(/^[0-9]*$/)){
                    handleInputChange(e)

                  }
                }}
                required
                type="text"
                placeholder="Number of Employees?"
              />
              {/* <label className="text-body" htmlFor="numberOfEmployees"></label> */}
              {/* <select
                className="form-controlX mr-3 ml-3"
                required="required"
                name="numberOfEmployees"
                value={numberOfEmployees}
                onChange={handleInputChange}
              >
                <option value="" defaultValue>
                  Number of Employees
                </option>
                <option value="10">0-10</option>
                <option value="20">11-20</option>
                <option value="50">21-50</option>
                <option value="100">50 or more</option>
              </select> */}
              <h4>Employee(s). </h4>

              <h4 className="ml-2">{/*  */}Our website is</h4>

              <label className="text-body" htmlFor="website"></label>
              <input
                className="form-controlX mr-3 ml-3"
                name="website"
                value={website}
                onChange={handleInputChange}
                type="text"
                placeholder="Website"
              />
            </div>

            <div className="get d-flex flex-flow-wrap align-items-center mt-2 flex-start">
              <h4>and you can find us on Instagram on</h4>
              <label className="text-body" htmlFor="instagramHandle"></label>

              {/* <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text group-instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </span>
                </div>
                <input
                  className="form-controlY"
                  name="instagramHandle"
                  value={instagramHandle}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Instagram Handle"
                />
              </div> */}
              <input
                          className="form-controlX"
                          value={instagramHandle}
                          onChange={(e) => {
                            if(instagramHandle.includes("www.instagram.com/") ){
                              handleInputChange(e)
                            }else{
                              setState({
                                ...state,
                                [e.target.name]: "www.instagram.com/"
                              });

                            }
                          }}
                          name="instagramHandle"
                          type="text"
                          placeholder="e.g www.instagram.com/shecluded"
                        />
            </div>

            <div className="mt-5 f-health">
              <div
                onClick={() => changeRegistrationStep("source")}
                style={{ cursor: "pointer", color: "#f0008c" }}
                className="mb-4 "
              >
                {" "}
                Go Back
              </div>

              <button type="submit" className="btn btn-shecluded btn-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}
