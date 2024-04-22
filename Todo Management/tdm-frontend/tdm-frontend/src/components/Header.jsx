import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div >
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

                    <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/register'>Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/login'>Login</NavLink>
                            </li>
                        </ul>
                </nav>










            </header>







        </div>
    )
}

export default Header