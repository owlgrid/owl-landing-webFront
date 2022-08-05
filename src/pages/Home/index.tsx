import * as React from 'react';
import Contact from './Contact';
import Features from './Features';
import Footer from './Footer';

import Header from './Header';
import Philosphy from './Philosophy';
import Workflows from './Workflows';

const Home = () => (
    <>
        <Header />
        <Philosphy />
        <Workflows />
        <Features />
        {/* <QnA /> */}
        <Contact />
        <Footer />
    </>
);

export default Home;