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
                        <a href="/nird" className="nav-link">
                            Le NIRD
                        </a>
                    </li>
                    <li>
                        <NavLink to="/Level1Intro" className="nav-link">
                            Explorer
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;