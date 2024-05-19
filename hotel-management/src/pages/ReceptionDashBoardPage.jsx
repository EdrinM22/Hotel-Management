import { useEffect, useState } from "react";
import Scheduler from "../components/Scheduler.jsx";
import { formatDateYMD, formatDateDMY } from "../util/dateFormater.js";

import { RequestService } from "../util/sendRequest.js";

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

				data.forEach((item) => {
					const { id, start_date, end_date, person_info, reservation_cost, room_reservations } =
						item;
					room_reservations.forEach((reservation) => {
						const { room } = reservation;
						const newReservation = {
							RoomId: `${id}/${room.id}`,
							RoomName: room.room_unique_number,
							Checkin: start_date,
							Checkout: end_date,
							Description: `Client Email: ${person_info} \nTotal Price to pay:  ${reservation_cost}$ \nRoom Type: ${room.room_type} \n `,
						};
						myReserv.push(newReservation);
					});
				});

				// console.log("My Reservations", myReserv);
				setDataSource(myReserv);
			} catch (error) {
				console.error(error);
			}
		}

		fetchReservations();
	}, []);

	// function formatDate(date) {
	// 	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	// }

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

	function handleRemoveBooking(args) {
		// console.log(args);
		const removedBookingArg = args.deletedRecords[0];
		const removedBooking = {
			RoomId: removedBookingArg.RoomId,
			RoomName: removedBookingArg.RoomName,
			Checkin: formatDate(removedBookingArg.Checkin),
			Checkout: formatDate(removedBookingArg.Checkout),
		};

		console.log("Removed Booking", removedBooking);

		async function deleteReservation() {
			const [reservationId, roomId] = removedBooking.RoomId.split("/");
			console.log("Room ID", roomId);
			console.log("Reservation ID", reservationId);

			try {
				const rs = new RequestService(token.access);

				const response = await rs.deleteRoomFromReservation(roomId, reservationId);

				if (!response.ok) {
					throw new Error(await response.text());
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
		
		async function updateReservationConditionaly(args) {
			console.log(args);
			const changedBookingArg = args.changedRecords[0];

			const { RoomId, Checkin, Checkout, Description } = changedBookingArg;
			console.log("ROOM ID", RoomId);
			console.log("Checkin", formatDateDMY(Checkin));
			console.log("Checkout", formatDateDMY(Checkout));
			console.log("Description", Description);

			const [reservationId, roomId] = RoomId.split("/");
			console.log("Room ID", roomId);
			console.log("Reservation ID", reservationId);

			const [userEmail, totalPrice, roomType] = Description.split("\n");
			console.log("User Email", userEmail);
			console.log("Total Price", totalPrice);
			console.log("Room Type", roomType);

			const priceValue = totalPrice.split(":")[1].trim();
			console.log("Price Value", priceValue);

			async function updateReservation(args) {
				try {
					const rs = new RequestService(token.access);

					const response = await rs.changeReservationDate(reservationId, {
						start_date: formatDateDMY(Checkin),
						end_date: formatDateDMY(Checkout),
					});

					if (!response.ok) {
						args.cancel = true;
						throw new Error(await response.text());
					}

					console.log(await response.json());
					return true;
				} catch (error) {
					console.error(error);
					return false;
				}
			}

			const add = await updateReservation(args);
			console.log("ADD", add);

			if (add === true) {
				console.log("ADD TRUE");
				setDataSource((prev) => {
					return prev.map((record) => {
						if (record.RoomId === RoomId) {
							return {
								...record,
								Checkin: Checkin,
								Checkout: Checkout,
							};
						}
						return record;
					});
				});
			}
		}

		updateReservationConditionaly(args);
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
			uh
		/>
	);
}
