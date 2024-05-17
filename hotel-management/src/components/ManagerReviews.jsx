import { useEffect, useState } from 'react';
import './ManagerReviews.css';
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromLocalStorage } from '../util/token';

const ManagerReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const token = getTokenFromLocalStorage();

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch('http://localhost:8000/feedback/list/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`,
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setReviews(data.results);  // Assuming data.results contains the list of reviews
                calculateFinalReview(data.results);

            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }

        async function fetchAverage() {
            try {
                const response = await fetch("http://localhost:8000/feedback/average/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`,
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(errorText);
                }

                const data = await response.json();
                setAverageRating(data.average);

            } catch (error) {
                console.error("Error fetching average rating:", error);
            }
        }

        fetchReviews();
        fetchAverage();

    }, [token]);

    const calculateFinalReview = (reviews) => {
        if (reviews.length === 0) return;
        
        const theTotalReviews = reviews.map((review) => (
            <div className="review-card" key={review.id}>
                <div className="review-header">
                    <h3>{review.guest.user.email}</h3>
                    <button className="delete-button">Delete</button>
                </div>
                <p className="review-category">{review.stars} stars</p>
                <p className="review-text">{review.text}</p>
            </div>
        ));
        
        return theTotalReviews;
    }
    
    return (
        <div className="manager-reviews">
            <h2>Average Rating: {averageRating}</h2>
            <div className="reviews-container">
                {calculateFinalReview(reviews)}
            </div>
        </div>
    );
};

export default ManagerReviews;
