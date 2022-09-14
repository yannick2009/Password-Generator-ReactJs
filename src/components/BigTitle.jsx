import React from "react";
import "./BigTitle.scss";

export default function BigTitle(props) {
  return (
    <div className="BigTitle">
      <h1>{props.title}</h1>
      <p>Developped by @Baby_Desiigner</p>
    </div>
  );
}
