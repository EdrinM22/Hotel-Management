import "./AddWorkerForm.css";
import { useInput } from "../hooks/useInput";
import {
    isEmail,
    isPassword,
    isEmpty,
    isPersonalNumber,
    fieldsAreEmpty,
} from "../util/validation";
import { useSubmitState } from "../hooks/useSubmitState";
import React, { useState, useEffect } from "react";
import { getTokenFromLocalStorage } from '../util/token';

const AddWorkerForm = () => {
    const [submitState, setErrorMessage, setSubmitting] = useSubmitState();
    const token = getTokenFromLocalStorage();

    const {
        value: email,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: emailIsInvalid,
    } = useInput("", (value) => isEmail(value) && !isEmpty(value));

    const {
        value: firstName,
        handleInputChange: handleFirstNameChange,
        handleInputBlur: handleFirstNameBlur,
        hasError: firstNameIsInvalid,
    } = useInput("", (value) => !isEmpty(value));

    const {
        value: fathersName,
        handleInputChange: handleFathersNameChange,
        handleInputBlur: handleFathersNameBlur,
        hasError: fathersNameIsInvalid,
    } = useInput("", (value) => true);

    const {
        value: lastName,
        handleInputChange: handleLastNameChange,
        handleInputBlur: handleLastNameBlur,
        hasError: lastNameIsInvalid,
    } = useInput("", (value) => !isEmpty(value));

    const {
        value: birthday,
        handleInputChange: handleBirthdayChange,
        handleInputBlur: handleBirthdayBlur,
        hasError: birthdayIsInvalid,
    } = useInput("", (value) => true);

    const {
        value: birthplace,
        handleInputChange: handleBirthplaceChange,
        handleInputBlur: handleBirthplaceBlur,
        hasError: birthplaceIsInvalid,
    } = useInput("", (value) => true);

    const {
        value: personalNumber,
        handleInputChange: handlePersonalNumberChange,
        handleInputBlur: handlePersonalNumberBlur,
        hasError: personalNumberIsInvalid,
    } = useInput("", (value) => isPersonalNumber(value) && !isEmpty(value));

    const {
        value: password,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordIsInvalid,
    } = useInput("", (value) => isPassword(value).isValid && !isEmpty(value));

    const [workerType, setWorkerType] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = useState(false);

    useEffect(() => {
        if (emailIsInvalid) {
            setErrorMessage("Please enter a valid email address like 'name@examp.com'");
        } else if (passwordIsInvalid) {
            setErrorMessage(isPassword(password).errors[0]);
        } else if (firstNameIsInvalid) {
            setErrorMessage("First Name cannot be empty");
        } else if (lastNameIsInvalid) {
            setErrorMessage("Last Name cannot be empty");
        } else if (personalNumberIsInvalid) {
            setErrorMessage("Personal Number must be in the format 'A12345678A'");
        } else if (!workerType) {
            setErrorMessage("Please select a worker type");
        } else if (!gender) {
            setErrorMessage("Please select a gender");
        } else if (isEmpty(phoneNumber)) {
            setErrorMessage("Phone number cannot be empty");
            setPhoneNumberIsInvalid(true);
        } else {
            setErrorMessage("");
            setPhoneNumberIsInvalid(false);
        }
    }, [
        emailIsInvalid,
        passwordIsInvalid,
        firstNameIsInvalid,
        lastNameIsInvalid,
        personalNumberIsInvalid,
        password,
        firstName,
        lastName,
        personalNumber,
        workerType,
        gender,
        phoneNumber
    ]);

    async function handleSubmit(e) {
        e.preventDefault();
        if (fieldsAreEmpty(email, password, firstName, lastName, personalNumber, workerType, gender, phoneNumber)) {
            setErrorMessage("Please enter valid credentials");
            return;
        }

        setSubmitting(true);

        const workerData = {
            user: {
                email,
                password,
                first_name: firstName,
                last_name: lastName,
				personal_number: personalNumber,
				gender,
				phone_number: phoneNumber,

            },
            fathers_name: fathersName,
            birthday,
            birthplace,
            
            
            
        };

        let url = '';
        if (workerType === 'cleaner') {
            url = 'http://localhost:8000/users/cleaner/list/create/';
        } else if (workerType === 'manager') {
            url = 'http://localhost:8000/users/manager/create/list/';
        } else if (workerType === 'receptionist') {
            url = 'http://localhost:8000/users/receptionist/create/list/';
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token.access}`
                },
                body: JSON.stringify(workerData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${errorText}`);
            }

            setErrorMessage('Worker created successfully!');
        } catch (error) {
            console.error("Error creating worker:", error);
            setErrorMessage('Failed to create worker. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="form-container">
            <form className="worker-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className={`signup-input ${firstNameIsInvalid ? "incorrect-credentials" : undefined}`}
                            onChange={handleFirstNameChange}
                            onBlur={handleFirstNameBlur}
                            value={firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className={`signup-input ${lastNameIsInvalid ? "incorrect-credentials" : undefined}`}
                            onChange={handleLastNameChange}
                            onBlur={handleLastNameBlur}
                            value={lastName}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Fathers Name</label>
                        <input
                            type="text"
                            className={`signup-input ${fathersNameIsInvalid ? "incorrect-credentials" : undefined}`}
                            onChange={handleFathersNameChange}
                            onBlur={handleFathersNameBlur}
                            value={fathersName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className={`signup-input ${emailIsInvalid ? "incorrect-credentials" : undefined}`}
                            onChange={handleEmailChange}
                            onBlur={handleEmailBlur}
                            value={email}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Birth Day</label>
                        <input
                            type="date"
                            className={`signup-input ${birthdayIsInvalid ? "incorrect-credentials" : undefined}`}
                            onChange={handleBirthdayChange}
                            onBlur={handleBirthdayBlur}
                            value={birthday}
                        />
                    </div>
                    <div className="form-group">
                        <label>Personal Number</label>
                        <input
                            type="text"
                            onChange={handlePersonalNumberChange}
                            onBlur={handlePersonalNumberBlur}
                            value={personalNumber}
                            className={`signup-input ${personalNumberIsInvalid ? "incorrect-credentials" : undefined}`}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Birth Place</label>
                        <input
                            type="text"
                            onChange={handleBirthplaceChange}
                            onBlur={handleBirthplaceBlur}
                            value={birthplace}
                            className={`signup-input ${birthplaceIsInvalid ? "incorrect-credentials" : undefined}`}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber}
                            className={`signup-input ${phoneNumberIsInvalid ? "incorrect-credentials" : undefined}`}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={handlePasswordBlur}
                            className={`signup-input ${passwordIsInvalid ? "incorrect-credentials" : undefined}`}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Resume</label>
                        <textarea rows="4"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            className={`signup-input ${!gender ? "incorrect-credentials" : undefined}`}>
                            <option value="">Select Gender</option>
                            <option value="male">M</option>
                            <option value="female">F</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Worker Type</label>
                        <select 
                            value={workerType} 
                            onChange={(e) => setWorkerType(e.target.value)} 
                            className={`signup-input ${!workerType ? "incorrect-credentials" : undefined}`}>
                            <option value="">Select Worker Type</option>
                            <option value="cleaner">Cleaner</option>
                            <option value="manager">Manager</option>
                            <option value="receptionist">Receptionist</option>
                        </select>
                    </div>
                </div>
                <p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>
                <div className="form-row">
                    <button type="submit" className="praga-button">
                        {submitState.isSubmitting ? "Creating..." : "Create"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkerForm;
