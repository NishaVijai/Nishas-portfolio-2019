import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer-container">
					<div>
						<p>&copy; 2020 Noorunnisha Thamizuddin</p>
						<ul>
							<li>
								<a href="https://github.com/NishaVijai" target="_blank" rel="noopener  noreferrer">
									<img src={require('../../../images/github-logo.png')} alt="" />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/RoshanVijai" target="_blank" rel="noopener  noreferrer">
									<img src={require('../../../images/twitter.png')} alt="" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/noorun-nisha-319976105/"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img src={require('../../../images/linkedIn.png')} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		);
	}
}
