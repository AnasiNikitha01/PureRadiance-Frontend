import React, {  useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Position, setPosition] = useState('');
  const [disp1,setdisp1] = useState('none');
  const [disp2,setdisp2] = useState('none');
  const [disp3,setdisp3] = useState('block');
  const [disp4,setdisp4] = useState('none');
  const [disp5,setdisp5] = useState('block');

  function confirm(){
      setdisp1('block')
      setdisp2('block')
      setdisp4('block')
      setdisp3('none')
      setdisp5('none')
  }

  console.log(Position);
  
  async function submit(event) {
    event.preventDefault();
    

    const result = await fetch("https://pure-radiance-backend.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:'include',
      body: JSON.stringify({
        Email,
        Password,
        Position
      }),
    });

    if (result.ok) {
      result.json().then(data=>{
       console.log({data})
       if(data.position === Position){
      window.location.href = `/${data.id}`;
       }else{
        alert(`You registered as ${data.position}, but selected ${Position}. Please change your Option.`);
        setdisp1('none')
        setdisp2('none')
        setdisp4('none')
        setdisp3('block')
        setdisp5('block')
       }
      })
    } else {
      alert("Invalid Login details");
    }

  
  }
    
  return (
    <div className="Login">
      <form onSubmit={submit}>
        <span className="heading">
          <h2>LOGIN</h2>
          <span>
            Not Registered yet: <Link to="/register">Register</Link>
          </span>
        </span>

        <div className="form-floating mb-3" style={{display : disp1}}>
          <input
            type="email"
            className="form-control"
            required
            id="floatingInput"
            placeholder="name@example.com"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label>Email address</label>
        </div>

        <div className="form-floating" style={{display : disp2}}>
          <input
            type="password"
            className="form-control"
            required
            id="floatingPassword"
            placeholder="Password"
            value={Password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <label>Password</label>
        </div>

         <select style={{display : disp3}}
          className="form-select"
          aria-label="Default select example"
          required
          value={Position}
          onChange={(event) => setPosition(event.target.value)}
        >
          <option>Confirm Position?</option>
          <option value="Shopping">Shopping</option>
          <option value="Branding">Branding</option>
        </select> 

        <button className="button-61" style={{display : disp4}}>Login</button>

        <button className="button-61" onClick={confirm} style={{display : disp5}}>Confirm</button>
      </form>
    </div>
  );
}
