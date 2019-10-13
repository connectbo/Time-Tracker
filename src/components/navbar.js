import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar text-white font-weight-bold justify-content-between"
      id="topNav"
    >
      <a className="navbar-brand">Most Lightweight Time Manage Assistant</a>
      <button className="btn btn-outline-light" type="button">
        My Account
      </button>
    </nav>
  );
}

export default Navbar;
