import React from 'react';
import './MobileOTP.css';
import { useNavigate } from 'react-router-dom';

const MobileOTP = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile-input-div">
      <label htmlFor="">Mobile*</label>
      <div class="input">
        <select name="" id="">
          <option value="0">0</option>
          <option value="+91">+91</option>
          <option value="+92">+92</option>
          <option value="+94">+94</option>
        </select>
        <input type="number" placeholder='MOBILE NUMBER' />
      </div>
      <div className='btn-div'>
        <button className='mb-otp-btn'
          onClick={() => {

            navigate('/enter_otp');
          }}
        >Get Started</button>
      </div>
    </div>
    // <div className="right-container">
    //   <h2>Sign up to health<span>stro</span></h2>
    //   <p>Enter a valid mobile number and we will send you a OTP to sign up.</p>



    //   <div className='btn-div'>
    //     <button className='contact-btn'>Get Started</button>

    //   </div>
    //   <u><p className='account-link'>Already have an account? <Link to='/login'><b>Login</b> </Link>  here</p></u>
    //   <p className='policy'>
    //     By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
    //   </p>
    // </div>

  )
}

export default MobileOTP