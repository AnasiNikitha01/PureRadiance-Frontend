import './App.css';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage';
import Instructions from './Components/Instructions';
import Brands from './Components/Brands';
import TrailProducts from './Components/TrailProducts';
import Searchbar from './Components/Searchbar';
import BrandForm from './Components/BrandForm';
import Register from './Components/Register';
import BrandProducts from './Components/BrandProducts';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import DetailePage from './Components/DetailePage';
import AllBrandProducts from './Components/AllBrandProducts';
import Products from './Components/Products';
import SkinProblem from './Components/SkinProblem';
import AddressFill from './Components/AddressFill';
import AllAddress from './Components/AllAddress';
import Confirmation from './Components/Confirmation';
import EditPage from './Components/EditPage';
import ProfileEdit from './Components/ProfileEdit';
import AllOrders from './Components/AllOrders';
import OrderDetail from './Components/OrderDetail';
import Nav2 from './Components/Nav2';
import Nav3 from './Components/Nav3';



function App() {

  const { userinfo } = useContext(UserContext);

  const [Prods, SetProds] = useState([]);

  const id = userinfo?.id;
  const email = userinfo?.Email;
   const position = userinfo?.Position;
  console.log(id, email,position);  

  useEffect(() => {
    fetch('https://pure-radiance-backend.onrender.com/allProducts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(res => {
      res.json().then(data => {
        SetProds(data);
      })
    })
  }, [])

  console.log(Prods);


  function submit(postId){
    window.location.href = `/${postId}/details`;
  }



  return (
    <div className="App">
      <Navbar />
      {!position && (
        <>
      <Nav3/>
      <Nav2/>
        </>
      )}
      {(position === 'Shopping') && (
        <>
      <Nav3/>
      <Nav2/>
        </>
      )}
      <Routes>
        {email && (
          <>
            < Route path={`/${id}`} element={<HomePage />} />
            <Route path="/:id/cart" element={<Cart />} />
          </>
        )}
        {!email && (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<HomePage />} />
          </>
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/:id/profile" element={<ProfilePage />} />
        <Route path="/steps" element={<Instructions />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/trailProducts" element={<TrailProducts />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/:id/brandform" element={<BrandForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id/brandProducts" element={<BrandProducts />} />
        <Route path='/:postId/details' element={<DetailePage />} />
        <Route path='/:id/:name' element={<AllBrandProducts />} />
        <Route path='/products/get/:product' element={<Products />} />
        <Route path='/search/:problem/SkinProblem' element={<SkinProblem />} />
        <Route path='/:id/AddressForm' element={<AddressFill />} />
        <Route path='/:id/SelectAddress' element={<AllAddress />} />
        <Route path='/:id/:index/Confirmation' element={<Confirmation />} />
        <Route path='/:postId/edit' element={<EditPage />} />
        <Route path='/:id/ProfileEdit' element={<ProfileEdit />} />
        <Route path='/get/orders' element={<AllOrders />} />
        <Route path='/:id/:index/OrderDetails' element={<OrderDetail />} />
      </Routes>

{position === 'Shopping' && (
      <div className="row" id='display'>
        <h3>Most Popular Products</h3>
        {Prods.map((data, index) => (
          <div className="card" style={{ "width": "18rem" }} key={index}>
            <img src={`https://pure-radiance-backend.onrender.com/${data.ProductImage}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data.ProductName}</h5>
              <p className="card-text" id='price-card'> &#8377; {data.ProductPrice}/-</p>
            </div>
              <button className="button-61" onClick={()=>submit(data._id)}>View</button>
          </div>
        ))}
      </div>
       )}
{!position && (
      <div className="row" id='display'>
        <h3>Most Popular Products</h3>
        {Prods.map((data, index) => (
          <div className="card" style={{ "width": "18rem" }} key={index}>
            <img src={`https://pure-radiance-backend.onrender.com/${data.ProductImage}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{data.ProductName}</h5>
              <p className="card-text" id='price-card'> &#8377; {data.ProductPrice}/-</p>
            </div>
              <button className="button-61" onClick={()=>submit(data._id)}>View</button>
          </div>
        ))}
      </div>
       )}

      <Footer />
    </div>
  )
}

export default App;
