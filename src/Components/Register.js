import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Register() {
  
  
  const [Position,SetPosition] = useState('');
  const [Name,SetName]  = useState("");
  const [Email,SetEmail] = useState('');
  const [Phone,SetPhone] = useState('');
  const [Password,SetPassword] = useState('');

  
  
  console.log(Password);

  
  async function submit(event){
    event.preventDefault();
    console.log(Name,Position);
    
    

    
  
    const result = await fetch("http://localhost:5001/register",{
      method:"POST",
      headers:{
          'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
         Name,
         Email,
         Password,
         Position,
         Phone
      })
    })
    
    if(result.status === 400){
        alert("User already exists or Invalid details");
    }

    if(result.status === 201){
      alert('Registration Successfull')
    }
     
    

   }

  return (
    <div className='Register'>
      <form onSubmit={submit}>

        <span className="heading">
          <h2>REGISTER</h2>
          <span>Already Registered: <Link to='/login'>Login</Link></span>
        </span>

        <div className="form-floating mb-3">

          <input type="text" className="form-control" required id="floating" placeholder="Mark Henry" value={Name} onChange={event => SetName(event.target.value)} />
          <label>Full Name / Brand Name</label>
        </div>

        <div className="form-floating mb-3">

          <input type="email" className="form-control" required id="floatingInput 1" placeholder="name@example.com" value={Email} onChange={event => SetEmail(event.target.value)}/>
          <label>Email address</label>
        </div>

        <div className="form-floating mb-3">

          <input type="text" className="form-control" required id="floatingInput" placeholder="+91 XXXXXXXXX" value={Phone} onChange={event => SetPhone(event.target.value)}/>
          <label>Phone number</label>
        </div>

        <div className="form-floating">

          <input type="password" className="form-control" required id="floatingPassword" placeholder="Password" value={Password} onChange={event => SetPassword(event.target.value)}/>
          <label>Password</label>
        </div>

        <select className="form-select" aria-label="Default select example" required  value={Position} onChange={event => SetPosition(event.target.value)}>
          <option>Want to shop or Host a Brand?</option>
          <option value="Shopping">Shopping</option>
          <option value="Branding">Branding</option>
        </select>

        <button className='button-61'>Register</button>

      </form>
    </div>
  )
}
