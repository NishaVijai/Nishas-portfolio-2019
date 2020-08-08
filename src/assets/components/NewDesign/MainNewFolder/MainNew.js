import React, { Component } from "react";
import About from "../MainNewFolder/AboutFolder/About";
import Portfolio from "../MainNewFolder/PortfolioFolder/Portfolio";

export default class MainNew extends Component {
  render() {
    return (
      <main>
        <h2 className="sr-only">Main Container</h2>
        <About />
        <Portfolio />
      </main>
    );
  }
}
