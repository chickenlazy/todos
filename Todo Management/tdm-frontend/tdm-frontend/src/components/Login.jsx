import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, storeToken } from '../service/AuthService';

const Login = () => {
  const [loginDto, setLoginDto] = useState({
    usernameOrEmail: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    usernameOrEmail: '',
    password: '',
    form: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDto(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: '',
      form: ''
    }));
  };

  const validateForm = () => {
    let tempErrors = {
      usernameOrEmail: '',
      password: '',
      form: ''
    };
    let isValid = true;

    if (!loginDto.usernameOrEmail) {
      tempErrors.usernameOrEmail = 'Username or email is required.';
      isValid = false;
    }
    if (!loginDto.password) {
      tempErrors.password = 'Password is required.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login(loginDto)
        .then(response => {
          console.log('Login successful:', response.data);
          const token = 'Basic ' + window.btoa(usernameOrEmail + ':' + password);

          storeToken(token);
          navigate('/dashboard'); // Redirect to dashboard after login
        })
        .catch(error => {
          if (error.response) {
            setErrors(prevErrors => ({
              ...prevErrors,
              form: error.response.data.message || 'Error during login'
            }));
          } else {
            setErrors(prevErrors => ({
              ...prevErrors,
              form: 'Network error or server is down'
            }));
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-5">
          <h3 className="card-header text-center">Login</h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="usernameOrEmail" className="form-label">Username or Email:</label>
                <input
                  type="text"
                  className={`form-control ${errors.usernameOrEmail && 'is-invalid'}`}
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  value={loginDto.usernameOrEmail}
                  onChange={handleChange}
                  required
                />
                {errors.usernameOrEmail && <div className="invalid-feedback">{errors.usernameOrEmail}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className={`form-control ${errors.password && 'is-invalid'}`}
                  id="password"
                  name="password"
                  value={loginDto.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              {errors.form && <div className="alert alert-danger">{errors.form}</div>}
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
