import React from 'react'
import datas from '../apiData/datatwo' 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";  
import '../css/withlove.css'

const Withloveone = () => {
  return (
    <div className='withlove bg-light justify-content-center  mt-3 ' >
    <div className='headerfl ps-3 pt-2 pb-2 pe-3 mb-2 text-center'>
        <h2 className='text-white'>With Love From Jumia</h2>
      </div>
    <div className='items  d-flex ps-1 pe-1'>
    {
      datas.map((data, idx)=>{
        return(
          <div index={idx}>
          <div class="card">
              <img src={data.imgUrl} class="card-img-top" alt="..."/>
            </div>
        </div>
        )
      })
    }
    </div>
  </div>
  )
}

export default Withloveone
