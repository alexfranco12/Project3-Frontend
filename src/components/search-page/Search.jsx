import React, { useState } from 'react';
import './Search.css'

function Search() {
    const [userInput, setUserInput] = useState("");
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setSearch(userInput);
        setUserInput("")
    }

    return (
        <div className="search-page">
            <form className="search-form" onSubmit={handleSubmit} >
                <label htmlFor="main-search"></label>
                <input 
                    className="main-search"
                    onChange={handleChange}
                    placeholder="Search The City!"
                    value={userInput}
                    type="text"
                    required />
                <input type="submit" className="search-button" value="Search"/>
            </form> 
        </div>
    );
}

export default Search;