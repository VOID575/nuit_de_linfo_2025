import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/" className="nav-link">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <a href="/oldpage/index.html" className="nav-link">
                            Le NIRD
                        </a>
                    </li>
                    <li>
                        <NavLink to="/explorer" className="nav-link">
                            Explorer
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;