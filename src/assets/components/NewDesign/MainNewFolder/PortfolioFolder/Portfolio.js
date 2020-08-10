import React, { Component } from "react";
import portfolioData from "../PortfolioFolder/PortfolioData";

export default class Portfolio extends Component {
  render() {
    const portfolio = portfolioData.map((portfolioItems) => (
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
      <article id="portfolio">
        <h3 className="sr-only">Portfolio Container</h3>
        <ul className="portfolio-lists">
          <li>{portfolio}</li>
        </ul>
      </article>
    );
  }
}
