import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"


export default function BrandProducts() {

  const {id} = useParams();

  const [ProductsDis,SetProductsDis] = useState([]);
    
  useEffect(()=>{

    fetch(`https://pure-radiance-backend.onrender.com/${id}/brandProducts`,{
      method : 'GET',
      headers:{
        'Content-Type' : 'application/json',
      },
      credentials : 'include',
    }).then(res=>{
      res.json().then((data=>{
        SetProductsDis(data);
      }))
    })

  },[id])
  
  function button_sbt(Product_id){
    console.log(Product_id);
  window.location.href = `/${Product_id}/details`;
  }


 
  
  return (
    <div className="BrandProducts">
      
           <h2>Your Brand Products</h2>
           <div className="card-cont">
{ ProductsDis.map((Product)=>(
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
