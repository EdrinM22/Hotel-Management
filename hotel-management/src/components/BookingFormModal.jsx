import React, { useState } from 'react';
import "./EditReservationModal.css";
import Button from "./Button.jsx";

const BookingFormModal = ({ onClose, onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthplace, setBirthplace] = useState('');
    const [personalNumber, setPersonalNumber] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ firstName, fathersName, surname, email, phoneNumber, personalNumber, birthplace,birthDate, gender});
    };

    return (
        <div className="modal-reservation">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                    </label>
                    <label>
                        Father's Name (optional):
                        <input type="text" value={fathersName} onChange={(e) => setFathersName(e.target.value)}/>
                    </label>
                    <label>
                        Surname:
                        <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </label>
                    <label>
                        Phone Number:
                        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                               required/>
                    </label>
                    <label>
                        Gender:
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)}/>
                    </label>
                    <label>
                        Birthday:
                        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}
                               required/>
                    </label>
                    <label>
                        Birthplace:
                        <input type="text" value={birthplace} onChange={(e) => setBirthplace(e.target.value)}
                               required/>
                    </label>
                    <label>
                        Personal number:
                        <input type="number" value={personalNumber} onChange={(e) => setPersonalNumber(e.target.value)}
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
