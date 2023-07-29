import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className={classes['modal-overlay']}>
            <div className={classes['modal-wrapper']}>
                <div className={classes['modal']}>
                    <div className={classes['modal-header']}>
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className={classes['modal-body']}>{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal