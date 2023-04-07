import React   from 'react';
import { useState } from "react"
import { Link,useNavigate } from 'react-router-dom';
import './MobileOTP.css';
import { AiOutlineUser } from 'react-icons/ai'
import { RiStethoscopeFill } from 'react-icons/ri'

const MobileOTP = () => {
  const navigate=useNavigate()
return (
    <div className="right--container">
      {/* <h2>Sign up to health<span>stro</span></h2>
      <p>Enter a valid mobile number and we will send you a OTP to sign up.</p>

      <div className="user-provider-btn">
          <button
            className={`user-btn ${perspective === 'user' ? 'active' : ""}`}
            onClick={handlerPerspective.bind(this, "user")}
          ><AiOutlineUser style={{ color: perspective === 'user' ? 'white' : 'rgb(53, 113, 98)', paddingRight: '10px' }}
            />Users</button>
          <button
            onClick={handlerPerspective.bind(this, "provider")}
            className={`user-btn ${perspective === 'provider' ? 'active' : ""}`}>< RiStethoscopeFill style={{ color: perspective === 'provider' ? 'white' : 'rgb(53, 113, 98)', paddingRight: '10px' }} />Provider</button>
        </div> */}

      
        {/* <label htmlFor="">Mobile*</label> */}


        <div class="select-input">
        <div className='select-code'>
          <select id='box1'>
            <option value="0">0</option>
            <option value="+91">+91</option>
            <option value="+92">+92</option>
            <option value="+94">+94</option>
          </select>
          </div>
          <input  className="mobile-input" type="number" placeholder='MOBILE NUMBER' />
        </div>
      

      <div className='btn--div'>
        <button onClick={()=>navigate("/enterotp")} id='mobile-btn'>Get Started</button>
    </div>
      {/* <u><p className='account-link'>Already have an account? <Link to='Login'><b>Login</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p> */}
    </div>

  )
}

export default MobileOTP