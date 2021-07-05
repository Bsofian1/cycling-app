import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import KEY from "../key"

export default function Map(props) {
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
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(t) => props.addPlace(t)}
      >
        <Marker lat={46.958} lng={7.4473} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
