import React, { useState, useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav2() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDisplayed(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function display() {
    setIsDisplayed(true);
  }

  const styles = {
    display: isDisplayed ? 'block' : 'none',
  };

  return (
    <div className='Nav2' ref={wrapperRef}>
      <button className='Prods-btn' onClick={display}> </button>
      {isDisplayed && (
        
        <div className="dis-wrap" style={styles}>
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
          
            )}
    </div>
  )
}
