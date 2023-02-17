import React from 'react';
import { Button } from './Button';
import { TiltingBox } from './TiltingBox';

export const CTA = () => {
    return (
        <section className="wrapper pt-24 pb-8 max-w-5xl" id="contact">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-primary text-center">Stay in touch!</h2>
                <p className="subtitle sm:text-center sm:max-w-2xl sm:mx-auto">
                    Are you interested in OwlGrid? Follow our journey on LinkedIn to stay informed of the product
                    development!
                </p>
            </div>

            <div className="flex justify-center my-12">
                <TiltingBox max={10}>
                    <Button href="https://www.linkedin.com/company/owlgrid/" target="_blank" primary xl>
                        LinkedIn — OwlGrid
                    </Button>
                </TiltingBox>
            </div>
            <p className="subtitle text-center">
                Or contact us on{' '}
                <a href="mailto:hello@owlgrid.com" className="hover:underline">
                    hello@owlgrid.com
                </a>
                .
            </p>
        </section>
    );
};
