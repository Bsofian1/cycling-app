import "./App.js";

import Map from "./components/Map";
import Menu from "./components/Menu";
import React, { useState } from "react";

function App() {
  const [event, setEvent] = useState("");
  const [place, setPlace] = useState([
    {
      id: 0,
      event: "water",
      position: { lat: 46.948, lng: 7.4473 },
      color: "#118ab2",
    },
  ]);

  const addPlace = (e) => {
    if (event) {
      const lat = e.lat;
      const lng = e.lng;
      const currentEvent = event;

      let color = null;
      if (currentEvent === "water") {
        color = "#118ab2";
      } else if (currentEvent === "coffee") {
        color = "#ef476f";
      } else if (currentEvent === "view") {
        color = "#06d6a0";
      } else {
        color = "#ffd166";
      }

      const newValues = {
        id: place.length,
        event: currentEvent,
        icon: null,
        position: { lat: lat, lng: lng },
        color: color,
      };

      setPlace((prevState) => {
        return [...prevState, newValues];
      });
    }
  };

  const removePlace = (id) => {
    const newList = place.filter((item) => item.id != id);
    setPlace(newList);
  };

  return (
    <div>
      <Map addPlace={addPlace} place={place} removePlace={removePlace} />
      <Menu event={event} setEvent={setEvent} />
    </div>
  );
}

export default App;
