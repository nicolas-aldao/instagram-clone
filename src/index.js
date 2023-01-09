import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Context, Provider as ContextProvider } from './Context';

import { App } from './App';

const client = new ApolloClient({
  uri: 'https://nagram-clone-api-nicolas-aldao.vercel.app/graphql',
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('app'));
root.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>,
);
