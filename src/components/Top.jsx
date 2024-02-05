import React from 'react'
import logo1 from '../images/JumiaCirclePNG.png'
import logo2 from '../images/Jumia-Logo-PNG5.png'
import '../css/top.css'
import { FaShieldAlt } from "react-icons/fa"
import { IoLogoCodepen } from "react-icons/io"

const Top = () => {
  return (
    <div className='row  ms-5 me-5'>
      <div className='col-sm-4 bg-dark logod'>
        <a href="#"><img src={logo1} className='imageOne' alt="" /> Sell on Jumia</a>
      </div>

      <div className='d-flex col-sm-4 bg-light logolinks'>
        <img src={logo2} className='imageTwo' alt="" />
        <a href="#"  className='ms-2'><FaShieldAlt/> PAY</a>
        <a href="#" className='ms-2'><IoLogoCodepen/> LOGISTICS</a>
      </div>

      <div className='col-sm-4 bg-danger  text-white word'>
        <p>Lorem, ipsum.</p>
      </div>
    </div>
  )
}

export default Top
