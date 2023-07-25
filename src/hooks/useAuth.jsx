import { useEffect, useState } from 'react';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(function () {
    const storedValue = localStorage.getItem('user');
    if (!storedValue) {
      setIsLoading(false);
      setIsAuthenticated(false);
      return;
    }
    if (storedValue) {
      setIsLoading(false);
      setIsAuthenticated(true);
      return;
    }
  }, []);

  return { isLoading, isAuthenticated };
}
