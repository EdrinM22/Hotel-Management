import "../components/RoomBookingPage.css";
import RoomBookingFilter from "../components/RoomBookingFilter.jsx";
import Receipt from "../components/Receipt.jsx";
import RoomInfo from "../components/RoomInfo.jsx";

import { useState } from "react";

export default function RoomBookingPage() {
    const [filters, setFilters] = useState({
        checkInDate: "",
        checkOutDate: "",
        numGuests: 1,
        roomType: "Standard Room",
    });

    const [reservations, setReservations] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    function handleFilterChange(identifier, value) {
        setFilters((prevFilters) => {
            return {
                ...prevFilters,
                [identifier]: value,
            };
        });
    }

    function handleRoomSelect(room, details) {
        const reservation = {
            id: reservations.length + 1,
            checkInDate: filters.checkInDate,
            checkOutDate: filters.checkOutDate,
            guests: filters.numGuests,
            roomType: room.room_type.type_name,
            price: room.room_type.online_price,
            details,
            nights: (new Date(filters.checkOutDate) - new Date(filters.checkInDate)) / (1000 * 60 * 60 * 24),
            rooms: 1
        };
        setReservations([...reservations, reservation]);
    }

    function handleEditReservation(id, updatedReservation) {
        setReservations(reservations.map(res => res.id === id ? updatedReservation : res));
    }

    function handleRemoveReservation(id) {
        setReservations(reservations.filter(res => res.id !== id));
    }

    return (
        <section className="RoomBookingPage">
            <RoomBookingFilter filters={filters} onFilterChange={handleFilterChange} />
            <div className="reservation">
                <RoomInfo filters={filters} onRoomSelect={handleRoomSelect} />
                <Receipt
                    reservations={reservations}
                    errorMessage={errorMessage}
                    onEdit={handleEditReservation}
                    onRemove={handleRemoveReservation}
                />
            </div>
        </section>
    );
}
