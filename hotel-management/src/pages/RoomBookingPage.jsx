import React, { useState } from 'react';
import "../components/RoomBookingPage.css";
import RoomBookingFilter from "../components/RoomBookingFilter.jsx";
import Receipt from "../components/Receipt.jsx";
import RoomInfo from "../components/RoomInfo.jsx";

export default function RoomBookingPage() {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const getDefaultCheckInDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const getDefaultCheckOutDate = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split('T')[0];
    };

    const handleRoomSelect = (room, packageType) => {
        const price = packageType === 'Room Only' ? room.room_type.online_price : room.breakfast_included_price;
        const newRoom = {
            id: new Date().getTime(), // Unique ID for each room
            roomType: room.room_type.type_name,
            price: price,
            details: packageType === 'Room Only' ? 'Standard Room only' : 'Breakfast included',
            nights: 1,
            total: price,
            checkInDate: getDefaultCheckInDate(),
            checkOutDate: getDefaultCheckOutDate(),
            guests: 1,
            rooms: 1,
        };
        setSelectedRooms([...selectedRooms, newRoom]);
    };

    const handleRoomEdit = (id, updatedRoom) => {
        const updatedRooms = selectedRooms.map(room =>
            room.id === id ? { ...room, ...updatedRoom } : room
        );
        setSelectedRooms(updatedRooms);
    };

    const handleRoomRemove = (id) => {
        const updatedRooms = selectedRooms.filter(room => room.id !== id);
        setSelectedRooms(updatedRooms);
    };

    return (
        <section className="RoomBookingPage">
            <RoomBookingFilter />
            <div className="reservation">
                <RoomInfo onRoomSelect={handleRoomSelect} setErrorMessage={setErrorMessage} />
                <Receipt
                    reservations={selectedRooms}
                    errorMessage={errorMessage}
                    onEdit={handleRoomEdit}
                    onRemove={handleRoomRemove}
                />
            </div>
        </section>
    );
}
