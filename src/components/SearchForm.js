import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";


function SearchForm() {
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [blankString, setBlankString] = useState("");

  // Cities selection group
  const Cities = [
    { label: "Los Angeles" },
    { label: "New York" },
    { label: "San Diego" },
    { label: "Miami" },
    { label: "Boston" },
    { label: "Chicago" },
    { label: "San Fransisco" },
  ];

  const styleSelect = {
    container: (base) => ({
      ...base,
      flex: 1,

      width: "150px",
    }),
  };

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

  
    
    <div className="mainpage">
       
      <section className="searchBar">
        <input
          placeholder="search"
          type="text"
          name="placename"
          onChange={handleChange}
          value={searchString}
        />

        <div>
          <Select styles={styleSelect} options={Cities} />
        </div>

        <Link to={`/places/${searchString}`}>
          <button className="button">Search</button>
        </Link>
      </section>

      <div className="container">
        <div className="container itemCafe">
          <Link style={{ textDecoration: "none" }} to={`/places/cafes`}>
            Cafe
          </Link>
        </div>
        <div className="container itemRest">
          <Link style={{ textDecoration: "none" }} to={`/places/restaurants`}>
            Restaurant
          </Link>
        </div>
        <div className="container itemBar">
          <Link style={{ textDecoration: "none" }} to={`/places/bars`}>
            Bars
          </Link>
        </div>
        <div className="container itemStore">
          <Link style={{ textDecoration: "none" }} to={`/places/stores`}>
            Store
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default SearchForm;
