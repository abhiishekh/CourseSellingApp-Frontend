import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [isCreator, setIsCreator] = useState(false);

  const login = (token, isCreator) => {
    localStorage.setItem('token', token);
    localStorage.setItem('isCreator', isCreator);
    setAuth(true);
    setIsCreator(isCreator === 'true');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isCreator');
    setAuth(false);
    setIsCreator(false);
  };

  return (
    <AuthContext.Provider value={{ auth, isCreator, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
