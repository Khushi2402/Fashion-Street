// Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ children, isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

  return (
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
