import { useEffect, useState } from 'react';
import "./RoomInfo.css";
import Button from "./Button.jsx";
import Foto from "../assets/book_events_bg.png";

const RoomInfo = () => {
    const [rooms, setRooms] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function fetchRooms() {
            try {
                const response = await fetch('http://localhost:8000/rooms/rooms/list/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }

                const data = await response.json();
                setRooms(data);

            } catch (error) {
                console.error("Error fetching rooms:", error);
                setErrorMessage('Failed to fetch room information. Please try again later.');
            }
        }

        fetchRooms();
    }, []);

    return (
        <div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {rooms.map(room => (
                <div key={room.room_type.id} className="room-info">
                    <img src={Foto} alt={`Room ${room.room_type.id}`} />
                    <div>
                        <div className="room-info-name">
                            <h2>{room.room_type.type_name}</h2>
                            <h3>${room.room_type.online_price}</h3>
                        </div>
                        <p>{room.room_type.description}</p>
                    </div>
                    <div>
                        <div className="room-info-name">
                            <h3>Room Only</h3>
                            <Button>Add Room</Button>
                        </div>
                        <p>idk</p>
                    </div>
                    <div>
                        <div className="room-info-name">
                            <h3>Breakfast included</h3>
                            <Button>${room.breakfast_included_price}</Button>
                        </div>
                        <div className="room-info-content">
                            <p>Standard room</p>
                            <p>Breakfast</p>
                            <p>Non Refundable</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RoomInfo;
