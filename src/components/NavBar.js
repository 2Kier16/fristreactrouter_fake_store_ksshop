import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.scss";
import { FcHome, FcShop, FcBiotech, FcAddressBook } from "react-icons/fc";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbarlinks">
        <Link to="/">
          <FcHome />
        </Link>
        <Link to="/about">
          <FcBiotech />
        </Link>
        <Link to="/contact">
          <FcAddressBook />
        </Link>
        <Link to="/store">
          <FcShop />
        </Link>
      </div>
    </div>
  );
}
