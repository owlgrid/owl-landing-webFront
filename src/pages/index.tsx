import * as React from 'react';
import './../styles/global.css';

import { Header } from '../components/Header';
import { Philosphy } from '../components/Philosophy';
import { Features } from '../components/Features';
import { Workflows } from '../components/Workflows';
import { QnA } from '../components/QnA';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const IndexPage = () => (
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

export default IndexPage;
