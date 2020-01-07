import React, { Component } from 'react';
import './menuCSS.css';

export default class MenuCss extends React.Component {
	render() {
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
									<li>
										<a href="#">About</a>
									</li>
									<li>
										<a href="#">Resume</a>
									</li>
									<li>
										<a href="#">Projects</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<header className="showcase">
					<div className="container showcase-inner">
						<h1>Welcome</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident quas, sapiente placeat
							ratione quis ducimus neque sequi pariatur officia fugit molestias adipisci numquam impedit,
							quae sit.
						</p>
						<a href="#" className="btn">
							Read More...
						</a>
					</div>
				</header>
			</div>
		);
	}
}
