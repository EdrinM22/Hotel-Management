import { useState } from 'react';
import './HotelBookingFilter.css';
import Background from "../assets/bg.jpg";
import Button from "./Button.jsx";
const background = {
    backgroundImage: `url(${Background})`,
    height: "91.5vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize:'cover'
};
const HotelBookingFilter = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);

    const handleSearch = () => {
        const searchData = {
            checkInDate,
            checkOutDate,
            numGuests
        };

    };

    return (
        <section className="landing-page" style={background}>
            <div className="hotel-booking-filter-container">
                <div className="filter-row">
                    <label>Check-in Date:</label>
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                    />
                </div>
                <div className="filter-row">
                    <label>Check-out Date:</label>
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                </div>

                <div className="filter-row">
                    <label>Number of Guests:</label>
                    <input
                        type="number"
                        value={numGuests}
                        min="1"
                        onChange={(e) => setNumGuests(parseInt(e.target.value))}
                    />
                </div>
                <Button onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </section>
    );
};

export default HotelBookingFilter;
