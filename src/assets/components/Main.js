import React from 'react';
import Menu from '../components/Menubar/Menu';
import SideMenu from '../components/SideMenubar/SideMenu';
import Backdrop from '../components/Backdrop/Backdrop';
export class Main extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<div style={{ height: '100%' }}>
					{/* <Nav /> */}
					<Menu />
					<SideMenu />
					<Backdrop />
					<main style={{ marginTop: '64px' }}>
						<p>Main Page</p>
					</main>
				</div>
			</div>
		);
	}
}
