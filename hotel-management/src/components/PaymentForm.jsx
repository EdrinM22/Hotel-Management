import React, { useState } from "react";
import "./PaymentForm.css";
import CreditCardIcon from "../assets/creditcard.png";
import PayPalIcon from "../assets/paypal.png";
import CashIcon from "../assets/Cash.png";
import { RequestService } from "../util/sendRequest.js";

import { getTokenFromLocalStorage } from "../util/token.js";

import { useSelector } from "react-redux";

const PaymentForm = () => {
	const token = getTokenFromLocalStorage();
	const [selectedPayment, setSelectedPayment] = useState("");

	const bookingInfo = useSelector((state) => state.booking);
	console.log(bookingInfo);

	const handlePaymentChange = (e) => {
		setSelectedPayment(e.target.value);
	};
	console.log();

	function formatDateDDMMYYYY(String) {
		return String.split("-").reverse().join("/");
	}

	const handleConfirm = () => {
		const bookingData = {
			room_types: bookingInfo.room_types,
			start_date: formatDateDDMMYYYY(bookingInfo.start_date),
			end_date: formatDateDDMMYYYY(bookingInfo.end_date),
			guest_information: token ? undefined : bookingInfo.guestInformation,
		};

		console.log(bookingData);

		async function sendBookingToBack() {
			try {
				const response = await fetch("http://localhost:8000/rooms/reservation/create/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						...(token ? { Authorization: `Bearer ${token.access}` } : {}),
					},
					body: JSON.stringify(bookingData),
				});

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				console.log(data);

				downloadPDf(data.id);

			} catch (error) {
				console.error("Error sending booking to back:", error);
			}
		}

		sendBookingToBack();
	};

	async function downloadPDf(reservation_id) {
		try {
			const request_service = new RequestService();
			// const reservation_id = 3;
			const response = await request_service.receiptPDF({ reservation_id: reservation_id });
			if (!response.ok) {
				console.log(await response.text());
				throw new Error("Done");
			}
			const blob = await response.blob();
			saveAs(blob, "receipt.pdf");
		} catch (error) {
			console.log(error);
		}
	}

	// const handlePrintReceipt = () => {
	// 	downloadPDf();
	// };

	return (
		<div className="payment-form">
			<h1>Choose Payment Method</h1>
			<div className="payment-options">
				<label className={`payment-option ${selectedPayment === "Credit Card" ? "selected" : ""}`}>
					<input
						type="radio"
						value="Credit Card"
						checked={selectedPayment === "Credit Card"}
						onChange={handlePaymentChange}
					/>
					<img src={CreditCardIcon} alt="Credit Card" />
					Credit Card
				</label>
				<label className={`payment-option ${selectedPayment === "PayPal" ? "selected" : ""}`}>
					<input
						type="radio"
						value="PayPal"
						checked={selectedPayment === "PayPal"}
						onChange={handlePaymentChange}
					/>
					<img src={PayPalIcon} alt="PayPal" />
					PayPal
				</label>
				<label className={`payment-option ${selectedPayment === "Pay on Site" ? "selected" : ""}`}>
					<input
						type="radio"
						value="Pay on Site"
						checked={selectedPayment === "Pay on Site"}
						onChange={handlePaymentChange}
					/>
					<img src={CashIcon} alt="Pay on Site" />
					Pay on Site
				</label>
			</div>
			<button onClick={handleConfirm} className="confirm-button">
				Confirm
			</button>
			{/* <button onClick={() => {}} className="print-button">
				Print Receipt
			</button> */}
		</div>
	);
};

export default PaymentForm;
