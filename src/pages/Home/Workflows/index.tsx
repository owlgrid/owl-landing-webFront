import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Text from '../../../components/Text';

const Workflows = () => {
    return (
        <section className="w-full px-8 md:py-16 bg-white xl:px-0 tails-selected-element pt-0 pb-16 px-20 mx-auto max-w-7xl">
            <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
                    <Text style="h3">Everything is a workflow.</Text>
                    <Text style="p">
                        OwlGrid's approach is based on <b>workflows</b>.
                        <br />
                        <br />
                        Each process that happens is composed of an event (for example an API call or a date) that
                        triggers a series of actions on resources: create a new object in a database, perform a
                        verification with machine learning, send a confirmation email, etc. OwlGrid provides a workflow
                        engine and a catalog of fully-managed resources.
                        <br />
                        <br />
                        Here are some resources included <i>as a service</i> by OwlGrid:
                    </Text>
                </div>
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0 lg:px-20 sm:px-20 md:px-10">
                    <StaticImage
                        src="./../../../images/workflow.jpg"
                        alt="Workflows"
                        placeholder="blurred"
                        layout="fullWidth"
                    />
                </div>
            </div>
        </section>
    );
};

export default Workflows;