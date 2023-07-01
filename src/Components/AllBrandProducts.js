import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function AllBrandProducts() {

    const [Prod,SetProd] = useState([]);
      
    const {position,id,name} = useParams();
    console.log(id,name);

    useEffect(()=>{
        fetch(`http://localhost:5001/${id}/${name}`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application-json',
            },
            credentials : 'include',
        }).then(res=>{
            res.json().then(data=>{
                SetProd(data);
            })
        })
    },[id,name,position])

    function button_sbt(Product_id){
        console.log(Product_id);
      window.location.href = `/${Product_id}/details`;
      }
    
    
  return (
    <div className='BrandProducts'>
          
          <h2>Product Collection</h2>
           <div className="card-cont">
{ Prod.map((Product)=>(
           <div className="cards" key={Product._id}>
                <h5>{Product.ProductName}</h5>
              <div className="card-img">
                <img src={`http://localhost:5001/${Product.ProductImage}`} alt="" />
              </div>
              <div className="info">
                <h5>{Product.BrandName}</h5>
                <h6>Category: {Product.ProductType}  ({Product.ProductQuantity})</h6>
                <h6 className="Price"> &#8377; {Product.ProductPrice}/-</h6>
              </div>
              <button onClick={()=>button_sbt(Product._id)}>View</button>
           </div>

))}
</div>

    </div>
  )
}
