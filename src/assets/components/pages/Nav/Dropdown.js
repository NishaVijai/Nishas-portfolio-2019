import React from 'react';
import { Link } from 'react-router-dom';

import './MenuCSS/menuCSS.css';

// import BurgerMenu from '../../BurgerMenu/BurgerMenu';

export default class Dropdown extends React.Component {
	constructor() {
		super();

		this.state = {
			displayMenu: false
		};

		this.showDropdownMenu = this.showDropdownMenu.bind(this);
		this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
	}

	showDropdownMenu(event) {
		event.preventDefault();
		this.setState({ displayMenu: true }, () => {
			document.addEventListener('click', this.hideDropdownMenu);
		});
	}

	hideDropdownMenu() {
		this.setState({ displayMenu: false }, () => {
			document.removeEventListener('click', this.hideDropdownMenu);
		});
	}

	render() {
		return (
			<div className="menu-css-container">
				<div className="menu-wrap" onKeyPress={this.showDropdownMenu} onClick={this.showDropdownMenu}>
					<input type="checkbox" className="toggler" />
					<div className="hamburger" tabIndex="0">
						<div />
					</div>
					{/* <div className="burger-menu">
						<BurgerMenu />
					</div> */}
					{this.state.displayMenu ? (
						<div className="unordered-list">
							<ul>
								<Link className="menu-link-li" to="/Home">
									<li className="hid">Home</li>
								</Link>
								<Link className="menu-link-li" to="/About">
									<li className="hid">About</li>
								</Link>
								<Link className="menu-link-li" to="/Portfolio">
									<li className="hid">Portfolio</li>
								</Link>
								{/* <Link className="menu-link-li" to="https://nishas-resume.netlify.com/">
									<li className="hid"><a
						className="resume-external-link"
						href="https://nishas-resume.netlify.com/"
						target="_blank"
						rel="noopener  noreferrer"
					>Resume</a></li>
								</Link> */}
								<Link className="menu-link-li" to="/Resume">
									<li className="hid">Resume</li>
								</Link>
								{/* <Link className="menu-link-li" to="https://nishas-resume.netlify.com/">
									<li className="hid">Rsume</li>
								</Link> */}
								
								<Link className="menu-link-li" to="/Contact">
									<li className="hid">Contact</li>
								</Link>

								{/* <Link className="menu-link-li" to="https://nishas-resume.netlify.com/"><a
						className="resume-external-link"
						href="https://nishas-resume.netlify.com/"
						target="_blank"
						rel="noopener  noreferrer"
					>Resume-Netlify</a></Link> */}
					
							</ul>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}
