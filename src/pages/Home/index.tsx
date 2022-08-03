import * as React from 'react';

import { Header } from './Header';
import { Philosphy } from './Philosophy';
import { Features } from './Features';
import { Workflows } from './Workflows';
import { QnA } from './QnA';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Home = () => (
    <>
        <Header />
        <Philosphy />
        <Workflows />
        <Features />
        <QnA />
        <Contact />
        <Footer />
    </>
);
