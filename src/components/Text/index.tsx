import React, { ReactElement } from 'react';
import parse, { Element } from 'html-react-parser';

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
        | 'anchor'
        | 'anchorActive'
        | 'footerSectionTitle'
        | 'footerSectionLink'
        | 'footerBottomLink'
        | 'cardTitle'
        | 'cardDescription';
    align?: 'left' | 'center' | 'right';
    children: ReactElement | string;
    url?: string;
    customStyle?: string;
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
        case 'cardTitle':
            return 'p';
        case 'cardDescription':
            return 'p';
        default:
            return style;
    }
};

const generateClasses = (style: TextProps['style']): string => {
    switch (style) {
        case 'h1':
            return 'w-full mb-8 text-4xl font-bold text-black-800 sm:w-auto sm:text-center text-5xl lg:text-8xl md:mb-12';
        case 'h2':
            return 'w-full mx-auto text-4xl font-bold leading-none text-gray-800 sm:text-5xl md:text-5xl';
        case 'h3':
            return 'w-full text-2xl font-bold tracking-normal text-gray-800 sm:text-2xl md:text-4xl leading-none';
        case 'p':
            return 'col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl';
        case 'headerLine1':
            return 'w-full mb-8 font-semibold text-indigo-500 text-xl sm:text-center sm:w-auto';
        case 'headerLine3':
            return 'max-w-xl font-medium mb-8 text-left text-gray-500 text-xl sm:text-center md:mb-12 leading-normal';
        case 'link':
            return 'text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500';
        case 'anchor':
            return 'text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500';
        case 'anchorActive':
            return 'text-lg font-semibold text-indigo-500';
        case 'bannerMessage':
            return 'white sm:text-s';
        case 'cardTitle':
            return 'font-bold text-gray-700 text-xl leading-normal';
        case 'cardDescription':
            return 'text-md leading-5 text-gray-500 leading-normal';
        case 'footerSectionTitle':
            return 'text-xs tracking-wide text-gray-500 uppercase font-bold';
        case 'footerSectionLink':
            return 'hover:text-gray-500 text-gray-900 transition-colors duration-200 text-xl';
        case 'footerBottomLink':
            return 'text-sm sm:text-base text-black transition-colors duration-300 font-semibold';
        default:
            return style;
    }
};

const parser = (input: string, children: any) =>
    parse(input, {
        replace: (domNode) => {
            if (domNode instanceof Element && domNode.attribs.class === 'children') {
                return <>{children}</>;
            }
        },
    });

const generateClass = (
    style: TextProps['style'],
    align: TextProps['align'],
    children: TextProps['children'],
    url: TextProps['url'],
    customStyle: TextProps['customStyle'],
) =>
    parser(
        `<${generateHtmlTag(style)} ` +
            `className="${generateClasses(style)} ${customStyle || ''}` +
            ` ${generateTextAlign(align)}" ` +
            ` ${url && ' href="' + url + '"'}>` +
            ` <br class="children">` +
            ` </${generateHtmlTag(style)}>`,
        children,
    );

export const Text = ({ style, align, children, url, customStyle }: TextProps): ReactElement => {
    return <>{generateClass(style, align, children, url, customStyle)}</>;
};
