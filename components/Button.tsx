import Link from 'next/link';
import React from 'react';
import { ReactNode } from 'react';

interface ButtonProps {
    [x: string]: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    xl?: boolean;
    href: string;
    target?: string;
}

export const Button = ({ primary, secondary, tertiary, xl, href, target, children }: ButtonProps) => {
    let btnVariant = '';
    if (primary) {
        btnVariant = 'text-white btn-primary-gradient hover:brightness-110';
    } else if (secondary) {
        btnVariant = 'text-gray-500 bg-white ring-1 ring-gray-500/50 hover:bg-gray-50 hover:text-primary';
    } else if (tertiary) {
        btnVariant = 'bg-white';
    }
    let btnSize = 'px-6 py-3 text-sm font-semibold';
    if (xl) {
        btnSize = 'px-10 py-5 text-2xl';
    }

    return (
        <Link
            href={href}
            scroll={false}
            target={target}
            className={`flex items-center gap-2 rounded-md leading-6 transition duration-150 shadow-sm hover:shadow-md ${btnVariant} ${btnSize}`}
        >
            {children}
        </Link>
    );
};
