import { useEffect, useState } from 'react';
import "./ManagerDashboard.css";
import { getTokenFromLocalStorage } from '../util/token';

const ManagerDashboard = () => {
    const [reviews, setReviews] = useState([]);
    const [totalReviews, setTotalReviews] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [latestReview, setLatestReview] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const token = getTokenFromLocalStorage();
    const [hasFetched, setHasFetched] = useState(false); // Add a flag to check if fetching has occurred

    useEffect(() => {
        async function fetchFeedback() {
            try {
                const response = await fetch('http://localhost:8000/feedback/list/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.access}`,
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }

                const data = await response.json();
                setReviews(data.results);  // Assuming the API returns a paginated result
                setTotalReviews(data.count);
                setLatestReview(data.results[0]);  // Assuming the latest review is the first one
            } catch (error) {
                console.error("Error fetching feedback:", error);
                setErrorMessage('Failed to fetch feedback information. Please try again later.');
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
                    console.log(response.text);
                }
                const data = await response.json();
                setAverageRating(data.average || 0);  // Ensure average is not undefined
            } catch (error) {
                console.log("ERROR", error);
                setErrorMessage('Failed to fetch average rating. Please try again later.');
            }
        }

        if (token && !hasFetched) { // Check if the token exists and fetching hasn't occurred
            fetchFeedback();
            fetchAverage();
            setHasFetched(true); // Set the flag to true after fetching
        }
    }, [token, hasFetched]);

    return (
        <div className="whole">
            <div className="manager-overview">
                <h1>Manager Overview</h1>
                <div className="manager-stats">
                    <div className="checkins">
                        <h2 className="overview-desc">Today's Checkins</h2>
                        <h2 className="overview-no">23</h2>
                    </div>
                    <div className="checkouts">
                        <h2 className="overview-desc">Today's Checkouts</h2>
                        <h2 className="overview-no">23</h2>
                    </div>
                    <div className="total-rooms">
                        <h2 className="overview-desc">Total Rooms</h2>
                        <h2 className="overview-no">40</h2>
                    </div>
                    <div className="occupied-rooms">
                        <h2 className="overview-desc">Occupied Rooms</h2>
                        <h2 className="overview-no">10</h2>
                    </div>
                </div>
            </div>
            <div className="manager-rooms">
                <h1>Manager Rooms</h1>
                <div className="room-type-wrap">
                    <div className="standard-room-pr">
                        <p>Standard Room</p>
                        <p>Occupied 2/30</p>
                        <p>$500/day</p>
                    </div>
                    <div className="comfort-room-pr">
                        <p>Comfort Room</p>
                        <p>Occupied 4/35</p>
                        <p>$500/day</p>
                    </div>
                    <div className="executive-room-pr">
                        <p>Executive Room</p>
                        <p>Occupied 1/20</p>
                        <p>$500/day</p>
                    </div>
                    <div className="suite-room-pr">
                        <p>Suite</p>
                        <p>Occupied 2/30</p>
                        <p>$500/day</p>
                    </div>
                </div>
            </div>
            <div className="manager-feedback">
                <h1>Manager Feedback</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="feedback-wrap">
                    <div className="review-rating">
                        <div className="new-reviews">
                            <h2 className="overview-desc">Total New Reviews</h2>
                            <h2 className="overview-no">{totalReviews}</h2>
                        </div>
                        <div className="average-rating">
                            <h2 className="overview-desc">Avg Rating:</h2>
                            <h2 className="overview-no">{averageRating ? averageRating.toFixed(1) : 'N/A'}</h2>
                        </div>
                    </div>
                    {latestReview && (
                        <div className="review-fields">
                            <div className="review-name">
                                <h2>{latestReview.guest.user.first_name} {latestReview.guest.user.last_name}</h2>
                            </div>
                            <div className="review-text">
                                <p>{latestReview.text}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
