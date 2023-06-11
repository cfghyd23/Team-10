import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';

const GetBloodPage = () => {
  const [bloodRequest, setBloodRequest] = useState({
    bloodGroup: '',
    urgency: '',
    units:''
  });

  const handleInputChange = (e) => {
    setBloodRequest({ ...bloodRequest, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions on form submission
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <h2>Get Blood</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="bloodGroup">Blood Group:</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={bloodRequest.bloodGroup}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            >
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
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="urgency">Rate of Urgency (1-5):</label>
            <input
              type="number"
              id="urgency"
              name="urgency"
              min="1"
              max="5"
              value={bloodRequest.urgency}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="units">Units:</label>
            <input
              type="number"
              id="units"
              name="units"
            
              value={bloodRequest.units}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
          </div>
          {/* <button type="submit">Request Blood</button> */}
          <NavLink  to="/bloodredirect">Request</NavLink>
        </form>
      </div>
    </div>
  );
};

export default GetBloodPage;