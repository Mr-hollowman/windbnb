import React from "react";
import NavBar from "./NavBar";
import RoomsView from "./RoomsView";

export default function SingleContainer({ roomList }) {
  return (
    <div>
        <NavBar />
        <RoomsView roomList={roomList} />
    </div>
  );
}
