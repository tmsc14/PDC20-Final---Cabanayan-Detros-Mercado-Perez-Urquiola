// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Header.css'; // Import your header styles

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function and navigate to the login page
    logout();
    navigate('/login');
  };

  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Replace text with image for logo */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://media.discordapp.net/attachments/952166523831742494/1186580488824041482/LS_LOGO_WHITE.png?ex=6593c432&is=65814f32&hm=9ca92dd710a679e2a56f986b407f0dddb15860835f1f4830c97e6e5126d7d0ca&=&format=webp&quality=lossless&width=625&height=193"
            alt="Logo"
            className="logo-img"
          />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            {user && (
              <li className="nav-item">
                <button className="nav-link btn btn-outline-light" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
            {/* Add space to the right of the Logout button */}
            <li className="nav-item">
              <div className="ml-2"></div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
