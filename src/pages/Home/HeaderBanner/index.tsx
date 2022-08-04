import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { Text } from '../../../components/Text';

export const HeaderBanner = () => {
    return (
        <div className="relative pt-6 pb-6 z-20 flex items-center justify-center w-full overflow-hidden font-normal cursor-pointer bg-gradient-to-r from-indigo-500 via-blue-400 to-green-400 text-blue-50">
            <div className="relative flex items-center justify-center w-full h-full mx-auto max-w-7xl">
                <svg
                    className="w-4 h-4 mr-1 text-blue-100 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        className=""
                    ></path>
                </svg>
                <AnchorLink to="/#contact">
                    <Text style="bannerMessage">Click here to stay informed about the project</Text>
                </AnchorLink>
            </div>
        </div>
    );
};
