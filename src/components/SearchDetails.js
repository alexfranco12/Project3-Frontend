import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Reviews from './reviews/Reviews'
import Map from "./Map";
import "../map.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SearchDetails(props) {
  let details = props.match.params.details;

  // initialize browser history for Back button
  let history = useHistory();

  const [locDetails, setLocDetails] = useState([]);

  const host =
  process.env.NODE_ENV === "production"
    ? "blooming-eyrie-52127.herokuapp.com"
    : "localhost:4000";
  
  function getDetails() {
    const url = `http://${host}/api/places/${details}`;

    axios.get(url).then((response) => {
      setLocDetails(response.data);
    });
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="recon">
      <button className="backButton back" onClick={() => history.goBack()}>
        Back
      </button>

      {locDetails.map((locDetails) => (
        <div key={locDetails.id}>
          <p>
            {" "}
            <img src={locDetails.icon} />
          </p>
          <h1 id="name">  {locDetails.name}</h1>
          <h3 id="name">Come visit us </h3>
          <h2 className="address">Address: {locDetails.formatted_address}</h2>

          <div className="listing">
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${
                locDetails.photos[0] === undefined
                  ? ""
                  : locDetails.photos[0].photo_reference
              }&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
              alt="google pic"
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
