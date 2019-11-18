import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import fetch from "unfetch"

const cache = new InMemoryCache({})

export const client = new ApolloClient({
  fetchOptions: {
    fetch
  },
  cache,
  uri: "http://13.58.7.87:3000/graphql",
  credentials: "include",
  onError: error => null
})
