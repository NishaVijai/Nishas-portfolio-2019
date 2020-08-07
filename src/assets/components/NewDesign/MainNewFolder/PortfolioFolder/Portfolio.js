import React, { Component } from "react";
import portfolioData from "../PortfolioFolder/PortfolioData";

export default class Portfolio extends Component {
  render() {
    const test = portfolioData.map((portfolioItems) => (
      <a
        href={portfolioItems.projLink}
        key={portfolioItems.id}
        rel="noopener  noreferrer"
        target="_blank"
      >
        <img
          alt={portfolioItems.projAlt}
          className=""
          loading="lazy"
          src={portfolioItems.projImg}
          title={portfolioItems.projAlt}
        />
      </a>
    ));
    return (
      <article>
        <ul className="portfolio-container">
          <li>{test}</li>
        </ul>
      </article>
    );
  }
}
