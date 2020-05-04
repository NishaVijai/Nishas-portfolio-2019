import React from 'react';
// import './menuCSS.css';
// import Contact from '../Contact/Contact';
import { Link } from 'react-router-dom';

export default class MenuCss extends React.Component {
	render() {
		return (
			<div className="menu-css-container">
				{/* <div className="logo-div">
					<div className="logo" />
				</div> */}
				<div className="menu-wrap">
					<input type="checkbox" className="toggler" />
					<div className="hamburger">
						<div />
					</div>

					{/* {this.state.displayMenu ? ( */}
					<div className="menu">
						<div>
							<div>
								<ul>
									<Link className="menu-link-li" to="/Home">
										<li className="hid" target="_blank">
											Home
										</li>
									</Link>
									<Link className="menu-link-li" to="/About">
										<li className="hid">About</li>
									</Link>
									<Link className="menu-link-li" to="/Portfolio">
										<li className="hid">Portfolio</li>
									</Link>
									<Link className="menu-link-li" to="/Resume">
										<li className="hid">Resume</li>
									</Link>
									<Link className="menu-link-li" to="/Contact">
										<li className="hid">Contact</li>
									</Link>

									{/* <li className="menu-link-li">
										<Link className="hid" to="/Home">
											Home
										</Link>
									</li>
									<li className="menu-link-li">
										<Link className="hid" to="/About">
											About
										</Link>
									</li>
									<li className="menu-link-li">
										<Link className="hid" to="/Portfolio">
											Portfolio
										</Link>
									</li>
									<li className="menu-link-li">
										<Link className="hid" to="/Resume">
											Resume
										</Link>
									</li>
									<li className="menu-link-li">
										<Link className="hid" to="/Contact">
											Contact
										</Link>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
					{/* ) : null} */}
				</div>
			</div>
		);
	}
}
