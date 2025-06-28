import React from 'react';
import './Modal.css';

const Modal = ({ open, onClose, children, className = '', ...props }) => {
  if (!open) return null;
  return (
    <div className="my-ui-modal-backdrop" onClick={onClose}>
      <div className={`my-ui-modal ${className}`} onClick={e => e.stopPropagation()} {...props}>
        <button className="my-ui-modal-close" onClick={onClose}>&times;</button>
        <div className="my-ui-modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal; 