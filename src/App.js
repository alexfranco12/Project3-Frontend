import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import SearchDetails from "./components/SearchDetails";
import Reviews from "./components/reviews/Reviews"
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
// require("dotenv").config();

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={SearchForm} />
      <Route exact path="/places/:spot" component={SearchResults} />
      <Route exact path="/:details" component={SearchDetails} />
      <Route exact path="/places/reviews" component={Reviews} />

      <Footer />

      
      {/* <SearchResults results={results} /> */}
    </div>
  );
}

export default App;
