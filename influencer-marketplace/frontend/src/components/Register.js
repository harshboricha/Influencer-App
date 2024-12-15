// src/components/Register.js

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../frontend/src/context/AuthContext';

const Register = () => {
  const { register, error, loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Name"
        />
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
        <button type="submit" disabled={loading}>Register</button>
      </form>
    </div>
  );
};

export default Register;
