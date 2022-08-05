import React from 'react';
import { Feature } from './Feature';
import { Text } from '../../../components/Text';
import {
    ArrowSwitchIcon,
    ChecklistIcon,
    CodeIcon,
    CommentIcon,
    DatabaseIcon,
    GlobeIcon,
    GraphIcon,
    PeopleIcon,
} from 'gthibaud-icons-react';

export const Features = () => {
    const features = [
        {
            title: 'Database',
            description: 'Store and manipulate data using a meta-schema and specific write rules.',
            icon: <DatabaseIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'API Connector',
            description: 'Connect to external APIs and to retrieve data or execute processes.',
            icon: <ArrowSwitchIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'Access management',
            description: 'Easily and precisely manage users, groups and rights to consume resources.',
            icon: <PeopleIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'Form',
            description: 'Create and share forms to collect manual data from users.',
            icon: <ChecklistIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'Function',
            description: 'Develop and execute custom functions with code.',
            icon: <CodeIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'Messages',
            description: 'Collect, send, share real-time events across resources.',
            icon: <CommentIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'Monitoring',
            description: 'Get a 360° overview at any time of your applications usage.',
            icon: <GraphIcon fill="#6366f1" size={22} />,
        },
        {
            title: 'Web hosting',
            description: 'Host web applications and websites that scales around the globe.',
            icon: <GlobeIcon fill="#6366f1" size={22} />,
        },
    ];

    return (
        <section className="bg-gray-100 tails-selected-element relative" id="features">
            <div className="absolute inset-0 w-screen h-full pb-20 transform">
                <img
                    src="https://cdn.devdojo.com/images/march2021/bg-gradient.png"
                    className="absolute left-0 object-cover w-full h-full rotate-180"
                />
            </div>
            <div className="relative px-12 py-10 ml-auto mr-auto bg-top bg-cover sm:py-12 max-w-7xl md:px-24 lg:px-16 lg:py-16 flex flex-col">
                <Text style="h3" customStyle="text-white mb-12" align="center">
                    Ready-to-use resources:
                </Text>
                <div className="relative grid gap-6 bg-top bg-cover sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <Feature title={feature.title} description={feature.description} icon={feature.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};
