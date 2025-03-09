// hooks/useAuth.ts
"use client";

import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking localStorage or a cookie)
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (userData: { email: string }) => {
    // Save user data to localStorage and state
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // Clear the user from localStorage and state
    localStorage.removeItem('user');
    setUser(null);
  };

  return { user, login, logout }; // Ensure `login` is returned
}