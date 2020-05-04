import React from 'react';

import Logo from './Logo';
import Dropdown from './Dropdown';
// import MenuCss from './MenuCSS/MenuCss';

import './nav.css';

function Nav() {
	return (
		<nav>
			<Logo />
			<Dropdown />
			{/* <MenuCss /> */}
		</nav>
	);
}

export default Nav;
