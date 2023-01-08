import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super (props);
		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
	return { hasError: true };
	}

	componentDidCatch (error, info){
		console.log(error, info)
	}

	render(){
		if (this.state.hasError) {
			return (
				<div className="row hero-header small-vertical-padding">
				<div className="col-12 d-flex justify-content-center">
					<div className="align-self-center">
						<h1 className="text-center alt-font text-shecluded heading-xl">404</h1>
						<h4 className="text-center">This Page Broke. If this error persists, please contact Shecluded admin.</h4>
					</div>
				</div>
			</div>
			)
		}
		return this.props.children;
	}
}

export default ErrorBoundary;