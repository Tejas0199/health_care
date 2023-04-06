import React, { useState } from 'react';
import Input from '../../Components/Input/index';
import './style.css';

const Email = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    dob: "",
    password: "",
    phone: ""
  })
  const onChangeHandler = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value })
  }
  return (
    <div>
      {/* <h2>Sign up to health<span>stro</span></h2> */}

      <form className='email-form' onSubmit={(event) => {
        event.preventDefault();
        console.log(userInfo)
      }}>
        <div className="email-container">

          <Input
            value={userInfo.email}
            placeHolder={"Enter email"}
            onChange={onChangeHandler}
            label="Email*"
            name="email"
            error="" />
          <Input
            value={userInfo.dob}
            placeHolder={"Enter Date of Birth"}
            onChange={onChangeHandler}
            label="Date of Birth*"
            name="dob"
            error="" />
          <Input
            value={userInfo.password}
            placeHolder={"Enter your Password"}
            onChange={onChangeHandler}
            label="Password*"
            name="password"
            error="" />
          <Input
            value={userInfo.phone}
            placeHolder={"Mobile Number"}
            onChange={onChangeHandler}
            label="Mobile"
            name="phone"
            error="" />
          <button className='email-submit-btn'>SUBMIT</button>
        </div>
      </form>

      {/* 
      <u><p className='account-link'>Already have an account? <Link to='/login'><b>Login</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p> */}
    </div>
  )
}

export default Email