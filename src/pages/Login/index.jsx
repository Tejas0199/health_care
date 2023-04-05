import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Components/Input';
import './style.css';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })
  const onChangeHandler = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value })
  }
  return (
    <div className="right-container">
      <h2>Login to health<span>stro</span></h2>

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

          <button className='login-submit-btn'>SUBMIT</button>
        </div>
      </form>


      <u><p className='account-link'>New to Healthstro? <Link to='/signup'><b>Create an account</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p>
    </div>
  )
}

export default Login