import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Information</Link>
      </li>
      <li>
        <Link to="registration">Registration</Link>
      </li>
      <li>
        <Link to="profile">Profile</Link>
      </li>
      <li>
        <Link to="faq">FAQ</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
