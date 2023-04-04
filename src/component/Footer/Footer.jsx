import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-top'>
          <div style={{fontSize:"10px"}}>
            <img  src="https://healthstro.com/_next/static/media/logo_whiteText.e4547dca.svg"  />
            <p>© 2023 healthstro All rights reserved.</p>
          </div>
          <div className='top-right'>
            <div className='foot-box'>
              <a href="">User App</a>
              <a href="">Provider App</a>
            </div>
            <div className='foot-box'>
            <a href="">About Us</a>
              <a href="">Contact Us</a>
            </div>
            <div className='foot-box'>
              <a href="">Terms and Conditions</a>
              <a href="">Privacy Policy</a>
            </div>
            <div className='foot-box'>
            <a href="">Follow Us</a>
              <a href="">Contact Us</a>
             </div>
          </div> 
          
        </div>
        <div className='footer-bottom'> 
          <div>
            <p>*These statements have not been evaluated by the Food and Drug Administration.</p>
            <p>These products are not intended to diagnose, treat, cure or prevent any disease</p>
          </div>
        </div>
    </div>
  )
}

export default Footer