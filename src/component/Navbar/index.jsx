
import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

const Navbar = () => {
    return <><div className='navbar'>
        <div className='brand-container'>
            <Link to="/">
                <img src="https://healthstro.com/_next/static/media/main_logo_healthstro.491eee8b.svg" alt="" />
            </Link>
        </div>
        <div className='nav-items'>
            <div>
            <Link>Shop</Link>
            <OurSolutionsDropDown/>
            <Link>Blogs</Link>
            <Link>Goals</Link>
            <Link>About Us</Link>
            <Link>Cantact Us</Link>
            </div>
            <div>
                <div className='assessment'>
                    <Link className='simple-succedd-btn'>Take assessment</Link>
                </div>
                <div className='signin-btn login-btn'>
                    <Link to="/login">
                    <i className='fa fa-user'></i>
                    Login
                    </Link>
                    <div className='verticle-bar'></div>
                    <Link to="/signup">Singup</Link>
                </div>
                <div>
                    <Link to="/shop/cart">
                        <i className='fa fa-cart-shopping'></i>
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    </div>
    <div className='dummy-navbar'></div>
    </>
}
 const OurSolutionsDropDown = () => {
    const [isShowDropDown,setIsShowDropDown] = useState(false); 
    return <div className='drop-down'>
            <div onClick={() => setIsShowDropDown( ! isShowDropDown )}>
                <h4>Our Solutions</h4>
                <i className={`fa-solid ${isShowDropDown ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
            </div>
            {
                isShowDropDown && <ul>
                <li onClick={() => setIsShowDropDown(false) }><Link to="for-user">For User</Link></li>
                <li onClick={() => setIsShowDropDown(false) } ><Link to="for-provider">For Provider</Link></li>
            </ul>
            }
    </div>
 }

export default Navbar;