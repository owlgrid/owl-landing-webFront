import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { BellIcon } from 'gthibaud-icons-react';
import React from 'react';
import { Text } from '../../../components/Text';

export const HeaderBanner = () => {
    return (
        <div className="relative py-5 z-20 flex items-center justify-center w-full overflow-hidden font-normal cursor-pointer bg-gradient-to-r from-indigo-500 via-blue-400 to-green-400 text-blue-50">
            <div className="relative flex items-center justify-center w-full h-full mx-auto max-w-7xl gap-3">
                <BellIcon size="small" fill="white" />
                <AnchorLink to="/#contact">
                    <Text style="bannerMessage">Click here to stay informed about the project</Text>
                </AnchorLink>
            </div>
        </div>
    );
};
