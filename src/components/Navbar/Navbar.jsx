import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export const Navbar = ({ 
  logo, 
  title, 
  menuItems, 
  userProfile, 
  onMenuItemClick,
  className 
}) => {
  return (
    <nav className={`navbar ${className || ''}`}>
      <div className="navbar-brand">
        {logo && <img src={logo} alt="Logo" className="navbar-logo" />}
        {title && <h1 className="navbar-title">{title}</h1>}
      </div>

      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <button 
              className="navbar-link" 
              onClick={() => onMenuItemClick(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {userProfile && (
        <div className="navbar-profile">
          <img 
            src={userProfile.avatar} 
            alt={userProfile.name} 
            className="profile-avatar" 
          />
          <span className="profile-name">{userProfile.name}</span>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  userProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  onMenuItemClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Navbar;