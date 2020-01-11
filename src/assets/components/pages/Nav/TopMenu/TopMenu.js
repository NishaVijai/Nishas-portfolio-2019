import React from 'react';
import { Link } from 'react-router-dom';

import './topMenu.css';

function TopMenu() {
	return (
		<nav className="Top-Menu-Container">
			<ul>
				<Link className="menu-link-nav" to="/Home">
					<li>Home</li>
				</Link>
				<Link className="menu-link-nav" to="/About">
					<li>About</li>
				</Link>
				<Link className="menu-link-nav" to="/Portfolio">
					<li>Portfolio</li>
				</Link>
				<Link className="menu-link-nav" to="/Resume">
					<li>Resume</li>
				</Link>
				<Link className="menu-link-nav" to="/Contact">
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
}

export default TopMenu;
