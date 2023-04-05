
import { Link } from 'react-router-dom';
import './style.css'
const links = [{ label: "Shop", path: "/shop" }, { label: "Shop", path: "/shop" }, { label: "Shop", path: "/shop" }, { label: "Shop", path: "/shop" }, { label: "Shop", path: "/shop" }]
const Navbar = () => {
  return <div className='navbar'>
    <div className='brand-container'>
      <Link to="/">
        <img src="https://healthstro.com/_next/static/media/main_logo_healthstro.491eee8b.svg" alt="" />
      </Link>
    </div>
    <div className='nav-items'>
      {
        links.map(link => <Link to={link.path}>{link.label}</Link>)
      }
    </div>
    <div>
      <button>Login</button>
    </div>
  </div>
}

export default Navbar;