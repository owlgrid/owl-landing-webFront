import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const navigation = [
    { name: 'Value', href: '#value' },
    { name: 'Features', href: '#features' },
    { name: 'App builders', href: '#app-builders' },
    { name: 'About', href: '#contact' },
];

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="">
            <div className="px-6 py-3 max-w-6xl mx-auto lg:flex lg:flex-col lg:items-center">
                <div className="">
                    <nav
                        className="inline-flex w-full items-center justify-between lg:justify-between gap-4 lg:gap-x-28"
                        aria-label="Global"
                    >
                        <Link href="/" className="flex justify-center items-center gap-2" aria-label="Global">
                            <span className="sr-only">OwlGrid</span>
                            <Image className="" src="/logo_w_text.svg" alt="OwlGrid logo" width={164} height={54} />
                        </Link>

                        <div className="flex order-last lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:justify-center lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    scroll={false}
                                    className="text-title text-gray-500 hover:text-purple transition duration-150 text-lg font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden sm:flex flex-1 justify-end lg:flex-none lg:justify-start">
                            <Link
                                href="#contact"
                                className="btn text-gray-500 bg-[#F1F2F4] hover:bg-gray-200 hover:text-gray-900 transition duration-150 shadow-sm text-lg font-medium"
                            >
                                Stay in touch
                            </Link>
                        </div>
                        {/* divider */}
                    </nav>
                    {/* bottom divider */}
                    <div className="hidden lg:block h-[1px] w-full bg-gray-300 my-3 xl:mb-3"></div>
                </div>

                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel
                        className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
                    >
                        <div className="flex h-9 items-center justify-between">
                            <div className="flex">
                                <Link href="/" className="flex justify-center items-center gap-2" aria-label="Global"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">OwlGrid</span>
                                    <Image className="h-12" src="/logo_w_text.svg" alt="OwlGrid logo" width={160} height={54} />
                                </Link>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-lg py-2 px-3 text-title font-medium leading-7 text-gray-800 hover:bg-gray-400/10 text-lg"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="#contact"
                                        className="btn font-medium flex justify-center text-gray-500 bg-[#F1F2F4] hover:bg-gray-200 hover:text-gray-800 text-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Stay in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </header>
    );
};
