import React from 'react';

const handleChange = () => {

}

const handleSubmit = () => {

}

function Search(props) {
    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit} >
                <label htmlFor="main-search"></label>
                <input 
                    id="main-search"
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