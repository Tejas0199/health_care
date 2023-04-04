import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router ,Outlet,Route,Routes } from "react-router-dom";
import './App.css'
import AboutUs from "./component/About Us/AboutUs";
import ContactUS from "./component/Contact Us/ContactUS";
import Shop from "./component/Shop/Shop";
import Footer from "./component/Footer/Footer";
import Account from "./component/Account/Account";

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>

         <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/signUp" element={<Account/>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
