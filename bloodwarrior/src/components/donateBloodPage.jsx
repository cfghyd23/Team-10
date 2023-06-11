import React, { useState } from 'react';
import axios from 'axios';
// import { NavLink } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

const DonateBloodPage = () => {
  const [bloodDonation, setBloodDonation] = useState({
    bloodGroup: '',
    donationDate: '',
    bloodReport: null,
  });

  const handleInputChange = (e) => {
    setBloodDonation({ ...bloodDonation, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setBloodDonation({ ...bloodDonation, bloodReport: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append('bloodGroup', bloodDonation.bloodGroup);
    formData.append('donationDate', bloodDonation.donationDate);
    formData.append('bloodReport', bloodDonation.bloodReport);

    // Make the API request using axios
    axios.post('/api/submitDonation', formData)
      .then((response) => {
        // Handle the response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ padding: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Donate Blood</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="bloodGroup">Blood Group:</label>
          </div>
          <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
            <select id="bloodGroup" name="bloodGroup" value={bloodDonation.bloodGroup} onChange={handleInputChange}>
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
          <div style={{ marginBottom: '30px' , display: 'flex', justifyContent: 'center'  }}>
            <label htmlFor="donationDate">Date of Donation:</label>
            <input type="date" id="donationDate" name="donationDate" value={bloodDonation.donationDate} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="bloodReport">Recent Blood Report:</label>
            <input type="file" id="bloodReport" name="bloodReport" onChange={handleFileChange} />
          </div>
          <div style={{ textAlign: 'center' }}>
            {/* <button type="submit">Donate Blood</button> */}
            <NavLink  to="/donateredirect">donate</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateBloodPage;
