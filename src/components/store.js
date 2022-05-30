import React from "react";
import "../style/store.scss";
import store from "../../static/assets/images/swag1.png";
import wht from "../../static/assets/images/wht_cap.jpg";
import not from "../../static/assets/images/not-today.jpg";
import heart from "../../static/assets/images/heartbreak.jpg";
import blkcap from "../../static/assets/images/blk_cap.jpg";
import blue from "../../static/assets/images/blue.jpg";
import clwn from "../../static/assets/images/clwnfitted.jpg";
import custom from "../../static/assets/images/cust-truck.jpg";
import jean from "../../static/assets/images/jean.jpg";
import red from "../../static/assets/images/red.jpg";
import yellow from "../../static/assets/images/yellow.jpg";
import blktrk from "../../static/assets/images/blk_truck.jpg";
import blublk from "../../static/assets/images/blublk.jpg";
import blkgry from "../../static/assets/images/blkgry.jpg";
import vet from "../../static/assets/images/vet.jpg";
import awesome from "../../static/assets/images/awesome.jpg";
import wtee from "../../static/assets/images/whttee.jpg";
import light from "../../static/assets/images/lighteast.jpg";
export default function Store() {
  return (
    <div className="background-image">
      <div className="happy">
        <h1>Kop Shop</h1>
        <img src={store} />
        <div className="items-container">
          <div className="hats">
            <h3>Illuminate</h3>
            <img src={wht} />
            <h3>Darkness</h3>
            <img src={blkcap} />
            <h3>Sunny</h3>
            <img src={yellow} />
            <h3>Sky Water</h3>
            <img src={blue} />
            <h3>Fire Truck</h3>
            <img src={red} />
            <h3>Black Eye</h3>
            <img src={blublk} />
            <h3>Cloudy</h3>
            <img src={blkgry} />
            <h3>Denim</h3>
            <img src={jean} />
            <h3>Higliter</h3>
            <img src={light} />
            <h3>4 Years Young</h3>
            <img src={clwn} />
            <h3>Darkness Truker</h3>
            <img src={blktrk} />
            <h3>Your Logo Truker</h3>
            <img src={custom} />
          </div>
          <div className="t-shirts">
            <img src={awesome} />
            <img src={not} />
            <img src={heart} />
            <img src={wtee} />
          </div>
        </div>
        <div className="veteran-container">
          <img src={vet} />
          <h3>
            No Shiping Cost for Veterans and any Oder with a Donation made to VA
            Non-Profits!
          </h3>
          <br />
          (Must Show Proff of Donation at Payment Page!)
        </div>
      </div>
    </div>
  );
}
