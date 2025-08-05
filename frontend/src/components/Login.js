import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../utils/auth';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('users')) || [];
    const matched = userData.find(
      user => user.email === email && user.password === password
    );

    if (matched) {
      setUser({ email });
      onLogin(); // update auth state in App.js
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.card}>
        <h2>Login</h2>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
