import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <ul>
          <li>portfolio</li>
          <li>certificates</li>
          <li>about</li>
          <li>resume</li>
        </ul>
      </nav>
    );
  }
}
