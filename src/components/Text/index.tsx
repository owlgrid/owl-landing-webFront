import React, { ReactElement } from 'react';
import parse from 'html-react-parser';
import { documentGlobal, windowGlobal } from "../../utils/environment";
import { AnchorLink } from "gatsby-plugin-anchor-links";

type TextProps = {
    style:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'a'
    | 'headerLine1'
    | 'headerLine3'
    | 'link'
    | 'bannerMessage'
    | 'anchor';
    align?: 'left' | 'center' | 'right';
    children: ReactElement | string;
    url?: string;
};

const generateTextAlign = (align: TextProps['align']): string => 'text-' + (align ? align : 'left');

const generateHtmlTag = (style: TextProps['style']): string => {
    switch (style) {
        case 'headerLine1':
            return 'h4';
        case 'headerLine3':
            return 'h5';
        case 'bannerMessage':
            return 'p';
        case 'link':
            return 'a';
        case 'anchor':
            return 'p';
        default:
            return style;
    }
};

const generateClasses = (style: TextProps['style']): string => {
    switch (style) {
        case 'h1':
            return 'w-full mb-8 text-4xl font-bold text-black-800 sm:w-auto sm:text-center sm:text-6xl lg:text-8xl md:mb-12';
        case 'headerLine1':
            return 'w-full mb-4 font-semibold text-indigo-500 md:text-lg sm:text-center sm:w-auto xl:text-xl md:mb-6';
        case 'headerLine3':
            return 'max-w-xl mb-8 leading-relaxed text-left text-gray-500 xl:text-xl sm:text-center md:mb-12';
        case 'link':
            return 'text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500';
        case 'anchor':
            return 'text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500';
        case 'bannerMessage':
            return 'white sm:text-s';
        default:
            return style;
    }
};

// si un # et que l'url de la page actuelle (sans le #) est le même que l'url à pointer, on utilise un hashlink
const hashLink = (url: string | undefined) => (windowGlobal() && !external && url && url.includes('#') && url.split('#')[0] === window.location.pathname) || false;

const generateClass = (
    style: TextProps['style'],
    align: TextProps['align'],
    children: TextProps['children'],
    url: TextProps['url'],
) =>
    parse(
        // `${hashLink(url) && `<HashLink to="${url}">`}` +
        `<${generateHtmlTag(style)} ` +
        `className="${generateClasses(style)} ` +
        `${generateTextAlign(align)}" ` +
        `${url && ' href="' + url + '"'}>` +
        `${children}` +
        `</${generateHtmlTag(style)}>`
        // `${hashLink(url) && `</HashLink>`}`
    );

export const Text = ({ style, align, children, url }: TextProps): ReactElement => {
    return <>{generateClass(style, align, children, url)}</>
};
