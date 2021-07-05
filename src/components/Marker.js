import React from "react";
import "../styles/Marker.css";

export default function Marker(props) {
  const { color, text, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      key={id}
      title={text}
    />
  );
}
