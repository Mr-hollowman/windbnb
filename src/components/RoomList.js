import React from "react";

export default function RoomList({ roomList }) {
  return (
    <div>
      {roomList.map((res, j) => (
        <div key={j}>
          <div className="img-container">
            <img src={res.photo} alt="image" />
          </div>
          <div>
            {res.superHost&&<span>SUPER HOST</span>}
            <span>{res.type}.{res.beds}beds</span>
            <span>{res.rating}</span>
          </div>
          <div>{res.title}</div>
        </div>
      ))}
    </div>
  );
}
