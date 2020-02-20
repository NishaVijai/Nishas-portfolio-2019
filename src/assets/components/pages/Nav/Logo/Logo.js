import React, { Component } from 'react';
import './logo.css';

import { Link } from 'react-router-dom';
export default class Logo extends Component {
	render() {
		return (
			<div>
				<div className="logo-div">
					{/* <div className="logo" /> */}
					<Link className="menu-link-li menu-link-nav" to="/Home">
						<li>
							<div className="logo" />
						</li>
					</Link>
				</div>
			</div>
		);
	}
}
