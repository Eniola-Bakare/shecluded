import React from 'react'

export default function FinancialGoals({ changeRegistrationStep, setCompletedRegistration, handleInputChange, targetAmount }) {
    const onSubmit = (e) => {
		e.preventDefault()
		setCompletedRegistration(true)
    }

    const goBack = () => {
        changeRegistrationStep(2)
    }
    return (
        <div className="small-vertical-padding">	
            <div className="row">
                <div className="col-12 small-vertical-padding">
                    <h3 className="text-center title text-shecluded">Your Financial Goals</h3>
                    <p className="text-center font-weight-bold">We would love to learn about your goals so we can help you reach them</p>
                </div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="row mb-5">
                    <div className="form-group col-12 col-md-12">
                        <input className="form-control" value={targetAmount} onChange={handleInputChange} name="targetAmount" required type="Number" placeholder="How much would you like to make each month?"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <button type="button" onClick={goBack}  className="btn btn-outline-light btn-shecluded-outline btn-lg">Back</button>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <button type="submit" className="btn btn-shecluded btn-lg">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
