import React, { Component } from "react";
import "../style/main.scss";
import orderswag from "../../static/assets/images/o-swag.png";

export default class App extends Component {
  render() {
    return (
      <div className="app body">
        <div className="text-cont">
          <h1>"KOP-SHOP"</h1>
          <h2> (No Police) Swag!</h2>

          {/* <police>
              <h1>Hover Me!</h1>
              <blue>
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
              </blue>
              <red>
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
                <circle />
              </red>
            </police>
         */}
        </div>
        <img src={orderswag} />
      </div>
    );
  }
}
