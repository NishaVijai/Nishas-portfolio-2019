import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </div>
        );
    }
}
