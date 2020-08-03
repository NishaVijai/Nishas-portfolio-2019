import React, { Component } from "react";
import NavBar from "../NavBarFolder/NavBar";
import SocialMedia from "./SocialMediaLinks/SocialMedia";

import "./footerNew.css";
export default class FooterNew extends Component {
  render() {
    return (
      <footer className="footer-container">
        <p>&copy; 2020 noorunnisha thamizuddin</p>

        <div className="footer-nav-bar-container">
          <NavBar />
        </div>

        <SocialMedia />
      </footer>
    );
  }
}
