import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Donationrequestredirection(props) {

  let history = useHistory();

//   const [alldata, setData] = useState([]);
//   const [alldata, setData] = useState([
//     {
//       id: 1,
//       name: "user1",
//       location: "Madhapur",
//       bloodgroup: "O+"
//     },
//     {
//       id: 2,
//       name:"user2",
//       location: "Hitech city",
//       bloodgroup: "O+"
//     },
//     {
//       id: 3,
//       name: "user3",
//       location: "Hyderabad",
//       bloodgroup: "O+"
//     },
//     {
//       id: 4,
//       name: "user4",
//       location: "JNTUH",
//       bloodgroup: "O+"
//     },
//     {
//       id: 5,
//       name: "user5",
//       location: "Madhapur",
//       bloodgroup: "O+"
//     }
//   ]);

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
    <><div className="table-div">
       <table className="table align-middle mb-0 bg-white">
                      <thead className="bg-light">
                        <tr>
                          <th>RequestNo</th>
                          <th>BloodBankName</th>
                          <th>RequestStatus</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="ms-3">
                                <p className="fw-bold mb-1" >1</p>
                               
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">BloodBank1</p>
                            
                          </td>
                          <td>
                            <p className="fw-normal mb-1">Not Yet Approved</p>
                            
                          </td>
                         
                        </tr>
                        
                      </tbody>
                    </table>
                    </div>
       
    </>
  );
}