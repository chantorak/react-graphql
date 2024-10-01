import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children } : any) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;