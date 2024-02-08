import image1 from '../images/Jumia-Logo (1)k.png'
import { IoPersonOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a className="navbar-brand ms-5" href="#">
                    <img src={image1} alt="jumia-logo" width="130" height="24"/>
                    </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <form className="d-flex ms-5" role="search" >
                              <input className="form-control me-2" style={{ width: '500px' }} type="search" placeholder="Search products,brands and categories" aria-label="Search" />
                              <button className="btn-warning" type="submit">Search</button>
                          </form>
                      <span>
                          <ul className="navbar-nav ms-2 mb-2 mb-lg-0">
                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="menu" data-bs-toggle="dropdown" aria-expanded="false">
                                      <IoPersonOutline style={{width:'24', height:'24'}} /> Account
                                  </a>
                                  <ul className="dropdown-menu" >
                                      <button className="btn btn-warning text-light btn-outline-warning mx-3 text-center " style={{width:'150px'}} type="submit" >SIGN IN</button>
                                      <li><hr className="dropdown-divider" /></li>
                                      <li><a className="dropdown-item" href="#"><IoPersonOutline style={{ width: '24', height: '24' }} /> &nbsp; My Account</a></li>
                                      <li><a className="dropdown-item" href="#"><HiOutlineInboxStack style={{ width: '24', height: '24' }} /> &nbsp; Orders</a></li>
                                      <li><a className="dropdown-item" href="#"><FaRegHeart style={{ width: '24', height: '24' }} /> &nbsp; Saved Items</a></li>
                                  </ul>
                              </li>
                              &nbsp;&nbsp;
                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <FiHelpCircle style={{ width: '24', height: '24' }} />  Help
                                  </a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="#">Action</a></li>
                                      <li><a className="dropdown-item" href="#">Another action</a></li>
                                      <li><hr className="dropdown-divider" /></li>
                                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                              </li>
                              &nbsp;&nbsp;
                              <li className="nav-item">
                                  <a className="nav-link" href="#"><GrCart style={{ width: '24', height: '24' }} />   Cart</a>
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
