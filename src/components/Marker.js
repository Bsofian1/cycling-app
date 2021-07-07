import React from "react";
import "../styles/Marker.css";

import ViewLogo from "../img/eye.svg";
import CoffeeLogo from "../img/coffee.svg";
import WaterLogo from "../img/water.svg";
import RepairLogo from "../img/repair.svg";

const Marker = (props) => {
  let icon = null;
  const { color, event, removePlace } = props;

  if (event === "water") {
    icon = WaterLogo;
  } else if (event === "coffee") {
    icon = CoffeeLogo;
  } else if (event === "view") {
    icon = ViewLogo;
  } else {
    icon = RepairLogo;
  }


  return (
    <div onClick={()=> removePlace(props.$dimensionKey)}>
      <div
        className="pin bounce"
        style={{ backgroundColor: `${color}`, cursor: "pointer" }}
        title={event}
      >
        <img src={icon} />
      </div>
      <div className="pulse" style={{ backgroundColor: `${color}` }}></div>
    </div>
  );
};

export default Marker;
