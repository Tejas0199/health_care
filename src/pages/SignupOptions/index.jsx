import React from 'react';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { GoDeviceMobile } from 'react-icons/go';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignupOptions = () => {

  return (
    <div className='btn-div'>
      <Link to='/signup/email'
        className='contact-btn'><BsFillEnvelopeFill style={{ color: 'rgb(53, 113, 98)' }} />{' '}Email</Link>
      <Link to='/signup/mobile_otp' className='contact-btn'><GoDeviceMobile style={{ color: 'rgb(53, 113, 98)' }} />{' '}Mobile OTP</Link>
      <Link to='/signup/google' className='contact-btn'><FcGoogle style={{ color: 'rgb(53, 113, 98)' }} />{' '}Google</Link>
    </div>
  )
}

export default SignupOptions