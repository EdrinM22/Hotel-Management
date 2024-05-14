import "./RoomInfo.css"
import Button from "./Button.jsx";
import Foto from "../assets/book_events_bg.png";
const RoomInfo = () => {
    return(
        <div className="room-info">
            <img src={Foto}></img>
            <div>
                <div className="room-info-name">
                    <h2>
                        Standard Room
                    </h2>
                    <h3>$49.99</h3>
                </div>
                <p>Room info</p>
            </div>
            <div>
                <div className="room-info-name">
                    <h3>Room Only</h3>
                    <Button>Add Room</Button>
                </div>
                <p>Standard Room only</p>

            </div>
            <div>
                <div className="room-info-name">
                    <h3>Breakfast included</h3>
                    <Button>$55.00</Button>
                </div>
                <div className="room-info-content">
                    <p>Standard room</p>
                    <p>Breakfast</p>
                    <p>Non Refundable</p>
                </div>
            </div>
        </div>
    )
}
export default RoomInfo