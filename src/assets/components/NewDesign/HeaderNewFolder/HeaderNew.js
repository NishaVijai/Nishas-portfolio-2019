import React, { Component } from "react";
import NavBar from "../NavBarFolder/NavBar";

import Logo from "../../../images/My-logo.png";
class HeaderNew extends Component {
  render() {
    return (
      <header id="header" className="header-container">
        <h2 className="sr-only">Header</h2>
        <a href="#header">
          <img src={Logo} alt="Site Logo" height="120" width="120" />
        </a>
        <nav>
          <h3 className="sr-only">NavBar Container</h3>
          <NavBar />
        </nav>
      </header>
    );
  }
}

export default HeaderNew;
