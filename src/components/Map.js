import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default function Map(props) {
  const places = props.place;

  //Add the place marker to the map
  const Markers = Object.keys(places).map((id) => {
    return (
      <Marker
        removePlace={props.removePlace}
        key={id}
        lat={places[id].position.lat}
        lng={places[id].position.lng}
        event={places[id].event}
        color={places[id].color}
      />
    );
  });

  //Add ontpion views on top left
  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  //Add default view
  const defaultProps = {
    center: {
      lat: 46.948,
      lng: 7.4474,
    },
    zoom: 14,
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(t) => props.addPlace(t)}
        options={getMapOptions}
      >
        {Markers}
      </GoogleMapReact>
    </div>
  );
}
