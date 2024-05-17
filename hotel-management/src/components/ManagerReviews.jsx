import { useEffect, useState } from 'react';
import './ManagerReviews.css';
import { useDispatch, useSelector } from "react-redux";
import { getTokenFromLocalStorage } from '../util/token';

const ManagerReviews = () => {
    const [reviews, setReviews,] = useState([]);
    const [totalReviews, setTotalReviews] = useState([])
    const [averageRating, setAverageRating] = useState(0);
    const token = getTokenFromLocalStorage();
    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch('http://localhost:8000/feedback/list/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`, // Adjust if using another method for storing token
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was notok');
                }
                console.log(await response.json);

                const data = await response.json(); 
                setReviews(data);
                console.log(data)
                // calculateAverageRating(data);
                calculateFinalReview(reviews);
                
                

            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }
        fetchReviews();
        async function fetchAverage() {
            try {
            const response = await fetch("http://localhost:8000/feedback/average/",{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.access} `, // Adjust if using another method for storing token
                }
            }
            );
            if (!response.ok) {
                console.log(response.text);
            }
            const data = await response.json();
            console.log(`The Data is${data}`)
            setAverageRating(data.average);
            }
            catch (error) {
                console.log("ERROR", error);
            }
        }
        fetchAverage();
        
    }, []);

 
    const calculateFinalReview = (reviews) => {
        if (reviews.length === 0) return;
        reviews = reviews.results
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
        
        setTotalReviews(theTotalReviews);
    }
    return (
        <div className="manager-reviews">
            <h2>Average Rating: {averageRating}</h2>
            <div className="reviews-container">
                {totalReviews}
            </div>
        </div>
    );
};

export default ManagerReviews;
