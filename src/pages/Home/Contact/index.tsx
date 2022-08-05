import React from 'react';
import { Text } from '../../../components/Text';

export const Contact = () => {
    return (
        <section className="py-24 bg-white tails-selected-element px-12 mx-auto" id="contact">
            <div className="flex flex-col justify-center space-y-8 items-center">
                <Text style="h2" align='center'>
                    Stay in touch!
                </Text>
                <Text style="headerLine3" align='center'>
                    Are you interested in OwlGrid? Follow our journey on LinkedIn to stay informed of the product
                    development!
                </Text>
                <a
                    href="https://www.linkedin.com/company/owlgrid/"
                    target='_blank'
                    className="flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none"
                    data-primary="blue-600"
                    data-rounded="rounded-lg"
                >
                    LinkedIn — OwlGrid
                </a>
                <Text style='p' customStyle='text-gray-400'>
                    Or contact us on <a href="mailto:hello@creastel.com">hello@creastel.com</a>.
                </Text>
            </div>
        </section>
    );
};
