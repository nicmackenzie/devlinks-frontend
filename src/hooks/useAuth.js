import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(function () {
    const storedValue = localStorage.getItem('user');
    if (!storedValue) {
      // setIsAuthenticated(false);
      setIsLoading(false);
      return;
    }
    if (storedValue) {
      // setIsAuthenticated(true);
      setIsLoading(false);
      setUserDetails(JSON.parse(storedValue));
      return;
    }
  }, []);

  function logOut() {
    localStorage.removeItem('user');
    setUserDetails(null);
    navigate('/', { replace: true });
  }

  function login(userDetails) {
    setUserDetails(userDetails);
  }

  return {
    isLoading,
    isAuthenticated: userDetails ? true : false,
    logOut,
    login,
    userDetails,
  };
}
