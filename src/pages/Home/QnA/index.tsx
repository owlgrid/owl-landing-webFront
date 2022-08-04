import React from 'react';

export const QnA = () => {
    return (
        <section className="py-24 bg-gray-50 tails-selected-element" data-tails-scripts="//unpkg.com/alpinejs" id="about">
            <div className="max-w-4xl px-8 mx-auto lg:px-16">
                <h2 className="mb-2 text-xl font-bold text-center md:text-3xl">Frequently Asked Questions</h2>
                <div className="relative mt-2 mt-12 space-y-5">
                    <div
                        x-data="{ show: false }"
                        className="relative overflow-hidden border-2 border-gray-200 rounded-lg select-none hover:bg-white"
                    >
                        <h4 className="flex items-center justify-between text-lg font-medium text-gray-700 cursor-pointer sm:text-xl px-7 py-7 hover:text-gray-800">
                            <span className="">Where do I go to upgrade my account?</span>
                            <svg
                                className="w-6 h-6 transition-all duration-200 ease-out transform rotate-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                            </svg>
                        </h4>
                        <p className="pt-0 -mt-2 text-gray-400 sm:text-lg py-7 px-7">
                            You can upgrade your account by visiting The Pro Upgrade Page. You will also gain access to
                            many other applications and sections of the site.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
