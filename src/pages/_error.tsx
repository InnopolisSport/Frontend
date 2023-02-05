import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>Page Not Found</h1>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </>
  );
};

export default ErrorPage;
