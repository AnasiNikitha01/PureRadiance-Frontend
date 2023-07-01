import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export default function ProfilePage() {

  const [Data,SetData] = useState(' ');

  const {id} = useParams();
  
  useEffect(()=>{
  fetch(`http://localhost:5001/${id}/profile`,{
    method : 'GET',
    headers:{
      'Content-Type':'application/json',
    },
    credentials:'include',
  }).then(res=>{
    res.json().then(sdata=>{
         SetData(sdata);
         console.log(sdata);
    })
  })
},[id]);


var Name = Data?.Name;
var Email = Data?.Email;
var Phone = Data?.Phone;
var Position = Data?.Position;
console.log(Email,Name,Phone,Position);

    function Edit(){
         window.location.href = `/${id}/ProfileEdit`;
    } 

  return (
    <div className='ProfilePage'>
        <h2>Personal Information</h2>
        <div className='Top-Profile'>
        <div className="profile-pic">
          <img src="https://as2.ftcdn.net/v2/jpg/01/38/90/19/1000_F_138901924_pqzMdKJQtcIKLPYi9yfbIzZH94NRuTvZ.jpg" alt="" />
        </div>
        <div className="name-place">
         <p>{Name}</p>
        </div>
        </div>
         
        <div className="email-place">
          <p><b>Email :</b>  {Email}</p>
        </div>
        <div className="phone-place">
          <p><b>Phone Number : </b> {Phone}</p>
        </div>
        <div className="position-place">
          <p><b>Validation : </b> {Position}</p>
        </div>


      <button className='button-61' onClick={Edit}>Edit</button>
    </div>
  )
}
