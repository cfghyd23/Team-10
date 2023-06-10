import React, { useState } from 'react';
import axios from 'axios';

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

 
  };

  return (
    <div>
      <h2>Donate Blood</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bloodGroup">Blood Group:</label>
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
        <div>
          <label htmlFor="donationDate">Date of Donation:</label>
          <input type="date" id="donationDate" name="donationDate" value={bloodDonation.donationDate} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="bloodReport">Recent Blood Report:</label>
          <input type="file" id="bloodReport" name="bloodReport" onChange={handleFileChange} />
        </div>
        <button type="submit">Donate Blood</button>
      </form>
    </div>
  );
};

export default DonateBloodPage;
