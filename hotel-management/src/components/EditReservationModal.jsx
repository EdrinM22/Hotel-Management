import React, { useEffect, useState } from 'react';
import './EditReservationModal.css';
import Button from './Button.jsx';

const EditReservationModal = ({ reservation, onClose, onSave }) => {
    const [checkInDate, setCheckInDate] = useState(reservation.checkInDate);
    const [checkOutDate, setCheckOutDate] = useState(reservation.checkOutDate);
    const [nights, setNights] = useState(reservation.nights);
    const [rooms, setRooms] = useState(reservation.rooms);
    const [guests, setGuests] = useState(reservation.guests);

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const handleSave = () => {
        const updatedReservation = {
            ...reservation,
            checkInDate,
            checkOutDate,
            nights,
            rooms,
            guests,
        };
        onSave(updatedReservation);
        onClose();
    };

    const handleCheckInChange = (e) => {
        const newCheckInDate = e.target.value;
        setCheckInDate(newCheckInDate);
        setCheckOutDate(calculateCheckOutDate(newCheckInDate, nights));
    };

    const handleNightsChange = (e) => {
        const newNights = Number(e.target.value);
        setNights(newNights);
        setCheckOutDate(calculateCheckOutDate(checkInDate, newNights));
    };

    const calculateCheckOutDate = (checkInDate, nights) => {
        const checkIn = new Date(checkInDate);
        checkIn.setDate(checkIn.getDate() + nights);
        return checkIn.toISOString().split('T')[0]; // Return date in YYYY-MM-DD format
    };

    return (
        <div className="modal-reservation">
            <div className="modal-content">
                <h2>Edit Reservation</h2>
                <label>
                    Check-in Date:
                    <input
                        type="date"
                        value={checkInDate}
                        onChange={handleCheckInChange}
                    />
                </label>
                <label>
                    Number of Nights:
                    <input
                        type="number"
                        value={nights}
                        min="1"
                        onChange={handleNightsChange}
                    />
                </label>
                <label>
                    Check-out Date:
                    <input
                        type="date"
                        value={checkOutDate}
                        readOnly
                    />
                </label>
                <label>
                    Number of Rooms:
                    <input
                        type="number"
                        value={rooms}
                        min="1"
                        onChange={(e) => setRooms(Number(e.target.value))}
                    />
                </label>
                <label>
                    Number of Guests:
                    <input
                        type="number"
                        value={guests}
                        min="1"
                        onChange={(e) => setGuests(Number(e.target.value))}
                    />
                </label>
                <div className="modal-actions">
                    <Button display={"primary"} onClick={handleSave}>Save</Button>
                    <Button display={"text"} onClick={onClose}>Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default EditReservationModal;
