import React, { Component } from "react";
import certificateData from "";

export default class Certificates extends Component {
  render() {
    const certificate = certificateData.map((certificateItems) => (
      <a
        href={certificateItems.certificateImg}
        key={certificateItems.id}
        rel="noopener  noreferrer"
        target="_blank"
      >
        <span>{certificateItems.certificateName}</span>
        <img
          alt={certificateItems.certificateAlt}
          loading="lazy"
          src={certificateItems.certificateImg}
          title={certificateItems.certificateName}
        />
      </a>
    ));
    return (
      <article id="certificate">
        <h3 className="sr-only">Certificate Container</h3>
        <ul className="certificate-lists">
          <li>{certificate}</li>
        </ul>
      </article>
    );
  }
}
