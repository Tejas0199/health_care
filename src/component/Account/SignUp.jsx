import React from "react";
import './Account.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUpEmail from "./SignUpEmail";
const SignUp = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="banner">
        <h2>
          SignUp to health<span style={{ color: "orange" }}>stro</span>
        </h2>
      </div>
      <div className="sub-right">
        {/* grid box1 */}
        <div className="slide-box">
          <button id="user-btn">User</button>
          <button>Provider</button>
        </div>
        {/* grid box2 */}
        <div className="signupwith">
          <div className="signup-label">SignUp with</div>
          <div className="signupwith-btn-box">
            <button 
               onClick={()=>
              navigate('/signup/email')
              }
             >
             <i class="fa-solid fa-envelope"></i>
              Email
            </button>
            <button
             onClick={()=>
              navigate('/login/email')}
            >
              <i class="fa-solid fa-mobile-screen"></i>
              Mobile
            </button>
          </div>
        </div>
        {/* grid box3 */}
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
  );
};

export default SignUp;
