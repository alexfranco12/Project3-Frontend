import React, { useEffect, useState } from 'react';

function PlaceDetails() {
    const [place, setPlace] = useState([]);

    function fetchPlace( {match} ) {
        const url = `http://localhost:4000/api/places/${match.params.id}`
            
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setPlace(data);
        })
        .catch(console.error);
    }

    useEffect(() => {
        fetchPlace()
    }, []);

    return (
        <div>
            <h1>{place.name}</h1>
        </div>
    );
}

export default PlaceDetails;