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
                        <a href="/nird" className="nav-link">
                            Le NIRD
                        </a>
                    </li>
                    <li>
                        <a href="/explorer" className="nav-link">
                            Explorer
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;