import React, { Component } from 'react';

class ComingSoon extends Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 large-vertical-padding" style={{paddingTop: "200px"}}>
						<span className="pulsating">
							<h1 className="text-body text-center">Coming Soon</h1>
							<h3 className="text-shecluded text-center">Friday, <span className="alt-font">2</span>nd August <span className="alt-font">2019</span></h3>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default ComingSoon;