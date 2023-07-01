import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav3() {
  return (
    <div className='Nav2 disp1'>
        <ul className="nav1">
              <li>
                <Link to={`/products/get/Moisturizers`}>Moisturizers</Link>
              </li>
              <li>
                <Link to={`/products/get/Cleansers`}>Cleansers</Link>
              </li>
              <li>
                <Link to={`/products/get/Toners`}>Toners</Link>
              </li>
              <li>
                <Link to={`/products/get/Sunscreens`}>SunScreens</Link>
              </li>
              <li>
                <Link to={`/products/get/Serum`}>Serum</Link>
              </li>
              <li>
                <Link to={`/products/get/Eye Creams`}>Eye Creams</Link>
              </li>
              <li>
                <Link to={`/products/get/Face Masks`}>Face Mask</Link>
              </li>
              <li>
                <Link to={`/products/get/Lip Balm`}>Lip Balm</Link>
              </li>
              <li>
                <Link to={`/products/get/Exfoliators`}>Exfoliators</Link>
              </li>
              <li>
                <Link to={'/trailProducts'}>Trail Products</Link>
              </li>
        </ul>
          
    </div>
  )
}
