import Input from "./Input";
import Button from "./Button";
import "./RoomDetailForm.css";

export default function RoomDetailForm({ room, onSubmit, onCancel }) {
	return (
		<form>
			<div className="room-detail-form-row">
				<Input labelText="Room Type" value={room.roomType} />
			</div>
			<div className="room-detail-form-row">
				<Input labelText="Room Price" value={room.roomPrice} />
				<Input labelText="Room Capacity" value={room.roomCapacity} />
			</div>
			<Button type="submit" onClick={onSubmit}>
				Submit
			</Button>
		</form>
	);
}
