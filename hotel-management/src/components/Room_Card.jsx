import  './Room_Card.css';
import Pic from '../assets/card_img.png';
const Room_Card = () => {
    return (
        <>
            <div className="room-card">
            <div className="room-card-image">
                <img src={Pic} alt="Room" />
            </div>
            <div className='room-card-info'>
            <div className="room-card-header">

                <h1>Room Name</h1>
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
            <button className='room-card-button'>
                Book Now
            </button>
            </div>
            </div>
        </>
    );
};
export default Room_Card;