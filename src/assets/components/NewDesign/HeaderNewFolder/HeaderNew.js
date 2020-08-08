import React, { Component } from "react";
import NavBar from "../NavBarFolder/NavBar";
class HeaderNew extends Component {
  render() {
    return (
      <header className="header-container">
        <h2 className="sr-only">Header</h2>
        <NavBar />
      </header>
    );
  }
}

export default HeaderNew;
