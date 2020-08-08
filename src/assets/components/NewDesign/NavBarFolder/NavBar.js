import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="sr-only">NavBar Container</h3>
        <nav className="nav-bar-container">
          {/* <h3 className="sr-only">NavBar Container</h3> */}
          <ul className="nav-bar-container-list">
            <li>about</li>
            <li>portfolio</li>
            {/* <li>certificates</li> */}
            <li>
              <a href="https://nishas-resume-2020.herokuapp.com/">Resume</a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
