import '../styles/globals.css';

import { DM_Sans, Inter, Sora } from '@next/font/google';
import Head from 'next/head';
import React from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const DMSans = DM_Sans({
    weight: ["500"],
    subsets: ['latin']
});

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
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
                        --font-dm-sans: ${DMSans.style.fontFamily};
                        --font-sora: ${sora.style.fontFamily};
                    }
                `}
            </style>

            <Component {...pageProps} />
        </>
    );
};

export default App;