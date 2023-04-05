import React from "react";
import "./Account.css";
import Input from "../../Assest/Input";
import { Link } from "react-router-dom";
// import '../../Assest/Input.css'
const SignUpEmail = () => {
  return (
    <>
      <div className="banner">
        <h2>
          SignUp to health<span style={{ color: "orange" }}>stro</span>
        </h2>
      </div>
      <div className="sub-right-form">
        <form>
            <Input
            label="First Name*"
            placeholder="First Name"
            />
            <Input
            label="Last Name*"
            placeholder="Last Name"
            />
            <Input
            label="Email*"
            type="email"
            placeholder="Email"
            />
            <Input
            label="Mobile*"
            placeholder="MOBILE NUMBER*"
            
            />
            <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            />
            <Input
            label="Date Of Birth*"
            type="date"
          
            />
            <div className="submit-btn">
            <button>Get Started</button>
            </div>
        </form>
       <Link to="/login">
        <div className="SignUp-link">
          <u>
            Already have an account? <b>Login</b> here
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
export default SignUpEmail