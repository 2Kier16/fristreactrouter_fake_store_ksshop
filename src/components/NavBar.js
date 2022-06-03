import React from "react";

// import "../style/NavBar.scss";
import { FcHome, FcShop, FcBiotech, FcAddressBook } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLink className="navbar-link" exact to="/">
          <FcHome />
        </NavLink>
        <NavLink className="navbar-link" to="/about">
          <FcBiotech />
        </NavLink>
        <NavLink className="navbar-link" to="/contact">
          <FcAddressBook />
        </NavLink>
        <NavLink className="navbar-link" to="/store">
          <FcShop />
        </NavLink>
      </div>
    </div>
  );
}
