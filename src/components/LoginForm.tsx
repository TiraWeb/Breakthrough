import React, { useState } from 'react';

interface FormData {
  emailOrUsername: string;
  password: string;
}

export function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    emailOrUsername: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="emailOrUsername"
        placeholder="Email or username"
        value={formData.emailOrUsername}
        onChange={handleChange}
      />
      
      <div className="password-container">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <a href="#" className="forgot-link">FORGOT?</a>
      </div>
      
      <button type="submit" className="create-account-btn">
        LOG IN
      </button>
      
      <div className="divider">
        <span>OR</span>
      </div>
      
      <button type="button" className="google-btn">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="google-icon" />
        GOOGLE
      </button>
    </form>
  );
}