import React from 'react';
import { Link } from 'react-router-dom';
import './EnterOTP.css';
import SingleTextInputGroupBox from '../../Components/SingleTextInputGroupBox'


const EnterOTP = () => {
  return (
    <div className="right-container">
      <h2>Sign up to health<span>stro</span></h2>
      <p>Enter the OTP to sign up.</p>

      <div className="mobile-input">
        <p>Verification Code</p>
        <div className="input">

          <SingleTextInputGroupBox getValue={(value) => console.log(value)} inputList={["1", "2", "3", "4", "5", "6"]} />
          {/* <input type='text' placeholder='1' />
          <input type='text' placeholder='2' />
          <input type='text' placeholder='3' />
          <input type='text' placeholder='4' />
          <input type='text' placeholder='5' />
          <input type='text' placeholder='6' /> */}
        </div>
        <p><u>Resend OTP</u></p>
      </div>

      <div className='btn-div'>
        <button className='contact-btn'>Get Started</button>

      </div>
      <u><p className='account-link'>Already have an account? <Link to='Login'><b>Login</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p>
    </div>
  )
}

export default EnterOTP