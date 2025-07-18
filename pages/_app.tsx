import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "../store";
import client from "../lib/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
