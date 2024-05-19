import Input from "./Input";
import OptionList from "./OptionList";
import Button from "./Button";
import "./AddRoomForm.css";

import { useState } from "react";
import { useSubmitState } from "../hooks/useSubmitState";

import { RequestService } from "../util/sendRequest";
import { getTokenFromLocalStorage } from "../util/token";

export default function AddRoomForm({ roomTypes, onSubmit }) {
    const [submitState, setErrorMessage, setSubmitting] = useSubmitState();
    const token = getTokenFromLocalStorage();

    const [newRoomInfo, setNewRoomInfo] = useState({
        room_type: null,
        room_unique_number: "",
        room_description: "",
        main_image: null
    });

    const roomTypeOptions = roomTypes.map((roomType) => roomType.type_name);

    function handleRoomTypeSelection(selectedOption) {
        setErrorMessage("");
        setNewRoomInfo((prev) => ({
            ...prev,
            room_type: selectedOption
        }));
    }

    function handleRoomNumberChange(event) {
        const value = event.target.value;
        setErrorMessage("");
        setNewRoomInfo((prev) => ({
            ...prev,
            room_unique_number: value
        }));
    }

    function handleRoomDescriptionChange(event) {
        setErrorMessage("");
        const value = event.target.value;
        setNewRoomInfo((prev) => ({
            ...prev,
            room_description: value
        }));
    }

    function handleFileChange(event) {
        setErrorMessage("");
        const file = event.target.files[0];
        setNewRoomInfo((prev) => ({
            ...prev,
            main_image: file
        }));
    }

    async function handleSubmit() {
        if (newRoomInfo.room_type === null || newRoomInfo.room_unique_number === "") {
            setErrorMessage("Please provide all the required information.");
            return;
        }

        const roomTypeId = roomTypes.find((roomType) => roomType.type_name === newRoomInfo.room_type).id;

        const formData = new FormData();
        formData.append('room_type', roomTypeId);
        formData.append('room_unique_number', newRoomInfo.room_unique_number);
        formData.append('description', newRoomInfo.room_description);
        if (newRoomInfo.main_image) {
            formData.append('main_image', newRoomInfo.main_image);
        }

        async function sendRoomData() {
            try {
                const rs = new RequestService(token.access);
                const response = await rs.createRoomType(formData);

                if (!response.ok) {
                    console.log(await response.text());
                    throw new Error("Room already exists or other error occurred");
                }
                const data = await response.json();

                onSubmit(data);

            } catch (error) {
                setErrorMessage(error.message);
            } finally {
                setSubmitting(false);
            }
        }

        sendRoomData();
        setNewRoomInfo({
            room_type: null,
            room_unique_number: "",
            room_description: "",
            main_image: null
        });
    }

    return (
        <form>
            <div>
                <OptionList options={roomTypeOptions} selectedOption={newRoomInfo.room_type ? newRoomInfo.room_type : "Select Room Type"} onSelect={handleRoomTypeSelection} />
            </div>
            <div className="make-stypeWider">
                <Input type="number" labelText="Room Number" onChange={handleRoomNumberChange} value={newRoomInfo.room_unique_number} />
            </div>
            <Input textarea onChange={handleRoomDescriptionChange} value={newRoomInfo.room_description} />
            <div className="make-stypeWider">
                <label htmlFor="main_image">Room Image</label>
                <input type="file" id="main_image" onChange={handleFileChange} />
            </div>
            <p className="center-button-modal">
                {submitState.errorMessage && <p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>}
                <Button onClick={handleSubmit} type="button">Submit</Button>
            </p>
        </form>
    );
}
