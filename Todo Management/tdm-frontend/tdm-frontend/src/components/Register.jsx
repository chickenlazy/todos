import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const REST_API_BASE_AUTH_URL = "http://localhost:8080/api/auth";

export const register = (registerDto) =>
  axios.post(`${REST_API_BASE_AUTH_URL}/register`, registerDto);

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    
    const validateForm = () => {
        let isValid = true;
        let newErrors = { name: '', email: '', username: '', password: '', confirmPassword: '' };

        if (!userData.name.trim()) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }
        if (!userData.username.trim()) {
            newErrors.username = 'Username is required.';
            isValid = false;
        }
        if (!userData.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = 'Email address is invalid.';
            isValid = false;
        }
        if (!userData.password) {
            newErrors.password = 'Password is required.';
            isValid = false;
        } else if (userData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
            isValid = false;
        }
        if (userData.password !== userData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const registerDto = {
                name: userData.name,
                username: userData.username,
                email: userData.email,
                password: userData.password
            };

            register(registerDto).then(response => {
                console.log('Registration successful:', response);
                navigate('/');
            }).catch(error => {
                console.error('Error during registration:', error);
                // Optionally, handle errors, e.g., show a message to the user
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Register</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name && 'is-invalid'}`}
                                    value={userData.name}
                                    onChange={e => setUserData({ ...userData, name: e.target.value })}
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Username:</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.username && 'is-invalid'}`}
                                    value={userData.username}
                                    onChange={e => setUserData({ ...userData, username: e.target.value })}
                                />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email && 'is-invalid'}`}
                                    value={userData.email}
                                    onChange={e => setUserData({ ...userData, email: e.target.value })}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password && 'is-invalid'}`}
                                    value={userData.password}
                                    onChange={e => setUserData({ ...userData, password: e.target.value })}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Confirm Password:</label>
                                <input
                                    type="password"
                                    className={`form-control ${errors.confirmPassword && 'is-invalid'}`}
                                    value={userData.confirmPassword}
                                    onChange={e => setUserData({ ...userData, confirmPassword: e.target.value })}
                                />
                                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                            </div>
                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
