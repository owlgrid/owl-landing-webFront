import React from 'react';
import { Text } from '../../../components/Text';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';

export const Footer = () => {
    return (
        <footer className="pb-6 pt-16 px-12 mx-auto max-w-7xl bg-white tails-selected-element">
            <div className="max-w-6xl xl:max-w-6xl mx-auto md:px-8">
                <ul className="text-sm font-medium pb-10  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
                    <li className="space-y-5 row-span-2">
                        <Text style="footerSectionTitle">Home</Text>
                        <ul className="space-y-2 sm:space-y-4 text-md">
                            <li>
                                <AnchorLink to="/#top">
                                    <Text style="footerSectionLink">Home</Text>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink to="/#philosophy">
                                    <Text style="footerSectionLink">Philosophy</Text>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink to="/#features">
                                    <Text style="footerSectionLink">Features</Text>
                                </AnchorLink>
                            </li>
                            <li>
                                <AnchorLink to="/#about">
                                    <Text style="footerSectionLink">About</Text>
                                </AnchorLink>
                            </li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <Text style="footerSectionTitle">Contact</Text>
                        <ul className="space-y-2 sm:space-y-4 text-md">
                            <li>
                                <AnchorLink to="/#contact">
                                    <Text style="footerSectionLink">Contact</Text>
                                </AnchorLink>
                            </li>
                            <li>
                                <Link to="mailto:hello@creastel.com">
                                    <Text style="footerSectionLink">Email</Text>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="space-y-5 row-span-2">
                        <Text style="footerSectionTitle">Resources</Text>
                        <ul className="space-y-2 sm:space-y-4 text-md">
                            <li>
                                <Link to="https://www.linkedin.com/company/owlgrid/" target="_blank">
                                    <Text style="footerSectionLink">LinkedIn</Text>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://github.com/owlgrid" target="_blank">
                                    <Text style="footerSectionLink">Github</Text>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="flex flex-col-reverse justify-between pt-10 sm:pt-8 pb-4 border-t lg:flex-row bg-top border-gray-800">
                    <ul className="flex flex-col space-y-1 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <Link to="https://legals.creastel.com" target="_blank">
                                <Text style="footerBottomLink">Privacy Policy</Text>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://legals.creastel.com" target="_blank">
                                <Text style="footerBottomLink">Terms & Conditions</Text>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <Link to="https://owlgrid.com" target="_blank">
                                <Text style="footerBottomLink">© 2022 OwlGrid</Text>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
