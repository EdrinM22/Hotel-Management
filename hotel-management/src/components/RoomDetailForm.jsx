import Input from "./Input";
import OptionList from "./OptionList";
import Button from "./Button";
import "./RoomDetailForm.css";

import { useInput } from "../hooks/useInput";
import { useSubmitState } from "../hooks/useSubmitState";

import { useState } from "react";

export default function RoomDetailForm({ room, onSubmit }) {
	const roomTypes = ["Standart", "Comfort", "Executive", "Suite"];

	const [roomType, setRoomType] = useState(room.roomType);

	const { value: roomPrice, handleInputChange: handleRoomPriceChange } = useInput(
		room.roomPrice,
		(value) => value > 0,
	);
	const { value: roomCapacity, handleInputChange: handleRoomCapacityChange } = useInput(
		room.roomCapacity,
		(value) => value > 0 && value < 10,
	);

	function handleRoomSelection(selectedOption) {
		setRoomType(selectedOption);
	}

	function handleRoomSubmit(){
		const newRoom = {
			...room,
			roomType,
			roomPrice,
			roomCapacity
		};
		console.log(newRoom);
		onSubmit(newRoom);
	}

	console.log(roomType, roomPrice, roomCapacity);

	return (
		<form>
			<div className="room-detail-form-row">
				<OptionList options={roomTypes} selectedOption={roomType} onSelect={handleRoomSelection} />
			</div>
			<div className="room-detail-form-row">
				<Input
					type="number"
					labelText="Room Price"
					value={roomPrice}
					onChange={handleRoomPriceChange}
				/>
				<Input
					type="number"
					labelText="Room Capacity"
					value={roomCapacity}
					onChange={handleRoomCapacityChange}
				/>
			</div>
			<p className="center-button-modal">
				<Button type="button" onClick={handleRoomSubmit}>
					Submit
				</Button>
			</p>
		</form>
	);
}
