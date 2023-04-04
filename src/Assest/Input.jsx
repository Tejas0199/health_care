import { useState } from 'react';
import './Input.css'


const Input = ({type = "text",label,error,...restProps}) => {
    const [isFocus,setIsFocus] = useState(false);
    return <div className='input-container'>
        { label && <label htmlFor={restProps.name}>{label}</label>}
        <div className={ error ? "error" : isFocus ? "is-focus" : ""}>
            <input 
            id={restProps.name} 
            type={type} 
            {...restProps}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}/>
            { error && <i class="fa-solid fa-circle-exclamation"></i>}
        </div>
        { error && <p>{error}</p>}
    </div>
}

export default Input;   