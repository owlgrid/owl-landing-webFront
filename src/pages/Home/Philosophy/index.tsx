import React from 'react';
import Text from '../../../components/Text';

const Philosphy = () => {
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
                    <Text style="p">
                        The path of IT is to evolve towards ever more "high level" solutions, which means{' '}
                        <b>more functional, simpler and faster</b> to use.
                        <br />
                        <br />
                        The way of doing cloud has evolved over the last few years: from a server in the garage to
                        delegated management, to code as a service, etc.
                        <br />
                        <br />
                        OwlGrid brings the next cloud evolution with a simplier approach, bringing a better developer
                        experience. OwlGrid platform features a workflow tool that perform actions on resources.
                    </Text>
                </div>
            </div>
        </section>
    );
};

export default Philosphy;