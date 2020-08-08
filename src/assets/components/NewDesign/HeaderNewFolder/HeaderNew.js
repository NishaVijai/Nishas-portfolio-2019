import React, { Component } from "react";
import NavBar from "../NavBarFolder/NavBar";
class HeaderNew extends Component {
  render() {
    return (
      <header className="header-container">
        <h1 className="sr-only">Main Page</h1>
        <NavBar />
      </header>
    );
  }
}

export default HeaderNew;
