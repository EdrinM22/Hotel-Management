import "./Login.css";
import Logo from "../assets/moto hotel.png";

import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useInput } from "../hooks/useInput";
import { useSubmitState } from "../hooks/useSubmitState";

import { isEmail, isPassword, isEmpty } from "../util/validation";
import { sendCredentialsToServer, sentTokenToServer } from "../util/login";

import { authActions } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const userSlice = useSelector((state) => state.auth);

	const [submitState, setErrorMessage, setSubmitting] = useSubmitState();

	const {
		value: username,
		handleInputChange: handleUsernameChange,
		handleInputBlur: handleUsernameBlur,
		hasError: emailIsInvalid,
	} = useInput("", (value) => isEmail(value) && !isEmpty(value));

	const {
		value: password,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordIsInvalid,
	} = useInput("", (value) => isPassword(value).isValid && !isEmpty(value));

	const isValid = !emailIsInvalid && !passwordIsInvalid && !isEmpty(username) && !isEmpty(password);

	useEffect(() => {
		if (emailIsInvalid) {
			setErrorMessage("Please enter a valid email address like 'name@examp.com'");
		} else if (passwordIsInvalid) {
			setErrorMessage(isPassword(password).errors[0]);
		} else {
			setErrorMessage("");
		}
	}, [emailIsInvalid, passwordIsInvalid, password]);

	function handleLoginData(token, userData) {
		dispatch(authActions.setUserActiveToken(token));
		dispatch(authActions.setUserInfo(userData));
	}

	function handleSubmit(event) {
		if (!isValid) {
			setErrorMessage("Please enter a valid email address and password");
			return;
		}
		setSubmitting(true);

		async function sendLogin() {
			try {
				const token = await sendCredentialsToServer(username, password);
				const userData = await sentTokenToServer(token.access);

				handleLoginData(token, userData);

				const navigationPath = userSlice.userInfo.type.toLowerCase();
				console.log(navigationPath);
				setSubmitting(false);
				navigation("/");
			} catch (error) {
				setErrorMessage(error.message);
				setSubmitting(false);
			}
		}

		sendLogin();
	}

	// console.log(userSlice);

	return (
		<div className="login-container">
			<div className="">
				<Link to="../" className="logo-nav-link">
					<img src={Logo} alt="Hotel Logo" className="logo-login" />
				</Link>
			</div>
			<h1 className="login-header">Welcome to Moto Hotel</h1>

			<div className="login-options">
				<form className="login-form">
					<h2 className="login-subheader">Please login to continue</h2>
					<label htmlFor="username" className="login-label">
						Email or Phone Number
					</label>
					<input
						type="text"
						id="username"
						className={`login-input ${emailIsInvalid ? "incorrect-credentials" : undefined}`}
						value={username}
						onChange={handleUsernameChange}
						onBlur={handleUsernameBlur}
					/>
					<label htmlFor="password" className="login-label">
						Password
					</label>
					<input
						type="password"
						id="password"
						className={`login-input ${passwordIsInvalid ? "incorrect-credentials" : undefined}`}
						value={password}
						onChange={handlePasswordChange}
						onBlur={handlePasswordBlur}
					/>
					<p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>
					<button type="button" className="login-button" onClick={handleSubmit}>
						{submitState.isSubmitting ? "Logging in..." : "Login"}
					</button>
					<div className="forgot-pass">
						<p className="subtext">Forgot Password</p>
						<p className="subtext">Cannot Sign in</p>
					</div>
				</form>
				<div className="join-us">
					<h2>Dont have an account?</h2>
					<p className="subtext">Join us to get access to exclusive deals and offers</p>
					<Link to="../signup" className="logo-nav-link">
						<button className="join-us-button">Join us</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
