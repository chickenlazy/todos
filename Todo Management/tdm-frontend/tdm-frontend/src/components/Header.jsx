import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to='/'>Employee Management System</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                      
                    </div>
                </nav>










            </header>







        </div>
    )
}

export default Header