import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { App } from './App';

const client = new ApolloClient({
  uri: "https://nagram-clone-api-nicolas-aldao.vercel.app/graphql",
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("app"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);