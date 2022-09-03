import React from "react";

export default function RoomList({ roomList }) {
  return (
    <div className="view-container">
      {roomList.map((res, j) => (
        <div key={j} className="room-container">
          <div className="img-container">
            <img src={res.photo} alt="image" />
          </div>
          <div className="d-flex justify-content-between">
            {res.superHost && <span className="superhost">SUPER HOST</span>}
            <span className="room-type">
              {res.type}{res.beds&&<span> . {res.beds} beds</span>}
            </span>
            <span className="d-flex justify-content-between width-15"><span><i className="fa-solid fa-star"></i></span><span>{res.rating}</span></span>
          </div>
          <div className="room-title">{res.title}</div>
        </div>
      ))}
    </div>
  );
}
