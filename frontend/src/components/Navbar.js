import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, removeUser } from '../utils/auth';

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      {isAuthenticated() ? (
        <>
          <Link to="/dashboard">Dashboard</Link> |{' '}
          <button onClick={() => { removeUser(); onLogout(); }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> |{' '}
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
