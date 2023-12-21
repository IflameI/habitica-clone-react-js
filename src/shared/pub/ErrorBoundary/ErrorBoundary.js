import React, {Component} from 'react';
import ErrorBoundaryMessage from './ErrorBoundaryMessage';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {error: null, errorInfo: null};

		if (this.props.showError === false) {
			this.state.error = null;
			this.state.errorInfo = null;
		}
	}

	componentDidCatch = (error, info) => {
		this.setState({error: error, errorInfo: info});
	};

	render() {
		if (this.state.errorInfo) {
			return (
				<ErrorBoundaryMessage/>
			);
		} else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
