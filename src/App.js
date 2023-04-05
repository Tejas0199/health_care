import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar/index';
import Footer from './pages/Footer/index';
import GreetingComponent from './Components/GreetingComponent';
import SignUp from './pages/SignUp/index';
// import Home from './pages/Home';
import MobileOTP from './pages/Moblie/MobileOTP';
import EnterOTP from './pages/Moblie/EnterOTP';
import Email from './pages/Email/index';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path='/login' element={<GreetingComponent>
            <Login />
          </GreetingComponent>} />

          <Route path='/signup' element={<GreetingComponent>
            <SignUp />
          </GreetingComponent>} />
          <Route path='/email' element={<GreetingComponent>
            <Email />
          </GreetingComponent>} />
          <Route path='/mobile_otp' element={<GreetingComponent>
            <MobileOTP />
          </GreetingComponent>} />
          <Route path='/enter_otp' element={<GreetingComponent>
            <EnterOTP />
          </GreetingComponent>} />

        </Routes>
      </div>
      <Routes>

        {/* <Route index element={<Home />} />  */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;