import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SkinProblem() {

    const [Data,SetData] = useState([]);
  
     const {problem} = useParams();
     console.log(problem);
   
     useEffect(()=>{
        fetch(`https://pure-radiance-backend.onrender.com/search/${problem}/SkinProblem`,{
            method : 'GET',
            headers:{
                'Content-Type' : 'application/json',
            },
            credentials : 'include',
        }).then(res=>{
            res.json().then(data=>{
               SetData(data);
            })
        })
     },[problem]);

     const myarr = [];
     for(var i=0;i<Data.length;i++){   ///do this in server only and get the values
        const parse = JSON.parse(Data[i].BrandObj);
        const val = Object.values(parse);
        for(var j=0;j<val.length;j++){
        if(val[j] === problem){
             myarr[i] = Data[i];  
        }
    }
     }

     console.log(myarr);

     function button_sbt(Product_id){
        console.log(Product_id);
      window.location.href = `/${Product_id}/details`;
      }


  return (
    <div className='SkinProblem'>
      
      <h2>Skin Problem Related Collection</h2>
           <div className="card-cont">
{ myarr.map((Product)=>(
           <div className="cards" key={Product._id}>
                <h5>{Product.ProductName}</h5>
              <div className="card-img">
                <img src={`https://pure-radiance-backend.onrender.com/${Product.ProductImage}`} alt="" />
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
