import "../font/Lato.css";
import "./FeedbackCategoryBtn.css";

export default function FeedbackCategoryBtn({ content, isSelected, onClick }) {
	return (
		<p
			className={`feedback_category_btn lato-regular ${
				isSelected && "active"
			}`}
            onClick={onClick}
            >
			{content}
		</p>
	);
}
