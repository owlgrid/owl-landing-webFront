import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TiltingBox } from './TiltingBox';

interface CardProps {
    src: string;
    alt: string;
    title: string;
    description: string;
    href: string;
}

export const Card = ({ href, src, alt, title, description }: CardProps) => {
    return (
        <TiltingBox max={6}>
            <Link href={href}>
                <div className="bg-white h-full p-8 rounded-2xl space-y-6 shadow-2xl hover:shadow-2xl transition duration-150">
                    <Image src={src} alt={alt} width={52} height={52} className="h-12 w-12" />
                    <div className="space-y-2">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-description">{description}</p>
                    </div>
                </div>
            </Link>
        </TiltingBox>
    );
};
