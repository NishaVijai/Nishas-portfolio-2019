import React, { Component } from "react";
import HeaderNew from "../NewDesign/HeaderNewFolder/HeaderNew";
import MainNew from "../NewDesign/MainNewFolder/MainNew";
import FooterNew from "../NewDesign/FooterNewFolder/FooterNew";

import "../NewDesign/newLayout.css";
export default class NewLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNew />
        <MainNew />
        <FooterNew />
      </React.Fragment>
    );
  }
}
