import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Map from "./Map";
import "../map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

function SearchResults(props) {
  let spot = props.match.params.spot;
  const [results, setResults] = useState([]);

  const host =
  process.env.NODE_ENV === "production"
    ? "blooming-eyrie-52127.herokuapp.com"
    : "localhost:4000";
  
  function getResults() {
    const url = `http://${host}/api/places/${spot}`;

    axios.get(url).then((response) => {
      setResults(response.data);
    });
    console.log(results);
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <Link to={`/`}>
        <button className="backButton back">Back</button>
      </Link>
      <div className="containerResults">
        {results.map((result) => (
          <div className="resultList" key={result.id}>
            <Link style={{ textDecoration: "none" }} to={`/${result.name}`}>
              {" "}
              {result.name}
            </Link>
            {/* <span style={{ marginLeft: "35rem" }}>Rating: {result.rating}</span> */}
            <span>Rating: {result.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
