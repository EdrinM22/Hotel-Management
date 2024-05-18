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

    const roomCounts = reservations.reduce((acc, room) => {
        const key = room.roomType;
        if (!acc[key]) {
            acc[key] = { ...room, count: 0 };
        }
        acc[key].count += 1;
        return acc;
    }, {});

    return (
        <div className="receipt">
            <h2>Your Reservation</h2>
            {Object.values(roomCounts).map(reservation => (
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
                        <h4>Number of rooms:</h4>
                        <p>{reservation.count} rooms</p>
                    </div>
                    <div className="receipt-date">
                        <h4>Number of nights:</h4>
                        <p>{reservation.nights} nights</p>
                    </div>
                    <div>
                    <div className="room-type">
                            <h1>{reservation.roomType}</h1>
                            <h3>${reservation.price}</h3>
                        </div>
                        <p>{reservation.details}</p>

                        <div className="receipt-edit">
                            <Button display={"text"} onClick={() => handleEdit(reservation)}>
                                <span style={{fontSize: "1.5rem"}}>&#9998;</span> Edit
                            </Button>
                            <Button display={"text"} onClick={() => onRemove(reservation.id)}>
                                <span style={{fontSize: "1.5rem"}}>&#128465;</span> Remove
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="receipt-total">
                <p>Total: ${reservations.reduce((total, room) => total + room.total, 0)}</p>
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
