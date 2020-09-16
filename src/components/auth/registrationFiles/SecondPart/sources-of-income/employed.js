import React, { useState } from 'react'

export default function Employed({ changeRegistrationStep, setEmployed, setCompletedRegistration }) {
    const [state, setState ] = useState({
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
    const setSideHustle = () => {
        setState({
            ...state,
            hasSideHustle: !hasSideHustle
        })
    }
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSideHustleChange = (e) => {
        setState({
            ...state,
            sideHustle: {
                ...sideHustle,
                [e.target.name]: e.target.value
            }
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await setEmployed({
            address: state.address,
            country: "Nigeria",
            email: "",
            companyName: state.nameOfCompany,
            phoneNumber: state.phoneNumber,
            salary: state.monthlySalary,
            state: "",
            website: state.website,
            companyRcNumber: "",
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: null,
            employmentType: "employer",
            id: 0,
            monthlyExpense: null,
            monthlyIncome: 0,
            position: "",
            sideHustle: state.sideHustle.description,
            sideIncome: state.sideHustle.amountBeingMadeMonthly,
            updatedAt: new Date(),
            version: 0
        })
		await setCompletedRegistration(true)
	}

    const {
      hasSideHustle,
      nameOfCompany,
      address,
      years,
      phoneNumber,
      monthlySalary,
      sideHustle,
      position,
    } = state;
    return (
      <div className="header-regis">
        <form onSubmit={onSubmit}>
          <div className="header-employed">
            <div className="row d-flex flex-flow-wrap align-items-center mt-2">
              <h4>I work as a </h4>
              <label className="text-body" htmlFor="nameOfCompany"></label>
              <input
                className="form-controlX mr-3 ml-3"
                name="position"
                required
                value={position}
                onChange={handleInputChange}
                type="text"
                placeholder="Position at company"
              />

              <h4>at</h4>
              <label className="text-body" htmlFor="nameOfCompany"></label>
              <input
                className="form-controlX mr-3 ml-3"
                name="nameOfCompany"
                required
                value={nameOfCompany}
                onChange={handleInputChange}
                type="text"
                placeholder="Name of company"
              />

              <h4>which is located </h4>
            </div>

            <div className="row d-flex flex-flow-wrap align-items-center mt-2">
              <h4>at</h4>
              <label className="text-body" htmlFor="address"></label>
              <input
                className="form-controlX mr-3 ml-3form-controlX"
                name="address"
                required
                value={address}
                onChange={handleInputChange}
                type="text"
                placeholder="Address     "
              />

<h4>, And I make </h4>
              <input
                className="form-controlX mr-3 ml-3"
                name="amountBeingMadeMonthly"
                value={sideHustle.amountBeingMadeMonthly}
                onChange={(e) => {
                  if(e.target.value.match(/^[0-9]*$/)){
                    handleSideHustleChange(e)

                  }
                }}
                required
                type="text"
                placeholder="How much do you make?"
              />

<h4>a month.</h4>
              <h4>I have worked there for </h4>

              <input
                className="form-controlX mr-3 ml-3"
                name="years"
                value={years}
                onChange={(e) => {
                  if(e.target.value.match(/^[0-9]*$/)){
                    handleInputChange(e)

                  }
                }}
                required
                type="text"
                placeholder="Years"
              />
              
            </div>

            <div className="row d-flex flex-flow-wrap align-items-center mt-2">
              <h4>, And I make </h4>
              <input
                className="form-controlX mr-3 ml-3"
                name="amountBeingMadeMonthly"
                value={sideHustle.amountBeingMadeMonthly}
                onChange={(e) => {
                  if(e.target.value.match(/^[0-9]*$/)){
                    handleSideHustleChange(e)

                  }
                }}
                required
                type="text"
                placeholder="How much do you make?"
              />

              {/* <select
                className="form-controlX"
                required
                name="amountBeingMadeMonthly"
                onChange={handleSideHustleChange}
                value={sideHustle.amountBeingMadeMonthly}
              >
                <option value="" defaultValue>
                  How much do you make?
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

              <h4>a month.</h4>
              <h4>I have worked there for </h4>
              {/* <input
                className="form-controlX mr-3 ml-3"
                name="years"
                value={years}
                onChange={handleInputChange}
                type="number"
                placeholder="Years"
              /> */}

<input
                className="form-controlX mr-3 ml-3"
                name="years"
                value={years}
                onChange={(e) => {
                  if(e.target.value.match(/^[0-9]*$/)){
                    handleInputChange(e)

                  }
                }}
                required
                type="text"
                placeholder="Years"
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
