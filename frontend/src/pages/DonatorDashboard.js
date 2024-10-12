import React, { useState } from 'react';
import './DonatorDashboard.css'; // Importing CSS for styling

const DonatorDashboard = () => {
  const [foodDetails, setFoodDetails] = useState({
    foodName: '',
    description: '',
    quantity: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFoodDetails(prevState => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending the data to the backend
    console.log('Food details:', foodDetails);
  };

  return (
    <div className="donator-dashboard">
      <h2>Donator Dashboard</h2>
      <form onSubmit={handleSubmit} className="food-upload-form">
        <div className="form-group">
          <label>Food Name:</label>
          <input 
            type="text" 
            name="foodName" 
            value={foodDetails.foodName}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={foodDetails.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input 
            type="text" 
            name="quantity"
            value={foodDetails.quantity}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>Upload Food Image:</label>
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required 
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default DonatorDashboard;
