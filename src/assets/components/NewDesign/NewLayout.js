import React, { Component } from "react";
import HeaderNew from "../NewDesign/HeaderNewFolder/HeaderNew";
import FooterNew from "../NewDesign/FooterNewFolder/FooterNew";
export default class NewLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNew />
        {/* <MainNew /> */}
        <FooterNew />
      </React.Fragment>
    );
  }
}
