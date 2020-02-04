import React, { Component } from 'react';
import '../Resume/resume.css';

export default class Resume extends Component {
	render() {
		return (
			<div className="resume-container">
				<div className="resume-left">
					<div className="personal">
						<h4>personal</h4>
						<p>
							self-taught front-end developer with no prior experience. made few projects and obtained
							certificates from{' '}
							<a href="https://chingu.io/" target="_blank" rel="noopener  noreferrer">
								CHINGU-voyage
							</a>. At present learning advanced css and working on small projects to add on my portfolio.
						</p>
					</div>
					<div className="design">
						<h4>design</h4>
						<p>Self-taught</p>
					</div>
					<div className="front-end">
						<h4>front-end</h4>
						<p>Self-taught</p>
					</div>
					<div className="back-end">
						<h4>back-end</h4>
						<p>Self-taught</p>
					</div>
				</div>

				<div className="resume-right">
					<div className="first">
						<div className="title">
							<h2>front-end web developer</h2>
							<address>Skibsegen 96</address>

							<h4>experience</h4>
							<p>Self-taught</p>
						</div>
					</div>
					<div className="second">
						<div className="experience">
							<h4>experience</h4>
							<p>Self-taught</p>
						</div>
					</div>
					<div className="third">
						<div className="education">
							<h4>education</h4>
							<p>Self-taught</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
