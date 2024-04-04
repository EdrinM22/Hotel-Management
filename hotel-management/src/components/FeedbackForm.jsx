/* eslint-disable no-undef */
import "./FeedbackForm.css";

import FaceSelectors from "./FaceSelectors";
import FeedbackCategoryBtn from "./FeedbackCategoryBtn";
import Input from "./Input";
import Button from "./Button";

import { oneIsSelected, feedbackCategories, faceIcons, submitFeedback } from "../util/feedback";

import { feedbackActions } from "../store/feedbackSlice";
import { authActions } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSubmitState } from "../hooks/useSubmitState";

export default function FeedbackForm() {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	const feedback = useSelector((state) => state.feedback);
	const auth = useSelector((state) => state.auth.userInfo);
	console.log(auth);
	const [submitState, setErrorMessage, setSubmitting] = useSubmitState();

	const isSelected = oneIsSelected(feedback.category);

	function handleSubmit() {
		if (feedback.face === null) {
			setErrorMessage("Please select a face");
			return;
		}

		if (isSelected) {
			if (feedback.comment === "") {
				setErrorMessage("Please leave a comment");
				return;
			}
		} else {
			if (feedback.comment !== "") {
				handleCommentChange({ target: { value: "" } });
			}
		}

		setSubmitting(true);
		async function sendFeedback() {
			try {
				await submitFeedback(feedback);
				// setTimeout(() => {
				// 	setSubmitting(false);
				// 	navigation("/");
				// }, 3000);
				setSubmitting(false);
				navigation("/");
			} catch (error) {
				console.log(error);
			}
		}

		sendFeedback();
	}

	function handleFaceClick(feedbackFaceSelected) {
		dispatch(feedbackActions.setFace(feedbackFaceSelected));
		setErrorMessage("");
	}

	function handleCommentChange(event) {
		dispatch(feedbackActions.setComment(event.target.value));
		setErrorMessage("");
	}

	function handleCategoryClick(categoryIndex) {
		const newCategory = { ...feedback.category };
		newCategory[Object.keys(newCategory)[categoryIndex]] = !newCategory[Object.keys(newCategory)[categoryIndex]];
		dispatch(feedbackActions.setCategory(newCategory));
		setErrorMessage("");
	}

	return (
		<div className="feedback_form_container">
			<section className="feedback_form_section_container">
				<h5 className="feedback_form_container_text lato-regular">What is your opinion of our hotel</h5>
				<ul className="feedback_container">
					{Object.keys(faceIcons).map((face, index) => {
						return (
							<FaceSelectors
								key={face}
								Icon={faceIcons[face].icon}
								expression={index}
								onClick={() => handleFaceClick(index)}
								selectedFace={feedback.face}
							/>
						);
					})}
				</ul>
			</section>
			<section className="feedback_form_section_container">
				<h5 className="feedback_form_container_text lato-regular">Please select the feedback category</h5>
				<ul className="feedback_container feedback-btn-container">
					{Object.keys(feedback.category).map((category, index) => {
						return (
							<li className="feedback_category" key={category}>
								<FeedbackCategoryBtn
									content={feedbackCategories[index]}
									isSelected={feedback.category[category]}
									onClick={() => handleCategoryClick(index)}
								/>
							</li>
						);
					})}
				</ul>
			</section>
			<section className="feedback_form_section_container">
				<h5 className="feedback_form_container_text lato-regular">Please select the feedback category</h5>
				<div className="feedback-textarea-container">
					<Input
						name={"feedback"}
						textarea
						onChange={handleCommentChange}
						placeholder="Please leave your feedback here"
						value={feedback.comment}
						disabled={!isSelected}
					/>
				</div>
				<p className="lato-bold feedback_error_msg_text">{submitState.errorMessage}</p>
			</section>
			<p className="feedback_form_button_container">
				<Button onClick={handleSubmit}>
					{submitState.isSubmitting ? "Submitting ..." : "Submit"}
				</Button>
			</p>
		</div>
	);
}
