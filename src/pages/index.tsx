import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Favicon } from '@/components/Favicon/Favicon';
import { ChakraProvider } from '@chakra-ui/react';

const Homepage: React.FC = () => {
  return (
    <>
      <p style={{ fontSize: '1024px' }}>sdsdsd</p>
      <p>ds</p>
    </>
  );
};

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Head>
        <title>innosport+</title>
        <Favicon />
      </Head>
      <Homepage />
    </ChakraProvider>
  );
};

export default Home;
