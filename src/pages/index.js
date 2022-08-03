import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => (
    <>
        <section className="relative w-full pb-6 bg-white sm:pb-8 lg:pb-12 tails-selected-element">
            <div className="relative z-20 flex items-center justify-center w-full h-12 px-5 overflow-hidden text-xs font-normal cursor-pointer bg-gradient-to-r from-indigo-500 via-blue-400 to-green-400 text-blue-50">
                <div className="relative flex items-center justify-center w-full h-full mx-auto max-w-7xl">
                    <svg className="w-4 h-4 mr-1 text-blue-100 stroke-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" className=""></path></svg>
                    <span className="hidden sm:inline-block">Click here to stay informed about the project</span>
                </div>
            </div>
            <div className="relative z-20 px-10 mx-auto max-w-7xl">
                <div className="relative flex items-center justify-between py-4 mb-8 border-b md:py-8 md:mb-12 xl:mb-16">
                    <a href="#_" className="inline-flex items-center text-2xl font-bold text-black-800">OwlGrid</a>
                    <nav className="hidden gap-12 ml-12 lg:flex">
                        <a href="#_" className="text-lg font-semibold text-indigo-500">Home</a>
                        <a href="#_" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Philosophy</a>
                        <a href="#_" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">Features</a>
                        <a href="#_" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500">About</a>
                    </nav>
                    <a href="#_" className="hidden px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-100 rounded-md outline-none lg:inline-block hover:bg-gray-200 hover:text-gray-600 md:text-base">Stay in touch</a>
                    <button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"><svg className="w-6 h-6 fill-current" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></button>
                </div>
                <div className="flex flex-col items-start sm:items-center">
                    <div className="flex flex-col items-center max-w-4xl pt-8 pb-0 text-center lg:pt-12 sm:pb-16 lg:pb-32">
                        <p className="w-full mb-4 font-semibold text-left text-indigo-500 md:text-lg sm:text-center sm:w-auto xl:text-xl md:mb-6">
                            Workflows-based cloud platform
                        </p>
                        <h1 className="w-full mb-8 text-4xl font-bold text-left text-black-800 sm:w-auto sm:text-center sm:text-5xl lg:text-8xl md:mb-12">Create cloud applications in a minute.</h1>
                        <p className="max-w-xl mb-8 leading-relaxed text-left text-gray-500 xl:text-xl sm:text-center md:mb-12">
                            OwlGrid allows product and IT teams to quickly and easily implement solutions in the cloud.
                        </p>
                        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                            <a href="#_" className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-md outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base">Stay in touch</a>
                            <a href="#_" className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-white border rounded-md outline-none hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 md:text-base">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-10 flex items-end w-full h-full bg-cover opacity-50">
                <img src="http://devdojo.com.s3.us-east-1.amazonaws.com/tails/images/mesh-bg-blue.svg" className="object-cover w-full h-full"></img>
            </div>
        </section>
        <section className="w-full px-8 pt-20 pb-16 bg-white xl:px-0 tails-selected-element">
            <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
                <h3 className="w-full text-4xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2">Create cloud applications in a minute</h3>
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
                    <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl">
                        The path of IT is to evolve towards ever more "high level" solutions, i.e. simpler and faster to use.
                        <br />
                        <br />
                        The way of doing business in the cloud has evolved over the last few years, from a server in the garage to delegated management, to code as a service, etc.
                        <br />
                        <br />
                        OwlGrid brings the new evolution with a new approach to the cloud, based on a better developer experience. We have masked the complexity of resource management with highly functional high-level services.
                    </p>
                </div>
            </div>
        </section>
        <section className="bg-gray-100 tails-selected-element">
            <div className="relative">
                <div className="absolute inset-0 w-screen h-full pb-20 transform opacity-50">
                    <img src="https://cdn.devdojo.com/images/march2021/bg-gradient.png" className="absolute left-0 object-cover w-full h-full" />
                </div>
                <div className="relative px-6 py-8 ml-auto mr-auto bg-top bg-cover sm:py-16 max-w-7xl md:px-24 lg:px-16 lg:py-20">

                    <div className="relative grid gap-6 bg-top bg-cover sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">User Manager</p>
                            <p className="text-sm leading-5 text-gray-500">Easily manage the users of your application. Allow access to specific areas and sections.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Projects</p>
                            <p className="text-sm leading-5 text-gray-500">Unlimted projects for you and your team. Easily create, modify, and duplicate your projects.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Developer API</p>
                            <p className="text-sm leading-5 text-gray-500">Well documented developer API that allows you to build on top of our platform with ease.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Template Designs</p>
                            <p className="text-sm leading-5 text-gray-500">Templates and designs for your next project. You can easily drop these templates into any project.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clip-rule="evenodd"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Analytics</p>
                            <p className="text-sm leading-5 text-gray-500">User and customer analytics to help you understand which areas of your application are being used.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Filters</p>
                            <p className="text-sm leading-5 text-gray-500">Filter your results by the criteria that is the most important and most vital to your business.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Customizations</p>
                            <p className="text-sm leading-5 text-gray-500">Customize every aspect of the user interface. You can also customize the internal functionality.</p>
                        </div>
                        <div className="flex flex-col items-start justify-between p-6 space-y-4 overflow-hidden transition-shadow duration-200 bg-white bg-top bg-cover border border-gray-100 shadow-xl rounded-2xl group hover:shadow-2xl">
                            <div className="flex items-center justify-center w-10 h-10 text-center bg-top bg-cover rounded-full bg-indigo-50">
                                <p className="relative">
                                    <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>

                                </p>
                            </div>
                            <p className="font-bold text-gray-700">Integrations</p>
                            <p className="text-sm leading-5 text-gray-500">We have also built some amazing and powerful integrations to help you build quicker.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-24 bg-gray-50 tails-selected-element" data-tails-scripts="//unpkg.com/alpinejs" >
            <div className="max-w-4xl px-8 mx-auto lg:px-16">
                <h2 className="mb-2 text-xl font-bold text-center md:text-3xl">Frequently Asked Questions</h2>
                <div className="relative mt-2 mt-12 space-y-5">
                    <div x-data="{ show: false }" className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white">
                        <h4 className="flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-7 py-7 hover:text-gray-800">
                            <span className="">Where do I go to upgrade my account?</span>
                            <svg className="w-6 h-6 transition-all duration-200 ease-out transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        </h4>
                        <p className="pt-0 -mt-2 text-gray-400 sm:text-lg py-7 px-7">You can upgrade your account by visiting The Pro Upgrade Page. You will also gain access to many other applications and sections of the site.</p>
                    </div>
                </div >
            </div >
        </section >
        <section className="py-24 bg-white tails-selected-element">
            <div className="max-w-3xl px-10 mx-auto xl:px-5">
                <div className="flex flex-col justify-center space-y-8">
                    <h2 className="w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl">Keep in touch!</h2>
                    <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-xl">Are you interested in OwlGrid? Enter your email address to stay informed of the product development!</p>
                    <div className="flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
                        <input type="text" className="flex-1 w-full px-5 py-5 text-2xl bg-gray-200 border border-gray-300 rounded-lg focus:ring-4 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Email Address"></input>
                        <a href="#_" className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none" data-primary="blue-600" data-rounded="rounded-lg">Sign Up</a>
                    </div>
                    <p className="text-gray-400">Your email address will not leave our servers.<br /></p>
                </div>
            </div>
        </section>
        <footer className="pb-6 pt-16 bg-white tails-selected-element">
            <div className="max-w-6xl xl:max-w-6xl mx-auto px-10 md:px-8">
                <ul className="text-sm font-medium pb-10  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs tracking-wide text-gray-900 uppercase font-bold">Product</h2>
                        <ul className="space-y-2 sm:space-y-4 text-md">
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Features</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Integrations</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Documentation</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">FAQs</a></li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs tracking-wide text-gray-900 uppercase font-bold">About</h2>
                        <ul className="space-y-2 sm:space-y-4">
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Company</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Privacy</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Blog</a></li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <h2 className="text-xs tracking-wide text-gray-900 uppercase font-bold">Resources</h2>
                        <ul className="space-y-2 sm:space-y-4">
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Help Center</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Developer API</a></li>
                            <li className=""><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Status</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Sitemap</a></li>
                        </ul>
                    </li>
                    <li className="space-y-5">
                        <h2 className="text-xs tracking-wide text-gray-900 uppercase font-bold">Social</h2>
                        <ul className="space-y-2 sm:space-y-4">
                            <li className=""><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Twitter</a></li>
                            <li><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Facebook</a></li>
                            <li className=""><a className="hover:text-gray-900 transition-colors duration-200 text-xl sm:text-2xl" href="/">Instagram</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-col-reverse justify-between pt-10 sm:pt-8 pb-4 border-t lg:flex-row bg-top border-gray-900">
                    <ul className="flex flex-col space-y-1 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li><a href="/" className="text-sm sm:text-base text-black transition-colors duration-300 font-semibold">Privacy Policy</a></li>
                        <li><a href="/" className="text-sm sm:text-base text-black transition-colors duration-300 font-semibold">Disclaimers</a></li>
                        <li><a href="/" className="text-sm sm:text-base text-black transition-colors duration-300 font-semibold">Terms &amp; Conditions</a></li>
                    </ul>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"><a href="/" className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight">© 2022 Tails.</a></ul>
                </div>
            </div>
        </footer>
    </>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
