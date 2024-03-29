import React, { Component } from "react";
// import NavBar from "../NavBarFolder/NavBar";
import SocialMedia from "./SocialMediaLinks/SocialMedia";

export default class FooterNew extends Component {
  render() {
    return (
      <footer className="footer-container">
        <h2 className="sr-only">Footer</h2>
        <p>&copy; 2020 - 2023</p>
        <SocialMedia />
      </footer>
    );
  }
}
