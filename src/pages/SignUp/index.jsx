import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './style.css';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { GoDeviceMobile } from 'react-icons/go';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineUser } from 'react-icons/ai'
import { RiStethoscopeFill } from 'react-icons/ri'
const Signup = () => {

  const [perspective, setperspective] = useState('provider');
  const navigate = useNavigate();

  const handlerPerspective = (text) => {
    setperspective(text)
  }

  return (

    <div className='right-container'>
      <h2>Sign up to health<span>stro</span></h2>

      <div className="user-provider-btn">
        <button
          className={`user-btn ${perspective === 'user' ? 'active' : ""}`}
          onClick={handlerPerspective.bind(this, "user")}
        ><AiOutlineUser style={{ color: perspective === 'user' ? 'white' : 'rgb(53, 113, 98)', paddingRight: '10px' }}
          />Users</button>
        <button
          onClick={handlerPerspective.bind(this, "provider")}
          className={`user-btn ${perspective === 'provider' ? 'active' : ""}`}>< RiStethoscopeFill style={{ color: perspective === 'provider' ? 'white' : 'rgb(53, 113, 98)', paddingRight: '10px' }} />Provider</button>
      </div>
      <h3>Sign up with </h3>
      <Outlet />
      {/* <div className='btn-div'>
        <button
          onClick={() => {
            // if (resizeBy.status === 200) {
            localStorage.setItem('isUserlogedin', false);
            navigate('/email');
          }}

          className='contact-btn'><BsFillEnvelopeFill style={{ color: 'rgb(53, 113, 98)' }} />{' '}Email</button>
        <button onClick={() => {
          // if (status === 200) {
          // localStorage.setItem('isUserlogedin', true);
          navigate('/mobile_otp');
        }} className='contact-btn'><GoDeviceMobile style={{ color: 'rgb(53, 113, 98)' }} />{' '}Mobile OTP</button>
        <button className='contact-btn'><FcGoogle style={{ color: 'rgb(53, 113, 98)' }} />{' '}Google</button>
      </div> */}
      <p className='para-link'>New to healthstro? <Link to='/signup'><b>Create an account</b> </Link>  here</p>
      <p className='policy'>
        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie use
      </p>

    </div>
  )
}

export default Signup