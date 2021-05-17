import React, { useEffect, useState } from 'react';
import Map from './Map'
import { Link } from 'react-router-dom'
import axios from 'axios';

function PlaceDetails( {match} ) {
    const [place, setPlace] = useState([]);
    const [placePhotos, setPlacePhotos] = useState([]);
    const [placeLocation, setPlaceLocation] = useState({});

    function fetchPlace( ) {
        const url = `http://localhost:4000/api/places/spot/${match.params.id}`
            
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPlace(data);
            setPlacePhotos(data.photos[0])
            setPlaceLocation(data.geometry.location)
        })
        .catch(console.error);
    }

    useEffect(() => {
        fetchPlace()
    }, []);

    return (
        <div>
            <Link to="/" className="back-link"><button className="back-button">BACK</button></Link>
            <p>
                {" "}
                <img alt="icon" src={place.icon} />
            </p>
            <h1>{place.name}</h1>
            <p>Address: {place.formatted_address}</p>
            <p></p>
            <div>
                <img
                alt="google images"
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${placePhotos.photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`} 
                />
            </div>
            <div className="google-map">
                <Map
                address={place.formatted_address}
                location={placeLocation}
                zoomLevel={18}
                />
            </div>
        </div>
    );
}

export default PlaceDetails;