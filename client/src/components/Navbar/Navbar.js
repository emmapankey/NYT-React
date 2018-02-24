import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="teal lighten-2">
    <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          React-NYT
        </Link>
      <ul className="right hide-on-med-and-down">
        <li
          className={
            window.location.pathname === "/home" ? "active" : ""
          }
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            window.location.pathname === "/saved" ? "active" : ""
          }
        >
          <Link to="/saved">Saved Articles</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;