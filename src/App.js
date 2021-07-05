import "./App.js";

import Map from "./components/Map";
import Menu from "./components/Menu";
import React, { useState } from "react";
import ViewLogo from "./img/eye.svg";
import CoffeeLogo from "./img/coffee.svg";
import WaterLogo from "./img/water.svg";
import RepairLogo from "./img/repair.svg";


function App() {
  const [event, setEvent] = useState("");
  const [place, setPlace] = useState([
    {
      id: 0,
      event: "water",
      icon: WaterLogo,
      position: { lat: 46.948, lng: 7.4473 },
    },
  ]);

  //add a marker on a map

  const addPlace = (e) => {
    if (event) {
      const lat = e.lat;
      const lng = e.lng;
      const currentEvent = event;
      // let currentLogo = null;

      // if (currentEvent === "water") {
      //   currentLogo = WaterLogo;
      // } else if (currentEvent === "coffee") {
      //   currentLogo = CoffeeLogo;
      // } else if (currentEvent === "view") {
      //   currentLogo = ViewLogo;
      // } else {
      //   currentLogo = RepairLogo;
      // }

      const newValues = {
        id: place.length,
        event: currentEvent,
        icon: null,
        position: { lat: lat, lng: lng },
      };

      setPlace((prevState) => {
        return [...prevState, newValues];
      });
    }
  };

  console.log(place);

  return (
    <div>
      <Map addPlace={addPlace} />
      <Menu event={event} setEvent={setEvent} />
    </div>
  );
}

export default App;
