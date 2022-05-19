import React from "react";
import "../style/store.scss";
import store from "../../static/assets/images/swag1.png";

export default function Store() {
  return (
    <div className="happy">
      <h1>Kop Shop</h1>
      <img src={store} />
    </div>
  );
}
