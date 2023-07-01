import React, { useEffect, useState} from 'react'

export default function TrailProducts() {


    const [Trail,SetTrail] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:5001/TrailProducts',{
      credentials:'include'
    }).then(res=>{
      res.json().then(data=>{
            //   const myarr = [];
            //   for(var i=0;i<data.length;i++){
            //  if(data[i].Trail === "yes"){
            //   console.log(data[i]);
            //   myarr[i] = data[i];
            //  }
            //  }
             SetTrail(data);
            })
          })
        },[])
       
  console.log(Trail);

  function button_sbt(Product_id){
    console.log(Product_id);
  window.location.href = `/${Product_id}/details`;
  }

  return (
    <div className='Trail'>
               <h2>Trail Collection</h2>
           <div className="card-cont">
{ Trail.map((Product)=>(
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
