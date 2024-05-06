import { forwardRef, useImperativeHandle, useRef } from "react";
import "./Modal.css";

import Button from "./Button";

const Modal = forwardRef(function Modal({ title, children }, ref) {
    const modalRef = useRef();

    useImperativeHandle(ref, () => {
        return {
            open(){
                modalRef.current.showModal();
            }
        }
    })

    return (
        <dialog ref={modalRef} className="modal">
            <h2>{title}</h2>
            {children}
            <form method="dialog">
                <Button display="danger">Close</Button>
            </form>
        </dialog>
    );
});

export default Modal;