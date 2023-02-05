import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Favicon } from '@/components/Favicon/Favicon';

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
    <>
      <Head>
        <title>innosport+</title>
        <Favicon />
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
