import React, { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';

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
            <img
                src={thumbnailSrc}
                alt={thumbnailAlt}
                className="block sm:hidden w-full cursor-pointer scale-100 hover:scale-105 transition duration-300 ease-in-out mt-8"
                onClick={handleClickOpen}
            />
            <img
                src={thumbnailLargeSrc}
                alt={thumbnailAlt}
                className="hidden md:block w-full cursor-pointer scale-100 hover:scale-105 transition duration-300 ease-in-out mt-8"
                onClick={handleClickOpen}
            />
        </>
    );
};
