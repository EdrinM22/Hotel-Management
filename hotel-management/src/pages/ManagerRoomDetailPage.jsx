import Button from "../components/Button";
import FeedbackCategoryBtn from "../components/FeedbackCategoryBtn";
import Modal from "../components/Modal";
import RoomDetailForm from "../components/RoomDetailForm";
import AddRoomForm from "../components/AddRoomForm";
import "../components/RoomDetails.css"

import { useState, useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ManagerRoomDetailPage() {
    const modalRef = useRef();
    const addRoomModalRef = useRef();
    
    const token = useSelector((state) => state.auth.userActiveToken);
   
    const [roomTypes, setRoomTypes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/rooms/room_type/scroll/list/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${token.access}`
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setRoomTypes(data);
        });
    }, [])
    

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [roomDetails, setRoomDetails] = useState([
        {
            "id": 101,
            "roomType": "Single",
            "roomStatus": "Available",
            "roomPrice": 1000,
            "roomCapacity": 1,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 102,
            "roomType": "Double",
            "roomStatus": "Booked",
            "roomPrice": 2000,
            "roomCapacity": 2,
            "checkin": "2021-10-01",
            "checkout": "2021-10-03"
        },
        {
            "id": 103,
            "roomType": "Single",
            "roomStatus": "Available",
            "roomPrice": 1000,
            "roomCapacity": 1,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 104,
            "roomType": "Double",
            "roomStatus": "Available",
            "roomPrice": 2000,
            "roomCapacity": 2,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 105,
            "roomType": "Suite",
            "roomStatus": "Available",
            "roomPrice": 3000,
            "roomCapacity": 4,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 106,
            "roomType": "Single",
            "roomStatus": "Booked",
            "roomPrice": 1000,
            "roomCapacity": 1,
            "checkin": "2021-11-05",
            "checkout": "2021-11-07"
        },
        {
            "id": 107,
            "roomType": "Double",
            "roomStatus": "Available",
            "roomPrice": 2000,
            "roomCapacity": 2,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 108,
            "roomType": "Single",
            "roomStatus": "Available",
            "roomPrice": 1000,
            "roomCapacity": 1,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 109,
            "roomType": "Double",
            "roomStatus": "Booked",
            "roomPrice": 2000,
            "roomCapacity": 2,
            "checkin": "2022-01-15",
            "checkout": "2022-01-20"
        },
        {
            "id": 110,
            "roomType": "Suite",
            "roomStatus": "Available",
            "roomPrice": 3000,
            "roomCapacity": 4,
            "checkin": "",
            "checkout": ""
        },{
            "id": 111,
            "roomType": "Single",
            "roomStatus": "Available",
            "roomPrice": 1000,
            "roomCapacity": 1,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 112,
            "roomType": "Double",
            "roomStatus": "Booked",
            "roomPrice": 2000,
            "roomCapacity": 2,
            "checkin": "2022-03-10",
            "checkout": "2022-03-15"
        },
        {
            "id": 113,
            "roomType": "Suite",
            "roomStatus": "Available",
            "roomPrice": 3000,
            "roomCapacity": 4,
            "checkin": "",
            "checkout": ""
        },
        {
            "id": 114,
            "roomType": "Single",
            "roomStatus": "Booked",
            "roomPrice": 1000,
            "roomCapacity": 1,
            "checkin": "2022-04-20",
            "checkout": "2022-04-25"
        },
        {
            "id": 115,
            "roomType": "Double",
            "roomStatus": "Available",
            "roomPrice": 2000,
            "roomCapacity": 2,
            "checkin": "",
            "checkout": ""
        }
    ]
    )
    
    const [selectedRoom, setSelectedRoom] = useState(null);

    function handleCategoryChange(category) {
        setSelectedCategory(category);
    }

    function handleAssignClean(room) {
        setSelectedRoom(room)
        modalRef.current.open();
    }

    function handleRoomDetailSubmit( room ) {
        console.log(room);
        const updatedRoomDetails = roomDetails.map((roomDetail) => {
            if (roomDetail.id === room.id) {
                return room;
            }
            return roomDetail;
        });
        setRoomDetails(updatedRoomDetails);
        modalRef.current.close();
    }

    function handleAddRoom() {
        addRoomModalRef.current.open();
    }

    return (
        <div className="room-detail-page">
            <Modal ref={modalRef} title={`Edit Room: #${selectedRoom && selectedRoom.id}`}>
                {selectedRoom && <RoomDetailForm room={selectedRoom} onSubmit={handleRoomDetailSubmit} onCancel={() => {}} />}
            </Modal>
            <Modal ref={addRoomModalRef} title="Add Room">
                {roomTypes.length > 0 && <AddRoomForm roomTypes={roomTypes}/>}
            </Modal>


            
            <div className="room-detail-filters-container">
                <FeedbackCategoryBtn content="All Rooms" isSelected={selectedCategory === "All"} onClick={() => handleCategoryChange("All")} />
                <FeedbackCategoryBtn content="Available Rooms" isSelected={selectedCategory === "Available"} onClick={() => handleCategoryChange("Available")} />
                <FeedbackCategoryBtn content="Booked Rooms" isSelected={selectedCategory === "Booked"} onClick={() => handleCategoryChange("Booked")} />
                <Button display="secondary" onClick={handleAddRoom}>Add Room </Button>
            </div>
            
            <main className="room-detail-table-container">
                <table className="room-detail-table">
                    <thead className="room-detail-table-head">
                        <tr className="room-detail-table-row">
                            <th>Room Number</th>
                            <th>Room Type</th>
                            <th>Room Status</th>
                            <th>Room Price</th>
                            <th>Room Capacity</th>
                            <th>Checkin</th>
                            <th>Checkout</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody className="room-detail-table-body">
                        {roomDetails.map((roomDetail) => {
                            if (selectedCategory === "All" || selectedCategory === roomDetail.roomStatus) {
                                return (
                                    <tr className="room-detail-table-row" key={roomDetail.id}>
                                        <td>{`#${roomDetail.id}`}</td>
                                        <td>{roomDetail.roomType}</td>
                                        <td><span className={`room-status-${roomDetail.roomStatus}`}>{roomDetail.roomStatus}</span></td>
                                        <td>{`${roomDetail.roomPrice}$`}</td>
                                        <td>{roomDetail.roomCapacity}</td>
                                        <td>{roomDetail.checkin ? roomDetail.checkin : "None"}</td>
                                        <td>{roomDetail.checkout ? roomDetail.checkout : "None"}</td>
                                        <td><button className="table-action-btn" onClick={() => handleAssignClean(roomDetail)}>Edit</button></td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    );
}