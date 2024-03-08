
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Check local storage for user information on initial load
    const storedUser = localStorage.getItem('authUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // Update local storage when the user information changes
    localStorage.setItem('authUser', JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
    // Placeholder login logic, replace with your actual authentication logic
    if (username === 'employee' && password === 'password') {
      setUser({ username, role: 'Employee' });
    } else if (username === 'manager' && password === 'password') {
      setUser({ username, role: 'Manager' });
    } else if (username === 'hr' && password === 'password') {
      setUser({ username, role: 'HR' });
    }
  };

  const logout = () => {
    // Placeholder logout logic, replace with your actual logout logic
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
