// Login.js
import React from 'react';
import './Login.css'
const Login = ({ label, ...otherProps }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
