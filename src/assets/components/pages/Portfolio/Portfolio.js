import React, { Component } from 'react';
import Certificate from './Certificate';
import '../Portfolio/portfolio.css';

export default class Portfolio extends Component {
	render() {
		return (
			<div className="portfolio-container">
				{/* <div>
					<ul className="chingu-project-container">
						<li>
							<a href="https://vaersgo.netlify.com/" target="_blank" rel="noopener  noreferrer">
								<img src={require('../../../images/c-v12-solo-vaersgo-netlify.png')} alt="" />
							</a>
						</li>
						<li>
							<a
								href="https://cloned-kickstarter.netlify.com/"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img
									src={require('../../../images/c-v11-solo-cloned-kickstarter-netlify.png')}
									alt=""
								/>
							</a>
						</li>
					</ul>
				</div> */}
				<div>
					<h2>Projects</h2>
					<div className="projects-container">
						<div>First</div>
						<div>Second</div>
						<div>Third</div>
						<div>Fourth</div>
					</div>
				</div>

				<div className="certificates-container">
					{/* <h3>Completion certificates from Chingu-Voyage</h3> */}
					{/* <Certificate /> */}
					{/* <img
						className="certificate-image"
						src={require('../../../images/Voyage_12_-_Completion_Certificate.pdf')}
						alt=""
					/>
					<img
						className="certificate-image"
						src={require('../../../images/Voyage_11_-_Completion_Certificate.pdf')}
						alt=""
					/> */}

					{/* <a
						className="certificate-image"
						href="../../../images/Chingu_Voyage_9_Completion_Certificate.jpg"
						target="_blank"
						rel="noopener  noreferrer"
					>
						<img
							src={require('../../../images/Chingu_Voyage_9_Completion_Certificate.jpg')}
							alt=""
							width="150"
						/>
					</a> */}
					{/* <img
						className="certificate-image"
						src={require('../../../images/rsz_1chingu_voyage_9_completion_certificate.jpg')}
						alt=""
						height="200"
						width="190"
					/> */}
				</div>
			</div>
		);
	}
}
