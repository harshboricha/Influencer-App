// src/components/Login.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../frontend/src/context/AuthContext';

const Login = () => {
  const { login, error, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>Login</button>
      </form>
    </div>
  );
};

export default Login;
