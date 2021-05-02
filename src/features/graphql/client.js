import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'isomorphic-fetch'

export const link = createHttpLink({
  fetch,
  uri: 'https://dev-jobber-api-l.azurewebsites.net/graphql',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export default client
