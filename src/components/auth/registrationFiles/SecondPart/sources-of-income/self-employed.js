import React, { useState } from 'react'

export default function SelfEmployed({ changeRegistrationStep, setSelfEmployed }) {
    const [state, setState] = useState({
        businessName: '',
        address: '',
        website: '',
        phoneNumber: '',
        lengthInBusiness: '',
        monthlyRevenue: '',
        cacRegNumber: '',
        socialMediaHandle1: "",
        socialMediaHandle2: '',
    })
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        setSelfEmployed({
            country: "Nigeria",
            email: "",
            monthlyExpense: "",
            monthlyIncome: state.monthlyRevenue,
            companyName: state.businessName,
            phoneNumber: state.phoneNumber,
            companyRcNumber: state.cacRegNumber,
            state: "",
            website: state.website,  
            createdAt: new Date(),
            delFlag: "",
            durationInCompany: state.lengthInBusiness,
            employmentType: "company",            
            id: 0,
            position: "",
            salary: "",
            sideHustle: "",
            sideIncome: "",
            updatedAt: new Date(),
            version: 0
        })
		changeRegistrationStep(3)
    }
    const { businessName, website, phoneNumber, lengthInBusiness, monthlyRevenue, cacRegNumber, socialMediaHandle1 } = state;
    return (
        <div>
            <form onSubmit={onSubmit}>							
                <div className="row">								
                    <div className="form-group col-12 col-md-12">
                        <input className="form-control" name="businessName" value={businessName} required onChange={handleInputChange} type="text" placeholder="Business Name"/>
                    </div>
                </div>
                {/* <div className="row">								
                    <div className="form-group col-12 col-md-12">
                        <input className="form-control" name="address" value={address} required onChange={handleInputChange} type="address" placeholder="Address"/>
                    </div>
                </div> */}
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label className="text-body" htmlFor="website">Website</label>
                        <input className="form-control" name="website" value={website} required onChange={handleInputChange} type="text" placeholder="Website"/>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label className="text-body" htmlFor="phoneNumber">Phone Number</label>
                        <input className="form-control" name="phoneNumber" value={phoneNumber} required onChange={handleInputChange} type="address" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12 col-md-12">
                        <label className="text-body" htmlFor="lengthInBusiness">How long have you been in business?</label>
                        <select className="form-control" required="required" name="lengthInBusiness" value={lengthInBusiness} onChange={handleInputChange}>
                            <option value="" defaultValue>How long have you been in business?</option>
                            <option value="0">0-12 months</option>
                            <option value="1">1-2 years</option>										
                            <option value="2">2 years or more</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label className="text-body" htmlFor="monthlyRevenue">Monthly Revenue</label>
                        <select className="form-control" required="required" name="monthlyRevenue" value={monthlyRevenue} onChange={handleInputChange}>
                            <option value="" defaultValue>Monthly Revenue</option>
                            <option value="100000">Less than 100,000</option>
                            <option value="500000">100,000 - 500,000</option>										
                            <option value="500000">500,000 or more</option>
                        </select>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label className="text-body" htmlFor="socialMediaHandle1">Instagram Handle"</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text group-instagram"><i className="fab fa-instagram" aria-hidden="true"></i></span>
                            </div>
                            <input className="form-control" name="socialMediaHandle1" value={socialMediaHandle1} onChange={handleInputChange} type="text" placeholder="Instagram Handle" />
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    {/* <label className="text-shecluded col-12 col-md-12" htmlFor="name">For Verification</label>								 */}
                    <div className="form-group col-12 col-md-12">
                        <input className="form-control" name="cacRegNumber" value={cacRegNumber} required onChange={handleInputChange} type="text" placeholder="Company Business Number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <button type="submit" className="btn btn-shecluded btn-lg">Next</button>
                    </div>
                </div>
            </form>	
        </div>
    )
}
