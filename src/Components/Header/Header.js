import React from 'react';
import './Header.css';
import Logo from '../../Images/Logo.png';

const Header = () => {
    return (
        <div className="container-header">
            <div>
                <img className="logo" src={Logo} alt="" />
                <p className="slogan">Education for free</p>
            </div>
            <div className="header">
                <h1>Futuristic learning platform for all kinds of people</h1>
            </div>
        </div>
    );
};

export default Header;