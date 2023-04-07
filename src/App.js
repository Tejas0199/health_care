import React from "react";
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import Login from "./Components/Login/index";
import Email from "./pages/Email/Email";
import SignUp from "./Components/SignUp/index";
import MobileOTP from "./pages/moblie/MobileOTP";
import EnterOTP from "./pages/moblie/EnterOTP";    
import { Link, Route, Routes } from "react-router-dom";
import GreetingImageContainer from "./Components/GreetingComponent/index";
import SignupOptions from "./pages/SignupOption/Index";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route index element={<h1>Hello Home</h1>} />
          <Route
            path="/login"
            element={
              <GreetingImageContainer>
                <Login></Login>
                <div>
                  {/* <h1>Log-in container</h1>
            <Link to="/signup">if not having account signup here</Link> */}
                </div>
              </GreetingImageContainer>
            }
          />
          <Route
            path="/signup"
            element={
              <GreetingImageContainer>
                <SignUp></SignUp>
                <div></div>
              </GreetingImageContainer>
            }>
            <Route index element={<SignupOptions></SignupOptions>}></Route>
            <Route path="email" element={<Email />} />
            <Route path="mobile_otp" element={<MobileOTP />} />
          </Route>
          <Route
            path="/mobile_otp"
            element={
              <GreetingImageContainer>
                <MobileOTP></MobileOTP>
                <div></div>
              </GreetingImageContainer>
            }
          />
           <Route path='/enterotp' element={<GreetingImageContainer><EnterOTP></EnterOTP>
            <div>
             
            </div>
        </GreetingImageContainer>}/>   
          <Route
            path="/email"
            element={
              <GreetingImageContainer>
                <Email></Email>
                <div></div>
              </GreetingImageContainer>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
