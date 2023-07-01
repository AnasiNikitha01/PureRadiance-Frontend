import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

export default function OrderDetail() {
  const [orderInfo, SetorderInfo] = useState([]);
  const { id, index } = useParams();
  console.log(id, index);

  useEffect(() => {
    fetch(`http://localhost:5001/${id}/${index}/OrderDetails`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include'
    })
      .then(res => {
        res.json().then(data => {
          SetorderInfo(data);
        })
      })
  }, [id, index]);

  console.log(orderInfo);

  function view(i) {
    window.location.href = `/${i}/details`;
  }
  async function remove(i) {
    const result = await fetch(`http://localhost:5001/${i}/cancelOrder`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (result.ok) {
      alert('Order Canceled Successfully');
      window.location.href = `/get/orders`;
    }
  }


  return (
    <div className='OrderDetail'>
      <h2>Order Details</h2>
      {orderInfo.map((data, index) => (
        <div className="wrap-row" key={index}>
          {data.products.map((info, i) => (
            <div className="row" id='det-row' key={i}>
              <div className="col-4" id='det-col1'><img className='productImg'
                src={`http://localhost:5001/${info.Products.ProductImage}`} alt="" /></div>
              <div className="col-4" id='det-col2'>
                <p className="name">{info.Products.ProductName}</p>
                <p className="price">Price : &#8377; {info.Products.ProductPrice}/- </p>
                <p className="qty">Qty : {info.Count}</p>
              </div>
              <div className="col-4" id='det-col3'>
                <Link className='button-61 view' onClick={() => view(info.Products._id)}>view</Link>

              </div>
            </div>
          ))}
          <div className="total">Grand Total:  &#8377; {orderInfo[0].sum}/-</div>
          <div className="cancel-btn">
            <Link className='button-61 rmv-btn' onClick={() => remove(data._id)}>Cancel Order</Link>
          </div>
        </div>
      ))}



          <h4 className='orderTrack'>Order Tracker:</h4>
        <div className="progress">
          <div className="progress-bar p1" role="progressbar" aria-label="Segment one" style={{"width": "25%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Ordered</div><i className="bi bi-bookmark-check"></i>

          <div className="progress-bar p2" role="progressbar" aria-label="Segment two" style={{"width": "25%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">Order Packed</div><i className="bi bi-box-seam-fill"></i>

          <div className="progress-bar p3" role="progressbar" aria-label="Segment two" style={{"width": "25%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">Shipping</div><i className="bi bi-truck"></i>

          <div className="progress-bar p4" role="progressbar" aria-label="Segment three" style={{"width": "25%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">Delivered</div><i className="bi bi-check-circle-fill"></i>
        </div>

    

         {/* <div className="delivery">
          <h4>Delivery Details</h4>
         </div> */}


    </div>
  )
}
