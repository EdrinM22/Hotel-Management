import { useState } from "react";
import Scheduler from "../components/Scheduler.jsx";

export default function ReceptionDashBoardPage() {
	const [dataSource, setDataSource] = useState([
		{
			RoomId: 1,
			RoomName: "001",
			Checkin: "2024-04-01",
			Checkout: "2024-04-05",
			// IsReadonly: true,
		},
		{
			RoomId: 2,
			RoomName: "014",
			Checkin: "2024-04-10",
			Checkout: "2024-04-15",
			// IsReadonly: true,
		},
		{
			RoomId: 3,
			RoomName: "212",
			Checkin: "2024-04-06",
			Checkout: "2024-04-07",
			// IsReadonly: true,
		},
	]);

	function formatDate(date) {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	}

	function handleAddNewBooking(args) {
		console.log(args);
		const newBookingArg = args.addedRecords[0];
		const newBoking = {
			RoomId: newBookingArg.RoomId,
			RoomName: newBookingArg.RoomName,
			Checkin: formatDate(newBookingArg.Checkin),
			Checkout: formatDate(newBookingArg.Checkout),
		}

		setDataSource((prev) => {
			return [...prev, newBoking];
		});

	}

	function handleRemoveBooking(args) {
		console.log(args);
		const removedBookingArg = args.deletedRecords[0];
		const removedBooking = {
			RoomId: removedBookingArg.RoomId,
			RoomName: removedBookingArg.RoomName,
			Checkin: formatDate(removedBookingArg.Checkin),
			Checkout: formatDate(removedBookingArg.Checkout),
		}
		setDataSource((prev) => {	
			return prev.filter((record) => record.RoomId !== removedBooking.RoomId);
		});
	}

	function handleBookingChanges(args) {
		console.log(args);
		const changedBookingArg = args.changedRecords[0];
		const changedBooking = {
			RoomId: changedBookingArg.RoomId,
			RoomName: changedBookingArg.RoomName,
			Checkin: formatDate(changedBookingArg.Checkin),
			Checkout: formatDate(changedBookingArg.Checkout),
		}

		setDataSource((prev) => {
			return prev.map((record) => {
				if (record.RoomId === changedBooking.RoomId) {
					return {
						...record,
						Checkin: changedBooking.Checkin,
						Checkout: changedBooking.Checkout,
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
