import React from 'react';
import { Context } from '../../../Context';

export const NotRegisteredUserScreen = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <form onSubmit={activateAuth}>
          <button>Iniciar sesión</button>
        </form>
      );
    }}
  </Context.Consumer>
);
