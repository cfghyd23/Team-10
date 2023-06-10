import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function UserProfile(props) {

    //const [image, setImage] = useState("");

    const [name, setName] = useState("");
    //const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
     const [gender, setGender] = useState("");
     const [bloodgroup, setBloodGroup] = useState("");
     const [location, setLocation] = useState("");
    //const [mobile, setMobile] = useState("");
    //const [trainer, setTrainerId] = useState("");

    const api = '/user-api/userprofile';
    const token = sessionStorage.getItem('userdata');
    const type = sessionStorage.getItem('type');

    React.useEffect(() => {
        if(type=="bloodbank")
        {
        axios.get('/bloodbank-api/userprofile', { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {

               console.log(res.data.message)
               console.log(res.data.email)
               //console.log(res.data.bloodgroup)

               // setImage(res.data.user.profileImage);
                setName(res.data.fullname);
                setEmail(res.data.email);
               // setLname(res.data.user.lastname);
               // setRole(res.data.user.role_id);
              
                setBloodGroup(res.data.location);
               // setTrainerId(res.data.trainer_id);
                //setId(res.data.user._id);

            }).catch((error) => {
                console.log(error)
            });}
            else{axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {

               console.log(res.data.message)
               console.log(res.data.email)
               console.log(res.data.bloodgroup)

               // setImage(res.data.user.profileImage);
                setName(res.data.fullname);
               // setLname(res.data.user.lastname);
               // setRole(res.data.user.role_id);
              setEmail(res.data.email);
               setGender(res.data.gender);
                setBloodGroup(res.data.bloodgroup);
               // setTrainerId(res.data.trainer_id);
                //setId(res.data.user._id);

            }).catch((error) => {
                console.log(error)
            });

            }

    }, [])
    let history = useHistory();

   // const [uderid, setId] = useState([]);

    return (
        <>
            <p className="userprofile-heading">Profile</p>

            <div className="userprofile-div">

                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={image} style={{ backgroundImage: "url('../images/profile.png')", width: "15rem", height: "15rem", backgroundSize: 'cover', overflow: 'hidden' }} /> */}
                    {/* <hr /> */}
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        {type=="bloodbank" ? (
                            <Card.Text>
                            
                            <p>Email : - {email}</p>
                            <p>Location : - {location}</p>
                           
                        </Card.Text>
                     
                        ):(
                            <Card.Text>
                            
                            <p>Email : - {email}</p>
                            <p>Gender : - {gender}</p>
                            <p>BloodGroup : - {bloodgroup}</p>
                        </Card.Text>
                        )
}

                        <Link className="nav-link" aria-current="page" to="/editprofile">
                            Edit Profile
                        </Link>
                        <Link className="nav-link" aria-current="page" to="/resetpassword">
                            Reset Password
                        </Link>
                        
                        {/* {role == 1 ? (
                            <>
                                {trainer == null ? (
                                    <>
                                        <Link className="nav-link" to="/addtrainerdocuments">
                                            Add Trainer Details
                                        </Link>

                                    </>
                                ) : (
                                    <>
                                        <Link className="nav-link" to="/edittrainer">
                                            Edit Trainer Details
                                        </Link>
                                        <Link className="nav-link" aria-current="page" to="/edittraineravailability">
                                            Edit Availability
                                        </Link>
                                        <Link className="nav-link" aria-current="page" to="/viewtrainees">
                                            View Trainees
                                        </Link>
                                       
                                    </>

                                )}

                            </>
                        ) : (
                            <>
                                                            </>

                        )}
                          {role == 2 ? (
                            <>
                                {(
                                    <>
                                        <Link className="nav-link" to="/viewdiet">
                                            ViewDiet
                                        </Link>
                                        <Link className="nav-link" to="/viewexercises">
                                            ViewExercises
                                        </Link>
                                        
                                    </>

                                )}

                            </>
                        ) : (
                            <>
                                                            </>

                        )}
                          */}
                            
                           





                    </Card.Body>
                </Card>

            </div>
        </>
    );
}
