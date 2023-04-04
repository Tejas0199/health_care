import React from "react";
import "./Account.css";
import SignUp from "./SignUp";
import UserLogin from "./UserLogin";
import Input from "../../Assest/Input";
// import UserLogin from "./UserLogin";
const Account = () => {
  return (
    <div className="Account">
      <div className="Account-box">
        <div className="left">
          <div className="left-top">
            {/* <div className="img-box-1"> */}
            <img
              className="heart"
              src="https://healthstro.com/_next/static/media/logo_symbol_healthstro.50f56eaf.svg"
            />
            {/* </div> */}
            <h2>Find the best products for your wellness goals.</h2>
          </div>

          <div className="left-bottom">
            <img
              className="img-box-2"
              src="https://healthstro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin_card_img.dc08c50a.png&w=1080&q=75"
            />
          </div>
        </div>
        <div className="right">
          {/* <UserLogin/> */}
          <SignUp/>
        </div>
      </div>
    </div>
  );
};

export default Account;
