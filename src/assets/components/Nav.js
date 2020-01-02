import React from 'react';

export class Nav extends React.Component {
	render() {
		return (
			<div className="navContainer">
				<nav>
					<ul>
						<li>
							<a href="">About Me</a>
						</li>
						<li>
							<a href="">Projects</a>
						</li>
						<li>
							<a href="">CV</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
