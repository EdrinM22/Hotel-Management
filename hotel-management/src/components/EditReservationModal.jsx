import React, { useEffect, useState } from 'react';
import './EditReservationModal.css';
import Button from './Button.jsx';

const EditReservationModal = ({ reservation, onClose, onSave }) => {
    const [nights, setNights] = useState(reservation.nights);
    const [checkInDate, setCheckInDate] = useState(reservation.checkInDate);
    const [checkOutDate, setCheckOutDate] = useState(reservation.checkOutDate);

    useEffect(() => {
        // Add class to body when modal is open
        document.body.classList.add('modal-open');
        return () => {
            // Remove class from body when modal is closed
            document.body.classList.remove('modal-open');
        };
    }, []);

    const handleNightsChange = (e) => {
        const newNights = Number(e.target.value);
        setNights(newNights);
        setCheckOutDate(calculateCheckOutDate(checkInDate, newNights));
    };

    const handleSave = () => {
        const updatedReservation = {
            ...reservation,
            nights,
            checkInDate,
            checkOutDate,
        };
        onSave(updatedReservation);
        onClose();
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
                        onChange={(e) => setCheckInDate(e.target.value)}
                    />
                </label>
                <label>
                    Check-out Date:
                    <input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
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
