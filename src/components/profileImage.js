import React, { Component } from "react";
import profilepicturedummy from "../images/profilepicturedummy.png";

export default class ProfileImage extends Component {
  render() {
    return (
      <div className="profile-picture">
        <img src={profilepicturedummy} alt="profile" />
      </div>
    );
  }
}
