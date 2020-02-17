import React, { Component } from 'react';
import '../Contact/contact.css';
import Form from '../Contact/Form';
export default class Contact extends Component {
	render() {
		return (
			<div className="contact-container">
				<h2>contact</h2>
				<Form />
			</div>
		);
	}
}
