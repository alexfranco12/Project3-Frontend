import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

function SearchForm() {
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState("restaurants");

  function getResults() {
    const url = `http://localhost:4000/api/places`;

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
      <section>
        Search:
        <input
          placeholder="search"
          type="text"
          name="placename"
          onChange={handleChange}
          value={searchString}
        />
      </section>
      <Link to={`/places/${searchString}`}>Search</Link>
    </div>
  );
}

export default SearchForm;
