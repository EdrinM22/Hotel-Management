import React, { useEffect, useState } from 'react';
import './EditReservationModal.css';
import Button from './Button.jsx';

const EditReservationModal = ({ reservations, onClose, onSave }) => {
    const [checkInDate, setCheckInDate] = useState(reservations[0].checkInDate || '');
    const [checkOutDate, setCheckOutDate] = useState(reservations[0].checkOutDate || '');
    const [nights, setNights] = useState(reservations[0].nights || 1);
    const [rooms, setRooms] = useState(reservations[0].rooms || 1);

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    const handleSave = () => {
        const updatedReservations = reservations.map(reservation => ({
            ...reservation,
            checkInDate,
            checkOutDate,
            nights,
            rooms
        }));
        onSave(updatedReservations);
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
        if (!checkInDate) return '';
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
                <div className="modal-actions">
                    <Button display={"primary"} onClick={handleSave}>Save</Button>
                    <Button display={"text"} onClick={onClose}>Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default EditReservationModal;
