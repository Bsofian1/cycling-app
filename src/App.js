import "./App.js";

import Map from "./components/Map";
import Menu from "./components/Menu";
import React, { useState, useEffect } from "react";

import firebaseDb from "./Firebase";



function App() {
  const [event, setEvent] = useState("");

  const [places, setPlaces] = useState({});

  useEffect(() => {
    firebaseDb.child("places").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setPlaces({
          ...snapshot.val(),
        });
      } else {
        setPlaces({});
      }
    });
  }, []);

  const addDb = (obj) => {
    firebaseDb.child("places").push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };

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
        event: currentEvent,
        icon: null,
        position: { lat: lat, lng: lng },
        color: color,
      };

      addDb(newValues);
    }
  };

  const removePlace = (id) => {
    console.log(id);
    firebaseDb.child(`places/${id}`).remove((err) => {
      if (err) {
        console.log(err);}
      // } else {
      //   setPlaces({});
      // }
    });
  };

  return (
    <div>
      <Map
        addPlace={addPlace}
        place={places}
        removePlace={removePlace}
      />
      <Menu event={event} setEvent={setEvent} />
    </div>
  );
}

export default App;
