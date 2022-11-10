
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
export { QueryClient as ReactQueryClient, QueryClientProvider } from "@tanstack/react-query";

const graphqlClient = new ApolloClient({
  uri: process.env.SUBGRAPH_AZRAEL_URL,
  cache: new InMemoryCache(),
});

export {
  graphqlClient,
  gql
};
