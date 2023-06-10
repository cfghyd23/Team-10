import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Donationrequests(props) {

  let history = useHistory();

//   const [alldata, setData] = useState([]);
  const [alldata, setData] = useState([
    {
      id: 1,
      name: "user1",
      location: "Madhapur",
      bloodgroup: "O+"
    },
    {
      id: 2,
      name:"user2",
      location: "Hitech city",
      bloodgroup: "O+"
    },
    {
      id: 3,
      name: "user3",
      location: "Hyderabad",
      bloodgroup: "O+"
    },
    {
      id: 4,
      name: "user4",
      location: "JNTUH",
      bloodgroup: "O+"
    },
    {
      id: 5,
      name: "user5",
      location: "Madhapur",
      bloodgroup: "O+"
    }
  ]);

  const api = '/trainers/';
  const token = sessionStorage.getItem('userData');


//   React.useEffect(() => {

//     axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
//       .then(res => {

//         setData(res.data);

//       }).catch((error) => {
//         console.log(error)
//       });

//   }, [])


//   function trainerDescriptionFn(trainerid) {
//     history.push({
//       pathname: '/trainerdetails',
//       id: trainerid
//     });
//   }


  return (
    <>
      <div className="heroimage-div">
        <div className="centered">
            <h1>REQUESTS</h1></div>
      </div>

      <div className="trainers-div">

        {alldata.map((data,index) => (
          <div key={index}>
            <div className="trainer-item" >
              <Card style={{ width: "15rem" }}>
               
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>
                    
                    Bloodgroup:{data.bloodgroup}<br></br>
                    location:{data.location}
                  </Card.Text>
                  <Button variant="success">Accept</Button>
                  <Button variant="danger">Decline</Button>
                  {/* <Card.Link href="#">Accept</Card.Link>
                 <Card.Link href="#">Decline</Card.Link> */}
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}