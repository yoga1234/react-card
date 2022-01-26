import React, { Component } from "react";

export default class UserDetails extends Component {
  render() {
    // console.log(this.props.biodesc.length);
    const biodesc =
      this.props.biodesc.length > 220
        ? this.props.biodesc.substring(0, 220) + "..."
        : this.props.biodesc;
    return (
      <div className="user-details">
        <div className="name-container">
          <h3 className="username">{this.props.name}</h3>
          <span className="nametag">@{this.props.nametag}</span>
        </div>
        <p className="bio-desc">{biodesc}</p>
        <div className="follower-container">
          <p className="followers">
            1.3k <span className="followers-text">Followers</span>
          </p>
          <div className="profile-dot"></div>
          <p className="job">{this.props.job}</p>
        </div>
      </div>
    );
  }
}
