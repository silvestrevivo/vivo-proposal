import App, { Container } from 'next/app';
import Page from "../components/Pages";
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

// this will be the place for the state management(redux or apollo)
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps }
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        {/* {we can create different pages components for different layouts} */}
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withData(MyApp);
