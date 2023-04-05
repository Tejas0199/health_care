import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const link = [
    { label: "Shop", path: "/Shop" },
    { label: "For Users", path: "/for-users" },
    { label: "For Providers", path: "/for-providers" },
    { label: "About Us", path: "/about-Us" },
    { label: "Contact Us", path: "/contact-Us" },
  ];
  return (
    <>
    <nav>
      <Link to="/">
        <img
          className="brand-img"
          src="https://healthstro.com/_next/static/media/main_logo_healthstro.491eee8b.svg"
        />
      </Link>

      <div className="div-nav-box">
        {link.map((elem) => (
          <Link to={elem.path}>{elem.label}</Link>
        ))}
      </div>

      <div className="div-nav-last">
        <button id="assesment-btn">Take assesment</button>
        <Link to="login">
          <button id="login-btn">
            <i class="fa-regular fa-user"></i>
            Login|Sign Up
          </button>
        </Link>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </nav>
    <div className="bg-nav"></div>
    </>
  );
};

export default Navbar;
