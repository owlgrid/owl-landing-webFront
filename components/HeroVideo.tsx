import React, { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { TiltingBox } from './TiltingBox';

interface HeroVideoProps {
    thumbnailSrc: string;
    thumbnailLargeSrc: string;
    altText: string;
    videoSrc: string;
}

export const HeroVideo: FC<HeroVideoProps> = ({ thumbnailSrc, thumbnailLargeSrc: thumbnailLargeSrc, altText: thumbnailAlt, videoSrc }) => {
    const [open, setOpen] = React.useState(false);
    const [videoSrcToPlay, setVideoSrcToPlay] = React.useState<string | undefined>(undefined);

    const handleClickOpen = () => {
        setOpen(true);
        setVideoSrcToPlay(videoSrc);
    };

    const handleClose = () => {
        setOpen(false);
        setVideoSrcToPlay(undefined);
    };

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: 100 }}
                open={open}
                onClick={handleClose}
            >
                <iframe
                    width="90%"
                    style={{ maxWidth: '90%', maxHeight: '90%', aspectRatio: '16/9' }}
                    allowFullScreen={true}
                    src={videoSrcToPlay}
                    className="rounded-lg"
                >
                </iframe>
            </Backdrop>
            <div className="mt-8">
                <img
                    src={thumbnailSrc}
                    alt={thumbnailAlt}
                    className="block md:hidden w-full cursor-pointer scale-100 hover:scale-105 transition duration-300 ease-in-out shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
                    onClick={handleClickOpen}
                />
                <div className='relative'>
                    <img
                        src={"/thumbnail/thumbnail-large-layer-2.png"}
                        alt={thumbnailAlt}
                        className="hidden md:block w-full cursor-pointer relative z-10"
                        onClick={handleClickOpen}
                    />
                    <TiltingBox className="absolute top-0 left-0" data-tilt-full-page-listening>
                        <img
                            src={"/thumbnail/thumbnail-large-layer-1.png"}
                            alt={thumbnailAlt}
                            className="hidden md:block w-full cursor-pointer shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]"
                            onClick={handleClickOpen}
                        />
                    </TiltingBox>
                </div>
            </div>
        </>
    );
};
