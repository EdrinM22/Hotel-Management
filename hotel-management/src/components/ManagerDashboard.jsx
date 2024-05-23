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
    const [roomTypes, setRoomTypes] = useState([]);
    const [totalRooms, setTotalRooms] = useState(0);
    const [occupiedRooms, setOccupiedRooms] = useState(0);
    const [todayCheckins, setTodayCheckins] = useState(0);
    const [todayCheckouts, setTodayCheckouts] = useState(0);

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

        async function fetchRoomTypes() {
            try {
                const response = await fetch("http://localhost:8000/rooms/rooms/list/", { // Verify the endpoint
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
                // console.log(data);
                setRoomTypes(data);  // Assuming the API returns a paginated result
            } catch (error) {
                console.error("Error fetching room types:", error);
                setErrorMessage('Failed to fetch room types. Please try again later.');
            }
        }

        async function fetchTotalRooms() {
            try {
                const response = await fetch("http://localhost:8000/rooms/rooms/admin/list/", {
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
                setTotalRooms(data.length); // Assuming the API returns a count of total rooms
            } catch (error) {
                console.error("Error fetching total rooms:", error);
                setErrorMessage('Failed to fetch total rooms. Please try again later.');
            }
        }

        async function fetchOccupiedRooms() {
            try {
                const response = await fetch("http://localhost:8000/rooms/rooms/admin/list", { // Verify the endpoint for occupied rooms
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

                // console.log(data);

                // console.log(data.filter(room => room.is_reserved === true).length);
                setOccupiedRooms(data.filter(room => room.is_reserved === true).length);
                  // Assuming the API returns a count of occupied rooms
            } catch (error) {
                console.error("Error fetching occupied rooms:", error);
                setErrorMessage('Failed to fetch occupied rooms. Please try again later.');
            }
        }

        async function fetchTodayCheckins() {
            const today = new Date().toISOString().split('T')[0]; // Get today's date in the format 'YYYY-MM-DD'
            try {
                const response = await fetch("http://localhost:8000/rooms/reservation/list/", { // Verify the endpoint for today's check-ins
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
                // console.log(data.filter(room => room.start_date === today).length);
                setTodayCheckins(data.filter(room => room.start_date === today).length);  // Assuming the API returns a count of today's check-ins
            } catch (error) {
                console.error("Error fetching today's check-ins:", error);
                setErrorMessage('Failed to fetch today\'s check-ins. Please try again later.');
            }
        }

        async function fetchTodayCheckouts() {
            const today = new Date().toISOString().split('T')[0];
            try {
                
                const response = await fetch("http://localhost:8000/rooms/reservation/list/", { // Verify the endpoint for today's check-outs
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
                setTodayCheckouts(data.filter(room => room.end_date === today).length);  // Assuming the API returns a count of today's check-outs
            } catch (error) {
                console.error("Error fetching today's check-outs:", error);
                setErrorMessage('Failed to fetch today\'s check-outs. Please try again later.');
            }
        }

        if (token && !hasFetched) { // Check if the token exists and fetching hasn't occurred
            fetchFeedback();
            fetchAverage();
            fetchRoomTypes();
            fetchTotalRooms();
            fetchOccupiedRooms();
            fetchTodayCheckins();
            fetchTodayCheckouts();
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
                        <h2 className="overview-no">{todayCheckins}</h2>
                    </div>
                    <div className="checkouts">
                        <h2 className="overview-desc">Today's Checkouts</h2>
                        <h2 className="overview-no">{todayCheckouts}</h2>
                    </div>
                    <div className="total-rooms">
                        <h2 className="overview-desc">Total Rooms</h2>
                        <h2 className="overview-no">{totalRooms}</h2>
                    </div>
                    <div className="occupied-rooms">
                        <h2 className="overview-desc">Occupied Rooms</h2>
                        <h2 className="overview-no">{occupiedRooms}</h2>
                    </div>
                </div>
            </div>
            <div className="manager-rooms">
                <h1>Manager Rooms</h1>
                <div className="room-type-wrap">
                    {roomTypes.length > 0 ? (
                        roomTypes.map((room) => (
                            
                            <div key={room.room_type.id} className='suite-room-pr'>
                                <p>{room.room_type.type_name}</p>
                                <p>{room.room_type.size} guests per room</p>
                                <p>${room.room_type.online_price}/day</p>
                            </div>
                            
                        ))
                    ) : (
                        <p>No room types available.</p>
                    )}
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
