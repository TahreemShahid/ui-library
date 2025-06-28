import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', className = '', ...props }) => (
  <button type={type} className={`my-ui-btn ${className}`} onClick={onClick} {...props}>
    {children}
  </button>
);

export default Button; 