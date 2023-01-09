import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const uri = 'https://rickandmortyapi.com/graphql';

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;