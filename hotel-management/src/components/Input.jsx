import "./Input.css";
import "../font/Lato.css"

export default function Input({ labelText, name, textarea, onChange  , ...props}) {
	return (
		<p className="input_general_container">
			<label htmlFor={name} className="lato-regular">{labelText}</label>
			{!textarea ? (
				<input name={name} onChange={() => onChange(event)} {...props}/>
			) : (
				<textarea name={name} onChange={() => onChange(event)} {...props}/>
			)}
		</p>
	);
}
