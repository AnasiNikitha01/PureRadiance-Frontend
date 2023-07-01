import React from 'react'

export default function Footer() {
  return (
    <div className='Footer'>
        <footer>
  <div className="footer-container">
    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@example.com</p>
      <p>Address: 123 Skincare Street, City, Country</p>
    </div>
    <div className="footer-section">
      <h4>About Us</h4>
      <p>The skin care product purchasing website where a Person can host their brand as we as can purchase their prefered product from the stores present. The newly started business brands can start your business and sell their products here.</p>
    </div>
    <div className="footer-section">
      <h4>Privacy Policy</h4>
      <p><a href="/privacy-policy">Read our privacy policy</a></p>
    </div>
    <div className="footer-section">
      <h4>Terms of Service</h4>
      <p><a href="/terms-of-service">View our terms of service</a></p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2023 Skincare Brand. All rights reserved.</p>
    <div className="social-media-icons">
      <a href="/"><i className="bi bi-instagram"></i></a>
      <a href="/"><i className="bi bi-facebook"></i></a>
      <a href="/"><i className="bi bi-twitter"></i></a>
    </div>
  </div>
</footer>

    </div>
  )
}
