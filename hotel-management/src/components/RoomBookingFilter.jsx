import {useState} from "react";
import "./RoomBookingFilter.css"
import { RequestService } from "../util/sendRequest";
import { getTokenFromLocalStorage} from "../util/token";

const RoomBookingFilter = () => {
    const [checkInDate, setCheckInDate] = useState('');
        const [checkOutDate, setCheckOutDate] = useState('');
        const [numGuests, setNumGuests] = useState(1);
        const [roomType, setRoomType] = useState("Standard Room");
        const handleSearch = () => {
            const searchData = {
                checkInDate,
                checkOutDate,
                numGuests,
                roomType
            };

        };
        // const requestObject = new RequestService(getTokenFromLocalStorage().access_token);

        return (
            <div className="room-booking-filter-container">
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
                <div className="filter-row">
                    <label>Room:</label>
                    <input
                        type="text"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    />
                </div>
            </div>
        );
}
export default RoomBookingFilter;