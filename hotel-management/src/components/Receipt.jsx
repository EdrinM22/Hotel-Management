import "./Receipt.css"
import Button from "./Button.jsx";
const Receipt = () => {
    return(
        <div className="receipt">
            <h2>
                Your Reservation
            </h2>
            <div className="receipt-info">
                <div className="receipt-date">
                    <p>Check-in:</p>
                    <p>Date</p>
                </div>
                <div className="receipt-date">
                    <p>Check-out:</p>
                    <p>Date</p>
                </div>
                <div className="receipt-date">
                    <p>Guests: </p>
                    <p>Nr of guests</p>
                </div>

                <div className="room-type">
                    <h3>Standard Room </h3>
                    <h3>$499</h3>
                </div>

                <p>Breakfast included</p>
                <p>10 nights</p>
            </div>
            <div className="receipt-total">
                <p>Add room</p>
                <p>Total: $499</p>
            </div>
            <Button>Book now</Button>
        </div>
    )
}
export default Receipt