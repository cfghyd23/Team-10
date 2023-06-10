import React, { useState } from 'react';

export const Awareness = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [interested, setInterested] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data processing here
    console.log('Form submitted:', { name, phoneNumber, interested });
  };
 
	
  return (
    <div className="form-horizontal">
    <div className="col-xs-8 col-xs-offset-4">
        <h2>User Login</h2>
    </div>	
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <div>
        <div style={{ display: 'inline-block', marginRight: '100px', marginLeft: '100px' }}>
          <img
            src="img/about.jpg"
            alt="Image 1"
            style={{ width: '400px', height: '400px' }}
          />
        </div>

        <div style={{ display: 'inline-block' }}>
          <img
            src="img/about.jpg"
            alt="Image 2"
            style={{ width: '400px', height: '400px' }}
          />
        </div>
      </div>
      <br></br>

      <div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Awareness Form</h2>

          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label>Interested in Campaign:</label>
            <label>
              <input
                type="radio"
                value="yes"
                checked={interested === 'yes'}
                onChange={() => setInterested('yes')}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="no"
                checked={interested === 'no'}
                onChange={() => setInterested('no')}
              />{' '}
              No
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );

};
