import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="/" className="navbar-brand">
                    Logo
                </a>
                <ul className="navbar-nav">
                    <li>
                        <a href="/" className="nav-link">
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="nav-link">
                            À propos
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="nav-link">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;