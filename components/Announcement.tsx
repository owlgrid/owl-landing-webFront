import { BellIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Link from 'next/link';

export const Announcement = () => {
    return (
        <Link href="#contact">
            <div className="primary-gradient flex justify-center items-center gap-4 py-4 text-white">
                <BellIcon className="h-6 w-6" />
                <p className="text-base sm:text-center text-white font-medium text-lg">Click here to stay informed about the project!</p>
            </div>
        </Link>
    );
};
