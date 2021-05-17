import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Map from "./Map";
import "../map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import { Marker } from "google-maps-react";
import location from "../images/location.png";

function SearchResults(props) {
  let spot = props.match.params.spot;

  console.log(spot);
  const [results, setResults] = useState([]);
  function getResults() {
    const url = `http://localhost:4000/api/places/${spot}`;

    axios.get(url).then((response) => {
      setResults(response.data);
    });
    console.log(results);
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div className="gallery">
      {results.map((result) => (
        <div key={result.id} className="gif">
          <Link to={`/${result.name}`}> {result.name}</Link>
        </div>
      ))}
      <div className="google-map">
        <Map location={{ lat: 34.0522, lng: -118.2437 }} zoomLevel={10}>
          {results.map((result) => (
            <Marker
              position={{
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng,
              }}
              icon={location}
              key={result.id}
            />
          ))}
        </Map>
      </div>
    </div>
  );
}

export default SearchResults;
