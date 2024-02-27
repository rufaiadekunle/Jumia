
import datas from '../apiData/data' 
import '../css/topselling.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSelling = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  };

  return (
    <div className='top-selling bg-light justify-content-center p-2 mt-3 ' >
      <div className='header ms-3 mt-2'>
        <h2>Top Selling Items</h2>
      </div>
      <div className='items mb-5'>
      <Slider {...settings}>
      {
        datas.map((data, idx)=>{
          return(
            <div key={idx}>
            <div className="card">
                <img src={data.imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="name">{data.name}</div>
                    <div className='prc'>
                      <p className="newprc">{data.newP}</p>
                      <p className="oldprc">{data.oldp}</p>
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

export default TopSelling

