import React, { useState } from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { RiContactsLine } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'
const Navbar = () => {
  const location = useLocation();
  // console.log(location)
  const getColor = (currentpath) => {
    if (location.pathname === currentpath) {
      return "orange"
    }
  }

  return (
    <nav>
      <div className='left-nav'>
        <Link to='/home'> <img src="	https://healthstro.com/_next/static/media/main_logo_healthstro.491eee8b.svg" alt="" width="200px" height="60px" /></Link>
        <Link to="/shop" className='nav-links' style={{ color: getColor('/shop') }}>Shop</Link>
        <OurSolutionsDropDown />
        <Link to="/blog" className='nav-links' style={{ color: getColor('/blog') }}>Blog</Link>
        <Link to="/goals" className='nav-links' style={{ color: getColor('/goals') }}>Goals</Link>
        <Link to="/about" className='nav-links' style={{ color: getColor('/about') }}>About</Link>
        <Link to="/contact" className='nav-links' style={{ color: getColor('/contact') }}>Contact Us</Link>
      </div>

      <div className='right-nav'>
        <div>
          <button className='nav-btn1'>Take Assessment</button>
        </div>
        <div className='signup-btn login-btn'>
          <Link to="/login">
            <RiContactsLine className='r' />
            LogIn
          </Link>
          <div className='verticle-bar'></div>
          <Link to="/signup">SignUp</Link>
        </div>
        <div>
          <Link to="/shop/cart">
            <FiShoppingCart size={24} style={{ color: 'rgb(53, 113, 98)' }} />
          </Link>
        </div>
        {/* 
        <Link to='/signup'>
          <button className='nav-btn2'><RiContactsLine className='r' /> Log In</button>
          <button className='nav-btn2'><RiContactsLine className='r' />Sign Up </button>

      </Link> */}

        <div className='line-div'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
      <div className='dummy-navbar'></div>
    </nav >
  )

}
const OurSolutionsDropDown = () => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  return <div className='drop-down'>
    <div onClick={() => setIsShowDropDown(!isShowDropDown)}>
      <h4>Our Solutions</h4>
      <i className={`fa-solid ${isShowDropDown ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
    </div>
    {
      isShowDropDown && <ul>
        <li onClick={() => setIsShowDropDown(false)}><Link to="/user">For User</Link></li>
        <li onClick={() => setIsShowDropDown(false)} ><Link to="/provider">For Provider</Link></li>
      </ul>
    }
  </div>
}


export default Navbar