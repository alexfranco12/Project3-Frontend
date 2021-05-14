import React, { useEffect, useState } from 'react';

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
        <div>

            <div className="places-container">
                {places.map(place => (
                    <div className="card">
                        <div className="card-title">
                            <h3>{place.name}</h3>
                        </div>
                    </div> 
                ))}
            </div>

        </div>
    );
}

export default Places;