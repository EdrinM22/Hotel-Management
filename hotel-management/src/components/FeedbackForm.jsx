import "./FeedbackForm.css";

import FaceSelectors from "./FaceSelectors";
import FeedbackCategoryBtn from "./FeedbackCategoryBtn";
import Input from "./Input";

import { oneIsSelected, feedbackCategories, faceIcons } from "../util/feedback";

import { feedbackActions } from "../store/feedbackSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FeedbackForm({}) {
	const dispatch = useDispatch();
	const feedback = useSelector((state) => state.feedback);
	const isSelected = oneIsSelected(feedback.category);

	console.log(feedback);

	function handleFaceClick(feedbackFaceSelected) {
		dispatch(feedbackActions.setFace(feedbackFaceSelected));
	}

	function handleCommentChange(event) {
		dispatch(feedbackActions.setComment(event.target.value));
	}

	function handleCategoryClick(categoryIndex) {
		const newCategory = { ...feedback.category };
		newCategory[Object.keys(newCategory)[categoryIndex]] =
			!newCategory[Object.keys(newCategory)[categoryIndex]];
		dispatch(feedbackActions.setCategory(newCategory));
	}

	return (
		<div className="feedback_form_container">
			<section className="feedback_form_section_container">
				<h5 className="feedback_form_container_text lato-regular">
					What is your opinion of our hotel
				</h5>
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
				<h5 className="feedback_form_container_text lato-regular">
					Please select the feedback category
				</h5>
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
				<h5 className="feedback_form_container_text lato-regular">
					Please select the feedback category
				</h5>
				<div className="feedback-textarea-container">
					<Input
						name={"feedback"}
						textarea
						onChange={handleCommentChange}
						placeholder="Please leave your feedback here"
						value={feedback.comment}
						// disabled={!isSelected}
					/>
				</div>
			</section>
		</div>
	);
}
