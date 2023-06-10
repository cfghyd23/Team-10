import React, { useState } from 'react';
import axios from 'axios';

<<<<<<< HEAD
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


    
    const handleInput=(e)=>
    {
        setUserdata({...userdata,[e.target.name]:e.target.value})
        //console.log(userdata)
    }
    const handleSubmit=()=>
    {
        //console.log("this is handle submit")
        //console.log(userdata)
        if(selectedOption==="Donar" || selectedOption==="Recipient"){
        axios.post('http://localhost:5000/user-api/getusers',{username:userdata.username,password:userdata.password})
        .then(res=>
            {
        //         console.log(res)
        //     //alert(res.data.message)
        //     console.log(res.data.payload)
        //     history.push('/')
        //     window.location.reload();

        //    // let responseJson = res.data.token;
        //     sessionStorage.setItem("userdata",res.data.payload)
            if (res.data.payload) {

                alert("You have successfully login");
                
                history.push('/bloodbankhome');
                window.location.reload();
=======
const DonateBloodPage = () => {
  const [bloodDonation, setBloodDonation] = useState({
    bloodGroup: '',
    donationDate: '',
    bloodReport: null,
  });
>>>>>>> 2dfd462f82ec5c2ddec0c10ce12efda1a97bc707

  const handleInputChange = (e) => {
    setBloodDonation({ ...bloodDonation, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
            }
            
           
        })
            
            .catch(err=>
                alert("Wrong Username or Password"), history.push('/login'))
            }
            else
            {
                axios.post('http://localhost:5000/bloodbank-api/getusers',{username:userdata.username,password:userdata.password})
                .then(res=>
                    {
                //         console.log(res)
                //     //alert(res.data.message)
                //     console.log(res.data.payload)
                //     history.push('/')
                //     window.location.reload();
        
                //    // let responseJson = res.data.token;
                //     sessionStorage.setItem("userdata",res.data.payload)
                    if (res.data.payload) {
        
                        alert("You have successfully login");
                        
                        history.push('/');
                        window.location.reload();
        
                        let responseJson = res.data.payload;
                        let ty="bloodbank"
                        sessionStorage.setItem('userdata', responseJson);
                        sessionStorage.setItem('type',ty );
        
                    }
                    
                   
                })
                    
                    .catch(err=>
                        alert("Wrong Username or Password"), history.push('/login'))
            }
    }
    return(
=======
  const handleFileChange = (e) => {
    setBloodDonation({ ...bloodDonation, bloodReport: e.target.files[0] });
  };
>>>>>>> 2dfd462f82ec5c2ddec0c10ce12efda1a97bc707

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
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="donationDate">Date of Donation:</label>
            <input type="date" id="donationDate" name="donationDate" value={bloodDonation.donationDate} onChange={handleInputChange} />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="bloodReport">Recent Blood Report:</label>
          </div>
          <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
            <input type="file" id="bloodReport" name="bloodReport" onChange={handleFileChange} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit">Donate Blood</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateBloodPage
