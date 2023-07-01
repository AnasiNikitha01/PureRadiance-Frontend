import React, { useContext } from 'react'
import { AddressContext } from '../AddressContext'
import { Link, useParams } from 'react-router-dom';

export default function AllAddress() {

    const {id} = useParams();
    console.log(id);

  const [Address,SetAddress] = useContext(AddressContext);
  console.log(Address);

  var arr = [];

  var j=0;
  for(var i=0;i<Address.length;i++){
    if(Address[i].id === id){
        arr[j] = Address[i];
        j++;
    }
  }

  console.log(arr);

  function navigate(){
    window.location.href = `/${id}/AddressForm`
  }

  function Remove(index){
    const updatedAddress = [...Address];
    updatedAddress.splice(index, 1);
    SetAddress(updatedAddress);
    localStorage.setItem('Address', JSON.stringify(updatedAddress));
  }
   // to={`/${id}/${index}/Confirmation`}
   function navi(i){
      for(var k=0;k<Address.length;k++){
        if(arr[i]===Address[k]){
            console.log(k);
            window.location.href=`/${id}/${k}/Confirmation`
        }
      }
   }

    return (
        <div className='AllAddress'> 
        <h2>Select Address</h2> 
        {arr.map((data,index)=>(
  
            <div className="card" key={index}>
                <div className="card-header">
                    Address {index+1}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.street}, {data.city}, {data.state}, {data.postalCode}</p>
                    <div className="landmarknumb">
                        <p>Contact Nunber : {data.Phone}</p>
                        <p>Land Mark : near, {data.Landmark}</p>
                    </div>
                    <div className="add-btn">
                    <Link className='select-adds' onClick={()=>navi(index)}>Select this Address</Link>
                    <button className='remove' onClick={()=>Remove(index)}>Remove Address</button>
                    </div>
                </div>
            </div>
           
           
            ))}
            <button className='button-61' onClick={navigate}>Add New Address</button>
        </div>
    )
}
