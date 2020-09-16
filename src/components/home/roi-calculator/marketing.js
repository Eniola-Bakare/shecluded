import React, { Component } from 'react';
import PriceCard from '../../priceCard'

class Marketing extends Component {

	constructor(props) 
	{
    super(props);
    this.state = {
			loanData: {dailyInterest: 0.004, durationType: "monthly", duration: 6, campaignCost: 0, customerLifeTimeValue: 0, numberOfNewCustomers: 0},
			duration: 6,
			isHidden: "true",
			maxDurationValue: 12,
			calculate : "Calculate"
		}
		this.handleChange = this.handleChange.bind(this);
		this.setDuration = this.setDuration.bind(this);
	}

	handleChange(event) 
	{
		let loanData = Object.assign({}, this.state.loanData);
		var value =  event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		var name = event.target.name;
		loanData[name] = value;

		if (name === "durationType" && value === "monthly") {
			this.setState({maxDurationValue: 12});
		} else if (name === "durationType" && value === "weekly") {
			this.setState({maxDurationValue: 52});
		}
		this.setState({loanData});
	}

	toggleHidden () {
		let loanData = Object.assign({}, this.state.loanData);
		if (this.state.calculate === "Reset Calculator"){
			loanData.customerLifeTimeValue = 0;
			loanData.campaignCost = 0;
			loanData.numberOfNewCustomers = 0;
			loanData.duration = 6;
		}
		this.setState({
		  isHidden: !this.state.isHidden,
		  calculate: this.state.calculate === "Calculate" ? "Reset Calculator" : "Calculate",
		  loanData
		})
	}

	calculateLoanAmount()
	{
		return this.state.loanData.campaignCost;
	}

	isActive(value){
		return 'btn btn-roi mt-2 mb-2 text-center'+ ((value===this.state.loanData.duration) ?' active':' default');
	}


	setDuration(e){
		let loanData = Object.assign({}, this.state.loanData);
		loanData.duration = Number(e.target.value.split(' ')[0])
		this.setState({loanData})
	}

	calculateInterest()
	{
		let monthDay = 30;

		let principal = parseFloat(this.calculateLoanAmount());
		let intervalBase = parseFloat(this.calculateLoanAmount()) / this.state.loanData.duration;
		let intervalInterest = (monthDay * this.state.loanData.duration * this.state.loanData.dailyInterest)/this.state.loanData.duration;
		let totalInterest = 0;

		for (let i = 1; i <= this.state.loanData.duration; i++) {
			let principalInterest = (principal * intervalInterest);
			totalInterest += principalInterest;
			principal -= intervalBase;
		}

		return totalInterest.toFixed(0);
	}

	calculateRevenue()
	{
		return this.state.loanData.customerLifeTimeValue * this.state.loanData.numberOfNewCustomers;
	}

	calculateTotalInvestment()
	{
		return (parseFloat(this.calculateLoanAmount()) + parseFloat(this.calculateInterest())).toFixed(0);
	}

	calculateRoI()
	{
		return (parseFloat(this.calculateRevenue()) - parseFloat(this.calculateTotalInvestment())).toFixed(0);
	}

