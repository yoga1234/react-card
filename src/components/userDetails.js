// User Details: name, nametag, profile description, followers, job

import React, { Component } from "react";

export default class UserDetails extends Component {
  render() {
    return (
      <div className="user-details">
        <div className="name-container">
          <h3 className="username">Yukinoshita</h3>
          <span className="nametag">@nameHere</span>
        </div>
        <p className="bio-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quo.
        </p>
        <div className="follower-container">
          <p className="followers">
            1.3k <span className="followers-text">Followers</span>
          </p>
          <div className="profile-dot"></div>
          <p className="job">Cosplay</p>
        </div>
      </div>
    );
  }
}
