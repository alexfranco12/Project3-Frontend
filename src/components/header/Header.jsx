import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="Header">
            <h1 className="title"> TRAVEL SITE </h1>
            <Link className="profile">Profile</Link>
        </div>
    );
}

export default Header;