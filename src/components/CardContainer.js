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
    // const name = this.props.name;
    // console.log(name);
    return (
      <div className="card-container">
        <HeaderBg headerbg={this.props.headerbg} />
        <ButtonTopMenu />
        <div className="profile-follow-container">
          <ProfileImage profilepicture={this.props.profilepicture} />
          <ButtonFollow />
        </div>
        <UserDetails
          name={this.props.name}
          nametag={this.props.nametag}
          biodesc={this.props.biodesc}
        />
        <SocialMedia />
      </div>
    );
  }
}
