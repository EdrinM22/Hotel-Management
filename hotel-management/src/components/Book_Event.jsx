import { useState } from 'react';
import './Book_Event.css';
import Banner from '../assets/contact_banner.png';

const BookEvent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        numberOfPeople: '',
        eventType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to backend
        console.log('Form Data:', formData);
    };

    return (
        <>
            <div className="book-event-banner">
                <h1 className="book-event-header">Book Your Event</h1>
                <img src={Banner} alt="Book Event Banner" className="book-event-banner-img" />
            </div>
            <div className="book-event-container">
                <form className="book-event-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name (optional)</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Number of People</label>
                        <input
                            type="number"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Event Type</label>
                        <input
                            type="text"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default BookEvent;
