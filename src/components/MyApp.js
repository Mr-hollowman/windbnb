import React from "react";
import useFetch from "./useFetch";
import SingleContainer from "./Single-container";

export default function MyApp() {
  const { data, isPending, error } = useFetch("http://localhost:3000/Data");
  return (
    <div className="single-container">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <SingleContainer roomList={data} />}
    </div>
  );
}
