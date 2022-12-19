import Image from "next/image";
import Link from "next/link";

export default function Card(props){
    return(
        <Link href={props.href}>
            <div className='bg-white h-full p-8 rounded-2xl space-y-6 shadow-md hover:shadow-2xl transition duration-150'>
            <Image src={props.src} alt={props.alt} width={52} height={52}
                className="h-12 w-12"  
            />
            <div className='space-y-2'>
                <h3 className='text-primary'>{props.title}</h3>
                <p className='text-base'>{props.description}</p>
            </div>
            </div>
        </Link>
    );
}