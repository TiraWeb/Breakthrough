import React from 'react';
import './Sign.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';

function Sign({user,setUser}) {
  return (
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login user={user} setUser={setUser} />} />
      </Routes>

  );
}

export default Sign;