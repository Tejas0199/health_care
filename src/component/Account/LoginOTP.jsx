import React from 'react'
import Input from '../../Assest/Input'
import { Link } from 'react-router-dom'
const LoginOTP = () => {
  return (
    <>
    <div className='banner'>
    <h2>
          Login to health<span style={{ color: "orange" }}>stro</span>
        </h2>
    </div>
    <div className='sub-right-OTP'>
        <div>Enter a valid mobile number and we will send you a OTP to login.</div>
         <Input
         label="Mobile*"
         placeholder="MOBILE NUMBER"
         />
         <div className='submit-btn'>
            <button>Continue</button>
         </div>
    </div>
    <Link to="/signup"> 
     <div className="SignUp-link">
        <u>
          New to Healthstro? <b>Create an account</b> here
        </u>
      </div>
     </Link>
      
      <div className="tNc">
            <p>
              By signing up, you agree to the{" "}
              <u>
                <b>Terms of Service</b>
              </u>{" "}
              and{" "}
              <u>
                <b>Privacy Policy</b>
              </u>
              , including{" "}
              <u>
                <b>Cookie use</b>
              </u>
            </p>
          </div>
    </>
  )
}

export default LoginOTP