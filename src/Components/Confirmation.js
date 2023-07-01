import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { AddressContext } from '../AddressContext';
import { Link, useParams } from 'react-router-dom';

export default function Confirmation() {
    const [cart] = useContext(CartContext);
    const [Address] = useContext(AddressContext);
    const { id, index } = useParams();
    console.log(id, index,cart);

    let prod = [];
    for (var i = 0; i < cart.length; i++) {
        prod[i] = cart[i].Count * cart[i].Products.ProductPrice;
    }

    var sum = 0;
    for (var j = 0; j < cart.length; j++) {
        sum = sum + prod[j];
    }

    var name = Address[index]?.name;
    var street = Address[index]?.street;
    var city = Address[index]?.city;
    var state = Address[index]?.state;
    var postalCode = Address[index]?.postalCode;
    var Landmark = Address[index]?.Landmark;
    var phone = Address[index]?.Phone


    function Payment() {
          fetch(`https://pure-radiance-backend.onrender.com/orders`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            credentials : 'include',
            body:JSON.stringify({
                cart,
                Address:Address[index],
                payment:'Cash on Delivery',
                Clients: id,
                sum
            })
          });
          localStorage.removeItem('cart');
          alert('Order Confirmed');
          window.location.href = `/${id}`;
    }


    return (
        <div className='Confirmation'>
            <h2>Detail Summary</h2>
            {cart.map((data, index) => (
                <Link className="Cart-items" to={`/${data.Products._id}/details`} key={data.Products._id}>
                    <div className="c-img">
                        <img src={`https://pure-radiance-backend.onrender.com/${data.Products.ProductImage}`} alt="" />
                    </div>
                    <div className="c-info">
                        <div className="c-title">{data.Products.ProductName}</div>
                        <div className="c-price">Price : &#8377;{data.Products.ProductPrice * data.Count}/-</div>
                    </div>
                </Link>
            ))}
            <p className='c-total'>Grand Total : &#8377; {sum}/-</p>


            <div className="Address-del">
                <div className="tag">Delivery Address:</div>
                <div>To: {name}</div>
                <div>{street}, {city}, {state}, {postalCode}</div>
                <div>Contact to: {phone}</div>
                <div>near, {Landmark}</div>
            </div>

            <p className='c-payment'>Payment Process</p>



            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Continue Payment
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckChecked" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                Cash on Delivery
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                <button className='button-61 payment' onClick={Payment}>Confirm Order</button>

        </div>
    )
}
