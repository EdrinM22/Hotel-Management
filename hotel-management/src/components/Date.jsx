
import './Date.css'; 
import Background from '../assets/bg.jpg';
const background = {
    backgroundImage: `url(${Background})`,
    height: "50vh",
    marginTop: "-14px",
    marginLeft: "-14px",
    backgroundRepeat: "no-repeat",
};
const Date = () => {
  return (
    <>
    <div className="date-picker-wrapper"style={background}>
    <div className='whole-container'>
      <div className="date-input-container">
        <label htmlFor="check-in" className="date-label">CHECK IN</label>
        <div className='date-with-icon'>
        <input type="text" id="check-in" className="date-input" value="SAT, MAR 16 2024" readOnly />
        <span className="dropdown-icon">%</span>
        </div>
      </div>
      <div className="date-input-container">
        <label htmlFor="check-out" className="date-label">CHECKOUT</label>
        <div className='date-with-icon'>
        <input type="text" id="check-out" className="date-input" value="SUN, MAR 17 2024" readOnly />
        <span className="dropdown-icon">%</span> {/* Replace with actual icon */}
        </div>
      </div>
      <div className="room-input-container">
      <label htmlFor="check-out" className="date-label">GUESTS</label>
      <div className='date-with-icon'>
      
        <input type="text" className="room-input" value="1 ROOM, 1 GUEST" readOnly />
        <span className="dropdown-icon">%</span> {/* Replace with actual icon */}
        </div>
      </div>
      <button className="search-button">SEARCH</button>
      </div>
    </div>
    </>
  );
};

export default Date;
