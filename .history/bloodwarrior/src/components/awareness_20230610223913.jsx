import React, { useState } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Login=()=>
{
    const history=useHistory()
    const [userdata,setUserdata]=useState({
        username:"",
        password:""
    })
    
    const handleInput=(e)=>
    {
        setUserdata({...userdata,[e.target.name]:e.target.value})
        //console.log(userdata)
    }
    const handleSubmit=()=>
    {
        //console.log("this is handle submit")
        //console.log(userdata)
        axios.post('http://localhost:5000/user-api/getusers',{username:userdata.username,password:userdata.password})
        .then(res=>
            {console.log(res)
            //alert(res.data.message)
            console.log(res.data.payload)
            history.push('/')
            window.location.reload();

           // let responseJson = res.data.token;
            sessionStorage.setItem("userdata",res.data.payload)
           
        })
            
            .catch(err=>{console.log(err)})
    }
    return(
  
<div className="signup-form">
<div className="form-horizontal">
    <div className="col-xs-8 col-xs-offset-4">
        <h2>User Login</h2>
    </div>		
    <div className="form-group">
        <label className="control-label col-xs-4">User Name</label>
        <div className="col-xs-8">
            <input type="text" className="form-control" name="username" value={userdata.username} onChange={handleInput} required="required"/>
        </div>        	
    </div>
   
    <div className="form-group">
        <label className="control-label col-xs-4">Password</label>
        <div className="col-xs-8">
            <input type="password"  className="form-control" name="password" value={userdata.password} onChange={handleInput} required="required"/>
        </div>    
        <div className="col-xs-8 col-xs-offset-4">
          <p><label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>.</label></p>
          <button type="submit" onClick={handleSubmit} className="btn btn-secondary btn-lg">Log in</button>
      </div>      	
    </div>
    
            
</div>
    <div className="form-group">
      
    </div>		      

</div>    
  
    )
}
export default Login;