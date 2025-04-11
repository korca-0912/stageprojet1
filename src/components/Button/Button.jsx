// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// Version avec export explicite
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  ariaLabel,
  fullWidth = false,
  icon,
  iconPosition = 'left',
}) => {
  return (
    <button
      className={`btn ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
    </button>
  );
};

Button.propTypes = { /* ... (gardez la même configuration) ... */ };

// Export par défaut
export default Button;