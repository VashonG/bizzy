import React, { useState } from 'react';
import './Header.scss';

const Header = () => {

    const [showMobileMenu, setshowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setshowMobileMenu(!showMobileMenu);
    }

    return (
        <div className='mobile-menu-wrapper'>
            <div className={`mobile-menu only-mobile ${showMobileMenu ? 'overlay' : ''}`}>
                <div className='mobile-navbar'>
                    <div className='mobile-nav-item'>parliamintit score check</div>
                    <div className='mobile-nav-item'>parliamint pay</div>
                </div>
            </div>
            <div className='flex max-width header'>
                <img className='header-logo' src="https://web-images.parliamintcdn.in/_next/assets/images/home-page/parliamint-logo.png" />
                <div className='only-mobile mobile-menu-button-wrapper'>
                    <button onClick={toggleMobileMenu} className={`hamburger hamburger--elastic ${showMobileMenu ? 'is-active' : ''}`} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className='flex non-mobile'>
                    <div className='header-nav-item'>parliamintit score check</div>
                    <div className='header-nav-item'>parliamint pay</div>
                </div>
            </div>
        </div>
    )
}

export default Header