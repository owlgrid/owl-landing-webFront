import Image from 'next/image';

export default function Feature(props) {
    return (
        <div
            className={`flex gap-4 md:gap-8 lg:gap-16 items-center flex-col-reverse ${
                props.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
        >
            <div className="flex flex-col gap-4 md:gap-8 md:basis-2/3 lg:basis-1/2">
                <h2 className="text-primary">{props.heading}</h2>
                <p className="">{props.description}</p>
            </div>
            <Image src={props.src} alt={props.alt} width={527} height={351} className="object-cover shrink" />
        </div>
    );
}
