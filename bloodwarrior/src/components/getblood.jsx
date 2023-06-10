import React, { useState } from 'react';
import axios from 'axios';

const GetBloodPage = () => {
  const [bloodRequest, setBloodRequest] = useState({
    bloodGroup: '',
    urgency: '',
  });

  const handleInputChange = (e) => {
    setBloodRequest({ ...bloodRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <h2>Get Blood</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bloodGroup">Blood Group:</label>
          <select id="bloodGroup" name="bloodGroup" value={bloodRequest.bloodGroup} onChange={handleInputChange}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency">Rate of Urgency (1-5):</label>
          <input
            type="number"
            id="urgency"
            name="urgency"
            min="1"
            max="5"
            value={bloodRequest.urgency}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Request Blood</button>
      </form>
    </div>
  );
};

export default GetBloodPage;
