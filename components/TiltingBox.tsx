import { FC, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltingBoxProps {
    children: React.ReactNode;
    glare?: boolean;
    className?: string;
    [key: string]: any;
}

export const TiltingBox: FC<TiltingBoxProps> = (props) => {
    const { glare, max, ...rest } = props;
    const options = {
        scale: 1.02,
        speed: 1000,
        max: max ? max :1,
        perspective: 500,
        maxGlare: 0.01,
        glare: glare ? true : false,
        fullPageListening: true,
        gyroscope: true,
    };

    const tilt = useRef(null);

    useEffect(() => VanillaTilt.init(tilt.current || "", options), [options]);

    //   <div data-tilt data-tilt-max="1" data-tilt-speed="400" data-tilt-perspective="500" data-tilt-max-glare="0.8" data-tilt-full-page-listening>

    //        <div data-tilt data-tilt-max="10" data-tilt-speed="400" data-tilt-perspective="500" data-tilt-max-glare="0.8">


    return <div ref={tilt} {...rest} />;
}