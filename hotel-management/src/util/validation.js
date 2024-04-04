export function isEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isPassword(password) {
	const uppercaseRegex = /[A-Z]/;
	const digitRegex = /\d/;

	const errors = [];

	if (password.length < 8) {
		errors.push("Password must be at least 8 characters long.");
	}

	if (!uppercaseRegex.test(password)) {
		errors.push("Password must contain at least one uppercase letter.");
	}

	if (!digitRegex.test(password)) {
		errors.push("Password must contain at least one digit.");
	}

	return {
		isValid: errors.length === 0,
		errors: errors,
	};
}

export function isEmpty(value) {
	return value.trim() === "";
}

//TODO: Add more validation functions here
