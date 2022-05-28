import React, { Component } from "react";
import "../style/app.scss";
import orderswag from "../../static/assets/images/o-swag.png";

export default class App extends Component {
  render() {
    return (
      <div className="app body">
        <div className="text-cont">
          <h1>"KOP-SHOP"</h1>
          <h2> (No Police) Swag!</h2>
        </div>
        <img src={orderswag} />
      </div>
    );
  }
}
