import React from 'react'
import Input from '../../Assest/Input'
import { Link } from 'react-router-dom'
const LoginEmail = () => {
  return (
    <>
      <div className="banner">
        <h2>
          Login to health<span style={{ color: "orange" }}>stro</span>
        </h2>
      </div>
      <div className="sub-right-form">
        <form>
            <Input
            label="Email*"
            type="email"
            />
            <Input
            label="Password*"
            type="password"
            />
            
            <div className="submit-btn">
            <button>Continue</button>
            </div>
        </form>
        <Link to="/signup"> 
     <div className="SignUp-link">
        <u>
          New to Healthstro? <b>Create an account</b> here
        </u>
      </div>
     </Link>
      </div>
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

export default LoginEmail