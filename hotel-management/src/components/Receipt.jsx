import React, { useState } from "react";
import "./Receipt.css";
import Button from "./Button.jsx";
import EditReservationModal from "./EditReservationModal";
import { useNavigate } from "react-router-dom";
import BookingFormModal from "./BookingFormModal";
import { getTokenFromLocalStorage } from "../util/token.js";

import { useDispatch, useSelector } from "react-redux";
import { bookingActions } from "../store/BookingSlice";

const Receipt = ({ reservations, errorMessage, onEdit, onRemove }) => {
	const dispatch = useDispatch();

	const bookingInfo = useSelector((state) => state.booking);

	const token = getTokenFromLocalStorage();
	const [editReservations, setEditReservations] = useState(false);
	const [showBookingForm, setShowBookingForm] = useState(false);
	const navigate = useNavigate();

	const handleSave = (updatedReservations) => {
		updatedReservations.forEach((updatedReservation) => {
			onEdit(updatedReservation.id, updatedReservation);
		});
		setEditReservations(false);
	};

	if (errorMessage) {
		return <p className="error-message">{errorMessage}</p>;
	}

	const calculateTotal = () => {
		return reservations.reduce((total, room) => {
			return total + room.price * room.nights * room.rooms;
		}, 0);
	};

	const handleRoomIncrement = (id, increment) => {
		const updatedReservations = reservations.map((reservation) => {
			if (reservation.id === id) {
				return {
					...reservation,
					rooms: Math.max(reservation.rooms + increment, 1), // Ensure rooms cannot be less than 1
				};
			}
			return reservation;
		});
		onEdit(
			id,
			updatedReservations.find((reservation) => reservation.id === id),
		);
	};
    
	const handlePayment = () => {
		if (!token) {
			setShowBookingForm(true);
		} else {
			const room_types = reservations.map((reservation) => ({
				id: reservation.id,
				count: reservation.rooms,
			}));

			navigate(
				"/book/payment",
				// {
				//     state: {
				//         room_types,
				//         start_date: reservations[0].checkInDate,
				//         end_date: reservations[0].checkOutDate,
				//     }
				// }
			);

			const state = {
				room_types,
			};
			console.log(state);
		}
	};

	const handleFormSubmit = (guest_information) => {
		setShowBookingForm(false);
		const room_types = reservations.map((reservation) => ({
			id: reservation.id,
			count: reservation.rooms,
		}));
		const state = {
			room_types,
			start_date: reservations[0].checkInDate,
			end_date: reservations[0].checkOutDate,
			guest_information,
		};

		dispatch(bookingActions.setGuestInformation(guest_information));
		dispatch(bookingActions.setRoomTypes(room_types));
		dispatch(bookingActions.setStartDate(reservations[0].checkInDate));
		dispatch(bookingActions.setEndDate(reservations[0].checkOutDate));

		console.log(bookingInfo);

		navigate(
			"/book/payment",
			//  {
			//     state: {
			//         room_types,
			//         guest_information
			//     }
			// }
		);
		console.log(state);
	};

	return (
		<div className="receipt">
			<h2>Your Reservation</h2>
			{reservations.map((reservation) => (
				<div key={reservation.id} className="receipt-info">
					<div className="receipt-date">
						<h4>Check-in:</h4>
						<p>{reservation.checkInDate}</p>
					</div>
					<div className="receipt-date">
						<h4>Check-out:</h4>
						<p>{reservation.checkOutDate}</p>
					</div>
					<div className="receipt-date">
						<h4>Guests:</h4>
						<p>{reservation.guests}</p>
					</div>
					<div className="receipt-date">
						<h4>Rooms:</h4>
						<div className="room-counter">
							<Button display={"text"} onClick={() => handleRoomIncrement(reservation.id, -1)}>
								&#8722;
							</Button>
							<p>{reservation.rooms}</p>
							<Button
								display={"text"}
								width={"1rem"}
								onClick={() => handleRoomIncrement(reservation.id, 1)}
							>
								&#43;
							</Button>
						</div>
					</div>
					<div>
						<div className="room-type">
							<h1>{reservation.roomType}</h1>
							<h3>${reservation.price} / night</h3>
						</div>
						<p>{reservation.details}</p>
						<div className="receipt-edit">
							<Button display={"text"} onClick={() => onRemove(reservation.id)}>
								<span style={{ fontSize: "1.5rem" }}>&#128465;</span> Remove
							</Button>
						</div>
					</div>
				</div>
			))}
			<div className="receipt-total">
				<Button display={"text"} onClick={() => setEditReservations(true)}>
					&#9998; Edit
				</Button>
				<h3>Total: ${calculateTotal()}</h3>
			</div>
			<div id="book-now">
				<Button display={"primary"} onClick={handlePayment}>
					Book now
				</Button>
			</div>

			{editReservations && (
				<EditReservationModal
					reservations={reservations}
					onClose={() => setEditReservations(false)}
					onSave={handleSave}
				/>
			)}
			{showBookingForm && (
				<BookingFormModal onClose={() => setShowBookingForm(false)} onSubmit={handleFormSubmit} />
			)}
		</div>
	);
};

export default Receipt;
