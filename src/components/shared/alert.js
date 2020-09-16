import React, { useEffect, useState, Fragment } from 'react';

const Alert = ({ message }) => {
	const [state, setState] = useState({
		show: true
	})

	useEffect(() => {
		const hideAlert = setTimeout(() => {
			setState({
				...state,
				show: false
			})
		}, 3000)

		return(() => {
			clearTimeout(hideAlert)
		})
	}, [])

	const close = () => {
		setState({
			...state,
			show: false
		})
	}
	return(
		<Fragment>
		{
			state.show ? 
			<div className="main-alert d-flex justify-content-center">
				<div className={"alert alert-danger alert-dismissible text-center font-md"} role="alert">
					<strong></strong> {message}
					<button type="button" className="close" onClick={close} aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
			: null
		}
		</Fragment>
	)
}
export default Alert;