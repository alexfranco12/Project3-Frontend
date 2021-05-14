import React from 'react';

const handleSubmit = () => {

}

const handleSubmit = () => {

}

function Search(props) {
    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit} >
                <label htmlFor="header-search"></label>
                <input 
                    id="header-search"
                    onChange={handleChange}
                    placeholder="Search for your favorite recipe"
                    value=""
                    type="text"
                    required />
                <input type="submit" className="search-button" value="Search"/>
            </form> 
        </div>
    );
}

export default Search;