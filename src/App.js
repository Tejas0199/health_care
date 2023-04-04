import {useState} from 'react';
import Input from "./component/Input";
import Navbar from "./component/Navbar";
import { Link, Route, Routes } from 'react-router-dom';
import GreetingImageContainer from './component/GreetingImageContainer';


function App() {
  
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route index element={<h1>Hello Home</h1>}/>
        <Route path='/login' element={<GreetingImageContainer>
            <div>
              <h1>Log-in container</h1>
            <Link to="/signup">if not having account signup here</Link>
            </div>
        </GreetingImageContainer>}/>
        <Route path='/signup' element={<GreetingImageContainer>
            <div>
              <h3>signup container</h3>
              <Link to="/login">already if have account Login here</Link>
            </div>
        </GreetingImageContainer>}/>
      </Routes>
    </div>
  );
}

export default App;
