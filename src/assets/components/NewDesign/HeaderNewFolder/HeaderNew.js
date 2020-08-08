import React, { Component } from "react";
import NavBar from "../NavBarFolder/NavBar";
class HeaderNew extends Component {
  render() {
    return (
      <header className="header-container">
        <h2 className="sr-only">Header</h2>
        <nav>
          <h3 className="sr-only">NavBar Container</h3>
          <NavBar />
        </nav>

        {/* <nav className="nav-bar-container">
          <h2 className="sr-only">NavBar Container</h2>
          <ul className="nav-bar-container-list">
            <li>about</li>
            <li>portfolio</li>
            {/* <li>certificates</li> */}
        {/* <li>
              <a href="https://nishas-resume-2020.herokuapp.com/">Resume</a>
            </li>
          </ul>
        </nav> */}
      </header>
    );
  }
}

export default HeaderNew;
