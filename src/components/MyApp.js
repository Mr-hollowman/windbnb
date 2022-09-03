import React from "react";
import useFetch from "./useFetch";
import RoomList from "./RoomList";

export default function MyApp() {
  const { data, isPending, error } = useFetch("http://localhost:3000/Data");
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <RoomList roomList={data} />}
    </div>
  );
}
