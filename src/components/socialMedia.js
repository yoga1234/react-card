// example: facebook, twitter, instagram, youtube.
// icon hasn't been created
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import more from "../images/icons/more.png";
import twitter from "../images/icons/twitter.png";
import youtube from "../images/icons/youtube.png";

import React, { Component } from "react";

export default class SocialMedia extends Component {
  render() {
    return (
      <div className="socialmedia-container">
        <div className="socialmedia">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="socialmedia">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="socialmedia">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="socialmedia">
          <img src={youtube} alt="youtube" />
        </div>
        <div className="socialmedia">
          <img src={more} alt="more" />
        </div>
      </div>
    );
  }
}
