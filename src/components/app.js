import React, { Component } from "react";
import "../style/app.scss";
import orderswag from "../../static/assets/images/o-swag.png";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="text-cont">
          <h1>"K.S.-SHOP"</h1>
          <h2>KOP(No Police) Swag!</h2>
        </div>
        <img src={orderswag} />
      </div>
    );
  }
}
