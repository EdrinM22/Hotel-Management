import React, { useState } from 'react';
import "./EditReservationModal.css";
import Button from "./Button.jsx";

const BookingFormModal = ({ onClose, onSubmit }) => {
    const [first_name, setFirstName] = useState('');
    const [fathers_name, setFathersName] = useState('');
    const [last_name, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [birthplace, setBirthplace] = useState('');
    const [personal_number, setPersonalNumber] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ first_name, fathers_name, last_name, email, phone_number, personal_number, birthplace, birthdate, gender});
    };

    return (
        <div className="modal-reservation">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} required/>
                    </label>
                    <label>
                        Father's Name (optional):
                        <input type="text" value={fathers_name} onChange={(e) => setFathersName(e.target.value)}/>
                    </label>
                    <label>
                        Surname:
                        <input type="text" value={last_name} onChange={(e) => setSurname(e.target.value)} required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}
                               required/>
                    </label>
                    <label>
                        Gender:
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)}/>
                    </label>
                    <label>
                        Birthday:
                        <input type="date" value={birthdate} onChange={(e) => setBirthDate(e.target.value)}
                               />
                    </label>
                    <label>
                        Birthplace:
                        <input type="text" value={birthplace} onChange={(e) => setBirthplace(e.target.value)}
                               />
                    </label>
                    <label>
                        Personal number:
                        <input type="text" value={personal_number} onChange={(e) => setPersonalNumber(e.target.value)}
                               required/>
                    </label>
                    <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: "row"}}>
                        <Button type="submit">Submit</Button>
                        <Button type="submit" className="primary_btn" onClick={onClose}>&times;</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingFormModal;
