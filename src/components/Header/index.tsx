import React from 'react';
import { HeaderBanner } from '../HeaderBanner';

export const Header = () => {
    const defaultTitle = 'OwlGrid';
    const title = 'OwlGrid';
    const metaDescription = 'OwlGrid';
    const author = 'OwlGrid Team';

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:creator" content={author || ``} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />

            <section className="relative w-full pb-6 bg-white sm:pb-8 lg:pb-12 tails-selected-element">
                <HeaderBanner />
                <div className="relative z-20 px-10 mx-auto max-w-7xl">
                    <div className="relative flex items-center justify-between py-4 mb-8 border-b md:py-8 md:mb-12 xl:mb-16">
                        <a href="#_" className="inline-flex items-center text-2xl font-bold text-black-800">
                            OwlGrid
                        </a>
                        <nav className="hidden gap-12 ml-12 lg:flex">
                            <a href="#_" className="text-lg font-semibold text-indigo-500">
                                Home
                            </a>
                            <a
                                href="#_"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500"
                            >
                                Philosophy
                            </a>
                            <a
                                href="#_"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500"
                            >
                                Features
                            </a>
                            <a
                                href="#_"
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500"
                            >
                                About
                            </a>
                        </nav>
                        <a
                            href="#_"
                            className="hidden px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-100 rounded-md outline-none lg:inline-block hover:bg-gray-200 hover:text-gray-600 md:text-base"
                        >
                            Stay in touch
                        </a>
                        <button
                            type="button"
                            className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-start sm:items-center">
                        <div className="flex flex-col items-center max-w-4xl pt-8 pb-0 text-center lg:pt-12 sm:pb-16 lg:pb-32">
                            <p className="w-full mb-4 font-semibold text-left text-indigo-500 md:text-lg sm:text-center sm:w-auto xl:text-xl md:mb-6">
                                Workflows-based cloud platform
                            </p>
                            <h1 className="w-full mb-8 text-4xl font-bold text-left text-black-800 sm:w-auto sm:text-center sm:text-6xl lg:text-8xl md:mb-12">
                                Create cloud applications in a minute.
                            </h1>
                            <p className="max-w-xl mb-8 leading-relaxed text-left text-gray-500 xl:text-xl sm:text-center md:mb-12">
                                OwlGrid allows product and IT teams to quickly and easily implement solutions in the
                                cloud.
                            </p>
                            <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                                <a
                                    href="#_"
                                    className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-md outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base"
                                >
                                    Stay in touch
                                </a>
                                <a
                                    href="#_"
                                    className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-md outline-none hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 md:text-base"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 z-10 flex items-end w-full h-full bg-cover opacity-50">
                    <img
                        src="http://devdojo.com.s3.us-east-1.amazonaws.com/tails/images/mesh-bg-blue.svg"
                        className="object-cover w-full h-full"
                    ></img>
                </div>
            </section>
        </>
    );
};
