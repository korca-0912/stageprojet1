import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

// Version corrigée avec export nommé explicite
const ProgressBar = ({
  progress = 0,
  label,
  showPercentage = true,
  color = '#4a6bdf',
  height = 12,
}) => {
  const percentage = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="progress-container">
      {(label || showPercentage) && (
        <div className="progress-header">
          {label && <span className="progress-label">{label}</span>}
          {showPercentage && (
            <span className="progress-percentage">{percentage}%</span>
          )}
        </div>
      )}
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            height: `${height}px`,
          }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

// Ajout explicite de displayName
ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  progress: PropTypes.number,
  label: PropTypes.string,
  showPercentage: PropTypes.bool,
  color: PropTypes.string,
  height: PropTypes.number,
};

export default ProgressBar;