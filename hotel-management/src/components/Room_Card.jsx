import { useEffect, useState } from 'react';
import './Room_Card.css';
import Pic from '../assets/card_img.png';
import Button from "./Button.jsx";

const Room_Card = () => {
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
        <div className="cards">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {rooms.map(room => (
                <div key={room.room_type.id} className="room-card">
                    <div className="room-card-image">
                        <img src={Pic} alt={`Room ${room.room_type.id}`} />
                    </div>
                    <div className='room-card-info'>
                        <div className="room-card-header">
                            <h2>{room.room_type.type_name}</h2>
                        </div>
                        <div className="room-card-description">
                            <p>{room.room_type.description}</p>
                        </div>
                        <div className="room-card-price">
                            <p>${room.room_type.online_price}/night</p>
                        </div>
                        <div className="room-card-capacity">
                            <p>Room Size: {room.room_type.size}m²</p>
                        </div>
                        <Button style={{marginTop:"30px",width:"15vw",height:"5vh"}}>
                            Book Now
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Room_Card;
