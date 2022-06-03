import React from "react";
// import "../style/about.scss";
import manga from "../../static/assets/images/2swagsign.png";

export default function About() {
  return (
    <div className="about">
      <h1>About Us!</h1>
      <br />
      (Please hover mouse over picture for more infomation)
      <div className="about-content">
        <img src={manga} />
        <div className="example">
          <div className="example-text">
            Do Not order from us. We are not a real company. If you order
            something you wont get it. I will gladly take your money if you are
            willing to give it to us. You must admit that this is dope for my
            first react application. <br />
            I'm not sure if i will be graded on this project. I know that Iwill
            be uplading this to github. I am writing all of this because I
            didn't want to use loren ipsom??? I think thats what its called. I
            also know that its more than likely spelled wrong too. I also needed
            to just fill up the space.
          </div>
        </div>
      </div>
    </div>
  );
}
