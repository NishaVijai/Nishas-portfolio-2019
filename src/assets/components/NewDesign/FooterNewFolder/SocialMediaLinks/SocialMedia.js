import React, { Component } from "react";
import socialMedia from "../SocialMediaLinks/SocialMediaData";

export default class SocialMedia extends Component {
  render() {
    const socialMediaIcon = socialMedia.map((mediaIcon) => (
      <a
        href={mediaIcon.url}
        key={mediaIcon.id}
        rel="noopener  noreferrer"
        target="_blank"
      >
        <img
          alt={mediaIcon.alt}
          className="social-icon-img"
          loading="lazy"
          src={mediaIcon.socialMediaIcon}
          title={mediaIcon.socialMediaName}
        />
      </a>
    ));
    return (
      <React.Fragment>
        <h3 className="sr-only">SocialMedia Container</h3>
        <ul className="social-media-links">
          <li>{socialMediaIcon}</li>
        </ul>
      </React.Fragment>
    );
  }
}
