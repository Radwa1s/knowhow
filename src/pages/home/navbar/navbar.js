import React from "react";
import Signup from "../signin/signup";
import "./nav.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <a className="font-BenzinBold logo" href="#pablo">
        Know
        <br />
        -How{" "}
      </a>

      <nav>
        <ul className="nav">
          <li className="font-BenzinRegular">
            <a href="#pablo">About us</a>
          </li>
        </ul>
      </nav>
      <div className="font-BenzinBold signin">
        <Signup />
      </div>
    </div>
  );
}
