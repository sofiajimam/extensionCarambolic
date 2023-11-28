import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_URL_BACKEND_GRAPHQL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;
