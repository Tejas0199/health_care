import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input/index';
/* import './style.css'; */
import "../../Components/Login/style.css"

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
    <div className="right-container">
      <h2>Sign up to health<span>stro</span></h2>

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
            value={userInfo.password}
            placeHolder={"Enter your Password"}
            onChange={onChangeHandler}
            label="Password*"
            name="password"
            error="" />
        
         
        </div>
      </form>
      <div className='btn-container'><button className='contact-btn1'>SUBMIT</button></div>

    <u><p className='account-link'>Already have an account? <Link to='/signup'><b>signup</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p>
    </div>
  )
}

export default Email