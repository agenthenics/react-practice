import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './AboutUs';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Company logo</a>    
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
          <li className="nav-item">            
            <Link className="nav-link" to="/AboutUs"  >About Us</Link>
          </li>
          <li className="nav-item">
          <Link  className="nav-link" to="/ContactUs">Contact Us</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
      <Link to="/Login"><button  className="customLogin">Login</button></Link>
    </div>
  </nav>
  )
}

export default Navbar