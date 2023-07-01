import React, { useEffect, useState } from 'react';

export default function Brands() {

  const [All,SetAll] = useState([]);

  useEffect(()=>{
   fetch('https://pure-radiance-backend.onrender.com/brands',{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json',
      },
      credentials : 'include',
   }).then(res=>{
    res.json().then(data=>{
      SetAll(data);
    })
   })
  },[]);



  function submit(name,id){
    window.location.href = `/${id}/${name}`;
     console.log(name,id)
  }

 
  return (
    <div className='Brands'>
         <div className="row">
             <div className="col">
              <div className="outer">
               {All.map(data=>(
              <button className='Brand-names' onClick={()=>submit(data.Name,data._id)} key={data._id} >{data.Name}</button>
              ))}
              </div>
             </div>
         </div>
    </div>
  )
}
