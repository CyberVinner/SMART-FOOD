import React from 'react';
import './IntroPage.css'; // Import the CSS file

import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const IntroPage = () => {
  const navigate = useNavigate(); // For navigation between pages

  const handleRoleSelection = (role) => {
    switch (role) {
      case 'admin':
        navigate('/admin');
        break;
      case 'donator':
        navigate('/donator');
        break;
      case 'receiver':
        navigate('/receiver');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to the Food Waste Management System</h1>
      <p className="subtitle">Please select your role:</p>
      <div className="buttonContainer">
        <button className="button" onClick={() => handleRoleSelection('admin')}>
          Admin
        </button>
        <button className="button" onClick={() => handleRoleSelection('donator')}>
          Donator
        </button>
        <button className="button" onClick={() => handleRoleSelection('receiver')}>
          Receiver
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
