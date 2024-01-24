// src/Login.js
import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="login-body">
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-heading">BoxxOffice Login</h2>
        <label className="login-label" htmlFor="username">
          Username:
        </label>
        <input className="login-input" type="text" id="username" name="username" required />

        <label className="login-label" htmlFor="password">
          Password:
        </label>
        <input className="login-input" type="password" id="password" name="password" required />

        <button className="login-button" type="submit">
          Login
        </button>
        <Link to="/register"> <button className="register-button" type="button">
            Register
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
