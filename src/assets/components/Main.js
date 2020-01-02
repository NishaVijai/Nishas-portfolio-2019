import React from 'react';
import { Nav } from './Nav';

export class Main extends React.Component {
	render() {
		return (
			<div className="mainContainer">
				<div>
					<Nav />
				</div>
			</div>
		);
	}
}
