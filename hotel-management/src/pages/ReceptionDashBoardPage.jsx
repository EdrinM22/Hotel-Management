import { useEffect, useState } from "react";
import Scheduler from "../components/Scheduler.jsx";
import { formatDateYMD } from "../util/dateFormater.js";

import { getTokenFromLocalStorage } from "../util/token";

export default function ReceptionDashBoardPage() {
	const token = getTokenFromLocalStorage();

	const [dataSource, setDataSource] = useState([]);

	useEffect(() => {
		async function fetchReservations() {
			try {
				const response = await fetch("http://localhost:8000/rooms/reservation/list/", {
					method: "GET",
					headers: {
						"Content-Type": "application",
						Authorization: `Bearer ${token.access}`,
					},
				});

				if (!response.ok) {
					throw new Error("Something went wrong");
				}

				const data = await response.json();
				// console.log("Data after response ", data);

				let myReserv = [];

				for (let i = 0; i < data.length; i++) {
					for (let j = 0; j < data[i].room_reservations.length; j++) {
						const reservation = {
							RoomId: " " + data[i].id + "/" + data[i].room_reservations[j].room.id,
							RoomName: data[i].room_reservations[j].room.room_unique_number,
							Checkin: data[i].start_date,
							Checkout: data[i].end_date,
							Description: `Client Email : ${data[i].person_info} \n${data[i].reservation_cost}$`,
						};
						myReserv.push(reservation);
					}
				}

				// console.log("My Reservations", myReserv);
				setDataSource(myReserv);
			} catch (error) {
				console.error(error);
			}
		}

		fetchReservations();
	}, []);

	function formatDate(date) {
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	}

	function handleAddNewBooking(args) {
		console.log(args);
		args.cancel = true;
		// const newBookingArg = args.addedRecords[0];
		// const newBoking = {
		// 	RoomId: newBookingArg.RoomId,
		// 	RoomName: newBookingArg.RoomName,
		// 	Checkin: formatDate(newBookingArg.Checkin),
		// 	Checkout: formatDate(newBookingArg.Checkout),
		// };

		// setDataSource((prev) => {
		// 	return [...prev, newBoking];
		// });
	}



	//! There is a bug here because we dont have the correct url for the delete request
	function handleRemoveBooking(args) {
		// console.log(args);
		const removedBookingArg = args.deletedRecords[0];
		const removedBooking = {
			RoomId: removedBookingArg.RoomId,
			RoomName: removedBookingArg.RoomName,
			Checkin: formatDate(removedBookingArg.Checkin),
			Checkout: formatDate(removedBookingArg.Checkout),
		};



		async function deleteReservation() {
			const [roomId, reservationId] = removedBooking.RoomId.split("/");
			console.log("Room ID", roomId);
			console.log("Reservation ID", reservationId);

			const data = {
				room_id: roomId,
				reservation_id: reservationId,
			};

			try {
				const response = await fetch("http://localhost:8000/rooms/reservation/delete/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token.access}`,
					},
					body: JSON.stringify(data),
				});
				console.log("Data after response ", data);

				if (!response.ok) {
					throw new Error("Something went wrong");
				}

				// const data = await response.json();

				setDataSource((prev) => {
					return prev.filter((record) => record.RoomId !== removedBooking.RoomId);
				});
			} catch (error) {
				console.error(error);
				args.cancel = true;
			}
		}

		deleteReservation();
	}

	function handleBookingChanges(args) {
		console.log(args);
		const changedBookingArg = args.changedRecords[0];
		const changedBooking = {
			RoomId: changedBookingArg.RoomId,
			RoomName: changedBookingArg.RoomName,
			Checkin: formatDate(changedBookingArg.Checkin),
			Checkout: formatDate(changedBookingArg.Checkout),
		};

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

	// console.log( "STATE PRINT" ,  dataSource);

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
