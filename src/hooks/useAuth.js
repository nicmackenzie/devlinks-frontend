import { useEffect, useState } from 'react';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

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
      setUserDetails(JSON.parse(storedValue));
      return;
    }
  }, []);

  useEffect(
    function () {
      if (!userDetails) setIsAuthenticated(false);
      if (userDetails) setIsAuthenticated(true);
    },
    [userDetails]
  );

  function logOut() {
    localStorage.removeItem('user');
    setUserDetails(null);
  }

  function login(userDetails) {
    setUserDetails(userDetails);
  }

  //   useCallback(
  //     () => {
  //       first
  //     },
  //     [second],
  //   )

  //   const logOut = useCallback() => {};

  return { isLoading, isAuthenticated, logOut, login, userDetails };
}
