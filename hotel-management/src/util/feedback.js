import {
	FaRegFaceFrown,
	FaRegFaceTired,
	FaRegFaceGrinWide,
	FaRegFaceMeh,
	FaRegFaceSmile,
} from "react-icons/fa6";

export const feedbackCategories = ["Hotel Room", "Bar/Restaurant", "Hotel Staff"];

export const faceIcons = {
    angry:{
        icon: FaRegFaceTired,
        label: "angry",
    },
    sad:{
        icon: FaRegFaceFrown,
        label: "sad",
    },
    neutral:{
        icon: FaRegFaceMeh,
        label: "neutral",
    },
    happy:{
        icon: FaRegFaceSmile,
        label: "happy",
    },
    ecstatic:{
        icon: FaRegFaceGrinWide,
        label: "ecstatic",
    }
}

export function oneIsSelected(category){
    return Object.values(category).some((value) => value);
}

