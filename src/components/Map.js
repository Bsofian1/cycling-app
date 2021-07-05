import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

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
        bootstrapURLKeys={{ key: "AIzaSyBgPeypX8AQRqIzsIRlYaODNNo5tRVNK08" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(t) => props.addPlace(t)}
      >
        <Marker lat={46.958} lng={7.4473} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
