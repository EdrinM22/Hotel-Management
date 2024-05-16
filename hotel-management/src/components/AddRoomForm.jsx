import Input from "./Input";
import OptionList from "./OptionList";
import Button from "./Button";
import "./AddRoomForm.css";

import { useState } from "react";

export default function AddRoomForm(roomTypes) {

    const [newRoomInfo, setNewRoomInfo] = useState({
        room_type: null,
        room_unique_number: "",
        room_description: ""
    });

    function handleRoomTypeSelection(selectedOption) {
        setNewRoomInfo((prev) => ({
            ...prev,
            room_type: selectedOption
        }));
    }

    function handleRoomNumberChange(event) {
        const value = event.target.value;
        setNewRoomInfo((prev) => ({
            ...prev,
            room_unique_number: value
        }));
    }

    function handleRoomDescriptionChange(event) {
        const value = event.target.value;
        setNewRoomInfo((prev) => ({
            ...prev,
            room_description: value
        }));
    }



	return (
		<form>
			<div>
				<OptionList options={roomTypes} selectedOption={newRoomInfo.room_type ? newRoomInfo.room_type : "Select Room Type"} onSelect={handleRoomTypeSelection} />
			</div>
            <div className="make-stypeWider">
                <Input type="number" labelText="Room Number" onChange={handleRoomNumberChange} value={newRoomInfo.room_unique_number} />
            </div>
			<Input textarea onChange={handleRoomDescriptionChange} value={newRoomInfo.room_description}/>
			<p className="center-button-modal">
				<Button type="button">Submit</Button>
			</p>
		</form>
	);
}
