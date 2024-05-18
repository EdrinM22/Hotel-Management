import Input from "./Input";
import OptionList from "./OptionList";
import Button from "./Button";
import "./RoomDetailForm.css";

import { useInput } from "../hooks/useInput";
import { useSubmitState } from "../hooks/useSubmitState";

import { useState } from "react";

export default function RoomDetailForm({ room, onSubmit }) {
	const roomTypes = ["Standard", "Comfort", "Executive", "Suite"];

	const [roomType, setRoomType] = useState(room.roomType);


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

	console.log(roomType);

	return (
		<form>
			<div className="room-detail-form-row">
				<OptionList options={roomTypes} selectedOption={roomType} onSelect={handleRoomSelection} />
			</div>
			<div className="make-stypeWider">
				<Input
					type="number"
					labelText="Room Price"
				/>
			</div>
				
			<Input textarea />
		
			<p className="center-button-modal">
				<Button type="button" onClick={handleRoomSubmit}>
					Submit
				</Button>
			</p>
		</form>
	);
}
