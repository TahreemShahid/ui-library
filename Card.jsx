import React from 'react';
import './Card.css';

const Card = ({ title, children, className = '', ...props }) => (
  <div className={`my-ui-card ${className}`} {...props}>
    {title && <div className="my-ui-card-title">{title}</div>}
    <div className="my-ui-card-content">{children}</div>
  </div>
);

export default Card; 