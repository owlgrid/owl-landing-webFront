import Image from 'next/image';

import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { ComputerDesktopIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import React from 'react';

const features = [
    {
        title: 'Database',
        src: '/resources/database.svg',
        alt: 'Database',
        href: '/',
    },
    {
        title: 'Workflows',
        src: '/resources/workflows.svg',
        alt: 'Workflows',
        href: '/',
    },
    {
        title: 'Hosting',
        src: '/resources/hosting.svg',
        alt: 'Hosting',
        href: '/',
    },
];

const technologies = [
    {
        title: 'gRPC',
        src: '/technologies/grpc.svg',
    },
    {
        title: 'Graphql',
        src: '/technologies/graphql.png',
    },
    {
        title: 'docker',
        src: '/technologies/docker.png',
    },
    {
        title: 'elephantsql.png',
        src: '/technologies/elephantsql.png',
    },
];

export const FrameworkDiagram = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 bg-[#5A55F5] rounded-lg px-8 py-4">
                <span className="text-white col-span-2 font-medium">Frontend</span>
                <div className="grid grid-cols-5 gap-4 flex-1 items-center justify-center">
                    <div className="col-span-5 md:col-span-1 md:col-start-4 flex gap-4 justify-center">
                        <DevicePhoneMobileIcon className="h-12 text-white" />
                        <ComputerDesktopIcon className="h-12 text-white" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-8 gap-y-8 md:gap-x-16 md:gap-y-12 bg-[#0D77FF] rounded-lg px-4 md:px-8 py-4">
                <div className="flex flex-col gap-2 items-center md:items-start col-span-8 lg:col-span-2">
                    <span className="text-white font-medium">Backend</span>
                    <span className="text-white font-light">OwlGrid</span>
                </div>

                <div className="flex flex-col gap-4 justify-center col-span-8 lg:col-span-6">
                    <div className="grid grid-cols-5 gap-4 items-center">
                        <p className="col-span-5 md:col-span-1 text-sm text-white font-light">
                            OwlGrid open-source framework
                        </p>
                        <div className="flex col-span-5 md:col-span-4 flex-1 bg-white rounded-lg py-4">
                            <div className="px-8 flex flex-col md:flex-row gap-8 w-full">
                                <div className="flex flex-col gap-4 items-center">
                                    <span className="font-semibold text-primary">Resources</span>
                                    <div className="grid grid-cols-4 gap-10">
                                        {features.map((elem, i) => (
                                            <div
                                                key={i}
                                                className="col-span-2 md:col-span-1 flex flex-col items-center gap-2"
                                            >
                                                <Image
                                                    src={elem.src}
                                                    alt={elem.alt}
                                                    width={52}
                                                    height={52}
                                                    className="h-12 w-12"
                                                />
                                                <span className="text-base font-medium text-primary">{elem.title}</span>
                                            </div>
                                        ))}
                                        <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2">
                                            <EllipsisHorizontalIcon className="h-12 w-12 text-primary" />
                                            <span className="text-base font-medium text-primary">& more</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-2/3 h-[2px] md:h-2/3 md:w-[2px] bg-gray-300 self-center"></div>
                                <div className="flex flex-col gap-4 items-center">
                                    <span className="font-semibold text-primary">Templates</span>
                                    <div className="flex flex-col items-center gap-2">
                                        <Image
                                            src="/resources/database.svg"
                                            alt="templates icon"
                                            width={52}
                                            height={52}
                                            className="h-12 w-12"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 items-center">
                        <p className="col-span-5 md:col-span-1 text-sm text-white font-light">
                            OwlGrid open-source technologies
                        </p>
                        <div className="col-span-5 md:col-span-4  bg-white rounded-lg py-4 ">
                            <div className="grid grid-cols-4 gap-3 md:gap-6 justify-center md:px-16">
                                {technologies.map((elem, i) => (
                                    <div
                                        key={i}
                                        className={`col-span-2 md:col-span-1 flex flex-col items-center gap-2 ${
                                            i % 2 && i > 0 ? 'md:mt-4' : ''
                                        }`}
                                    >
                                        <Image
                                            src={elem.src}
                                            alt={elem.title}
                                            width={52}
                                            height={52}
                                            className="h-12 w-12"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-8  gap-y-6 md:gap-x-16 md:gap-y-12 bg-[#03BEFE] rounded-lg px-4 md:px-8 py-4">
                <span className="col-span-8 md:col-span-2 text-white font-medium text-center md:text-left">
                    Cloud servers
                </span>

                <div className="col-span-8 md:col-span-6 grid grid-cols-5 gap-4">
                    <div className="col-span-5 col-start-1 md:col-span-4 md:col-start-2 flex gap-6 bg-white rounded-lg py-4 justify-center">
                        <div className="flex items-center gap-8">
                            <Image
                                src="/technologies/aws.svg"
                                alt="aws logo"
                                width={304}
                                height={182}
                                className="w-16"
                            />
                            <div className="h-full w-[2px] bg-gray-200"></div>
                            <Image
                                src="/technologies/ovh.svg"
                                alt="aws logo"
                                width={270}
                                height={172}
                                className="w-16"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
