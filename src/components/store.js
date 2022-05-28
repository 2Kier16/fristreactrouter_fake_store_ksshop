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
            <img src={wht} />
            <img src={blkcap} />
            <img src={yellow} />
            <img src={blue} />
            <img src={red} />
            <img src={blublk} />
            <img src={blkgry} />
            <img src={jean} />
            <img src={light} />
            <img src={clwn} />
            <img src={blktrk} />
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
        </div>
      </div>
    </div>
  );
}
