import { useEffect, useState } from 'react';
import './ContactUsInquiry.css';

const ContactUsInquiry = () => {
    const [contacts, setContacts] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch('http://localhost:8000/contact/list/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Network response was not ok: ${errorText}`);
                }

                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.error("Error fetching contacts:", error);
                setErrorMessage('Failed to fetch contact inquiries. Please try again later.');
            }
        }

        fetchContacts();
    }, []);

    return (
        <div style={{minHeight: '75vh'}}>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {contacts.map(contact => (
                <div className="contact-card" key={contact.id}>
                    <div className="contactus-header">
                        <span>{contact.name} {contact.surname}</span>
                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                        {/*<button className="delete-button">Delete</button>*/}
                    </div>
                    <textarea 
                        className="contact-message" 
                        readOnly 
                        value={contact.note} 
                        placeholder="Message Here">
                    </textarea>
                </div>
            ))}
        </div>
    );
};

export default ContactUsInquiry;
