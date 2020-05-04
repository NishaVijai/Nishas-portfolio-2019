import React from 'react';

import Logo from './Logo';
import Dropdown from './Dropdown';

import './nav.css';

function Nav() {
	return (
		<nav>
			<Logo />
			<Dropdown />
		</nav>
	);
}

export default Nav;
