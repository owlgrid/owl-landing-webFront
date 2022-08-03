import React, { ReactElement } from 'react';
import parse from 'html-react-parser';

type TextProps = {
    style: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a' | 'bigText';
    align?: 'left' | 'center' | 'right';
    children: ReactElement | string;
};

const generateTextAlign = (align: TextProps['align']): string => "text-" + (align ? align : 'left');

const generateHtmlTag = (style: TextProps['style']): string => {
    switch (style) {
        case 'bigText':
            return 'h1';
        default:
            return style;
    }
};

const generateClasses = (style: TextProps['style']): string => {
    switch (style) {
        case 'h1':
            return 'w-full mb-8 text-4xl font-bold text-black-800 sm:w-auto sm:text-center sm:text-6xl lg:text-8xl md:mb-12';
        default:
            return style;
    }
};

const generateClass = (style: TextProps['style'], align: TextProps['align'], children: TextProps['children']) => parse(`<${generateHtmlTag(style)} className="${generateClasses(style)} ${generateTextAlign(align)}">${children}</${generateHtmlTag(style)}>`);

export const Text = ({ style, align, children }: TextProps): ReactElement => {

    return <>{generateClass(style, align, children)}</>;
};