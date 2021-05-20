import React, { useState, useEffect } from 'react';
import './Reviews.css'
import axios from 'axios'

function ReviewForm( {place} ) {
    const [name, setName] = useState("Anon");
    const [review, setReview] = useState("");
    const [locReviews, setLocReviews] = useState([]);

    const host =
    process.env.NODE_ENV === "production"
      ? "blooming-eyrie-52127.herokuapp.com"
      : "localhost:4000";

    function addReview(reviewID) {
        axios.put(`http://${host}/api/places/${place}`, {
            $push:{reviews: reviewID}
        }).then((response) => {
            console.log(response.data)
        })
    }

    function getDetails() {
        setReview("");
        setName("")
        axios.get(`http://${host}/api/places/${place}`).then((response) => {
            setLocReviews(response.data[0].reviews)
        });
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleCommentChange(e) {
        setReview(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://${host}/api/reviews`, {
            name,
            review
        }).then((response) => {
            addReview(response.data._id)
        }).then(() => getDetails())
    }

    useEffect(() => {
      getDetails()
      }, []);
    
    return (
        <div className="reviews">
            <h4>Create a New Comment!</h4>
            <div className="review-form">
                <div className="name-container">
                    <label>Name: </label>
                    <input 
                        className="textbox" 
                        type="text"
                        onChange={handleNameChange}
                        value={name}
                    />
                </div>
                <div className="review-container">
                    <label>Comment: </label>
                    <input 
                        className="textbox" 
                        type="text"
                        onChange={handleCommentChange}
                        value={review}
                    />
                </div>
                <button 
                    className="submit" 
                    onClick={handleSubmit}
                    >Submit
                </button>
            </div>
            <div className="review-container">
                {locReviews.map((review) => (
                    <div className="review-card">
                        <p className="review-name"> {review.name}: </p>
                        <p className="review"> {review.review} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewForm;