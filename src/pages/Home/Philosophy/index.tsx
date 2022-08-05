import React from 'react';
import { Text } from '../../../components/Text';

export const Philosphy = () => {
    return (
        <section
            className="w-full px-8 pt-20 pb-16 bg-white xl:px-0 tails-selected-element px-20 mx-auto max-w-7xl"
            id="philosophy"
        >
            <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
                    <Text style="h3">A better way of doing cloud.</Text>
                </div>
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
                    <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl">
                        The path of IT is to evolve towards ever more "high level" solutions, which means simpler and
                        faster to use.
                        <br />
                        <br />
                        The way of doing cloud has evolved over the last few years: from a server in the garage to
                        delegated management, to code as a service, etc.
                        <br />
                        <br />
                        OwlGrid brings the new evolution with a new approach to the cloud, based on a better developer
                        experience. We have masked the complexity of resource management with highly functional
                        high-level services.
                    </p>
                </div>
            </div>
        </section>
    );
};
