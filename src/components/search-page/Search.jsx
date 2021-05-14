import React from 'react';
import './Search.css'

const handleChange = () => {

}

const handleSubmit = () => {

}

function Search() {
    return (
        <div className="search-page">
            <form className="search-form" onSubmit={handleSubmit} >
                <label htmlFor="main-search"></label>
                <input 
                    className="main-search"
                    onChange={handleChange}
                    placeholder="Search The City!"
                    value=""
                    type="text"
                    required />
                <input type="submit" className="search-button" value="Search"/>
            </form> 
        </div>
    );
}

export default Search;