import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { CartContext } from '../CartContext';

export default function Navbar() {
   

  const { setUserInfo,userinfo } = useContext(UserContext);
  // // const {info} = useContext(MyContext);
   const [cart] = useContext(CartContext);
   console.log(cart)

  useEffect(() => {

    fetch('https://pure-radiance-backend.onrender.com/profiles', {
      method : 'GET',
      headers:{
        'Content-Type' : 'application/json',
      },
      credentials: 'include',
    }).then((response) =>
      response.json()).then((data) => {
        // const obj = JSON.parse(data)
        setUserInfo(data);
      }).catch((error) => {
        console.log(error);
      })

  }, [setUserInfo]);

  console.log(userinfo)

  var Email = userinfo?.Email;
  var position = userinfo?.Position;
  var id = userinfo?.id;
  console.log(id,Email,position);

  function logout() {
    fetch('https://pure-radiance-backend.onrender.com/logout', {
      method: 'GET',
      credentials: 'include',
    }).then(response => {
      if (response.ok) {
        window.location.href = '/';
      }
    })
    setUserInfo('');
  }

 
  


            
  function submit(product){
    
        console.log(product)
        window.location.href = `/products/get/${product}`
  }





  return (
    <div className='Navbar'>

      <nav className="navbar">
        <div className="container-fluid">
          {Email && (
          <Link className="navbar-brand" to={`/${id}`}>Pure Radiance</Link>
          )}
          {!Email && (
          <Link className="navbar-brand" to={`/`}>Pure Radiance</Link>
          )}
        

          <span className='nav2'>
            <ul className="nav justify-content-end">
              {!Email && (
                <>


                  <li className="nav-item">
                    <Link className="nav-link active profile" aria-current="page" to="/login"><p><i className="bi bi-box-arrow-in-right"></i></p><p>Login</p></Link>
                  </li>
                  <li className="nav-item profile">
                    <Link className="nav-link" to={`/cart`}><p><i className="bi bi-cart-check-fill"></i></p><p>Cart</p><span className='cartnumber'>{cart?.length}</span></Link>
                  </li>
                
                </>
              )}


              {Email  &&  (position === 'Shopping') && (
                <>
                
                  <li className="nav-item">
                    <Link className="nav-link active profile" aria-current="page" to={`/${id}/profile`}><p><i className="bi bi-person-circle"></i></p><p>Profile</p></Link>
                  </li>

                  <li className="nav-item profile">
                    <Link className="nav-link" to={`/${id}/cart`}><p><i className="bi bi-cart-check-fill"></i></p><p>Cart</p><span className='cartnumber'>{cart?.length}</span></Link>
                  </li>
                </>

              )}

               {Email  && (position === 'Branding') && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active profile" aria-current="page" to={`/${id}/profile`}><p><i className="bi bi-person-circle"></i></p><p>Profile</p></Link>
                  </li>

              <li className="nav-item profile">
                <Link className="nav-link" to={`/${id}/brandform`}><p><i className="bi bi-plus-circle-dotted"></i></p><p>New Product</p></Link>
              </li>
                </>

              )} 
            </ul>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                  {Email && (position === 'Shopping') &&(
                    <>
                     <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${id}`}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/steps">Skin Care Steps</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/brands">Brands</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </Link>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" onClick={()=>submit("Cleansers")}>Cleansers</button></li>
                      <li><button className="dropdown-item"  onClick={()=>submit("Toners")}>Toners</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Moisturizers")}>Moisturizers</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Sunscreens")}>Sunscreens</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Serum")}>Serum</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Eye Creams")}>Eye Creams</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Face Masks")}>Face Masks</button></li>
                      <li><button className="dropdown-item"  onClick={()=>submit("Lip Balm")}>Lip Balm</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Exfoliators")}>Exfoliators</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Others")}>Others</button></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/trailProducts`}>Trail Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/search">Products for Skin Problem</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/get/orders`}>Your Orders</Link>
                  </li>
                    </>
                  )}
                  {Email && (position === 'Branding') &&(
                    <>
                      <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${id}`}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/steps">Skin Care Steps</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" to={`/${id}/brandform`}>New Product</Link>
              </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={`/${id}/brandProducts`}>Products Displayed</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/brands">Brands</Link>
                  </li>
                    </>
                  )}

                  {!Email && (
                    <>
                     <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/steps">Skin Care Steps</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/brands">Brands</Link>
                  </li>
                      <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </Link>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" onClick={()=>submit("Cleansers")}>Cleansers</button></li>
                      <li><button className="dropdown-item"  onClick={()=>submit("Toners")}>Toners</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Moisturizers")}>Moisturizers</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Sunscreens")}>Sunscreens</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Serum")}>Serum</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Eye Creams")}>Eye Creams</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Face Masks")}>Face Masks</button></li>
                      <li><button className="dropdown-item"  onClick={()=>submit("Lip Balm")}>Lip Balm</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Exfoliators")}>Exfoliators</button></li>
                      <li><button className="dropdown-item" onClick={()=>submit("Others")}>Others</button></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to={`/trailProducts`}>Trail Products</Link>
                  </li>
                 
                  <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                  <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                      </li>
                    </>
                  )}

                  {Email && (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" onClick={logout}>Logout</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

          </span>
        </div>
      </nav>


    </div>
  )
}
