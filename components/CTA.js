import Button from './Button';

export default function CTA(props) {
    return (
        <section className="wrapper py-24 max-w-5xl">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-primary text-center">Stay in touch!</h2>
                <p className="subtitle sm:text-center sm:max-w-2xl sm:mx-auto">
                    Are you interested in OwlGrid? Follow our journey on LinkedIn to stay informed of the product
                    development!
                </p>
            </div>

            <div className="flex justify-center my-12">
                <Button href="/" primary xl>
                    LinkedIn — OwlGrid
                </Button>
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
}
