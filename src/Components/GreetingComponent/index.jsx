import React from 'react';
import './style.css';

const GreetingComponent = ({ children }) => {
  return (
    <div className='container'>
      <div className="left-container">
        <img className='img1' src="https://healthstro.com/_next/static/media/logo_symbol_healthstro.50f56eaf.svg" alt="" width='176px' height='166px' />
        <h1>Find the best products for your wellness goals.</h1>
        <img className='img2' src="https://healthstro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin_card_img.dc08c50a.png&w=1080&q=75" alt="" width='345px' height='422px' />
      </div>
      {children}
    </div>
  )
}

export default GreetingComponent