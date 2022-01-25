import React, { Component } from "react";
import add from "../images/icons/add.png";

export default class ButtonFollow extends Component {
  render() {
    return (
      <button className="button-follow">
        <img src={add} alt="add following" />
        Follow
      </button>
    );
  }
}
