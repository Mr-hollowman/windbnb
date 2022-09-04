import React from "react";
import NavBar from "./NavBar";
import RoomList from "./RoomList";

export default function RoomsView({
  roomList,
  setSearchEnlarge,
  searchEnlarge,
}) {
  return (
    <div>
      <div className="d-flex justify-content-between header-view">
        <h3>Stays in Finland</h3>
        <span>12 stays</span>
      </div>
      <RoomList
        setSearchEnlarge={setSearchEnlarge}
        searchEnlarge={searchEnlarge}
        roomList={roomList}
      />
    </div>
  );
}
