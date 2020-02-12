import React, { Component } from 'react';
import '../Contact/contact.css';
export default class Contact extends Component {
	render() {
		return (
			<div className="contact-container">
				<h2>contact</h2>

				<div className="form-container">
					{/* <h2>contact</h2> */}
					<form action="">
						<input type="text" name="name" placeholder="Name" required />

						<input type="email" name="email" placeholder="Enter E-mail" required />

						<textarea type="text" name="message" placeholder="Your Message" />
						<button>submit</button>
					</form>
				</div>
			</div>
		);
	}
}
