import Input from "./Input";
import OptionList from "./OptionList";
import Button from "./Button";
import "./AddRoomForm.css";

import { useState } from "react";
import { useSubmitState } from "../hooks/useSubmitState";

export default function AddRoomForm({roomTypes}) {

    const [submitState, setErrorMessage, setSubmitting] = useSubmitState();

    const [newRoomInfo, setNewRoomInfo] = useState({
        room_type: null,
        room_unique_number: "",
        room_description: ""
    });

    const roomTypeOptions = roomTypes.map((roomType) => roomType.type_name);

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

    function handleSubmit(){
        
        if (newRoomInfo.room_type === null || newRoomInfo.room_unique_number === "") {
            setErrorMessage("THIS is why your wife left you 🖕🏻");
            return;
        }

        const roomTypeId = roomTypes.find((roomType) => roomType.type_name === newRoomInfo.room_type).id;
        
        const roomData = {
            room_type: roomTypeId,
            room_unique_number: newRoomInfo.room_unique_number,
            room_description: newRoomInfo.room_description
        }


        console.log(roomData);
    }

	return (
		<form>
			<div>
				<OptionList options={roomTypeOptions} selectedOption={newRoomInfo.room_type ? newRoomInfo.room_type : "Select Room Type"} onSelect={handleRoomTypeSelection} />
			</div>
            <div className="make-stypeWider">
                <Input type="number" labelText="Room Number" onChange={handleRoomNumberChange} value={newRoomInfo.room_unique_number} />
            </div>
			<Input textarea onChange={handleRoomDescriptionChange} value={newRoomInfo.room_description}/>
			<p className="center-button-modal">
                {submitState.errorMessage && <p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>}
				<Button onClick={handleSubmit}  type="button">Submit</Button>
			</p>
		</form>
	);
}
