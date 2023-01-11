import React, { createContext, useState } from 'react';
import { useApolloClient } from '@apollo/client';

const Context = createContext(null);

const Provider = props => {
  const client = useApolloClient();
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const activateAuth = token => {
    setIsAuth(true);
    window.sessionStorage.setItem('token', token);
  };

  const removeAuth = () => {
    setIsAuth(false);
    sessionStorage.removeItem('token');
    client.resetStore();
  };

  return (
    <Context.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
