import React from 'react';
import Logo from './Logo/Logo';
import TopMenu from './TopMenu/TopMenu';
import MenuCss from './MenuCSS/MenuCss';
// import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
	// let links = [
	// 	{ label: 'Home', link: '#home' },
	// 	{ label: 'About', link: '#about' },
	// 	{ label: 'Portfolio', link: '#portfolio' },
	// 	{ label: 'Resume', link: '#resume' },
	// 	{ label: 'Contact', link: '#contact' }
	// ];
	return (
		<nav>
			<Logo />
			{/* <TopMenu /> */}
			<MenuCss />

			{/* <MenuCss links={links} /> */}

			{/* <ul className="nav-links-new">
				<Link to="/About" style={navStyle}>
					<li>About</li>
				</Link>
				<Link to="/Shop" style={navStyle}>
					<li>Shop</li>
				</Link>
			</ul> */}
		</nav>
	);
}

export default Nav;
