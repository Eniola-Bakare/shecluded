import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

// this is actually the copy modified to meet the new design

	render(){
		if (this.state.hasError) {
			return (
				<div>
                    <div className="">
                        <img src={require ('../../assets/newRedesign-assets/error-image.png')} />
						<p>Money Isn't Here Yet Sis</p>
						<p>You have found a page that doesn't exist yet, return to previous page or home page</p>
						<button><Link to={'/home'}>RETURN TO HOMEPAGE</Link> </button>
                    </div>
                </div>
			)
		}
		return this.props.children;
	}
}

export default ErrorBoundary;