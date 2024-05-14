import  './Room_Card.css';
import Pic from '../assets/card_img.png';
import Button from "./Button.jsx";
const Room_Card = () => {
    return (
            <div className="room-card">
                <div className="room-card-image">
                    <img src={Pic} alt="Room" />
                </div>
                <div className='room-card-info'>
                <div className="room-card-header">
                    <h2>Room Name</h2>
                </div>
                <div className="room-card-description">
                    <p>1-4 People</p>
                </div>
                <div className="room-card-price">
                    <p>$100/night</p>
                </div>
                <div className="room-card-capacity">
                    <p>Room Size: 24m2</p>
                </div>
                <Button style={{marginTop:"30px",width:"15vw",height:"5vh"}}>
                    Book Now
                </Button>
                </div>
            </div>
    );
};
export default Room_Card;