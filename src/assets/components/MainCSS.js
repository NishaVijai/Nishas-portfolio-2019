import React, { Component } from 'react';
import MenuCss from '../components/MenuCSS/MenuCss';

export default class MainCSS extends React.Component {
	render() {
		let links = [
			{ label: 'Home', link: '#home' },
			{ label: 'About', link: '#about' },
			{ label: 'Portfolio', link: '#portfolio' },
			{ label: 'Resume', link: '#resume' },
			{ label: 'Contact', link: '#contact' }
		];
		return (
			<div>
				<MenuCss links={links} />
			</div>
		);
	}
}
