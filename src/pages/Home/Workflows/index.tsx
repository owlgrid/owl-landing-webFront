import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const Workflows = () => {
    return (
        <section className="w-full px-8 pt-4 pb-16 bg-white xl:px-0 tails-selected-element px-20 mx-auto max-w-7xl">
            <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
                    <h3 className="w-full text-2xl font-bold tracking-normal text-gray-800 sm:text-2xl md:text-4xl leading-none">
                        Everything is a workflow.
                    </h3>
                    <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl">
                        Our approach is workflow oriented. Each process that takes place is composed of an event (for example an API call or a date) that triggers a series of actions on resources: create a new object in a database, perform a verification with machine learning, send a confirmation email, etc. OwlGrid provides its users with a workflow engine with a catalog of serverless applications.
                        <br /><br />
                        Here are some resources that are going to be included <i>as a service</i>:
                    </p>
                </div>
                <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0 lg:px-20 sm:px-20 md:px-10">
                    <StaticImage
                        src='./../../../images/workflow.jpg'
                        alt='Workflows'
                        placeholder="blurred"
                        layout="fullWidth"
                    />
                </div>
            </div>
        </section>
    );
};
