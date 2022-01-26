import React, { Component } from "react";
import ButtonFollow from "./ButtonFollow";
import ButtonTopMenu from "./ButtonTopMenu";
import HeaderBg from "./HeaderBg";
import ProfileImage from "./ProfileImage";
import SocialMedia from "./SocialMedia";
import UserDetails from "./UserDetails";
import "./CardContainer.css";

export default class CardContainer extends Component {
  render() {
    return (
      <div className="card-container">
        <HeaderBg />
        <ButtonTopMenu />
        <div className="profile-follow-container">
          <ProfileImage />
          <ButtonFollow />
        </div>
        <UserDetails />
        <SocialMedia />
      </div>
    );
  }
}
