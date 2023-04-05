import React from 'react'

const EmailMobileButton = () => {
  return (
    <div className='btn-div'>
      <button
        className='contact-btn'><BsFillEnvelopeFill style={{ color: 'rgb(53, 113, 98)' }} />{' '}Email</button>
      <button className='contact-btn'><GoDeviceMobile style={{ color: 'rgb(53, 113, 98)' }} />{' '}Mobile OTP</button>
      <button className='contact-btn'><FcGoogle style={{ color: 'rgb(53, 113, 98)' }} />{' '}Google</button>
    </div>
  )
}

export default EmailMobileButton