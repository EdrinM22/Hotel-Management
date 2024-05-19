import Button from "../components/Button";
import FeedbackCategoryBtn from "../components/FeedbackCategoryBtn";
import Modal from "../components/Modal";
import RoomDetailForm from "../components/RoomDetailForm";
import AddRoomForm from "../components/AddRoomForm";
import AddRoomTypeForm from "../components/AddRoomTypeForm";
import "../components/RoomDetails.css";

import { useState, useRef, useEffect } from "react";

import { getTokenFromLocalStorage } from "../util/token";

export default function ManagerRoomDetailPage() {
	const modalRef = useRef();
	const addRoomModalRef = useRef();
	const addRoomTypeModalRef = useRef();

	const token = getTokenFromLocalStorage();

	const [roomTypes, setRoomTypes] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [roomDetails, setRoomDetails] = useState([]);
	const [selectedRoom, setSelectedRoom] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/rooms/room_type/scroll/list/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.access}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setRoomTypes(data);
			});
	}, []);

	useEffect(() => {
		fetch("http://localhost:8000/rooms/rooms/admin/list/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.access}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setRoomDetails(data);
			});
	}, []);

    // console.log(roomDetails);

	function handleCategoryChange(category) {
		setSelectedCategory(category);
	}

	function handleAssignClean(room) {
		setSelectedRoom(room);
		modalRef.current.open();
	}

	function handleRoomDetailSubmit(room) {
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



	function handleAddRoomSubmit(newRoom) {
        setRoomDetails((prev) => [...prev, newRoom]);
		addRoomModalRef.current.close();
	}

    const getRoomTypeName = (roomTypeId) => {
        const roomType = roomTypes.find((type) => type.id === roomTypeId);
        return roomType ? roomType.type_name : "Unknown";
    };
    

	return (
		<div className="room-detail-page">
			<Modal ref={modalRef} title={`Edit Room: #${selectedRoom && selectedRoom.id}`}>
				{selectedRoom && <RoomDetailForm room={selectedRoom} onSubmit={handleRoomDetailSubmit} />}
			</Modal>
			<Modal ref={addRoomModalRef} title="Add Room">
				{roomTypes.length > 0 && (
					<AddRoomForm roomTypes={roomTypes} onSubmit={handleAddRoomSubmit} />
				)}
			</Modal>
			<Modal ref={addRoomTypeModalRef} title="Add Room Type">
				<AddRoomTypeForm />
			</Modal>

			<div className="room-detail-filters-container">
				<FeedbackCategoryBtn
					content="All Rooms"
					isSelected={selectedCategory === "All"}
					onClick={() => handleCategoryChange("All")}
				/>
				<FeedbackCategoryBtn
					content="Available Rooms"
					isSelected={selectedCategory === false}
					onClick={() => handleCategoryChange(false)}
				/>
				<FeedbackCategoryBtn
					content="Booked Rooms"
					isSelected={selectedCategory === true}
					onClick={() => handleCategoryChange(true)}
				/>
				{/* <FeedbackCategoryBtn content="Cleaning Rooms" isSelected={selectedCategory === "Cleaning"} onClick={() => handleCategoryChange("Cleaning")} /> */}

				<Button display="secondary" onClick={handleAddRoom}>
					Add Room
				</Button>
				<Button display="secondary" onClick={() => {addRoomTypeModalRef.current.open() }}>
					Add Room Type
				</Button>

			</div>

			<main className="room-detail-table-container">
				<table className="room-detail-table">
					<thead className="room-detail-table-head">
						<tr className="room-detail-table-row">
							<th>Room Number</th>
							<th>Room Type</th>
							<th>Room Status</th>
							<th>Real Price</th>
                            <th>Online Price</th>
							<th>Room Capacity</th>
							{/* <th>Is Clean </th> */}
							{/* <th>Edit</th> */}
						</tr>
					</thead>
					<tbody className="room-detail-table-body">
						{roomDetails.map((roomDetail) => {
							if (selectedCategory === "All" || selectedCategory === roomDetail.is_reserved) {
								return (
									<tr className="room-detail-table-row" key={roomDetail.room_unique_number}>
										<td>{`#${roomDetail.room_unique_number}`}</td>
										<td>{ getRoomTypeName(roomDetail.room_type) }</td>
										<td>
											<span className={`room-status-${roomDetail.is_reserved ? "Booked" : "Available"}`}>
												{roomDetail.is_reserved ? "Booked" : "Available"}
											</span>
										</td>
										<td>{`${roomDetail.real_price}$`}</td>
                                        <td>{`${roomDetail.online_price}$`}</td>
										<td>{`${roomDetail.size} people`}</td>
										{/* <td>
											<span className={`room-status-${roomDetail}`}>{roomDetail.roomStatus}</span>
										</td> */}
										{/* <td>
											<button
												className="table-action-btn"
												onClick={() => handleAssignClean(roomDetail)}
											>
												Edit
											</button>
										</td> */}
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
