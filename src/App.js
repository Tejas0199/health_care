import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router ,Outlet,Route,Routes } from "react-router-dom";
import './App.css'
import AboutUs from "./component/About Us/AboutUs";
import ContactUS from "./component/Contact Us/ContactUS";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";
import Account from "./component/Account/Account";
import Login from "./component/Account/Login";
import SignUp from "./component/Account/SignUp";
import SignUpEmail from "./component/Account/SignUpEmail";
import LoginEmail from "./component/Account/LoginEmail";
import LoginOTP from "./component/Account/LoginOTP";
function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>

         <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/login" element={<Account>
          <Login/>
        </Account>} />
        <Route path="/signup" element={<Account>
          <SignUp/>
        </Account>} />
        <Route path="/signup/email" element={<Account>
          <SignUpEmail/>
        </Account>} />
        <Route path="/login/email" element={<Account>
          <LoginEmail/>
        </Account>} />
        <Route path="/login/mobile" element={<Account>
         <LoginOTP/>
        </Account>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
