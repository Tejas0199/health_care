import React from 'react';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { GoDeviceMobile } from 'react-icons/go';
import { FcGoogle } from 'react-icons/fc';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const SignupOptions = () => {
  const navigate = useNavigate();
  return (
    <div className='btn-div'>
     
        <Link to='email'
        className='contact-btn'><BsFillEnvelopeFill style={{ color: 'rgb(53, 113, 98)' }} />{' '}Email</Link>
      <Link to='mobile_otp' className='contact-btn'><GoDeviceMobile style={{ color: 'rgb(53, 113, 98)' }} />{' '}Mobile OTP</Link>
      <button className='contact-btn'><FcGoogle style={{ color: 'rgb(53, 113, 98)' }} />{' '}Google</button>
    </div>
  )
}

export default SignupOptions