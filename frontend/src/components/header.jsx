import React from 'react';
import './header.css';
import SearchBar from './searchBar';
import logo from '../assets/logo.png';
import user from '../assets/user.png';

const Header = () => {
    return (
        <div className='headerBar'>
          <img src={logo} alt="logo" className='logo'/>
          <ul className='nav'>
            <li className='nav-li'><a href="/" className='linkText'>Home</a></li>
            <li className='nav-li'><a href="/upcoming" className='linkText'>Upcoming Items</a></li>
            <li className='nav-li'><a href="/expenses" className='linkText'>Customer Support</a></li>
            <li className='nav-li'><a href="/about" className='linkText'>About Us</a></li>
            <li className='nav-li'><a href="/contact" className='linkText'>Contact</a></li>
          </ul>
          <div className='searchBar'>
            <SearchBar />         
          </div>
          <div className='user'>
            <img src={user} alt="user" className='userIcon'/>
            <a href="/login" className='linkText'>Login</a>
          </div>


        </div>
        
    );
};

export default Header;