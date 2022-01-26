import React, { Component } from "react";
import headerbgdummy from "../images/headerbgdummy.png";

export default class HeaderBg extends Component {
  render() {
    return (
      <div className="headerBg">
        <img src={headerbgdummy} alt="header profile" />
      </div>
    );
  }
}
