import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../assets/cart.png';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import './header.css';
import SearchBar from './searchBar';
import { Badge } from 'antd';

const Header = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  useEffect(() => {
    const handleStorageChange = (e) => {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || []);
    };

    window.addEventListener('cartItems', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className='headerBar'>
      <Link to="/">
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <ul className='nav'>
        <li className='nav-li'><a href="/" className='linkText'>Home</a></li>
        <li className='nav-li'><a onClick={() => document.getElementById('shops-section')?.scrollIntoView({ behavior: "smooth" })} className='linkText'>Shops</a></li>
        <li className='nav-li'><a href="/upcoming" className='linkText'>Upcoming Items</a></li>
        <li className='nav-li'><a href="/expenses" className='linkText'>Customer Support</a></li>
        <li className='nav-li'><a href="/about" className='linkText'>About Us</a></li>
      </ul>
      <div className='searchBar'>
        <SearchBar />
      </div>
      <div className='user'>
        <img src={user} alt="user" className='userIcon' />
        <a href="/login" className='linkText'>Login</a>
      </div>

      <a href="/cart" className="cart-logoo">
        <Badge count={cartItems.length}>
          <img src={Cart} alt="Button Image"></img>
        </Badge>
      </a>
    </div>

  );
};

export default Header;
