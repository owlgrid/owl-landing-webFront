import '../styles/globals.css';

import { Inter } from '@next/font/google';
import Head from 'next/head';
import React from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

interface AppProps {
    Component: React.ComponentType;
    pageProps: any;
}

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Set up inter font */}
            <style jsx global>
                {`
                    :root {
                        --font-inter: ${inter.style.fontFamily};
                    }
                `}
            </style>

            <Component {...pageProps} />
        </>
    );
};

export default App;