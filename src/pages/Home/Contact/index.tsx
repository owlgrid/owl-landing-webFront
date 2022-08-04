import React from 'react';

export const Contact = () => {
    return (
        <section className="py-24 bg-white tails-selected-element" id="contact">
            <div className="max-w-3xl px-10 mx-auto xl:px-5">
                <div className="flex flex-col justify-center space-y-8">
                    <h2 className="w-full mx-auto text-4xl font-bold leading-none text-left text-gray-800 sm:text-5xl md:text-7xl">
                        Keep in touch!
                    </h2>
                    <p className="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-xl">
                        Are you interested in OwlGrid? Enter your email address to stay informed of the product
                        development!
                    </p>
                    <div className="flex flex-col w-full mx-auto space-y-5 md:space-y-0 md:space-x-5 md:flex-row">
                        <input
                            type="text"
                            className="flex-1 w-full px-5 py-5 text-2xl bg-gray-200 border border-gray-300 rounded-lg focus:ring-4 focus:border-blue-600 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none"
                            data-primary="blue-600"
                            data-rounded="rounded-lg"
                            placeholder="Email Address"
                        ></input>
                        <a
                            href=""
                            className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none"
                            data-primary="blue-600"
                            data-rounded="rounded-lg"
                        >
                            Sign Up
                        </a>
                    </div>
                    <p className="text-gray-400">
                        Your email address will not leave our servers.
                        <br />
                    </p>
                </div>
            </div>
        </section>
    );
};
