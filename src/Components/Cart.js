import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import { UserContext } from '../UserContext';
import { useParams, Link } from 'react-router-dom';

export default function Cart() {
  const { id } = useParams();
  console.log(id);
  const [cart, setcart] = useContext(CartContext);
  const { userinfo } = useContext(UserContext);
  var [Sum, SetSum] = useState('');
  const [dis, setdis] = useState('none')

  const info = userinfo?.Email;
  const len = cart?.length;

  console.log(info, len);
  if (len) {
    console.log(cart)
  }

  function Remove(index) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setcart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }


  let prod = [];
  for (var i = 0; i < cart.length; i++) {
    prod[i] = cart[i].Count * cart[i].Products.ProductPrice;
  }
  var sum = 0;
  for (var j = 0; j < cart.length; j++) {
    sum = sum + prod[j];
  }
  useEffect(() => {
    SetSum(sum);
    setdis('block');

  }, [sum])
  console.log(sum)
  console.log(cart)

  function CheckOut() {
    window.location.href = `/${id}/SelectAddress`;
  }



  return (
    <div className='Cart'>
      <h2>Your Cart</h2>

      <div className="row">
        <div className="col" id='col-cart' >
          {info && len && (
            <>
              {cart.map((data, index) => (

                <div className="card mb-3" style={{ "maxWidth": "90%" }} key={data.Products._id} id='cart-card'>
                  <div className="row g-0">
                    <div className="col-md-5" id='cart-img'>
                      <img src={`http://localhost:5001/${data.Products.ProductImage}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body" id='cart-body'>
                        <h2 className="card-title">{data.Products.BrandName}</h2>
                        <h5 className="card-text" id='Cart-Name'>{data.Products.ProductName}</h5>
                        <h5 className="card-text">Price: <span className='cart-price'> &#8377;{data.Products.ProductPrice}/-</span></h5>
                        <h5 className="card-text">Quantity: <span className='cart-price'>{data.Count}</span></h5>

                        <div className="cart-align">
                          <div>
                            <p className='total'>Total : <span className='cart-price'>{data.Count * (data.Products.ProductPrice)}/-</span></p>
                          </div>
                          <div>
                            <button className='Remove-btn' onClick={() => Remove(index)}>Remove</button>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <span className='gettotal'>
                <button className='button-61' id='CheckOutId' onClick={CheckOut}>Check Out</button>
                <span style={{ 'display': dis }} className='Sum'>Total : <span className='state'> &#8377;{Sum}/-</span></span>
              </span>
            </>
          )}
          {info && !len && (
            <>
              <div className="center"><p><i className="bi bi-cart-dash-fill"></i></p>
                <h2 className='h2'>No Items Found in Cart</h2>
              </div>
            </>
          )}
          {!info && len && (
            <>

              {cart.map((data, index) => (

                <div className="card mb-3" style={{ "maxWidth": "90%" }} key={data.Products._id} id='cart-card'>
                  <div className="row g-0">
                    <div className="col-md-5" id='cart-img'>
                      <img src={`http://localhost:5001/${data.Products.ProductImage}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body" id='cart-body'>
                        <h2 className="card-title">{data.Products.BrandName}</h2>
                        <h5 className="card-text" id='Cart-Name'>{data.Products.ProductName}</h5>
                        <h5 className="card-text">Price: <span className='cart-price'>{data.Products.ProductPrice}/-</span></h5>
                        <h5 className="card-text">Quantity: <span className='cart-price'>{data.Count}</span></h5>

                        <div className="cart-align">
                          <div>

                        <p className='total'>Total : <span className='cart-price'>{data.Count * (data.Products.ProductPrice)}/-</span></p>
                        </div>
                        <div>
                        <button className='Remove-btn' onClick={() => Remove(index)}>Remove</button>
                        </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="center">
                <h2 className='h2'><Link to={`/Login`}>Login</Link> to Continue Shopping</h2>
              </div>

            </>
          )}
          {!info && !len && (
            <>
              <div className="center"><p><i className="bi bi-cart-dash-fill"></i></p>
                <h2 className='h2'>No Items Found, <Link to={`/Login`}>Login</Link> to Shop now</h2>
              </div>
            </>
          )}
        </div>


      </div>

    </div>
  )
}