	render()
	{
		const RoI = this.calculateRoI();
		const interest = this.calculateInterest();
		const totalInvestment = this.calculateTotalInvestment();
		const loanAmount = this.calculateLoanAmount();
		const revenue = this.calculateRevenue();
		const {loanData} = this.state;
		const enabled = loanData.campaignCost > 0 && loanData.customerLifeTimeValue > 0 && loanData.numberOfNewCustomers > 0;

		return (
			<div>
				<div className="roi-calculator-holder">
				<h1 className="ewwewwwee">Enter values</h1>


				<div className="form-row justify-content-aroundX p-3">
						<div className="form-group col-12 col-md-6">
							<h6 className="text-body"> Cost Of Campaign </h6>
							<div className="d-flex align-items-center">
								<label className="pr-2"> &#8358; </label>
								<input className="form-control" name="campaignCost" type="number" placeholder="e.g. 100000" value={loanData.campaignCost} onChange={this.handleChange} />

							</div>
						</div>

						<div className="form-group col-12 col-md-6">
							<h6 className="text-body ">Estimated Lifetime Value of A Customer</h6>
							<div className="d-flex align-items-center">
								<label className="pr-2"> &#8358; </label>
								<input className="form-control" name="customerLifeTimeValue" type="number" placeholder="e.g. 100000" value={loanData.customerLifeTimeValue} onChange={this.handleChange}/>

							</div>
						</div>

					</div>
					<div className="form-row justify-content-around p-3">
						<div className="form-group col-12 col-md-6">
							<h6 className="text-body ">Estimated Number Of New Customers</h6>
							<div className="d-flex align-items-center">
								<input className="form-control" name="numberOfNewCustomers" type="number" placeholder="e.g. 100000" value={loanData.numberOfNewCustomers} onChange={this.handleChange} />

							</div>
						</div>
						<div className="form-group col-12 col-md-6">
							<h6 className="text-body ">Loan Term</h6>
							<div className="d-flex align-items-center">
								<select onChange={this.setDuration} className="form-control" name="loanterm" >
                                <option selected>6 Months</option>
                                <option>12 Months</option>
                                <option>18 Months</option>
                               
                              </select>
							</div>
						</div>
						

					</div>
					<div className="row justify-content-center">
						<h2 className="ksndksn"> How are fees calculated?</h2>
					</div>


			

			
					<div className="d-flex justify-content-between mt-5 flex-wrap">
						
						<div className="form-row m-3">
							<div className="form-groupX ">
								<div className="fee-rate" > Monthly Interest</div>
								<select className="form-controlX eeww33" name="dailyInterest" value={loanData.dailyInterest} onChange={this.handleChange}>
									<option value="0.001">1%</option>
									<option value="0.002">2%</option>
									<option value="0.003">3%</option>
									<option value="0.004">4%</option>
									<option value="0.005">5%</option>
									<option value="0.006">6%</option>
								</select>
							</div>
						</div>
						<div className="result-eesdd m-3">
							<div className="d-flex justify-content-between mb-3">
								<h2 className="sdseewewwq">Loan Amount</h2>
								<h2 className="sdseewewwq"> &#8358; {Math.round(loanAmount)}</h2>
							</div>
							<div className="d-flex justify-content-between">
								<h2 className="sdseewewwq">Total Fees</h2>
								<h2 className="sdseewewwq">&#8358; { Math.round(interest)}</h2>
							</div>
							<hr />
							<div className="d-flex justify-content-between">
								<h2 className="sdseewewwq">Total Investment</h2>
								<h2 className="sdseewewwq">&#8358; {Math.round(totalInvestment)}</h2>
							</div>
						</div>
				</div>
				<div className="row justify-content-center">
						<button className="btn btn-roi btn-calc mt-2 mb-2 text-center" onClick={this.toggleHidden.bind(this)} disabled={!enabled}>{this.state.calculate}</button>
					</div>
					{!this.state.isHidden && <Child totalInvestment={totalInvestment} revenue={revenue} RoI={RoI} />}
				</div>
			</div>
		)
	}
}

const Child = (props) => (
	
	<div className="roi-result-infor mt-5">
	<div className="d-flex justify-content-center mt-4">

	<h2 className="mt-5">Marketing ROI Result</h2>
	</div>
	<hr/>
	<div className="form-row justify-content-around p-5 calculator">
	<div className="form-group col-12 col-md-3 price-br">

		<div className="d-flex justify-content-center mb-3">
			<PriceCard 
				style={{ color: "#1F57AC",fontSize: "20px", background: "rgba(228, 242, 254, 0.7)" }}
				value={props.totalInvestment}
				text={false} />
			</div>
		<p style={{fontSize: "20px"}} className="text-body text-center">Total Investment</p>
	</div>

	<div className="form-group align-items-center justify-content-center col-12 col-md-3 price-br">
		<div className="d-flex justify-content-center mb-3">
		<PriceCard 
			style={{ color: "#AC1F1F",fontSize: "20px", background: "rgba(254, 228, 228, 0.7)" }}
			value={props.revenue}
			text={false} />
		</div>
		<p style={{fontSize: "20px"}} className="text-body text-center">Revenue</p>

	</div>

	<div className="form-group col-12 col-md-3">

	<div className="d-flex justify-content-center mb-3">
		<PriceCard 
			style={{ color: "#1FAC46", fontSize: "20px", background: "rgba(229, 254, 228, 0.7)" }}
			value={props.RoI}
			text={false} />
		</div>
		<p style={{fontSize: "20px"}} className="text-body text-center">ROI</p>
	</div>
</div>

</div>

)

export default Marketing;