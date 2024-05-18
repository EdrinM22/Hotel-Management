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

import { useEffect } from "react";

const AddWorkerForm = () => {
	const [submitState, setErrorMessage, setSubmitting] = useSubmitState();

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
		} else {
			setErrorMessage("");
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
	]);

	function handleSubmit() {
        if (fieldsAreEmpty(email, password, firstName, lastName, personalNumber, phoneNumber)) {
			setErrorMessage("Please enter valid credentials");
			return;
		}

        setSubmitting(true);
        // Make a request to the server
        console.log("Making a request to the server...");

        setSubmitting(false);

	}

	return (
		<div className="form-container">
			<form className="worker-form">
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
							className={`signup-input ${
								fathersNameIsInvalid ? "incorrect-credentials" : undefined
							}`}
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
							className={`signup-input ${
								personalNumberIsInvalid ? "incorrect-credentials" : undefined
							}`}
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
							className={`signup-input ${
								birthplaceIsInvalid ? "incorrect-credentials" : undefined
							}`}
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
				</div>
				<p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>
				<div className="form-row">
					<button type="submit" className="praga-button" onClick={handleSubmit}>
						{submitState.isSubmitting ? "Creating..." : "Create"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddWorkerForm;
