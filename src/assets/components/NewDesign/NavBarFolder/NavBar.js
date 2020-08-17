import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class NavBar extends Component {
  render() {
    const scrollToAbout = () => {
      scroll.scrollTo(0);
    };

    const scrollToPortfolio = () => {
      scroll.scrollTo(200);
    };

    const scrollToCertificates = () => {
      scroll.scrollTo(1150);
    };
    return (
      <section>
        <h3 className="sr-only">NavBar Container</h3>
        <nav>
          <ul className="nav-bar-container-list">
            <Link
              aria-label="About section"
              title="Scroll to About Section"
              tabIndex="0"
              className="link-item"
              onKeyPress={scrollToAbout}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
            >
              About
            </Link>

            <Link
              aria-label="Portfolio section"
              title="Scroll to Portfolio Section"
              tabIndex="0"
              className="link-item"
              onKeyPress={scrollToPortfolio}
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
            >
              Portfolio
            </Link>

            <Link
              aria-label="Certificates section"
              title="Scroll to Certificates Section"
              tabIndex="0"
              className="link-item"
              onKeyPress={scrollToCertificates}
              activeClass="active"
              to="certificate"
              spy={true}
              smooth={true}
              offset={-130}
              duration={1000}
            >
              Certificates
            </Link>

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
        </nav>
      </section>
    );
  }
}
