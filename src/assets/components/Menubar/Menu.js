import React from 'react';
import '../Menubar/menu.css';
import MenuToggleButton from '../SideMenubar/MenuToggleButton';

const menu = (props) => (
	<header className="menu-container">
		<nav className="menu-navigation">
			<div>
				<MenuToggleButton />
			</div>

			<div className="menu-logo">
				<a href="/">Logo</a>
			</div>

			<div className="space" />

			<div className="menu-navigation-lists">
				<ul>
					<li>
						<a href="/">CV</a>
					</li>
					<li>
						<a href="/">Projects</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default menu;
