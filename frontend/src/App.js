import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { isAuthenticated } from './utils/auth';

const App = () => {
  const [auth, setAuth] = useState(isAuthenticated());

  return (
    <Router>
      <Navbar onLogout={() => setAuth(false)} />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login onLogin={() => setAuth(true)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={auth ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
