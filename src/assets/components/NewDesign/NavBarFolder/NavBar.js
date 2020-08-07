import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <ul className="nav-bar-container-list">
          <li>portfolio</li>
          <li>certificates</li>
          <li>about</li>
          <li>
            <a href="https://nishas-resume-2020.herokuapp.com/">Resume</a>
          </li>
        </ul>
      </nav>
    );
  }
}
