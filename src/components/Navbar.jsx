import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__header">Where in the world?</h1>
      <div className="navbar__theme">
        <i className="fa-regular fa-moon"></i>
        <span className="navbar__switch-theme">Dark Mode</span>
      </div>
    </nav>
  );
}
