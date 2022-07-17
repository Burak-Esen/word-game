import { ChakraProvider } from '@chakra-ui/react';
import { store } from '@src/store/store';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}

export default MyApp;
