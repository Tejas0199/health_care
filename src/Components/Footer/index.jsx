import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { AiOutlineLinkedin, AiFillFacebook } from 'react-icons/ai';
import {RxTwitterLogo} from 'react-icons/rx';

const Footer = () => { 
  return (
    <div className='footer'>

      <div className="heading-links">

        <div className="heading-copyright">
          <Link><img src="https://healthstro.com/_next/static/media/logo_whiteText.e4547dca.svg" alt="" width='200px' height='60px' /></Link>
          <div className='copy-right'><p>&copy; 2023 healthstro All rights reserved.</p></div>
        </div>

        <div className="link-div">
          <div className='link'>
            <Link to='/users' className='footer-links'>User App</Link>
            <Link to='/providers' className='footer-links'>Provider App</Link>
          </div>

          <div className='link'>
            <Link to='/about' className='footer-links'>About Us</Link>
            <Link to='/contact' className='footer-links'>Contact Us</Link>
          </div>

          <div className='link'>
            <Link to='/conditions' className='footer-links'>Terms & Conditions</Link>
            <Link to='/policy' className='footer-links'>Privacy Policy</Link>
          </div>

          <div className='link-by-icons'>
            <p className='footer-links'>Follow Us</p>
            <Link className=''><AiOutlineLinkedin size={40} style={{ color: 'rgb(255, 255, 255)' }} /></Link>
            <Link className='' ><AiFillFacebook size={40} style={{ color: 'rgb(255, 255, 255)' }} /></Link>
            <Link className='' ><RxTwitterLogo size={40} style={{ color: 'rgb(255, 255, 255)' }} /></Link>
          </div>

        </div>
      </div>



      <div className="message">
        <p>*These statements have not been evaluated by the Food and Drug Administration.

          These products are not intended to diagnose, treat, cure or prevent any disease.</p>
      </div>

    </div>
  )
}

export default Footer;