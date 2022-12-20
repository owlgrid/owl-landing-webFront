import '../styles/globals.css';

import Layout from '../components/Layout';

import { Inter } from '@next/font/google';
import Head from 'next/head';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
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
}
