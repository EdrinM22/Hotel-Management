import { useState } from 'react';
import './ContactUs.css';
import Banner from '../assets/contact_banner.png';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        note: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:8000/contact/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            setFormData({
                name: '',
                surname: '',
                email: '',
                phone: '',
                note: ''
            });
            setErrorMessage('');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to send the message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="contactfull-banner">
                <h1 className="contact-header">Contact Us</h1>
                <img src={Banner} alt="Contact Us Banner" className="contact-banner" />
            </div>
            <div className="contact-container">
                <div className="talk-with-us">
                    <h1 className="talk-header">Talk with us</h1>
                    <h2 className="talk-subheader">Need to get in touch with us? Let's discuss how we can help you.</h2>
                </div>
                <form className="contact-info-form" onSubmit={handleSubmit}>
                    <div className="contact-info">
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Surname
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Phone
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <label>
                        <textarea
                            className="comment"
                            name="note"
                            placeholder="Your message here..."
                            value={formData.note}
                            onChange={handleChange}
                            style={{ fontFamily: "Lato" }}
                            required
                        />
                    </label>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button className="submit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;
