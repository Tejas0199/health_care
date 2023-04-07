import { useState } from 'react';
import {AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import './style.css';

const Input = ({ type = "text", label, error, ...restProps }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isShow,setIsShow] = useState(true);
  const toggleHandler = () => {
    setIsShow(! isShow)
  } 
  return <div className='input-container'>
    {label && <label htmlFor={restProps.name}>{label}</label>}
    <div className={error ? "error" : isFocus ? "is-focus" : ""}>
      <input
        id={restProps.name}
        type={ type === "password" ? isShow ? "text" : 'password' : type }
        {...restProps}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)} />
        { type === "password" ? restProps.isShow ? <AiFillEye onClick={toggleHandler}/> : <AiFillEyeInvisible onClick={toggleHandler}/> : null}
      {error && <i class="fas-solid fa-circle-exclamation"></i>}
    </div>
    {error && <p>{error}</p>}
  </div>
}

export default Input;