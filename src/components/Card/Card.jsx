import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export const Card = ({
  title,
  description,
  imageUrl,
  duration,
  level,
  progress,
  isEnrolled,
  onClick,
  actionText,
  badgeText,
  footerContent,
}) => {
  return (
    <div className="card" onClick={onClick}>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      
      {imageUrl && (
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        {description && <p className="card-description">{description}</p>}
        
        <div className="card-meta">
          {duration && <span className="meta-duration">⏱️ {duration}</span>}
          {level && <span className="meta-level">📊 {level}</span>}
        </div>

        {progress !== undefined && (
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
            <span className="progress-text">{progress}% complété</span>
          </div>
        )}
      </div>

      {(actionText || footerContent) && (
        <div className="card-footer">
          {footerContent || (
            <button 
              className={`card-button ${isEnrolled ? 'enrolled' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onClick?.();
              }}
            >
              {isEnrolled ? 'Continuer' : actionText || 'S\'inscrire'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.oneOf(['Débutant', 'Intermédiaire', 'Avancé']),
  progress: PropTypes.number,
  isEnrolled: PropTypes.bool,
  onClick: PropTypes.func,
  actionText: PropTypes.string,
  badgeText: PropTypes.string,
  footerContent: PropTypes.node,
};

export default Card;