import React from "react";
import NavBar from "./NavBar";
import RoomsView from "./RoomsView";

export default function SingleContainer({
  roomList,
  setSearchEnlarge,
  searchEnlarge,
}) {
  return (
    <div>
      <NavBar
        setSearchEnlarge={setSearchEnlarge}
        searchEnlarge={searchEnlarge}
      />
      <RoomsView
        roomList={roomList}
        setSearchEnlarge={setSearchEnlarge}
        searchEnlarge={searchEnlarge}
      />
    </div>
  );
}
