import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Input from '../../Components/Input';
import "../../Components/Login/style.css"
import { AiOutlineUser } from 'react-icons/ai'
import { RiStethoscopeFill } from 'react-icons/ri'

 
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
      {/* <h2>Sign up to health<span>stro</span></h2>

      <div className="user-provider-btn">
          <button
            className={`user-btn ${perspective === 'user' ? 'active' : ""}`}
            onClick={handlerPerspective.bind(this, "user")}
          ><AiOutlineUser style={{ color: perspective === 'user' ? 'white' : 'rgb(53, 113, 98)', paddingRight: '10px' }}
            />Users</button>
          <button
            onClick={handlerPerspective.bind(this, "provider")}
            className={`user-btn ${perspective === 'provider' ? 'active' : ""}`}>< RiStethoscopeFill style={{ color: perspective === 'provider' ? 'white' : 'rgb(53, 113, 98)', paddingRight: '10px' }} />Provider</button>
        </div> */}

      <form className='email-form' onSubmit={(event) => {
        event.preventDefault();
        console.log(userInfo)
      }}>
        <div className="email-container1">

          <Input
            value={userInfo.email}
            placeHolder={"Enter email"}
            onChange={onChangeHandler}
            label="Email*"
            name="email"
            error="" />

             <Input
            value={userInfo.dob} type='date'
            placeHolder={"DD/MM/YY"}
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
         
        </div>
        <div className='btn-container'><button className='contact-btn1'>SUBMIT</button></div>
      </form>
      

  {/*   <u><p className='account-link'>Already have an account? <Link to='Login'><b>Login</b> </Link>  here</p></u>
      <p className='policy'>
        By signing up, you agree to the <Link to='/terms&conditions'> Terms of Service</Link> and <Link to='/policy'>Privacy Policy</Link>, including <Link to='/cookies'>Cookie use</Link>
      </p> */}
    </div>
  )
}
export default Email;
