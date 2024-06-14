import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                Ropa de Bebé
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>

            </div>
        </nav>
    );
};

export default Navbar;
