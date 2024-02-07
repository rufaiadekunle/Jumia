import React from 'react'
import datas from '../apiData/data' 
import '../css/limitedstock.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";  

const Limited = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };
      
  return (
    <div className='top-selling bg-light justify-content-center  mt-3 ' >
    <div className='headerfl ps-3 pt-2 pb-2 pe-3 mb-2 d-flex'>
        <h2 className='text-white'>Limited Stock</h2>
        <a href="#" className='link text-white'>See all{<MdOutlineKeyboardArrowRight/>}</a>
      </div>
    <div className='items mb-5'>
    <Slider {...settings}>
    {
      datas.map((data, idx)=>{
        return(
          <div index={idx}>
          <div class="card">
              <img src={data.imgUrl} class="card-img-top" alt="..."/>
              <div class="card-body">
                  <div class="name">{data.name}</div>
                  <div className='prc'>
                    <p class="newprc">{data.newP}</p>
                    <p class="oldprc">{data.oldp}</p>
                  </div>
              </div>
            </div>
        </div>
        )
      })
    }

    </Slider>
    </div>
  </div>
  )
}

export default Limited
