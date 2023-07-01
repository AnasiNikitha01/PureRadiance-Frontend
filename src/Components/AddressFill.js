import React, { useContext } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { AddressContext } from '../AddressContext';

export default function AddressFill() {

    const {id} = useParams();
    console.log(id);

  const [name,setname] = useState('')
  const [street,setstreet] = useState('')
  const [city,setcity] = useState('')
  const [state,setstate] = useState('')
  const [postalCode,setpostalCode] = useState('')
  const [Phone,setPhone] = useState('')
  const [Landmark,setLandmark] = useState('')
  const [Address,SetAddress] = useContext(AddressContext);

   var addressObj = {};
   addressObj.name = name;
   addressObj.street =street;
   addressObj.state = state;
   addressObj.city = city;
   addressObj.Phone = Phone;
   addressObj.Landmark = Landmark;
   addressObj.postalCode = postalCode;
   addressObj.id = id;

  function Submit(event){
    event.preventDefault();
    console.log(addressObj);
    SetAddress(Address => [...Address,addressObj]);
    localStorage.setItem('Address', JSON.stringify([...Address,addressObj]));
    window.location.href = `/${id}/SelectAddress`;
  }


  return (
    <div className='Address_fill'>

        <h2>ADDRESS FORM</h2>

    <form onSubmit={Submit}>
      <div className='form-floating Address-div'>
            <input type="text" className='form-control Adress-dt' id="name" name="name" value={name} onChange={(event) => {
              setname(event.target.value);
            }} placeholder='Your Name'/>
             <label>Your Name</label>
      </div>
      <div className='form-floating Address-div'>
                <input type="text" className='form-control Adress-dt' id="street" name="street" value={street} onChange={(event) => {
              setstreet(event.target.value);
            }} placeholder='Address Line 1'/>
            <label>Address Line 1</label>
      </div>
      <div className='form-floating Address-div'>
            <input type="text" className='form-control Adress-dt' id="city" name="city" value={city} onChange={(event) => {
              setcity(event.target.value);
            }} placeholder='Address Line 2'/>
            <label>Address Line 2</label>
      </div>
      <div className='form-floating Address-div'>
              <input type="text" className='form-control Adress-dt' id="state" name="state" value={state} onChange={(event) => {
              setstate(event.target.value);
            }} placeholder='State'/>
            <label>State</label>
      </div>
      <div className='form-floating Address-div'>
        <input type="text" className='form-control Adress-dt' id="postalCode" name="postalCode" value={postalCode} onChange={(event) => {
              setpostalCode(event.target.value);
            }} placeholder='Postal Code'/>
            <label>Postal Code</label>
      </div>
      <div className='form-floating Address-div'>
        <input type="text" className='form-control Adress-dt' id="postalCode" name="postalCode" value={Landmark} onChange={(event) => {
              setLandmark(event.target.value);
            }} placeholder='Land Mark'/>
            <label>Land Mark</label>
      </div>
      <div className='form-floating Address-div'>
        <input type="text" className='form-control Adress-dt' id="postalCode" name="postalCode" value={Phone} onChange={(event) => {
              setPhone(event.target.value);
            }} placeholder='Phone Number'/>
            <label>Phone Number</label>
      </div>
      <button className='button-61' type="submit">Submit</button>
    </form>

    </div>
  )
}
