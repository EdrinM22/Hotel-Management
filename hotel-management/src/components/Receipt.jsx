import React, { useState } from 'react';
import "./Receipt.css";
import Button from "./Button.jsx";
import EditReservationModal from './EditReservationModal';

const Receipt = ({ reservations, errorMessage, onEdit, onRemove }) => {
    const [editReservation, setEditReservation] = useState(null);

    const handleEdit = (reservation) => {
        setEditReservation(reservation);
    };

    const handleSave = (updatedReservation) => {
        onEdit(updatedReservation.id, updatedReservation);
        setEditReservation(null);
    };

    if (errorMessage) {
        return <p className="error-message">{errorMessage}</p>;
    }

    const calculateTotal = () => {
        return reservations.reduce((total, room) => {
            return total + room.price * room.nights * room.rooms;
        }, 0);
    };

    return (
        <div className="receipt">
            <h2>Your Reservation</h2>
            {reservations.map(reservation => (
                <div key={reservation.id} className="receipt-info">
                    <div className="receipt-date">
                        <p>Check-in:</p>
                        <p>{reservation.checkInDate}</p>
                    </div>
                    <div className="receipt-date">
                        <p>Check-out:</p>
                        <p>{reservation.checkOutDate}</p>
                    </div>
                    <div className="receipt-date">
                        <p>Guests:</p>
                        <p>{reservation.guests}</p>
                    </div>
                    <div className="receipt-date">
                        <p>Rooms:</p>
                        <p>{reservation.rooms}</p>
                    </div>
                    <div>
                        <div className="room-type">
                            <h1>{reservation.roomType}</h1>
                            <h3>${reservation.price} / night</h3>
                        </div>
                        <p>{reservation.details}</p>
                        <div className="receipt-edit">
                            <Button display={"text"} onClick={() => handleEdit(reservation)}>
                                <span style={{ fontSize: "1.5rem" }}>&#9998;</span> Edit
                            </Button>
                            <Button display={"text"} onClick={() => onRemove(reservation.id)}>
                                <span style={{ fontSize: "1.5rem" }}>&#128465;</span> Remove
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="receipt-total">
                <p>Total: ${calculateTotal()}</p>
            </div>
            <div id="book-now">
                <Button display={"primary"}>Book now</Button>
            </div>

            {editReservation && (
                <EditReservationModal
                    reservation={editReservation}
                    onClose={() => setEditReservation(null)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default Receipt;
