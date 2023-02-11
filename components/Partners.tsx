import React from 'react';
import { Button } from './Button';

export const Partners = () => {
    return (
        <section className="wrapper max-w-5xl" id="partners">
            <div className="block h-[1px] w-full bg-gray-300 my-10"></div>
            <div className="flex flex-col items-center justify-center gap-4">
            <img src="/partners/ovhcloud.png" alt="OVHCloud Startup Program 2023" width="300" height="300" />
                <p className="subtitle sm:text-center sm:max-w-2xl sm:mx-auto">
                    OwlGrid is proud to be a member of OVHCloud Startup Program 2023.
                </p>
            </div>
            <div className="block h-[1px] w-full bg-gray-300 my-10"></div>
        </section>
    );
}
