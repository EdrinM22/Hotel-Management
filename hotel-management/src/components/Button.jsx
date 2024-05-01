/* eslint-disable react/prop-types */
import "./Button.css"

export default function Button({ children, display = 'primary', onClick, ...props }) {
    const btnClassname = {
        primary: 'primary_btn',
        secondary: 'secondary_btn',
        danger: 'danger_btn',
        text: 'text_btn',
    }


    return (
        <button className={btnClassname[display]} onClick={onClick} {...props}>
            {children}
        </button>
    );
}