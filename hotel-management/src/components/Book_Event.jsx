import "../components/Book_Event.css";
import Banner from "../assets/book_events_bg.png"

const Book_Event = () => {
    return (
        <>
        <div className="event-type-selector">
        <h1 className="event-type">Room</h1>
        <h1 className="event-type">Event</h1>
        </div>
        <div className="eventfull-banner">
        <h1 className="event-header">Book Your Events With Us</h1>
        <img src={Banner} alt="Contact Us Banner" className="event-banner" />
        </div>
      <div className="book-events">
        
        <div className="whole-component">
        <div className="event-details">
          <div>
            <label htmlFor="event-type">Event Type</label>
            <input className="textbox" type="text" id="event-type" placeholder="Event Type" />
          </div>
          <div>
            <label htmlFor="number-of-guests">Number of Guests</label>
            <input className="textbox" type="number" id="number-of-guests" placeholder="Number of Guests" />
          </div>
        </div>
        <div className="date-pickers">
          <div>
            <label htmlFor="starting-date">Starting Date</label>
            <input className="textbox" type="date" id="starting-date" />
          </div>
          <div>
            <label htmlFor="ending-date">Ending Date</label>
            <input className="textbox" type="date" id="ending-date" />
          </div>
        </div>
        <div className="all-day-checkbox">
          <input type="checkbox" id="all-day" />
          <label htmlFor="all-day">All Day</label>
        </div>
        <button>Book</button>
        </div>
      </div>
      </>
    );
  };
  
  export default Book_Event;