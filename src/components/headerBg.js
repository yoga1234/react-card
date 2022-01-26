import React, { Component } from "react";
import headerbgdummy from "../images/headerbgdummy.png";

export default class HeaderBg extends Component {
  render() {
    return (
      <div className="headerBg">
        <img src={this.props.headerbg ? this.props.headerbg : headerbgdummy} alt="header profile" />
      </div>
    );
  }
}
