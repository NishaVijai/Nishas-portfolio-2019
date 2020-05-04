import React, { Component } from 'react';
import './home.css';

export default class Home extends Component {
	render() {
		return (
			<div>
				<header className="showcase">
					<div className="container showcase-inner">
						<h1>Front-End Developer</h1>
						<p>Recent Projects</p>
						<button className="btn">
							<img src={require('../../../images/down-arrow.png')} alt="" />
						</button>
					</div>
				</header>
			</div>
		);
	}
}
