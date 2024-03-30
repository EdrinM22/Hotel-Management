import { useState } from "react";

export function useSubmitState() {
    const [submitState, setSubmitState] = useState({
		isSubmitting: false,
		errorMessage: "",
	});

	function setErrorMessage(message) {
		setSubmitState((prev) => ({ ...prev, errorMessage: message }));
	}

	function setSubmitting(isSubmitting) {
		setSubmitState((prev) => ({ ...prev, isSubmitting: isSubmitting }));
	}

    return [ submitState, setErrorMessage, setSubmitting ];
}