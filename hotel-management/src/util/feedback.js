import {
	FaRegFaceFrown,
	FaRegFaceTired,
	FaRegFaceGrinWide,
	FaRegFaceMeh,
	FaRegFaceSmile,
} from "react-icons/fa6";

export const feedbackCategories = [
	"Hotel Room",
	"Bar/Restaurant",
	"Hotel Staff",
];

export const faceIcons = {
	angry: {
		icon: FaRegFaceTired,
		label: "angry",
	},
	sad: {
		icon: FaRegFaceFrown,
		label: "sad",
	},
	neutral: {
		icon: FaRegFaceMeh,
		label: "neutral",
	},
	happy: {
		icon: FaRegFaceSmile,
		label: "happy",
	},
	ecstatic: {
		icon: FaRegFaceGrinWide,
		label: "ecstatic",
	},
};

export function oneIsSelected(category) {
	return Object.values(category).some((value) => value);
}

export async function submitFeedback(feedback, token) {
	console.log(token.access);
	const response = await fetch("http://localhost:8000/feedback/create/", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token.access}`,
		},
		body: JSON.stringify(feedback),
	})

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.message || "Could not submit feedback");
	}

	return resData;
}