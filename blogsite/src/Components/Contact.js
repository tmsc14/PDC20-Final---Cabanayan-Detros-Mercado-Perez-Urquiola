// Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Show confirmation message
    setConfirmationMessage('Form submitted successfully!');

    // Clear the form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Hide confirmation message
      setConfirmationMessage('');
    }, 2000); // Adjust the delay as needed
  };

  const pageStyle = {
    backgroundImage: 'url("https://media.discordapp.net/attachments/952166523831742494/1186596594217390090/7.png?ex=6593d331&is=65815e31&hm=3a5308fc0a936d1d1848d4f8d728aab5b046bc86da6a1bddd79b75ea47a32304&=&format=webp&quality=lossless&width=1177&height=662")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: '0', // Remove default margin
    padding: '0', // Remove default padding
  };

  return (
    <div className="contact-container" style={pageStyle}>
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/* Display confirmation message */}
        {confirmationMessage && (
          <div className="confirmation-message alert alert-success">
            {confirmationMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
