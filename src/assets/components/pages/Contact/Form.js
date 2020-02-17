import React, { Component } from 'react';
import '../Contact/form.css';

const initialState = {
	name: '',
	email: '',
	message: '',
	nameError: '',
	emailError: ''
};

export default class Form extends Component {
	state = initialState;

	change = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	checkEmail = () => {
		let nameError = '';
		let emailError = '';
		if (!this.state.name) {
			nameError = 'Please fill this field with your name';
		}

		if (!this.state.email.includes('@')) {
			emailError = 'Please enter your email address';
		}

		if (nameError || emailError) {
			this.setState({ nameError, emailError });
			return false;
		}
		return true;
	};

	onSubmit = (e, msg) => {
		e.preventDefault();
		const isValid = this.checkEmail();
		if (isValid) {
			console.log(
				'Your name: ',
				this.state.name,
				'Your email: ',
				this.state.email,
				'Your message: ',
				this.state.message
			);
			// clear the form
			this.setState(initialState);
			console.log(msg);
		}

		// this.setState({
		// 	name: '',
		// 	email: '',
		// 	message: ''
		// });
	};

	render() {
		return (
			<div className="form-container">
				<form>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={this.state.name}
						onChange={(e) => this.change(e)}
						required=""
					/>

					<div className="error-message">{this.state.nameError}</div>

					<input
						type="email"
						name="email"
						placeholder="Enter E-mail"
						value={this.state.email}
						onChange={(e) => this.change(e)}
						required=""
					/>

					<div className="error-message">{this.state.emailError}</div>

					<textarea
						type="text"
						name="message"
						placeholder="Your Message"
						value={this.state.message}
						onChange={(e) => this.change(e)}
					/>
					<button onClick={(e, msg) => this.onSubmit(e, 'Submission success')}>submit</button>
				</form>
			</div>
		);
	}
}
