import { forwardRef, useImperativeHandle, useRef } from "react";
import "./Modal.css";

import Button from "./Button";

const Modal = forwardRef(function Modal({ title, children }, ref) {
	const modalRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				modalRef.current.showModal();
			},
			close() {
				modalRef.current.close();
			},
		};
	});

	return (
		<dialog ref={modalRef} className="modal">
			<h2>{title}</h2>
			{children}
			<form method="dialog">
				<p className="center-button-modal">
					<Button display="danger">Close</Button>
				</p>
			</form>
		</dialog>
	);
});

export default Modal;
