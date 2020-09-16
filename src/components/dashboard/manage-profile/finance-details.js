import React, { useState, useEffect } from 'react';
import { bankListUrl, timeOut } from '../../../api/rootUrls';
import axios from 'axios';

const FinanceDetails = ({ updateFinanceInformation, bankDetails}) => {
    const [state, setState] = useState({
        banks: [],
    })
    const [bankState, setBankState] = useState({
        bankCode: '', 
        accountNumber: '',
        accountName: '',
        createdAt: "",
        defaultBank: true,
        delFlag: "",
        id: 0,
        updatedAt: new Date(),
        version: 0
    })
	const { token } = JSON.parse(sessionStorage.getItem('userData'));
    useEffect(() => {
        //Set Bank details only when bankDetails prop is defined
        if(bankDetails){
            setBankState({
                ...bankState,
                bankCode: bankDetails.bankCode,
                accountNumber: bankDetails.accountNumber
            })
        }
		axios({
			url: `${bankListUrl}`,
			method: 'get',
			headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
			timeout: timeOut
		})
		.then(result => {
			if(result.data.respCode === "Successful"){
                setState({
                    ...state,
                    banks: result.data.respBody
                })
			} else {

            }
		})
		.catch(err => {
			console.log(err)
		})
    }, [])
    const onBankDetailsChange = (e) => {
		setBankState({
			...bankState,
            [e.target.name]: e.target.value
		})
    }
    const onSubmit = (e) => {
		e.preventDefault();
        updateFinanceInformation(bankState)
    }
    const { accountNumber, bankCode } = bankState;
    return (
        <div>
            <h4>Finance</h4>
            <div>
                <div className="row">
                    <div className="col-md-8 col-sm-12 manage-profile-form-fields">
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="form-group col-12 col-md-4">
                                <label className="text-body" htmlFor="name">Bank Name</label>
                            </div>
                            <div className="form-group col-12 col-md-8">
                                <label className="text-body" htmlFor="name">Bank Details</label>
                                <select className="form-control" onChange={onBankDetailsChange} value={bankCode} required="required" name="bankCode">
                                    <option value="">Select Bank</option>
                                    {
                                        state.banks ? 
                                        state.banks.map((bank, i) => {                                    
                                            return <option value={bank.code} key={i}>{bank.name}</option>
                                        })
                                        :
                                        null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12 col-md-4">
                                <label className="text-body" htmlFor="name">Account Number</label>
                            </div>
                            <div className="form-group col-12 col-md-8">
                                <input className="form-control" onChange={onBankDetailsChange} value={accountNumber} name="accountNumber" required type="number" placeholder="Account Number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-12 col-md-4"></div>
                            <div className="form-group col-12 col-md-8">
                                <button type="submit" className="btn btn-shecluded btn-lg">Update Profile</button>
                            </div>
                        </div>
                    </form>	
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FinanceDetails;