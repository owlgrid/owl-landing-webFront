import Link from "next/link";

const navigation = [
    { name: 'Value', href: '#features' },
    { name: 'Features', href: '#features' },
    { name: 'App builders', href: '#features' },
    { name: 'About', href: '#features' },
]
const contact = [
    { name: 'Contact', href: '#' },
    { name: 'Email', href: 'mailto:hello@creastel.com' }
]
const resources = [
    { name: 'LinkedIn', href: '#' },
    { name: 'Github', href: '#' }
]

export default function Footer(props){
    return(
        <footer className="wrapper py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10">
                <div className="space-y-4">
                    <span className="text-sm text-gray-600">HOME</span>
                    <ul className="flex flex-col gap-2">
                        {navigation.map((elem, i)=>(
                            <li key={i} className="text-primary text-lg font-semibold hover:text-primary/60 transition duration-150 ">
                                <Link href={elem.href} scroll={false}>{elem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <span className="text-sm text-gray-600">CONTACT</span>
                    <ul className="flex flex-col gap-2">
                        {contact.map((elem, i)=>(
                            <li key={i} className="text-primary text-lg font-semibold hover:text-primary/60 transition duration-150 ">
                                <Link href={elem.href}>{elem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <span className="text-sm text-gray-600">HOME</span>
                    <ul className="flex flex-col gap-2">
                        {resources.map((elem, i)=>(
                            <li key={i} className="text-primary text-lg font-semibold hover:text-primary/60 transition duration-150 ">
                                <Link href={elem.href}>{elem.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-y-4features justify-between mt-10 pt-10 sm:pt-8 pb-4 border-t lg:flex-row bg-top border-gray-800">
                <ul className="flex flex-col space-y-1 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li className="text-gray-600 hover:text-gray-600/60 transition duration-150">
                        <Link href="https://legals.creastel.com" target="_blank">
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="text-gray-600 hover:text-gray-600/60 transition duration-150">
                        <Link href="https://legals.creastel.com" target="_blank">
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li className="text-gray-600 hover:text-gray-600/60 transition duration-150">
                        <Link href="https://owlgrid.com" target="_blank">
                            © 2022 OwlGrid
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}