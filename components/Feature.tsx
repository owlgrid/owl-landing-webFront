import MuxPlayer from '@mux/mux-player-react';
import React from 'react';
import { ReactNode } from 'react';

interface Feature {
    heading: ReactNode;
    description: ReactNode;
    reversed?: boolean;
    src?: string;
    alt?: string;
}

export const Feature = ({ heading, description, reversed, src, alt }: Feature) => {
    return (
        <div
            className={`flex gap-8 lg:gap-16 items-center flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
            <div className="flex flex-col gap-4 md:gap-8 md:basis-2/3 lg:basis-1/2">
                <h2 className="text-primary">{heading}</h2>
                <p className="">{description}</p>
            </div>

            <div className="video-wrapper shrink">
                <MuxPlayer
                    streamType="on-demand"
                    playbackId={src}
                    autoPlay={true}
                    loop={true}
                    // @ts-ignore
                    style={{ width: '526px', height: '352px', '--controls': 'none' }}
                    metadata={{
                        video_id: alt,
                        video_title: alt
                    }}
                />
            </div>
        </div>
    );
};
