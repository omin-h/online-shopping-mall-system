import React from 'react';
import './footer.css';
import GitHubLogo from '../assets/github-logo.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-fill'>
                <a href='https://github.com/omin-h/online-shopping-mall-system'><img src= {GitHubLogo} alt='github' className='footer-icon' /></a>
                <p className='footer-text'>© 2024 Galaxy City Online Shopping Mall System<br />All rights reserved.<br />Developed with ❤️</p>

            </div>
        </footer>
    );
};

export default Footer;