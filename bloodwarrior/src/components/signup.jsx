import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../css/login.css";
import axios from 'axios';
const SignUp=()=> {
  const history = useHistory();
  const [userdata,setUserdata]=useState({
    username:"",
    fullname:"",
    email:"",
    gender:"",
    bloodgroup:"",
    password:"",
    location:""
})

const [selectedOption, setSelectedOption] = useState('Donar');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

const handleInput=(e)=>
{
    setUserdata({...userdata,[e.target.name]:e.target.value})
    console.log(userdata)
}
const handleSubmit=(e)=>
{
    e.preventDefault();   
    console.log(userdata)
    console.log("this is handle submit")
    if(selectedOption==="Donar" || selectedOption==="Recipient"){
    axios.post('http://localhost:5000/user-api/createusers',{...userdata,type:"bloodbank"})
    .then(
      // {username:userdata.username,fullname:userdata.fullname,mobileno:userdata.mobileno,password:userdata.password}
      res=>{
        console.log(res)
        if(res.data.message==="user created successfully")
        {
          history.push('/login')
        }
        else{
          alert("user already exists")
        }
       
      }
    )
  .catch(err=>{alert("somethin occured")})
    }
    else{
      axios.post('http://localhost:5000/bloodbank-api/createusers',userdata)
      .then(
        // {username:userdata.username,fullname:userdata.fullname,mobileno:userdata.mobileno,password:userdata.password}
        res=>{
          console.log(res)
          if(res.data.message==="user created successfully")
          {
            history.push('/login')
          }
          else{
            alert("user already exists")
          }
         
        }
      )
    .catch(err=>{alert("somethin occured")})
      

    }
}
    return (

      
        <div className="signup-form">
    
        <div className="form-horizontal">
          
        <div className="col-xs-8 col-xs-offset-4">
          <h2>User SignUp</h2>
        </div>	
        <div className='form-group'>
      <label className='control-label col-xs-4'>Select an option:</label>
      <select className="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select</option>
        <option value="Donar" selected={selectedOption === 'Donar'}>Donar</option>
        <option value="Recipient" selected={selectedOption === 'Recipient'}>Recipient</option>
        <option value="BloodBank" selected={selectedOption === 'Blood Bank'}>Blood Bank</option>
      </select>
      {<p>Selected Option: {selectedOption}</p> }
    </div>
            <div className="form-group">
          <label className="control-label col-xs-4">Username*</label>
          <div className="col-xs-8">
                    <input type="text" value={userdata.username} className="form-control" name="username"  onChange={handleInput} required="required" autoComplete='off'/>
                </div>        	
            </div>
            <div className="form-group">
              <label className="control-label col-xs-4">Full Name*</label>
              <div className="col-xs-8">
                        <input type="text" value={userdata.fullname} className="form-control" name="fullname" onChange={handleInput} required="required"/>
                    </div>        	
                </div>
                <div className="form-group">
          <label className="control-label col-xs-4">Email*</label>
          <div className="col-xs-8">
                    <input type="text" value={userdata.email} className="form-control" name="email" onChange={handleInput} required="required"/>
                </div>        	
            </div>
            {selectedOption=="Donar" ? (
              <>
        <div className="form-group">
          <label className="control-label col-xs-4">Gender*</label>
          <div className="col-xs-8">
                    <input type="text" value={userdata.gender} className="form-control" name="gender" onChange={handleInput} required="required"/>
                </div>        	
            </div>
            <div className="form-group">
          <label className="control-label col-xs-4">Blood Group*</label>
          <div className="col-xs-8">
                    <input type="text" value={userdata.bloodgroup} className="form-control" name="bloodgroup" onChange={handleInput} required="required" autoComplete='off'/>
                </div>        	
            </div>
            </>
            ):(
            <div className="form-group">
          <label className="control-label col-xs-4">Location*</label>
          <div className="col-xs-8">
                    <input type="text" value={userdata.location} className="form-control" name="location" onChange={handleInput} required="required" autoComplete='off'/>
                </div>        	
            </div>
            )}
        <div className="form-group">
          <label className="control-label col-xs-4">Password*</label>
          <div className="col-xs-8">
                    <input type="password" value={userdata.password} id="hello" className="form-control" name="password" onChange={handleInput}required="required" autoComplete='off'/>
                </div>        	
            </div>
     
       
      
        <p id = "message"></p>
        <div className="form-group">
          <div className="col-xs-8 col-xs-offset-4">
            <p><label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>.</label></p>
            <div><Button type='submit' onClick={handleSubmit} className="btn btn-primary btn-lg">Sign up</Button></div>
          </div>  
        </div>		      
      </div>
    </div>
    )
 
}
export default SignUp;