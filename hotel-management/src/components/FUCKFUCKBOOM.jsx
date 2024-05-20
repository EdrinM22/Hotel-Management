import Button from "./Button";
import Input from "./Input";

import { useState } from "react";
import { useSubmitState } from "../hooks/useSubmitState";

import { RequestService } from "../util/sendRequest";

import { getTokenFromLocalStorage } from "../util/token";

export default function AddRoomTypeForm({}) {
	const token = getTokenFromLocalStorage();
	const [submitState, setErrorMessage, setSubmitting] = useSubmitState();

	const [newRoomTypeInfo, setNewRoomTypeInfo] = useState({
		type_name: "",
		price: 0,
		capacity: 0,
		room_image: "",
	});

	function handleTypeNameChange(event) {
		setErrorMessage("");
		const value = event.target.value;
		setNewRoomTypeInfo((prev) => ({
			...prev,
			type_name: value,
		}));
	}

	function handlePriceChange(event) {
		setErrorMessage("");
		const value = event.target.value;
		setNewRoomTypeInfo((prev) => ({
			...prev,
			price: value,
		}));
	}

	function handleCapacityChange(event) {
		setErrorMessage("");
		const value = event.target.value;
		setNewRoomTypeInfo((prev) => ({
			...prev,
			capacity: value,
		}));
	}

	function handleRoomImageChange(event) {
		setErrorMessage("");
		const value = event.target.value;
		const file = event.target.files[0];
		console.log(file.name);
		console.log(value);
		setNewRoomTypeInfo((prev) => ({
			...prev,
			room_image: file,
		}));
	}

	console.log(newRoomTypeInfo);

	function handleSubmit() {
		if (
			newRoomTypeInfo.type_name === "" ||
			newRoomTypeInfo.price === 0 ||
			newRoomTypeInfo.capacity === 0 ||
			newRoomTypeInfo.room_image === ""
		) {
			setErrorMessage("Please fill in all fields");
			return;
		}

		// if (!isPngOrJpg(newRoomTypeInfo.room_image)) {
		//     setErrorMessage("Please upload a valid image file");
		//     return;
		// }

		const roomData = {
			type_name: newRoomTypeInfo.type_name,
			price: parseInt(newRoomTypeInfo.price, 10),
			size: parseInt(newRoomTypeInfo.capacity, 10),
			main_image: newRoomTypeInfo.room_image.name,
		};

		// console.log(roomData);

		async function sendRoomData() {
			try {
				const rs = new RequestService(token.access);
				const response = await rs.createRoomType(roomData);

				if (!response.ok) {
					console.log(await response.text());
					throw new Error(await response.text());
				}

				console.log(await response.json());
				setSubmitting(false);
			} catch (error) {
				console.error(error);
				// setErrorMessage("Failed to create room type");
				setSubmitting(false);
			}
		}

		sendRoomData();
	}

	return (
		<>
			<form>
				<Input
					labelText={"Type name"}
					type="text"
					value={newRoomTypeInfo.type_name}
					onChange={handleTypeNameChange}
				/>
				<div className="make-stypeWider">
					<Input
						labelText={"Capacity"}
						type="number"
						min={0}
						max={10}
						value={newRoomTypeInfo.capacity}
						onChange={handleCapacityChange}
					/>
				</div>
				<Input
					labelText={"Price"}
					type="number"
					min={0}
					value={newRoomTypeInfo.price}
					onChange={handlePriceChange}
				/>
				<Input
					labelText={"Room Image"}
					type="file"
					onChange={(event) => handleRoomImageChange(event)}
				/>

				<div className="center-button-modal">
					{submitState.errorMessage && (
						<p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>
					)}
					<Button type="button" onClick={handleSubmit} display="primary">
						Submit
					</Button>
				</div>
			</form>
		</>
	);
}