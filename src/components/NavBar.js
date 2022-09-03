import React from "react";

export default function NavBar() {
  return (
    <div>
      <div>
        <img
          className="logo-png"
          src="../../images/triangleLogo.png"
          alt="logo"
        />
        <span className="logo">windbnb</span>
      </div>
      <div>
        <div>Helsinki,Finland</div>
        <div>Add Guest</div>
        <i class="fa-solid fa-search" aria-hidden="true"></i>
      </div>
    </div>
  );
}
