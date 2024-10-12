// Donatorloginpage.js
import React, { useState } from 'react';
import './styles/donatorlogin.css'; // Import the CSS file for the DonatorDashboard

const Donatorloginpage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'donator' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials, please try again!');
    }
  };

  return (
    <div className="donator-dashboard-container">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Donator Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      ) : (
        <div className="dashboard-container">
          <h2>Welcome to the Donator Dashboard</h2>
          {/* Add more content here for the DonatorDashboard */}
        </div>
      )}
    </div>
  );
};

export default Donatorloginpage;
