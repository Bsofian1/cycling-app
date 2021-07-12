import React from "react";
import "../styles/Marker.css";

import useLongPress from "../utils/useLongPress";

import ViewLogo from "../img/eye.svg";
import CoffeeLogo from "../img/coffee.svg";
import WaterLogo from "../img/water.svg";
import RepairLogo from "../img/repair.svg";

const Marker = (props) => {
  let icon = null;
  const { color, event, removePlace } = props;

  //Clicks events
  //Remove the event
  const onLongPress = () => {
    removePlace(props.$dimensionKey)
  };

  //Add on click on the same component that longClick
  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  //define the icon from the event name
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
    <div {...longPressEvent}>
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
