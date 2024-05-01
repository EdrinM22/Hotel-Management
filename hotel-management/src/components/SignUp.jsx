import Logo from "../assets/moto hotel.png";
import "../components/SignUp.css";
import { Link, useNavigate } from "react-router-dom";

import { useInput } from "../hooks/useInput";
import { useSubmitState } from "../hooks/useSubmitState";

import { isEmail, isPassword, isEmpty, isPhoneNumber, isPersonalNumber, fieldsAreEmpty } from "../util/validation";
import sendSignupDataToServer , { formateDate }  from "../util/signup";

import { useEffect } from "react";

const SignUp = () => {
	const navigation = useNavigate();

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
		value: gender,
		handleInputChange: handleGenderChange,
		handleInputBlur: handleGenderBlur,
		hasError: genderIsInvalid,
	} = useInput("", (value) => !isEmpty(value));

	const {
		value: phoneNumber,
		handleInputChange: handlePhoneNumberChange,
		handleInputBlur: handlePhoneNumberBlur,
		hasError: phoneNumberIsInvalid,
	} = useInput("", (value) => isPhoneNumber(value) && !isEmpty(value));

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
		} else if (phoneNumberIsInvalid) {
			setErrorMessage("Phone Number must be 10 digits long");
		} else if (genderIsInvalid) {
			setErrorMessage("Don't be afraid to choose! There are thousands of options! ");
		} else {
			setErrorMessage("");
		}
	}, [
		emailIsInvalid,
		passwordIsInvalid,
		firstNameIsInvalid,
		lastNameIsInvalid,
		personalNumberIsInvalid,
		phoneNumberIsInvalid,
		genderIsInvalid,
		password,
		firstName,
		lastName,
		personalNumber,
		phoneNumber,
	]);

	function handleSubmit() {
		if (fieldsAreEmpty(email, password, firstName, lastName, personalNumber, phoneNumber)) {
			setErrorMessage("Please enter valid credentials");
			return;
		}

		setSubmitting(true);
		async function sendSignUp() {
			try {
                const formatDate = birthday ? formateDate(birthday) : null;
                
				const newUserInfo = {
					user: {
						email: email,
						first_name: firstName,
						fathers_name: fathersName,
						last_name: lastName,
						birthday: formatDate,
						birthplace: birthplace,
						personal_number: personalNumber,
                        password: password,
                        phone_number: phoneNumber,
                        gender: gender
					},
				};

				await sendSignupDataToServer(newUserInfo);

				navigation("/");
			} catch (error) {   


				setErrorMessage(error.message);
			} finally {
				setSubmitting(false);
			}
		}

		sendSignUp();
	}

	return (
		<div className="signup-container">
			<div className="">
				<Link to="../" className="logo-nav-link">
					<img src={Logo} alt="Hotel Logo" className="logo-signup" />
				</Link>
			</div>
			<h1 className="signup-header">Welcome to Moto Hotel</h1>
			<h2 className="signup-subheader">Hello, new customer!</h2>
			<form className="signup-form">
				<div className="field-bundle">
					<label htmlFor="email" className="signup-label">
						Email
					</label>
					<input
						type="email"
						id="email"
						className={`signup-input ${emailIsInvalid ? "incorrect-credentials" : undefined}`}
						value={email}
						onChange={handleEmailChange}
						onBlur={handleEmailBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="first_name" className="signup-label">
						First Name
					</label>
					<input
						type="text"
						id="first_name"
						className={`signup-input ${firstNameIsInvalid ? "incorrect-credentials" : undefined}`}
						value={firstName}
						onChange={handleFirstNameChange}
						onBlur={handleFirstNameBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="fathers_name" className="signup-label">
						Fathers Name(optional)
					</label>
					<input
						type="text"
						id="fathers_name"
						className={`signup-input ${fathersNameIsInvalid ? "incorrect-credentials" : undefined}`}
						value={fathersName}
						onChange={handleFathersNameChange}
						onBlur={handleFathersNameBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="last_name" className="signup-label">
						Last Name
					</label>
					<input
						type="text"
						id="last_name"
						className={`signup-input ${lastNameIsInvalid ? "incorrect-credentials" : undefined}`}
						value={lastName}
						onChange={handleLastNameChange}
						onBlur={handleLastNameBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="birthday" className="signup-label">
						Date of Birth(optional)
					</label>
					<input
						type="date"
						id="birthday"
						className={`signup-input ${birthdayIsInvalid ? "incorrect-credentials" : undefined}`}
						value={birthday}
						onChange={handleBirthdayChange}
						onBlur={handleBirthdayBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="birthplace" className="signup-label">
						Birth Place(optional)
					</label>
					<input
						type="text"
						id="birthplace"
						className={`signup-input ${birthplaceIsInvalid ? "incorrect-credentials" : undefined}`}
						value={birthplace}
						onChange={handleBirthplaceChange}
						onBlur={handleBirthplaceBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="personal_number" className="signup-label">
						Personal Number
					</label>
					<input
						type="text"
						id="personal_number"
						className={`signup-input ${personalNumberIsInvalid ? "incorrect-credentials" : undefined}`}
						value={personalNumber}
						onChange={handlePersonalNumberChange}
						onBlur={handlePersonalNumberBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="gender" className="signup-label">
						Gender
					</label>
					<input
						type="text"
						id="gender"
						className={`signup-input ${genderIsInvalid ? "incorrect-credentials" : undefined}`}
						value={gender}
						onChange={handleGenderChange}
						onBlur={handleGenderBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="phone_number" className="signup-label">
						Phone Number
					</label>
					<input
						type="phone"
						id="phone_number"
						className={`signup-input ${phoneNumberIsInvalid ? "incorrect-credentials" : undefined}`}
						value={phoneNumber}
						onChange={handlePhoneNumberChange}
						onBlur={handlePhoneNumberBlur}
					/>
				</div>
				<div className="field-bundle">
					<label htmlFor="password" className="signup-label">
						Password
					</label>
					<input
						type="password"
						id="password"
						className={`signup-input ${passwordIsInvalid ? "incorrect-credentials" : undefined}`}
						value={password}
						onChange={handlePasswordChange}
						onBlur={handlePasswordBlur}
					/>
				</div>
			</form>
			<p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>
			<button type="submit" className="signup-button" onClick={handleSubmit}>
				{submitState.isSubmitting ? "Signing up..." : "Sign Up"}
			</button>
			<div className="forgot-pass">
				<Link to="../contact" className="logo-nav-link">
					<p className="subtext">Trouble? Phone Us</p>
				</Link>
			</div>
		</div>
	);
};

export default SignUp;