import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ cart }) => {
    const totalItems = Object.values(cart).reduce((acc, product) => acc + product.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>Baby Clothing Store</h1>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart ({totalItems})</Link>
            </div>
        </nav>
    );
};

export default Navbar;
