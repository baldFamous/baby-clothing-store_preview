import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 Store App. Todos los derechos reservados. <Link to="/login">Admin page</Link></p>

        </footer>
    );
}

export default Footer;