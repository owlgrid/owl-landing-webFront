import MuxPlayer from '@mux/mux-player-react';
import Head from 'next/head';
import Image from 'next/image';

import React from 'react';
import { Announcement } from '../components/Announcement';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CTA } from '../components/CTA';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { FrameworkDiagram } from '../components/FrameworkDiagram';
import { Header } from '../components/Header';
import { HeroVideo } from '../components/HeroVideo';
import { Partners } from '../components/Partners';

const features = [
    {
        title: 'Database',
        description: 'Store and manipulate data and files using a meta-schema and specific write rules.',
        src: '/resources/database.svg',
        alt: 'Database',
        href: '/',
    },
    {
        title: 'Workflows',
        description: 'Execute complex or simple actions on resources. We generate semantic SDK and doc.',
        src: '/resources/workflows.svg',
        alt: 'Workflows',
        href: '/',
    },
    {
        title: 'Hosting',
        description: 'Host web apps and sites distributed at lighting speed around the globe.',
        src: '/resources/hosting.svg',
        alt: 'Hosting',
        href: '/',
    },
    {
        title: 'Monitoring',
        description: 'Understand how your apps are used and act quickly.',
        src: '/resources/monitoring.svg',
        alt: 'Monitoring',
        href: '/',
    },
];

const Home = () => {
    return (
        <>
            <Head>
                <title>OwlGrid</title>
                <meta name="description" content="Create cloud backends in a minute." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="relative overflow-hidden min-h-screen md:flex md:flex-col flex flex-col h-screen">
                <Announcement />
                <Header />
                <div className="flex flex-col items-center pb-0 h-full">
                    <div className="flex flex-col container mx-auto max-w-5xl px-6 pt-12 sm:place-content-between h-full">
                        <div className="flex flex-col gap-6 h-max mx-4 my-auto">
                            <div className="flex gap-2 sm:justify-center">
                                <span className="font-title text-lg sm:text-xl leading-8 font-semibold flex justify-center text-transparent bg-clip-text bg-gradient-to-br from-blue to-purple">
                                    Welcome to the next Firebase (on steroids)
                                </span>
                                <span>✨</span>
                            </div>

                            <h1 className="text-primary sm:text-center sm:max-w-md sm:mx-auto lg:max-w-none">
                                App backends in a minute.
                            </h1>

                            <p className="subtitle sm:text-center sm:max-w-md sm:mx-auto">
                                OwlGrid allows product and IT teams to quickly implement robust apps backends.
                            </p>
                        </div>
                        <div className="mt-12 sm:mt-0" />
                        <HeroVideo
                            thumbnailSrc='/thumbnail/thumbnail.png'
                            thumbnailLargeSrc='/thumbnail/thumbnail-large.png'
                            altText='OwlGrid demo'
                            videoSrc='https://www.youtube.com/embed/PkGur1Lgdf0?autoplay=1&modestbranding=1&enablejsapi=1&rel=0&showinfo=0'
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 -z-10 transform-gpu overflow-hidden backgroundGradientFull" />
            </div>
            <main className="overflow-x-hidden">
                <section className="wrapper py-24 space-y-24" id="value">
                    <Feature
                        heading={
                            <>
                                Implement app backends in <span className="text-blue font-title">record</span> time.
                            </>
                        }
                        description={
                            <>
                                OwlGrid provides a catalog of integrated and ready-to-use resources to set up SaaS and
                                mobile application backends in record time.
                                <br />
                                <br />
                                Spend time on your core value: implement the functional logic.
                            </>
                        }
                        src="KItAngY6s5DO01lTNs9NZt7500W01Cqtubk1G01K6cYn8k8"
                        alt="OwlGrid templates"
                    />
                    <Feature
                        heading={
                            <>
                                Focus on the <span className="text-purple font-title">features</span>, we handle the technique.
                            </>
                        }
                        description="60% of the tasks spent on an application backend have no added value. Stop reinventing the wheel every project and start using a perfectly integrated environment custom-built for developers."
                        src="etfRHZDWeEYBub7cmQK02V02xtPuF5Dxumc2kObWCC7OA"
                        alt="Value stack"
                        reversed
                    />
                    <Feature
                        heading={
                            <>
                                Build applications that <span className="text-blue font-title">last</span>.
                            </>
                        }
                        description={
                            <>
                                Tired of unmaintainable AWS app backends and don’t want to create throw-away no-code
                                apps?
                                <br />
                                <br />
                                We provide you with a set of best practices by design: auto-generated documentation,
                                resource reuse with templates, data mock, etc.
                            </>
                        }
                        src="Dj9jaQLy00hgYXLBsTcXm01ffnDg2OVDSgxxAyxFb2bAM"
                        alt="OwlGrid generation"
                    />

                    {/* <div className='flex justify-center'>
            <Button href="/" primary>
              ⏱️ How OwlGrid can crush your delivery time
              <ArrowRightIcon className='h-6 w-6'/>
            </Button>
          </div> */}
                </section>

                <section
                    className="relative py-12 bg-gradient bg-gradient-to-br from-blue to-purple sm:bg-none"
                    id="features"
                >
                    <Image
                        src="/resources_bg.svg"
                        alt="Background image"
                        width={1920}
                        height={768}
                        className="hidden sm:block aspect-video sm:absolute -z-10 inset-0 sm:h-full w-full object-cover bg-center"
                    />

                    <div className="wrapper">
                        <div className="flex flex-col gap-4 items-center my-3">
                            <h2 className="text-white">Ready to use resources:</h2>
                            <p className="subtitle-white">Everything you need to create a modern SaaS or mobile app.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 pb-0">
                            {features.map((elem, i) => (
                                <Card
                                    key={i}
                                    title={elem.title}
                                    description={elem.description}
                                    src={elem.src}
                                    alt={elem.alt}
                                    href={elem.href}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="subtitle-white text-center my-3 lg:my-6">+ more resources on the way 🤫</p>

                    {/* <div className='flex justify-center my-6'>
                      <Button href="/" tertiary>
                        ⚡️ <span className='text-transparent bg-clip-text bg-gradient-to-br from-blue to-purple'>Learn more about our features </span>

                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.8225 18.8867C12.1183 18.8867 12.4036 18.7705 12.6572 18.5275L19.6196 11.565C19.8627 11.3325 20 11.0156 20 10.6986C20 10.3711 19.8627 10.0541 19.6196 9.82171L12.6783 2.88035C12.4036 2.61622 12.1183 2.5 11.8225 2.5C11.1463 2.5 10.6603 2.97544 10.6603 3.61992C10.6603 3.958 10.7977 4.24326 11.009 4.45457L13.3862 6.86344L16.4501 9.66323L13.9989 9.51532H1.19387C0.486001 9.51532 0 10.0013 0 10.6986C0 11.3854 0.486001 11.8714 1.19387 11.8714H13.9989L16.4501 11.7235L13.3862 14.5232L11.009 16.9321C10.7977 17.1434 10.6603 17.4287 10.6603 17.7668C10.6603 18.4113 11.1463 18.8867 11.8225 18.8867Z" fill="url(#paint0_linear_247_38)"/>
                          <defs>
                          <linearGradient id="paint0_linear_247_38" x1="17.62" y1="17.3627" x2="4.70615" y2="0.862825" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#945FFE"/>
                            <stop offset="1" stopColor="#0079FF"/>
                          </linearGradient>
                          </defs>
                        </svg>
                      </Button>
                    </div> */}
                </section>

                <section className="wrapper py-24">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-primary text-center">Open-source framework 🔨</h2>
                        <p className="subtitle text-center">Based on well-proven open-source technologies.</p>
                    </div>

                    <div className="my-12">
                        <FrameworkDiagram />
                    </div>
                </section>

                <section className="relative md:h-screen" id="app-builders">
                    <Image
                        src="/person.png"
                        alt="Background image"
                        width={1920}
                        height={1038}
                        className="block aspect-video md:absolute -z-10 inset-0 sm:h-full w-full object-cover bg-center"
                    />
                    <div className="wrapper py-12 sm:py-24 flex md:items-center md:h-screen">
                        <div className="space-y-6 sm:space-y-12">
                            <h2 className="text-primary md:text-white">Hello App Builders 👋🏻</h2>
                            <div className="max-w-prose md:max-w-md space-y-4">
                                <p className="md:text-white leading-relaxed font-medium">
                                    We believe that building applications is a complete skill. Today, applications are
                                    built by two separate jobs: the &quot;products&quot; and the &quot;techs&quot;. This
                                    leads to latency and inaccuracies. We need to change this way of working.
                                </p>
                                <p className="md:text-white leading-relaxed font-medium">
                                    OwlGrid answers this problem. Having both strong product skills (user experience)
                                    and technical skills (how applications works), App Builders job is to quickly create
                                    powerful applications that respond very precisely to user needs.
                                </p>
                                <p className="md:text-white leading-relaxed font-medium">
                                    We built OwlGrid to give App Builders the right tool to put their potential to work.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <CTA />
                <Partners />
            </main>
            <Footer />
        </>
    );
};

export default Home;