import React, { Component } from 'react';
import { HamburgerArrow, HamburgerArrowAlt } from 'react-animated-burgers';

export default class BurgerMenu extends Component {
	// state = {
	// 	userInput: ''
	// };
	// inputchangehandler = (event) => {
	// 	this.setState = {
	// 		userInput: event.target.value
	// 	};
	// };
	state = {
		isActive: false
	};

	toggleButton = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};
	render() {
		return (
			<div className="burger-menu">
				{/* <HamburgerArrow
					isActive={this.state.isActive}
					toggleButton={this.toggleButton}
					buttonColor="#FFBC67"
					barColor="white"
				/> */}
				<HamburgerArrowAlt
					isActive={this.state.isActive}
					toggleButton={this.toggleButton}
					buttonColor="#FFBC67"
					barColor="white"
				/>
			</div>
		);
	}
}
