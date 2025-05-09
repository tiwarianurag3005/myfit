import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  // Mock authentication functions
  const login = async (email, password) => {
    // This would connect to a real backend in production
    setUser({
      id: '1',
      name: 'Fitness Enthusiast',
      email: email
    });
  };

  const signup = async (name, email, password) => {
    // This would connect to a real backend in production
    setUser({
      id: '1',
      name: name,
      email: email
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}