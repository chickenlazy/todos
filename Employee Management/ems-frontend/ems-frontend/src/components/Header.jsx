import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/employees'>Employee Management System</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to='/employees' aria-current="page" href="#">Employee</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/departments'>Department</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" to='/' tabIndex="-1" aria-disabled="true">Account</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>










            </header>







        </div>
    )
}

export default Header