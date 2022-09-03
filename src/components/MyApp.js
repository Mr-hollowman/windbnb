import React from "react";
import useFetch from "./useFetch";
import RoomsView from "./RoomsView";

export default function MyApp() {
  const { data, isPending, error } = useFetch("http://localhost:3000/Data");
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <RoomsView roomList={data} />}
    </div>
  );
}
