import "./ManagerDashboard.css";

const ManagerDashboard = () => {
    return (
        <div className="whole">
            <div className="manager-overview">
                <h1>Manager Overview</h1>
                <div className="manager-stats">
                    <div className="checkins">
                        <h2 className="overview-desc">Todays Checkins</h2>
                        <h2 className="overview-no">23</h2>
                    </div>
                    <div className="checkouts">
                        <h2 className="overview-desc" >Todays Checkouts</h2>
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
                        <p>500$/day</p>
                    </div>
                    <div className="comfort-room-pr">
                        <p>Comfort Room</p>
                        <p>Occupied 4/35</p>
                        <p>500$/day</p>
                    </div>
                    <div className="executive-room-pr">
                        <p>Executive Room</p>
                        <p>Occupied 1/20</p>
                        <p>500$/day</p>
                    </div>
                    <div className="suite-room-pr">
                        <p>Suite</p>
                        <p>Occupied 2/30</p>
                        <p>500$/day</p>
                    </div>
                </div>
            </div>
            <div className="manager-feedback">
                <h1>Manager Feedback</h1>
                <div className="feedback-wrap">
                <div className="review-rating">
                    <div className="new-reviews">
                        <h2 className="overview-desc">Total New Reviews</h2>
                        <h2 className="overview-no">30</h2>
                    </div>
                    <div className="average-rating">
                        <h2 className="overview-desc">Avg Rating:</h2>
                        <h2 className="overview-no">3.4</h2>
                    </div>
                </div>
                <div className="review-fields">
                    <div className="review-name">
                        <h2>John Doe</h2>
                    </div>
                    <div className="review-text">
                        <p>Example review Text</p>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
