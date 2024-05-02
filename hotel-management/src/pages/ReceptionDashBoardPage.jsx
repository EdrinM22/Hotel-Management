import { useState } from "react";
import Scheduler from "../components/Scheduler.jsx";

export default function ReceptionDashBoardPage() {
	const [dataSource, setDataSource] = useState([
		{
			RoomId: 1,
			RoomName: "001",
			Checkin: new Date(2024, 3, 23, 10, 0),
			Checkout: new Date(2024, 3, 23, 12, 30),
			// IsReadonly: true,
		},
		{
			RoomId: 2,
			RoomName: "014",
			Checkin: new Date(2024, 3, 13, 10, 0),
			Checkout: new Date(2024, 3, 19, 12, 0),
			// IsReadonly: true,
		},
		{
			RoomId: 3,
			RoomName: "212",
			Checkin: new Date(2024, 3, 2),
			Checkout: new Date(2024, 3, 7),
			// IsReadonly: true,
		},
	]);

	function handleAddNewBooking(newBooking) {
		setDataSource((prev) => {
			return [
				...prev,
				{
					RoomId: newBooking.RoomId,
					RoomName: newBooking.RoomName,
					Checkin: newBooking.Checkin,
					Checkout: newBooking.Checkout,
				},
			];
		});

		// sent to backend
	}

	function handleRemoveBooking(listOfData) {
		// console.log(listOfData);
		setDataSource((prev) => {
			return prev.filter((data) => {
				return !listOfData.some((element) => element.RoomId === data.RoomId);
			});
		});

		// sent to backend
	}

	function handleBookingChanges(changedRecord) {
		setDataSource((prev) => {
			return prev.map((record) => {
				if (record.RoomId === changedRecord.RoomId) {
					return {
						...record,
						Checkin: changedRecord.Checkin,
						Checkout: changedRecord.Checkout,
					};
				}
				return record;
			});
		});
	}

	const fieldsData = {
		id: "RoomId",
		subject: { name: "RoomName", title: "Room Name", default: "Add Summary" },
		startTime: { name: "Checkin" },
		endTime: { name: "Checkout" },
	};

	console.log(dataSource);

	return (
		<Scheduler
			showMonth
			isDragAndDrop
			isResize
			fieldsData={fieldsData}
			dataSource={dataSource}
			displayName={{ timelineMonthName: "Bookings" }}
			onAddNewElement={handleAddNewBooking}
			onRemoveElement={handleRemoveBooking}
			onChangesToElement={handleBookingChanges}
		/>
	);
}
