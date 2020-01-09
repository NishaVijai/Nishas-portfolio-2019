import React, { Component } from 'react';
import './menuCSS.css';
import Contact from '../Contact/Contact';
export default class MenuCss extends React.Component {
	render() {
		let linksMarkup = this.props.links.map((link, index) => {
			return (
				<li>
					<a href={link.link}>{link.label}</a>
				</li>
			);
		});

		return (
			<div className="menu-css-container">
				<div className="logo-div">
					<div className="logo" />
				</div>
				<div className="menu-wrap">
					<input type="checkbox" className="toggler" />
					<div className="hamburger">
						<div />
					</div>

					<div className="menu">
						<div>
							<div>
								<ul>
									{linksMarkup}
									{/* <li>
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Projects</a>
									</li>
									<li>
										<a href="#">Resume</a>
									</li>
									<li>
										<a href="#">Contact Me</a>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<header className="showcase">
					<div className="container showcase-inner">
						<h1>Front-End Developer</h1>
						<p>Recent Projects</p>
						<button className="btn">
							<img src={require('../../images/down-arrow.png')} alt="" />
						</button>
					</div>
				</header>
				<footer className="footer-container">
					<div>
						<p>&copy; 2020 Noorunnisha Thamizuddin</p>
						<ul>
							<li>
								<a href="https://github.com/NishaVijai" target="_blank" rel="noopener  noreferrer">
									<img src={require('../../images/github-logo.png')} alt="" />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/RoshanVijai" target="_blank" rel="noopener  noreferrer">
									<img src={require('../../images/twitter.png')} alt="" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/noorun-nisha-319976105/"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img src={require('../../images/linkedIn.png')} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</div>
		);
	}
}
