import React, { useState } from 'react';
import './styles/ReceiverLoginPage.css'; // Import the CSS file for the ReceiverDashboard
import ReceiverDashboard from './ReceiverDashboardPage'; // Import the ReceiverDashboard component

const ReceiverLoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulating login credentials (you can replace this with actual authentication logic)
    if (username === 'receiver' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials, please try again!');
    }
  };

  return (
    <div className="receiver-dashboard-container">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Receiver Login</h2>
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
          <ReceiverDashboard />
        </div>
      )}
    </div>
  );
};

export default ReceiverLoginPage;
