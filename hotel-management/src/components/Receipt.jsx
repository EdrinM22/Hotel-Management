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
                    <h1>Standard Room </h1>
                    <h3>$499</h3>
                </div>
                <p>Breakfast included</p>
                <p>10 nights</p>
                <div className="receipt-edit">
                    <Button display={"text"}> <span style={{fontSize: "1.5rem"}}>&#9998;</span> Edit</Button>
                    <Button display={"text"}> <span style={{fontSize: "1.5rem"}}>&#128465;</span> Remove</Button>
                </div>
            </div>
            <div className="receipt-total">
                <p>Add room</p>
                <p>Total: $499</p>
            </div>
            <Button display={"primary"} id="book-now">Book now</Button>
        </div>
    )
}
export default Receipt