import image1 from '../images/Jumia-Logo (1)k.png'
import { IoPersonOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='sticky-top'>
          <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                  <Link to="/categories" className="navbar-brand" href="#">
                    <img src={image1} alt="jumia-logo" width="130" height="24"/>
                    </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <form className="d-flex ms-5" role="search" >
                              <input className="form-control me-2" style={{ width: '570px' }} type="search" placeholder="Search products,brands and categories" aria-label="Search" />
                              <button className="btn-warning" type="submit">Search</button>
                          </form>
                      <span>
                          <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
                              <li className="nav-item dropdown">
                                  <Link to="/" className="nav-link dropdown-toggle" href="#" role="menu" data-bs-toggle="dropdown" aria-expanded="false">
                                      <IoPersonOutline style={{width:'24', height:'24'}} /> Account
                                  </Link>
                                  <ul className="dropdown-menu" id='drop1'>
                                      <button className="btn-warning text-light btn-outline-warning text-center " id='live-chat' type="submit" >SIGN IN</button>
                                      <li><hr className="dropdown-divider" /></li>
                                      <li><Link to="/" className="dropdown-item" href="#"><IoPersonOutline style={{ width: '24', height: '24' }} /> &nbsp; My Account</Link></li>
                                      <li><Link to="/" className="dropdown-item mt-2" href="#"><HiOutlineInboxStack style={{ width: '24', height: '24' }} /> &nbsp; Orders</Link></li>
                                      <li><Link to="/" className="dropdown-item mt-2" href="#"><FaRegHeart style={{ width: '24', height: '24' }} /> &nbsp; Saved Items</Link></li>
                                  </ul>
                              </li>
                              &nbsp;&nbsp;
                              <li className="nav-item dropdown">
                                  <Link to="/" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <FiHelpCircle style={{ width: '24', height: '24' }} />  Help
                                  </Link>
                                  <ul className="dropdown-menu">
                                      <li><Link to="/" className="dropdown-item " href="#">Help center</Link></li>
                                      <li><Link to="/" className="dropdown-item" href="#">Place an order</Link></li>
                                      <li><Link to="/" className="dropdown-item" href="#">Payment option</Link></li>
                                      <li><Link to="/" className="dropdown-item" href="#">Track an other</Link></li>
                                      <li><Link to="/" className="dropdown-item" href="#">Cancel an order</Link></li>
                                      <li><Link to="/" className="dropdown-item" href="#">Return & Refunds</Link></li>
                                      &nbsp;
                                      <li><hr className="dropdown-divider" /></li>
                                    <button className="btn-warning text-light btn-outline-warning text-center" id='live-chat' type="submit" ><BsChatLeftDots className='icon' style={{ width: '24', height: '24' }} />LIVE CHAT </button>
                                  </ul>
                              </li>
                              &nbsp;&nbsp;
                              <li className="nav-item">
                                  <Link to="/" className="nav-link" href="#"><GrCart style={{ width: '24', height: '24' }} />   Cart</Link>
                              </li>
                          </ul> 
                      </span>
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar
