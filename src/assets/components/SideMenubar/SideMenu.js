import React from 'react';
import './sideMenu.css';

const sideMenu = (props) => {
	let menuClasses = 'side-menu-container';
	if (props.show) {
		menuClasses = 'side-menu-container open';
	}
	return (
		<nav className={menuClasses}>
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
};

export default sideMenu;
