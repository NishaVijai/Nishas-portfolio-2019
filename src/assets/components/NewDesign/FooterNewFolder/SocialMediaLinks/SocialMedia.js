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
          loading="lazy"
          src={mediaIcon.socialMediaIcon}
          title={mediaIcon.socialMediaName}
          width="40"
          height="40"
        />
      </a>
    ));
    return (
      <React.Fragment>
        <ul className="social-media-links">
          <li>{socialMediaIcon}</li>
        </ul>
      </React.Fragment>
    );
  }
}
