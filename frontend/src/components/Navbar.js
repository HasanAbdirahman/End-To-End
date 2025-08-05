import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, removeUser } from '../utils/auth';
import styles from './Navbar.module.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link> |{' '}
      {isAuthenticated() ? (
        <>
          <Link className={styles.link} to="/dashboard">Dashboard</Link> |{' '}
          <Link to="/posts" className={styles.link}>Posts</Link>
          <button className={styles.button} onClick={() => { removeUser(); onLogout(); }}>
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
