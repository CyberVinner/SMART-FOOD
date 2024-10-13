import React from 'react';
import './styles/ReceiverDashboardPage.css'; // Optional: Add custom styles for the dashboard

const ReceiverDashboardPage = ({ foodList }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Receiver Dashboard</h2>
      <p>This is the main dashboard for receivers after logging in.</p>
      {foodList.length > 0 ? (
        foodList.map((food, index) => (
          <div key={index} className="food-item">
            <h3>{food.foodName}</h3>
            <p>Description: {food.description}</p>
            <p>Quantity: {food.quantity}</p>
            {food.image && <img src={food.image} alt={food.foodName} className="food-image" />}
          </div>
        ))
      ) : (
        <p>No food details available yet.</p>
      )}
    </div>
  );
};

export default ReceiverDashboardPage;
