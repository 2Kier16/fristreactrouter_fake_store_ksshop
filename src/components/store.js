import React from "react";
// import "../style/store.scss";
import "./button/button.js";

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
            <div className="white">
              <h3>Illuminate</h3>
              <img src={wht} />
              <button>add to cart</button>
            </div>
            <div className="black">
              <h3>Darkness</h3>
              <img src={blkcap} />
              <button>add to cart</button>
            </div>
            <div className="yellow">
              <h3>Sunny</h3>
              <img src={yellow} />
              <button>add to cart</button>
            </div>
            <div className="blue">
              <h3>Sky Water</h3>
              <img src={blue} />
              <button>add to cart</button>
            </div>
            <div className="red">
              <h3>Fire Truck</h3>
              <img src={red} />
              <button>add to cart</button>
            </div>
            <div className="blueblack">
              <h3>Black Eye</h3>
              <img src={blublk} />
              <button>add to cart</button>
            </div>
            <div className="cloud">
              <h3>Cloudy</h3>
              <img src={blkgry} />
              <button>add to cart</button>
            </div>
            <div className="jean">
              <h3>Denim</h3>
              <img src={jean} />
              <button>add to cart</button>
            </div>
            <div className="colored">
              <h3>High Lighter</h3>
              <img src={light} />
              <button>add to cart</button>
            </div>
            <div className="kid">
              <h3>4 Years Young</h3>
              <img src={clwn} />
              <button>add to cart</button>
            </div>
            <div className="night">
              <h3>Black Forces</h3>
              <img src={blktrk} />
              <button>add to cart</button>
            </div>
            <div className="truck">
              <h3>Custome Logo Truck</h3>
              <img src={custom} />
              <button>add to cart</button>
            </div>
          </div>

          <div className="t-shirts">
            <div className="awesomeshirt">
              <h3>F'n Awesome</h3>
              <img src={awesome} />
              <button>add to cart</button>
            </div>
            <div className="redshirt">
              <h3>Not Today</h3>
              <img src={not} />
              <button>add to cart</button>
            </div>
            <div className="heartshirt">
              <h3>Heartbreak</h3>
              <img src={heart} />
              <button>add to cart</button>
            </div>
            <div className="Whitetee">
              <h3>Ol' English</h3>
              <img src={wtee} />
              <button>add to cart</button>
            </div>
          </div>
        </div>

        <div className="veteran-container">
          <div className="vet">
            <h3>
              No Shiping Cost for Veterans and any Oder with a Donation made to
              VA Non-Profits!
            </h3>
            <img src={vet} />
            <h4>(Must Show Proff of Donation at Payment Page!)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
