import React from 'react'
import Images from './Images'
import Brands from './Brands'
import { Link } from 'react-router-dom'



export default function MainPage() {

  
  return (
    <div className='Mainpage'>
      
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0648/1955/files/toniquecleanser.jpg?v=1577689625" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/883019542/photo/keep-your-skin-healthy.jpg?s=612x612&w=0&k=20&c=IRpHXgfvBQwq_FhYb9JOjFF-wEN3VdlhTGap-7TM2JQ=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.skincare.com/-/media/project/loreal/brand-sites/sdc/americas/us/articles/2019/09_september/11-lavender-skin-care/lavender-infused-skin-care-hero-sdc-091019.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1002179634/photo/beautiful-girl-with-applied-clay-mask-at-white-background.jpg?s=612x612&w=0&k=20&c=xsCeMZWo9aOS4E-8pP3k2B_66923m9QN5WaXIdbn4T8=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-vector/luxury-cosmetic-ads-exquisite-container-with-purple-satin-bokeh-background_68094-170.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://st3.depositphotos.com/1079673/19104/i/600/depositphotos_191049644-stock-photo-skin-care-studio-shot-of.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



<Images/>
<img src="https://media1.giphy.com/media/x01mp5KKCyBM2YeNfm/200w.gif?cid=6c09b95279wojls0bs52jo1ljh0vcnivaeos3150ws1kceas&ep=v1_gifs_search&rid=200w.gif&ct=g" className="img-fluid ads-btw"  alt="..."/>


<p className="Btitle">OUR BRANDS</p>

<Brands/>

  <Link to="/brands">Many more...</Link>
  <img src="https://storage.googleapis.com/download/storage/v1/b/adoric-template/o/4962d90f-c659-467a-af72-84ebc6c8c6f0.gif?generation=1612359814125407&alt=media" className="img-fluid ads-btw" alt="..."/>
</div>
  )
}
