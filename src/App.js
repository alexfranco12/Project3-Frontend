import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SearchDetails from "./components/SearchDetails";
import { Route, Link } from "react-router-dom";
import axios from "axios";
// require("dotenv").config();

function App() {
  // getResults(searchString);
  console.log(process.env);

  return (
    <div>
      <Route exact path="/" component={SearchForm} />
      <Route exact path="/places/:spot" component={SearchResults} />
      <Route exact path="/:details" component={SearchDetails} />

      {/* <SearchResults results={results} /> */}
    </div>
  );
}

export default App;
