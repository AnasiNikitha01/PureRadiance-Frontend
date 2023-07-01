import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { product } = useParams();
  console.log(product);
  

  useEffect(() => {
    fetch(`http://localhost:5001/products/get/${product}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [product]);

  function button_sbt(productId) {
    console.log(productId);
    window.location.href = `/${productId}/details`;
  }

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Products'>
      <h2>Product Collection</h2>
      <div className='card-cont'>
        {products.length === 0 ? (
          <h3 style={{ margin: '150px auto' }}>No Products Yet</h3>
        ) : (
          products.map((product) => (
            <div className='cards' key={product._id}>
              <h5>{product.ProductName}</h5>
              <div className='card-img'>
                <img src={`http://localhost:5001/${product.ProductImage}`} alt='' />
              </div>
              <div className='info'>
                <h5>{product.BrandName}</h5>
                <h6>
                  Category: {product.ProductType} ({product.ProductQuantity})
                </h6>
                <h6 className='Price'> &#8377; {product.ProductPrice}/-</h6>
              </div>
              <button onClick={() => button_sbt(product._id)}>View</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
