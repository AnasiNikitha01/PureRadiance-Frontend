import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { CartContext } from '../CartContext';

export default function DetailePage() {
  const [Products, SetProducts] = useState({});
  const [Parse, SetParse] = useState({});
  var [cart, setcart] = useContext(CartContext);
  const { postId } = useParams();
  const { userinfo } = useContext(UserContext);
  let [Count, SetCount] = useState(0);
  console.log(postId)

  useEffect(() => {
    fetch(`http://localhost:5001/${postId}/details`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(res => {
      res.json().then(data => {
        const parse = JSON.parse(data.BrandObj);
        console.log(parse);
        SetProducts(data);
        SetParse(parse);
        console.log(data);
      })
    })
  }, [postId]);

  if (Object.keys(Products).length === 0) {
    return <div>Loading...</div>;
  }
  // const type = typeof (Parse)
  // console.log(type);
  const vals = Object.values(Parse);
  // console.log(vals);

    const pos = userinfo?.Position;

    
    
    function decrease() {
        if (Count === 0) {
          SetCount(0);
        } else {
          Count--;
          SetCount(Count);
        }
    }
    
    function increase() {
        Count++;
        SetCount(Count);
    }

  function submit1() {
  const myobj = {
    Products: Products,
    Count: Count
  };
  setcart(cart => [...cart, myobj]);
  localStorage.setItem('cart', JSON.stringify([...cart, myobj]));
  
  // Redirect to the cart page
  window.location.href = `/cart`;
}
  function submit() {
  const myobj = {
    Products: Products,
    Count: Count
  };
  setcart(cart => [...cart, myobj]);
  localStorage.setItem('cart', JSON.stringify([...cart, myobj]));
  
  // Redirect to the cart page
  window.location.href = `/${userinfo.id}/cart`;
}
  const email = userinfo?.Email;


 async function delete_post(postId){
     let deletepost = await fetch(`http://localhost:5001/${postId}/Delete`,{
        method : 'DELETE',
        credentials : 'include',
       })

       if(deletepost.ok){
        alert("Product Removed Successfully");
        window.location.href = '/brands';
       }
  }

  function edit(){
    window.location.href = `/${postId}/edit`;
  }

  return (
    <div className='DetailPage'>
      <h1> {Products.ProductName}</h1>
      <div className="container">
        <div className="row" id='detail_row1'>
          <div className="col-lg-4 col-md-6" id='detail_image'>

            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={`http://localhost:5001/${Products.ProductImage}`} alt="" />

            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={`http://localhost:5001/${Products.ProductImage}`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6" id='detail_info'>
            <h2>{Products.BrandName}</h2>
            <p><b>Product Name:</b> {Products.ProductName}</p>
            <p><b>Category:</b> {Products.ProductType}</p>
            <p><b>Quantity:</b> {Products.ProductQuantity}</p>
            <p> <b>Price:</b> <span className='price'> &#8377; {Products.ProductPrice}/-</span></p>
            <p><b>Suitable for:</b> {Products.SkinType} Skin type, <b> Age Group:</b> for {Products.Age} Groups</p>

            <p><b>Works on: </b>{ vals }</p>
            <div className="buttons">
           {pos === 'Shopping'  &&(
            <>
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button"   className="btn btn-outline-primary small-btn" onClick={decrease}> - </button>
                            <button type="button" className="btn btn-outline-primary">{Count}</button>
                            <button type="button" className="btn btn-outline-primary small-btn" onClick={increase}> + </button>

                          </div>
              <button className='button-61' onClick={()=>submit()}>Add to Cart</button>
            </>
           )}
           {!email  &&(
            <>
             <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button"   className="btn btn-outline-primary small-btn" onClick={decrease}> - </button>
                            <button type="button" className="btn btn-outline-primary">{Count}</button>
                            <button type="button" className="btn btn-outline-primary small-btn" onClick={increase}> + </button>

                          </div>
              <button className='button-61' onClick={()=>submit1()}>Add to Cart</button>
            </>
           )}
           </div>
           {pos === 'Branding' && (userinfo.id === Products.id) &&(
            <div className='disp-btn'>
           <button className='button-61'onClick={edit}>Edit</button> <button className='remove' onClick={()=>delete_post(postId)}>Delete</button>
            </div>
           )}

          </div>
        </div>

        <div className="row" id='description'>
          <h4>Description:</h4>
          <p>  {Products.Description}</p>
        </div>
      </div>
     
    </div>
  )
}
