import React from 'react';
import '../styles/nav.css';
export class Nav extends React.Component {
	render() {
		return (
			<div className="navContainer">
				<nav>
					<ul>
						<li>
							<a href="#aboutMe">About Me</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#cv">CV</a>
						</li>
						<li>
							<a href="#contacts">Contacts</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
