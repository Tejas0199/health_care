import React from "react";
import './Account.css'
const SignUp = () => {
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
          <button>User</button>
          <button>Provider</button>
        </div>
        {/* grid box2 */}
        <div className="signupwith">
          <div className="signup-label">SignUp with</div>
          <div className="signupwith-btn-box">
            <button>
              <i class="fa-solid fa-envelope"></i>
              Email
            </button>
            <button>
              <i class="fa-solid fa-mobile-screen"></i>
              Mobile
            </button>
          </div>
        </div>
        {/* grid box3 */}
        <div className="SignUp-link">
          <u>
            Already have an account? <b>Login</b> here
          </u>
        </div>
        
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
