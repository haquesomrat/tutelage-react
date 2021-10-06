import React from 'react';
import './Header.css';
import Logo from '../../Images/Logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container-header">
            <div>
                <img className="logo" src={Logo} alt="" />
            </div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/tutors">Tutors</NavLink>
                <NavLink to="/blogs">Educational Blogs</NavLink>
                <NavLink to="/about">About</NavLink>

            </nav>
        </div>
    );
};

export default Header;