import FeedbackForm from "../components/FeedbackForm";
import "../components/Feedback.css";
import feedbackImg from "../assets/feedback.png";

import { getTokenFromLocalStorage } from "../util/token";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FeedbackPage() {
	const token = getTokenFromLocalStorage();
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/login");
		}
	}
	, [token, navigate]);

	return (
		<>
			<main className="feedback-main">
				<section className="feedback-main-section">
					<h1 className="feedback-main-title lato-bold">Your Feedback</h1>
					<p className="feedback-main-text lato-light">
						Your opinion is important to us. This way we keep improving our
						services
					</p>
                    <img className="feedback-main-img" src={feedbackImg}/>
				</section>
				<FeedbackForm />
			</main>
		</>
	);
}
