import React, { Component } from 'react';
import '../Portfolio/certificate.css';

export default class Certificate extends Component {
	render() {
		return (
			<div className="certificates-container">
				<h3>Completion certificates from Chingu-Voyage</h3>
				<div className="certificate-container">
					<input type="radio" name="image" id="voyage09" checked />
					<input type="radio" name="image" id="voyage11" />
					<input type="radio" name="image" id="voyage12" />

					<div className="large-image" />
				</div>
			</div>
		);
	}
}
