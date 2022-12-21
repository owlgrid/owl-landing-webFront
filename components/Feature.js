import MuxPlayer from "@mux/mux-player-react";

export default function Feature(props) {
    return (
        <div
            className={`flex gap-8 lg:gap-16 items-center flex-col ${props.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
        >
            <div className="flex flex-col gap-4 md:gap-8 md:basis-2/3 lg:basis-1/2">
                <h2 className="text-primary">{props.heading}</h2>
                <p className="">{props.description}</p>
            </div>

            <div className='video-wrapper shrink'>
                <MuxPlayer
                    streamType="on-demand"
                    playbackId="901nimvnfEhWgfR4ca45EmPuE63F007A8lM1JCZVVkfSc"
                    autoPlay={true}
                    loop={true}
                    style={{ width: '526px', height: '352px', "--controls": "none" }}
                    metadata={{
                        video_id: "video-id-54321",
                        video_title: "Test video title",
                        viewer_user_id: "user-id-007",
                    }}
                />
            </div>
        </div>
    );
}
