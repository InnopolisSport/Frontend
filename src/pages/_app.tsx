import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { ChakraBaseProvider, theme } from '@chakra-ui/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
};
export default MyApp;
