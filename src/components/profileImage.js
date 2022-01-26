import React, { Component } from "react";
import profilepicturedummy from "../images/profilepicturedummy.png";

export default class ProfileImage extends Component {
  render() {
    return (
      <div className="profile-picture">
        <img src={this.props.profilepicture ? this.props.profilepicture : profilepicturedummy} alt="profile" />
      </div>
    );
  }
}
