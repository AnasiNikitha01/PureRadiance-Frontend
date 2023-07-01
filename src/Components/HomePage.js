import React from 'react'
import MainPage from '../Components/MainPage'
import Ads from '../Components/Ads'

export default function HomePage() {
  return (
    <div className='Homepage'>
      
      <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12"><MainPage/></div>
          <div className="col-xl-3 col-lg-2 col-md-0 col-sm-0 col-0" id='Ads'><Ads/></div>
        </div>

    </div>
  )
}
