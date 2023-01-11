import React, { createContext, useState } from 'react';

const Context = createContext(null);

const Provider = props => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });

  const activateAuth = token => {
    setIsAuth(true);
    window.sessionStorage.setItem('token', token);
  };

  return (
    <Context.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
