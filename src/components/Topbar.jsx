import image1 from '../images/star.png'
import image2 from '../images/Jumia-Logo (1)k.png'
// import image3 from '../images/jumia pay logo.svg'
import '../css/Topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
        <a className='star1' href="" >
            <img src={image1} className='img' alt="" width="16" height="16" />
            Sell on Jumia
        </a>
          <img src={image2} className='img2' alt=""/>
    </div>
  )
}

export default Topbar
