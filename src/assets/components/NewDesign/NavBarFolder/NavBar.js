import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar-container-list">
        <li>about</li>
        <li>portfolio</li>
        {/* <li>certificates</li> */}
        <li>
          <a href="https://nishas-resume-2020.herokuapp.com/">Resume</a>
        </li>
      </ul>
    );
  }
}
