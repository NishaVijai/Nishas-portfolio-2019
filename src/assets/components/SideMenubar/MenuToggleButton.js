import React from 'react';
import './menuToggleButton.css';

const menuToggleButton = (props) => (
	<button className="toggle-button-container" onClick={props.click}>
		<div className="toggle-button-lines" />
		<div className="toggle-button-lines" />
		<div className="toggle-button-lines" />
	</button>
);

export default menuToggleButton;
