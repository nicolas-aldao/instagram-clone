import React, { createContext, useState } from 'react';

const Context = createContext(null);

const Provider = props => {
  const [isAuth, setIsAuth] = useState(false);

  const activateAuth = () => setIsAuth(true);

  return (
    <Context.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
