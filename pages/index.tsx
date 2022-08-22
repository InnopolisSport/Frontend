import React from 'react';
import type { NextPage } from 'next';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Favicon } from 'src/components/Favicon';

const Homepage: React.FC = () => {
    // const [isOpen, setIsOpen] = React.useState(false);
    // const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
            <Button color="info">Info</Button>
            <Button color="light">Light</Button>
            <Button color="dark">Dark</Button>
            <Button color="link">Link</Button>
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
