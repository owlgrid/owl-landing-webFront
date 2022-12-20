import Link from 'next/link';

const navigation = [
    { name: 'Value', href: '#value' },
    { name: 'Features', href: '#features' },
    { name: 'App builders', href: '#app-builders' },
    { name: 'About', href: '#contact' },
];
const contact = [
    { name: 'Contact', href: '#contact' },
    { name: 'Email', href: 'mailto:hello@creastel.com' },
];
const resources = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/owlgrid/' },
    { name: 'Github', href: 'http://github.com/owlgrid' },
];

export default function Footer(props) {
    return (
        <footer className="wrapper py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10">
                <div className="space-y-4">
                    <span className="footer-section-title">HOME</span>
                    <ul className="flex flex-col gap-3">
                        {navigation.map((elem, i) => (
                            <li
                                key={i}
                                className="footer-section-link"
                            >
                                <Link href={elem.href} scroll={false}>
                                    {elem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <span className="footer-section-title">CONTACT</span>
                    <ul className="flex flex-col gap-2">
                        {contact.map((elem, i) => (
                            <li
                                key={i}
                                className="footer-section-link"
                            >
                                <Link href={elem.href}>{elem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <span className="footer-section-title">RESOURCES</span>
                    <ul className="flex flex-col gap-2">
                        {resources.map((elem, i) => (
                            <li
                                key={i}
                                className="footer-section-link"
                            >
                                <Link href={elem.href} target="_blank">{elem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-y-4features justify-between mt-10 pt-10 sm:pt-8 pb-4 border-t lg:flex-row bg-top border-gray-800">
                <ul className="flex flex-col space-y-1 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li className="footer-legal-link">
                        <Link href="https://legals.creastel.com" target="_blank">
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="footer-legal-link">
                        <Link href="https://legals.creastel.com" target="_blank">
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li className="footer-legal-link">
                        <Link href="https://owlgrid.com" target="_blank">
                            © 2022 OwlGrid
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
