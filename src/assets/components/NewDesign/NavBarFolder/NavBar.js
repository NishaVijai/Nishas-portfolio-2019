import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <ul className="nav-bar-container-list">
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a
            href="https://resume.nishavijai.vercel.app/"
            rel="noopener  noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    );
  }
}
