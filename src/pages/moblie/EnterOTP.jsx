import React from 'react';
import { Link } from 'react-router-dom';
import "./EnterOTP.css"


const EnterOTP = () => {
  return (
    <div className="right-container">
      <h2>Sign up to health<span>stro</span></h2>
      <p>Enter the OTP to sign up.</p>

      <div className="mobile-input">
        <p className='para'>Verification Code</p>
        <div className="input">
          <input className='otp-box' type='text' placeholder='' />
          <input className='otp-box' type='text' placeholder='' />
          <input className='otp-box' type='text' placeholder='' />
          <input  className='otp-box'type='text' placeholder='' />
          <input className='otp-box' type='text' placeholder='' />
          <input className='otp-box'type='text' placeholder='' />
        </div>
        <p className='para'><u>Resend OTP</u></p>
      </div>

      <div className='btn--div'>
        <button id='otp-btn'>Get Started</button>

      </div>
      <u><p className='account-link'>Already have an account? <Link to='Login'><b>Login</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p>
    </div>
  )
}

export default EnterOTP