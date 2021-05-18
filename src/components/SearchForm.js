import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

function SearchForm() {
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [blankString, setBlankString] = useState("");

  function getResults() {
    const url = `http://localhost:4000/api/places`;

    setBlankString("search");

    axios.get(url).then((response) => {
      setResults(response.data);
    });
    console.log(results);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getResults(searchString);
  }

  return (
    <div>
      <section className="searchBar">
        <input
          placeholder="search"
          type="text"
          name="placename"
          onChange={handleChange}
          value={searchString}
        />
        <Link to={`/places/${searchString}`}>
          <button>Search</button>
        </Link>
      </section>
      <div className="container">
        <div>
          <Link style={{ textDecoration: "none" }} to={`/places/cafes`}>
            Cafe
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to={`/places/restaurants`}>
            Restaurants
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to={`/places/bars`}>
            Bars
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none" }} to={`/places/store`}>
            Store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
