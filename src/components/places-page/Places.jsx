import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Places.css'

function Places() {
    const [places, setPlaces] = useState([]);
    
    function fetchPlaces() {
        const url = "http://localhost:4000/api/places"

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPlaces(data)
        })
        .catch(console.error);
    }
    
    useEffect(() => {
        fetchPlaces()
    }, []);

    return (
        <div className="Places">
            <div className="places-container">
                <Link to="/" className="back-link"><button className="back-button">BACK</button></Link>
                {places.map(place => (
                    <div className="place-card">
                        <h3 className="card-title">{place.name}</h3>
                        <p className="card-address">{place.formatted_address}</p>
                        <p>Rating: {place.rating}/5</p>
                    </div>
                ))}
            </div>
            <div className="map-container">
                MAP.
            </div>
        </div>
    );
}

export default Places;