// src/context/AuthContext.js

import { createContext, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
    case 'LOGIN_REQUEST':
      return { ...state, loading: true, error: null };
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload.user, token: action.payload.token };
    case 'AUTH_ERROR':
    case 'LOGOUT':
      return { ...state, loading: false, user: null, token: null, error: action.payload };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async (userData) => {
    try {
      dispatch({ type: 'REGISTER_REQUEST' });
      const response = await axios.post('/api/users/register', userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error.response.data.message });
    }
  };

  const login = async (userData) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' });
      const response = await axios.post('/api/users/login', userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error.response.data.message });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
