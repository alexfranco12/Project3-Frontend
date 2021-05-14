import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function PlaceDetails( {match} ) {
    console.log(match)
    const [place, setPlace] = useState([]);

    function fetchPlace( ) {
        const url = `http://localhost:4000/api/places/${match.params.id}`
            
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPlace(data);
        })
        .catch(console.error);
    }

    useEffect(() => {
        fetchPlace()
    }, []);

    return (
        <div>
            <Link to="/places" className="back-link"><button className="back-button">BACK</button></Link>
            <h1>{place.name}</h1>
            <p>{place.formatted_address}</p>
            <p></p>
        </div>
    );
}

export default PlaceDetails;