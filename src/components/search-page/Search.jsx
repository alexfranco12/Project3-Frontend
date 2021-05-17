import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Search.css'

function Search() {
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
      <div className="search-page">
        <section className="search-form">
          Search:
          <input
            className="main-search"
            placeholder="search"
            type="text"
            name="placename"
            onChange={handleChange}
            value={searchString}
        />
        <Link to={`/places/${searchString}`} className="search-button">Search</Link>
        </section>
        
      </div>
    );
  }

export default Search;