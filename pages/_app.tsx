import type { AppProps } from 'next/app';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import theme from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
