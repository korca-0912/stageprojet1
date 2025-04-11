import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage,
  success = false,
  fullWidth = false,
  required = false,
  id,
  name,
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`input-container ${fullWidth ? 'full-width' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="required-asterisk">*</span>}
        </label>
      )}
      <div className={`input-wrapper ${error ? 'error' : ''} ${success ? 'success' : ''}`}>
        <input
          type={type}
          id={inputId}
          name={name || inputId}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
        />
      </div>
      {error && errorMessage && <span className="error-message">{errorMessage}</span>}
      {success && !error && <span className="success-message">Validé</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'url', 'search']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Input;