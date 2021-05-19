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
      <button className="backButton back" onClick={() => history.goBack()}>
        Back
      </button>

      {locDetails.map((locDetails) => (
        <div key={locDetails.id}>
          <p>
            {" "}
            <img src={locDetails.icon} />
          </p>
          <p id="name">  {locDetails.name}</p>
          <h3 id="name">Come visit us </h3>
          <p>Address: {locDetails.formatted_address}</p>

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
