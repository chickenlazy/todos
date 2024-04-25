import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getToken, logout } from '../service/AuthService';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login'); 
    };

    const isLoggedIn = !!getToken();

    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div>
                        <NavLink className="navbar-brand" to='/'>Employee Management System</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/'>Todos</NavLink>
                            </li>
                        </ul>
                    </div>
                    {isLoggedIn ? (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/register'>Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/login'>Login</NavLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
        </div>
    );
}

export default Header;
