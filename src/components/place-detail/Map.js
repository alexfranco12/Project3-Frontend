import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);
// console.log(process.env.REACT_GOOGLE_MAP_KEY);

const Map = ({ address, location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={location} // default center of the map when loaded
        defaultZoom={zoomLevel} // default zoom level
      >
        <LocationPin lat={location.lat} lng={location.lng} text={address} />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
