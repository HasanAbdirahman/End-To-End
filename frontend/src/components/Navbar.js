import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { removeUser } from '../utils/auth';
import styles from './Navbar.module.css';

const Navbar = ({ auth, onLogout }) => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const handleLogout = () => {
    removeUser();
    onLogout();
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
        Home
      </NavLink>

      {auth ? (
        <>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Dashboard
          </NavLink>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Posts
          </NavLink>
          <button onClick={handleLogout} className={styles.button}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Login
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
            Signup
          </NavLink>
        </>
      )}

      <button onClick={() => setDarkMode(!darkMode)} className={styles.button}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
