import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ScrollTopWithoutRouter extends Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

	componentDidUpdate(prevProps)
	{
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}

	render()
	{
		return (
			<span></span>
		)
	}
}

const ScrollTop = withRouter(ScrollTopWithoutRouter);
export default ScrollTop;