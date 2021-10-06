import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='left'>
                <p>Disclaimer</p>
                <p>Privacy Policy</p>
                <p>Terms of Services</p>
            </div>
            <div className="right">2021,  All Rights Reserved</div>
        </div>
    );
};

export default Footer;