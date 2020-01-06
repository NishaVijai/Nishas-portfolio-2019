import React from 'react';
import Menu from '../components/Menubar/Menu';
import SideMenu from '../components/SideMenubar/SideMenu';
import Backdrop from '../components/Backdrop/Backdrop';
export class Main extends React.Component {
	state = {
		sideMenuOpen: false
	};

	sideMenuToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideMenuOpen: !prevState.sideMenuOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideMenuOpen: false });
	};

	render() {
		let backdrop;

		if (this.state.sideMenuOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}

		return (
			<div className="mainContainer">
				<div style={{ height: '100%' }}>
					{/* <Nav /> */}
					<Menu menuClickHandler={this.sideMenuToggleClickHandler} />
					<SideMenu show={this.state.sideMenuOpen} />
					{backdrop}
					{/* <Backdrop /> */}
					<main style={{ marginTop: '64px' }}>
						<p>Main Page</p>
					</main>
				</div>
			</div>
		);
	}
}
