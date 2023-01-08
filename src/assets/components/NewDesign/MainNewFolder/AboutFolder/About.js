import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <article id="about">
        <h3>About me</h3>
        <section className="about-section">
          <h4 className="sr-only">About Container</h4>

          <p>
            A self-motivated, creative, and ambitious Front-end Web Developer
          </p>
          <p>
            I have done my Masters degree in Computer Applications. I have been building responsive websites using React,
            Semantic HTML, CSS, and JavaScript.
          </p>
        </section>
      </article>
    );
  }
}
