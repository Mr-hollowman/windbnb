import React from "react";

export default function NavBar({ setSearchEnlarge, searchEnlarge }) {
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
      <div
        className={searchEnlarge ? "enlarged-searchbar" : ""}
        onClick={() => setSearchEnlarge(true)}
        onBlur={()=>setSearchEnlarge(false)}
      >
        <div className={searchEnlarge ? "super-search" : "search-bar"}>
          <span
            className={searchEnlarge ? "enlarged-location span" : "location"}
          >
            {searchEnlarge && <span className="up">Location</span>}
            <span>Helsinki,Finland</span>
          </span>
          <span
            className={searchEnlarge ? "enlarged-addGuest span" : "add-guest"}
          >
            {searchEnlarge && <span className="up">Guests</span>}
            <span>Add Guest</span>
          </span>
          <span className={searchEnlarge ? "span span-button" : ""}>
            {!searchEnlarge && (
              <i class="fa-solid fa-search" aria-hidden="true"></i>
            )}
            {searchEnlarge && (
              <button className="search-button">
                <i class="fa-solid fa-search"></i>Search
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
