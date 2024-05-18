import React, { useState } from 'react';
import "../components/RoomBookingPage.css";
import RoomBookingFilter from "../components/RoomBookingFilter.jsx";
import Receipt from "../components/Receipt.jsx";
import RoomInfo from "../components/RoomInfo.jsx";

export default function RoomBookingPage() {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRoomSelect = (room, packageType) => {
        let today = new Date();
        const price = packageType === 'Room Only' ? room.room_type.online_price : room.breakfast_included_price;
        const newRoom = {
            id: new Date().getTime(),
            roomType: room.room_type.type_name,
            price: price,
            details: packageType === 'Room Only' ? 'Standard Room only' : 'Breakfast included',
            nights: 1,
            total: price,
            checkInDate: new Date(today.setDate(today.getDate())).toISOString().split('T')[0],
            checkOutDate: new Date(today.setDate(today.getDate()+1)).toISOString().split('T')[0],
            guests: 1
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
