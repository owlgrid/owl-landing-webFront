import React from 'react';
import { Announcement } from './Announcement';
import { Header } from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Announcement />
            <Header />
            <div className="overflow-x-hidden container mx-auto max-w-6xl px-6 py-3 ">{children}</div>
        </>
    );
};
