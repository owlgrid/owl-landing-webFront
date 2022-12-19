import { BellIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function Announcement(props){
    return(
        <Link href="/">
            <div className="primary-gradient flex justify-center items-center gap-4 py-4 text-white">
                <BellIcon className='h-6 w-6'/>
                <p className="text-sm sm:text-center text-white">
                    Click here to stay informed about the project
                </p>
            </div>
        </Link>
    )
}