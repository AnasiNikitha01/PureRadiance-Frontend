import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';

export default function AllOrders() {
  const { userinfo } = useContext(UserContext);
  const [orderInfo, SetorderInfo] = useState([]);

  var id = userinfo?.id;
  console.log(id);

  useEffect(() => {
    fetch(`https://pure-radiance-backend.onrender.com/Orders/get/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include'
    }).then(res => {
      res.json().then(data => {
        SetorderInfo(data);
      })
    })
  }, [id,SetorderInfo])

  console.log(orderInfo);

      function navigate(index){
         window.location.href = `/${id}/${index}/OrderDetails`;
      }

  return (
    <div className='AllOrders'>
      <h2>Your Order History</h2>
      <div>
      {orderInfo.map((data,index)=>(
     
            <div className="body-ord" key={data._id}>
                <h6>Order id: ({data._id})</h6>

           {data.products.map((info,index)=>(
               <div key={index}>
                <p><u>Item {index+1}</u>:  {info.Products.ProductName} x {info.Count}</p>
                </div>
           ))}

                <p><b>Total Price:</b> &#8377; {data.sum}/-</p>

              <button className='button-61 orders' onClick={()=>navigate(data._id)}>View Details</button>
            </div>
     
      ))}
      </div>

    </div>
  )
}
