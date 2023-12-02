// SignUp.js
import React from 'react';
import './signup.scss'; // Import your SCSS file
const SignUp = ({ label, ...otherProps }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your sign-up logic here
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Sign Up</button>
        <br />
        <br />
        <button type="submit">Google Login</button>
      </form>
    </div>
  );
};

export default SignUp;
