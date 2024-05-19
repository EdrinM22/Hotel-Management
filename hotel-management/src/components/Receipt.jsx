import React, { useState } from 'react';
import "./Receipt.css";
import Button from "./Button.jsx";
import EditReservationModal from './EditReservationModal';
import {useNavigate} from "react-router-dom";
import BookingFormModal from './BookingFormModal';
import {getTokenFromLocalStorage} from "../util/token.js";


const Receipt = ({ reservations, errorMessage, onEdit, onRemove }) => {
    const token = getTokenFromLocalStorage();
    const [editReservation, setEditReservation] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (reservations) => {
        setEditReservation(reservations);
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
    const handlePayment = () => {
       if(!token){
           setShowBookingForm(true);
       }else{
           const reservationData = reservations.map(reservation => ({
               roomTypeId: reservation.id,
               roomCount: reservation.rooms,

           }));

           navigate('/book/payment',{
               state: {
                   reservationData,
                   checkInDate: reservations[0].checkInDate,
                   checkOutDate: reservations[0].checkOutDate
               }
           })
           const state ={
               reservationData,
           }
           console.log(state)
       }
    }
    const handleFormSubmit = (userData) => {
        setShowBookingForm(false);
        const reservationData = reservations.map(reservation => ({
            roomTypeId: reservation.id,
            roomCount: reservation.rooms,

        }));
        const state = {
            reservationData,
            checkInDate: reservations[0].checkInDate,
            checkOutDate: reservations[0].checkOutDate,
            userData
        }
        navigate('/book/payment',{
            state: {
                reservationData,
                userData
            }
        });
        console.log(state)
    };
    return (
        <div className="receipt">
            <h2>Your Reservation</h2>
            {reservations.map(reservation => (
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
                        <p>{reservation.rooms}</p>
                    </div>
                    <div>
                        <div className="room-type">
                            <h1>{reservation.roomType}</h1>
                            <h3>${reservation.price} / night</h3>
                        </div>
                        <p>{reservation.details}</p>

                    </div>
                </div>
            ))}
            <div className="receipt-edit">
                <Button display={"text"} onClick={() => handleEdit(reservations)}>
                    <span style={{fontSize: "1.5rem"}}>&#9998;</span> Edit
                </Button>
                <Button display={"text"} onClick={() => onRemove(reservations.id)}>
                    <span style={{fontSize: "1.5rem"}}>&#128465;</span> Remove
                </Button>
            </div>
            <div className="receipt-total">
                <h3>Total: ${calculateTotal()}</h3>
            </div>
            <div id="book-now">
                <Button display={"primary"} onClick={handlePayment}>Book now</Button>
            </div>

            {editReservation && (
                <EditReservationModal
                    reservation={editReservation}
                    onClose={() => setEditReservation(null)}
                    onSave={handleSave}
                />
            )}
            {showBookingForm && (
                <BookingFormModal
                    onClose={() => setShowBookingForm(false)}
                    onSubmit={handleFormSubmit}
                />
            )}
        </div>
    );
};

export default Receipt;
