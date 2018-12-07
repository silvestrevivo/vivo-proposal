import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    //uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    uri: `http://localhost:4444/graphql`,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'same-origin',
        },
        headers,
      });
    },
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    }
  });
}

export default withApollo(createClient);
