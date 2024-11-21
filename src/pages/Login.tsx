import React from 'react';
import { LoginForm } from '../components/LoginForm';
import illustration from '../assets/learning-illustration.svg';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="container">
      <div className="signup-container">
        <div className="form-section">
          <Link to="/" className="close-btn">×</Link>
          <h1>Login to your account</h1>
          <LoginForm />
          <p className="terms">
            By signing in to BreakThrough, you agree to our{' '}
            <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
        
        <div className="image-section">
          <img src={illustration} alt="Learning illustration" />
        </div>
      </div>
      
      <Link to="/sign" className="login-btn">SIGN UP</Link>
    </div>
  );
}