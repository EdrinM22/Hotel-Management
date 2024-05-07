import "./OptionList.css";
import { useState } from "react";

export default function OptionList({ options, selectedOption, onSelect }) {
	const [isOpen, setIsOpen] = useState(false);

    function handleOptionClick() {
        setIsOpen((prev) => !prev);
    }
    
    return (
		<div className="option-selector-container">  
            <p className="option-selector-title lato-regular">Select Room Type</p>
			<div className="option-selector" onClick={handleOptionClick}>
                <p className="selected-option"> {selectedOption} </p>
                <span className={`challenge-item-details-icon ${isOpen ? "options-active" : " "}`}>&#9650;</span>
            

            </div>
            {isOpen && (
                <div className="options-list">
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`option-item ${selectedOption === option ? "selected-option-item" : ""}`}
                            onClick={() => {
                                onSelect(option);
                                setIsOpen(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
		</div>
	);
}
