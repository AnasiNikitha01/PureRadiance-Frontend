import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProfileEdit() {
    const [Name, SetName] = useState('');
    const [Email, SetEmail] = useState('');
    const [Phone, SetPhone] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5001/${id}/profile`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
            });
            const data = await response.json();
            SetName(data.Name);
            SetEmail(data.Email);
            SetPhone(data.Phone);
          } catch (error) {
            console.error('Error fetching profile:', error);
          }
        };
      
        fetchData();
      }, [id]);
      

      async function submit(event) {
        event.preventDefault();

      
        try {
          const result = await fetch(`http://localhost:5001/profileEdit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include',
              body: JSON.stringify({ Name, Email, Phone }),
          });
      
          if (result.ok) {
             window.location.href = `/${id}/profile`
          }
        } catch (error) {
          console.error('Error editing profile:', error);
        }
      }
      
    return (
        <div className='ProfileEdit'>
            <form onSubmit={submit}>

                <span className="heading">
                    <h2>Edit Profile</h2>
                </span>

                <div className="form-floating mb-3">

                    <input type="text" className="form-control" required id="floating" placeholder="Mark Henry" value={Name} onChange={event => SetName(event.target.value)} />
                    <label>Full Name / Brand Name</label>
                </div>

                <div className="form-floating mb-3">

                    <input type="email" className="form-control" required id="floatingInput 1" placeholder="name@example.com" value={Email} onChange={event => SetEmail(event.target.value)} />
                    <label>Email address</label>
                </div>

                <div className="form-floating mb-3">

                    <input type="text" className="form-control" required id="floatingInput" placeholder="+91 XXXXXXXXX" value={Phone} onChange={event => SetPhone(event.target.value)} />
                    <label>Phone number</label>
                </div>

                <button className='button-61'>Done</button>

            </form>
        </div>
    )
}
