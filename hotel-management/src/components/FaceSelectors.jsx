/* eslint-disable react/prop-types */
import "./FaceSelectors.css";

export default function FaceSelectors({
	Icon,
	onClick,
	expression,
	selectedFace,
}) {
	const expressions = ["angry", "sad", "neutral", "happy", "ecstatic"];

	return (
		<li className="feedbac-icon-container">
			<Icon
				className={`face ${
					selectedFace === expression && expressions[expression]
				}`}
				onClick={() => onClick(expression)}
			/>
		</li>
	);
}
