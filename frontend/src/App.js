import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { isAuthenticated } from './utils/auth';
import Posts from './components/Posts';


const App = () => {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    const handleStorageChange = () => {
      setAuth(isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>  
      <Navbar auth={auth} onLogout={() => setAuth(false)} />
      <Routes>
       <Route path="/" element={<h1>Home Page</h1>} />
       <Route path="/login" element={<Login onLogin={() => setAuth(true)} />} />
       <Route path="/signup" element={<Signup onSignup={() => setAuth(true)} />} />
       <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/login" />} />
       <Route path="/posts" element={auth ? <Posts /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
