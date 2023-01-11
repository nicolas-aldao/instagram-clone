import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error'
import { Context, Provider as ContextProvider } from './Context';

import { App } from './App';

// const client = new ApolloClient({
//   uri: 'https://nagram-clone-api-nicolas-aldao.vercel.app/graphql',
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: 'https://nagram-clone-api-nicolas-aldao.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token');
      window.location.href = '/';
    }
  }),
});

const root = createRoot(document.getElementById('app'));
root.render(
  <ApolloProvider client={client}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApolloProvider>,
);
