import React, { Component } from 'react';
import '../Resume/resume.css';

export default class Resume extends Component {
	render() {
		return (
			<div className="resume-container">
				<div className="resume-left">
					<div className="personal">
						<h3>personal</h3>
						<p>
							self-taught front-end developer with no prior experience. Made few projects and obtained
							certificates from{' '}
							<a href="https://chingu.io/" target="_blank" rel="noopener  noreferrer">
								CHINGU-voyage
							</a>. At present learning advanced css and working on small projects to add on my portfolio.
						</p>
					</div>
					{/* <div className="design">
						<h4>design</h4>
						<p>Self-taught</p>
					</div> */}

					<hr />

					<div className="front-end">
						<h3>front-end</h3>
						<div className="front-end-lang">
							<p>html</p>
							<div className="side-line">
								<div className="fill-in fill-80">80%</div>
							</div>

							<p>css</p>
							<div className="side-line">
								<div className="fill-in fill-70">70%</div>
							</div>

							<p>javascript</p>
							<div className="side-line">
								<div className="fill-in fill-60">60%</div>
							</div>

							<p>react</p>
							<div className="side-line">
								<div className="fill-in">50%</div>
							</div>
						</div>
					</div>

					<hr />

					<div className="back-end">
						<h3>back-end</h3>
						<div className="back-end-lang">
							<p>python</p>
							<div className="side-line">
								<div className="fill-in">50%</div>
							</div>

							<p>r</p>
							<div className="side-line">
								<div className="fill-in fill-30">30%</div>
							</div>
						</div>
					</div>

					<hr />

					<div className="languages">
						<h3>languages</h3>
						<div className="lang">
							<p>english</p>
							<div className="side-line">
								<div className="fill-in fill-70">70%</div>
							</div>

							<p>danish</p>
							<div className="side-line">
								<div className="fill-in">50%</div>
							</div>

							<p>tamil</p>
							<div className="side-line">
								<div className="fill-in fill-80">80%</div>
							</div>

							<p>hindi</p>
							<div className="side-line">
								<div className="fill-in">50%</div>
							</div>

							<p>urdu</p>
							<div className="side-line">
								<div className="fill-in">50%</div>
							</div>
						</div>
					</div>

					<hr />
				</div>

				<div className="resume-right">
					<div className="empty" />
					<div className="first">
						<div className="title">
							<h2>front-end web developer</h2>

							<hr />

							<p>
								Address: <address>Skibsegen 96, 3070 Snekkersten</address>
							</p>

							<p>
								Mail: <a href="mailto:nishavijai@gmail.com">nishavijai@gmail.com</a>
							</p>

							<p>
								Mobile: <a href="tel:+45-53265717">+45-53265717</a>
							</p>

							<p>
								Website: <a href="https://nishasportfolio.netlify.com/">nishasportfolio</a>
							</p>
						</div>
					</div>

					<div className="second">
						<div className="experience">
							<h3>experience</h3>
							<div className="project-1 projects">
								<div>
									<p>Oct 2019 - Nov 2019</p>
									<p>front-end developer</p>
									<p>chingu-voyage 12</p>
								</div>

								<hr />

								<div className="project-description">
									<p>solo project - built a cloning website</p>
								</div>
							</div>

							<div className="project-2 projects">
								<div>
									<p>Sep 2019 - Oct 2019</p>
									<p>front-end developer</p>
									<p>chingu-voyage 11</p>
								</div>

								<hr />

								<div className="project-description">
									<p>solo project - built a cloning website</p>
								</div>
							</div>

							<div className="project-3 projects">
								<div>
									<p>June 2019 - July 2019</p>
									<p>front-end developer</p>
									<p>chingu-voyage 09</p>
								</div>

								<hr />

								<div className="project-description">
									<p>group project - built a cloning website</p>
								</div>
							</div>

							<div className="project-4 projects">
								<div>
									<p>May 2019 - June 2019</p>
									<p>front-end developer</p>
									<p>chingu-voyage 08</p>
								</div>

								<hr />

								<div className="project-description">
									<p>group project - built a cloning website</p>
								</div>
							</div>
						</div>
					</div>
					<div className="third">
						<div className="education">
							<h3>education</h3>
							<p>Self-taught</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
