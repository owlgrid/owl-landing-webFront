import React from 'react';

export const Workflows = () => {
    return (
        <section className="w-full px-8 pt-20 pb-16 bg-white xl:px-0 tails-selected-element">
            <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">img</div>
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
                    <h3 className="w-full text-2xl font-bold tracking-normal text-gray-800 sm:text-2xl md:text-4xl leading-none">
                        ⚙️ Everything is a workflow.
                    </h3>
                    <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl">
                        A workflow is:
                        <ul>
                            <li>a trigger</li>
                            <li>a set of actions</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
};
