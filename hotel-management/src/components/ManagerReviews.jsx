import { useEffect, useState } from 'react';
import './ManagerReviews.css';

const ManagerReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch('/api/feedbacks/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust if using another method for storing token
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setReviews(data);
                calculateAverageRating(data);
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        }

        fetchReviews();
    }, []);

    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) return;
        const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
        setAverageRating((totalStars / reviews.length).toFixed(1));
    };

    return (
        <div className="manager-reviews">
            <h2>Average Rating: {averageRating}</h2>
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review-card" key={review.id}>
                        <div className="review-header">
                            <h3>{review.guest_id}</h3>
                            <button className="delete-button">Delete</button>
                        </div>
                        <p className="review-category">Category</p>
                        <p className="review-text">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerReviews;
