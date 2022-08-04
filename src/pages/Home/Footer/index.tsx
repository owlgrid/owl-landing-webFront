import React from 'react';

export const Footer = () => {
    return (
        <footer className="pb-6 pt-16 px-20 mx-auto max-w-7xl bg-white tails-selected-element">
            <div className="max-w-6xl xl:max-w-6xl mx-auto px-10 md:px-8">
                <ul className="text-sm font-medium pb-10  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs tracking-wide text-gray-800 uppercase font-bold">Product</h2>
                        <ul className="space-y-2 sm:space-y-4 text-md">
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs tracking-wide text-gray-800 uppercase font-bold">About</h2>
                        <ul className="space-y-2 sm:space-y-4">
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs tracking-wide text-gray-800 uppercase font-bold">Resources</h2>
                        <ul className="space-y-2 sm:space-y-4">
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Developer API
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Status
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="space-y-5">
                        <h2 className="text-xs tracking-wide text-gray-800 uppercase font-bold">Social</h2>
                        <ul className="space-y-2 sm:space-y-4">
                            <li className="">
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="">
                                <a
                                    className="hover:text-gray-800 transition-colors duration-200 text-xl sm:text-2xl"
                                    href="/"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-col-reverse justify-between pt-10 sm:pt-8 pb-4 border-t lg:flex-row bg-top border-gray-800">
                    <ul className="flex flex-col space-y-1 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a
                                href="/"
                                className="text-sm sm:text-base text-black transition-colors duration-300 font-semibold"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm sm:text-base text-black transition-colors duration-300 font-semibold"
                            >
                                Disclaimers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="text-sm sm:text-base text-black transition-colors duration-300 font-semibold"
                            >
                                Terms &amp; Conditions
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <a
                            href="/"
                            className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
                        >
                            © 2022 Tails.
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
