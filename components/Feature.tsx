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
            <div className="flex flex-col gap-4 md:gap-8 basis-full md:basis-1/2">
                <h2 className="text-primary">{heading}</h2>
                <p>{description}</p>
            </div>

            <div className="video-wrapper basis-full md:basis-1/2">
                <MuxPlayer
                    streamType="on-demand"
                    playbackId={src}
                    // autoPlay
                    autoPlay={true}
                    loop={true}
                    // loop
                    muted
                    // @ts-ignore
                    style={{ aspectRatio: "263 / 176", '--controls': 'none' }}
                    metadata={{
                        video_id: alt,
                        video_title: alt
                    }}
                    className="w-full min-h-[100px] h-full md:w-auto"
                />
            </div>
        </div>
    );
};
