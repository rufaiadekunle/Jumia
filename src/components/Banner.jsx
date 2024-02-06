import React from 'react'
import image1 from '../images/Double_banner___572_x_250-her.jpg'
import image2 from '../images/Double_banner___572_x_250-him.jpg'
import '../css/banner.css'

const Banner = () => {
  return (
    <div className='banner bg-light justify-content-center d-flex p-2 mt-3'>
        <div class="card  me-2">
            <img src={image1} class="card-img" alt="..."/>
        </div>

        <div class="card">
            <img src={image2} class="card-img" alt="..."/>
        </div>
    </div>
  )
}

export default Banner
