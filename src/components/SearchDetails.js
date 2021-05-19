import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Reviews from './reviews/Reviews'
import Map from "./Map";
import "../map.css";

import axios from "axios";

function SearchDetails(props) {
  let details = props.match.params.details;

  const [locDetails, setLocDetails] = useState([]);
  
  function getDetails() {
    const url = `http://localhost:4000/api/places/${details}`;

    axios.get(url).then((response) => {
      setLocDetails(response.data);
    });
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {locDetails.map((locDetails) => (
        <div key={locDetails.id}>
          <p>
            {" "}
            <img src={locDetails.icon} />
          </p>
          <p>Address: {locDetails.formatted_address}</p>

          <div className="listing">
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${locDetails.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
            />
          </div>
          <div className="google-map">
            <Map
              address={locDetails.formatted_address}
              location={locDetails.geometry.location}
              zoomLevel={18}
            />
          </div>
        </div>
      ))}
      <div className="review-section">
        <Reviews place={details} />
      </div>
    </div>
  );
}

export default SearchDetails;
