import { useState } from "react";
import "./RoomBookingFilter.css";
import { RequestService } from "../util/sendRequest";
import { getTokenFromLocalStorage } from "../util/token";

const RoomBookingFilter = ({ filters, onFilterChange }) => {
	// const requestObject = new RequestService(getTokenFromLocalStorage().access_token);
	return (
		<div className="room-booking-filter-container">
			<div className="filter-row">
				<label>Check-in Date:</label>
				<input
					type="date"
					value={filters.checkInDate}
					onChange={(event) => onFilterChange("checkInDate", event.target.value)}
				/>
			</div>
			<div className="filter-row">
				<label>Check-out Date:</label>
				<input
					type="date"
					value={filters.checkOutDate}
					onChange={(event) => onFilterChange("checkOutDate", event.target.value)}
				/>
			</div>

			<div className="filter-row">
				<label>Number of Guests:</label>
				<input
					type="number"
					min="1"
					value={filters.numGuests}
					onChange={(event) => onFilterChange("numGuests", event.target.value)}
				/>
			</div>
			<div className="filter-row">
				<label>Room:</label>
				<input
					type="text"
					value={filters.roomType}
					onChange={(event) => onFilterChange("roomType", event.target.value)}
				/>
			</div>
		</div>
	);
};
export default RoomBookingFilter;