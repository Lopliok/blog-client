import App from "next/app"
import { ApolloProvider } from "react-apollo"
import { client } from "../lib/apollo"

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
}

export default MyApp
