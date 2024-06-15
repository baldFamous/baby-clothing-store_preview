import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ cart }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const totalItems = Object.values(cart).reduce((acc, product) => acc + product.quantity, 0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="https://via.placeholder.com/40" alt="logo" className="navbar-logo" />
                <h1>Baby Clothing Store</h1>
            </div>
            <button className="menu-button" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/cart" onClick={toggleMenu}>Cart ({totalItems})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
