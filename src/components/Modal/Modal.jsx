import { forwardRef } from "react";
import "./Modal.scss";

const Modal = forwardRef(function Modal({ message }, ref) {
  return (
    <dialog ref={ref} className="error-modal">
        <h2>Error</h2>
        <p>{message}</p>
        <form method="dialog">
          <button>Close</button>
        </form>
    </dialog>
  );
});

export default Modal;
