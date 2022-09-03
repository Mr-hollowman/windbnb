import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      <div>
        <img
          className="logo-png"
          src="../../images/triangleLogo.png"
          alt="logo"
        />
        <span className="logo">windbnb</span>
      </div>
      <div className="search-bar">
        <span className="location">Helsinki,Finland</span>
        <span className="add-guest">Add Guest</span>
        <span><i class="fa-solid fa-search" aria-hidden="true"></i></span>
      </div>
    </div>
  );
}
