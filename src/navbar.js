import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li key="0">
        <Link to="/">Home</Link>
      </li>
      <li key="1">
        <Link to="/about">About</Link>
      </li>
      <li key="2">
        <Link to="/articlelist">Articles</Link>
      </li>
      <li key="3">
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
