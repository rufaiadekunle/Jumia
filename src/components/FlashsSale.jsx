import React, { useState, useRef, useEffect} from 'react'
import datas from '../apiData/data' 
import '../css/flashsale.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcFlashOn } from "react-icons/fc";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";  

const FlashsSale = ({}) => {
    const [countdown, setCountdown] = useState()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };

  return (
    <div className='flashsale bg-light justify-content-center  mt-3 ' >
      <div className='headerfl ps-3 pt-2 pb-2 d-flex'>
        <h2 className='text-white'>{<FcFlashOn/>} Flash Sale</h2>
        <h2></h2>
        <a href="#" className='link text-white'>See all{<MdOutlineKeyboardArrowRight/>}</a>
      </div>
      <div className='items pt-2 ps-2 pe-2'>
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
                    <div className='itemsleft'>
                      <p>{data.itemsleft} items left</p>
                      <div className='progressbar'>
                        <ProgressBar variant="warning" style={{height: 7}} now={data.itemsleft} />
                      </div>
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

export default FlashsSale
