import {useState} from 'react';
import Input from "./component/Input";
import Navbar from "./component/Navbar";


function App() {
  const [userInfo,setUserInfo]  = useState({
    firstName : ""
  })
  const onChangeHandler = ({target : {name,value}}) => {
    setUserInfo({...userInfo,[name] : value})
  }
  return (
    <div className="app">
      <Navbar/>
      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(userInfo)
      }}>
      <div className="email-container">
          <Input 
          value={userInfo.firstName}
          placeHolder={"Enter Name"}
          onChange={onChangeHandler}
          label="Enter First Name"
          name="firstName"
          error=""/>
          <Input 
          value={userInfo.lastName}
          placeHolder={"Enter Last name"}
          onChange={onChangeHandler}
          label="Enter Last Name"
          name="LastName"
          error=""/>
          <Input 
          value={userInfo.fatherName}
          placeHolder={"Enter Name"}
          onChange={onChangeHandler}
          label="Enter Father name"
          name="fatherName"
          error=""/>
          <Input 
          value={userInfo.email}
          placeHolder={"Enter email"}
          onChange={onChangeHandler}
          label="Enter Gmail"
          name="email"
          error=""/>
        <button>SUBMIT</button>
      </div>
      </form>
    </div>
  );
}

export default App;
