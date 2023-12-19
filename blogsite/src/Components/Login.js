// Login.js
import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear validation errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
    }

    // If there are validation errors, update the state and stop the submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call the login function from AuthContext (you need to implement this function)
    login(formData);
  };

  const pageStyle = {
    backgroundImage: 'url("https://media.discordapp.net/attachments/952166523831742494/1186596488814538792/3.png?ex=6593d318&is=65815e18&hm=4532ffd0fdfacd2cf6212e74558d0540ecc14bf166a4f503fe7da45ab6b8e131&=&format=webp&quality=lossless&width=1177&height=662")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: '0', // Remove default margin
    padding: '0', // Remove default padding
  };

  return (
    <div className="login-container" style={pageStyle}>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
