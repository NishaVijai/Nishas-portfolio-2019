import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <article id="about">
        <h3 className="sr-only">About Container</h3>
        <p>About me</p>
        <p>
          A self-motivated, creative, and ambitious web developer from Denmark
        </p>
        <p>
          I have done my Masters degree in Computer Applications from India. For
          the past several months I have been building responsive websites using
          React, Semantic HTML, CSS, and JavaScript.
        </p>
      </article>
    );
  }
}
