import CardContainer from "./components/CardContainer";
import userdata from "./data.json";
import "./App.css";
import React, { Component } from "react";

import check from "./images/icons/check.png";
import add from "./images/icons/add.png";

export default class App extends Component {
  componentDidMount() {
    const dotContainer = document.querySelectorAll(".dot-container");
    const followButton = document.querySelectorAll(".button-follow");

    function alertClick() {
      alert("You are clicking on top menu!");
    }

    followButton.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.innerText.trim() === "Follow") {
          button.innerHTML = `<img src=${check} alt="add following" />
          Following`;
          button.classList.add("button-following");
        } else if (button.innerText.trim() === "Following") {
          button.innerHTML = `<img src=${add} alt="add following" />
          Follow`;
          button.classList.remove("button-following");
        } else {
          alert("Oops, something happened. Please refresh the page!");
        }

        // button.innerHTML = "Following"
        console.log(button.innerText);
      });
    });
    dotContainer.forEach((item) => {
      item.addEventListener("click", alertClick);
    });
  }
  render() {
    return (
      <div className="App">
        {userdata.userdata.map((user) => (
          <CardContainer
            key={user.id}
            name={user.name}
            nametag={user.nametag}
            biodesc={user.biodesc}
            profilepicture={user.profilepicture}
            headerbg={user.headerbg}
            job={user.job}
          />
        ))}
      </div>
    );
  }
}
