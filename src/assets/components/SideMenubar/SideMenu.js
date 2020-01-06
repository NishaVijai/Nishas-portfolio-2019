import React from 'react';
import './sideMenu.css';

const sideMenu = (props) => (
	<nav className="side-menu-container">
		<ul>
			<li>
				<a href="/">CV</a>
			</li>
			<li>
				<a href="/">Projects</a>
			</li>
		</ul>
	</nav>
);

export default sideMenu;
