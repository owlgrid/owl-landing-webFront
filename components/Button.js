import Link from 'next/link';

export default function Button(props) {
    let btnVariant = '';
    if (props.primary) {
        btnVariant = 'text-white btn-primary-gradient hover:brightness-110';
    } else if (props.secondary) {
        btnVariant = 'text-gray-500 bg-white ring-1 ring-gray-500/50 hover:bg-gray-50 hover:text-primary';
    } else if (props.tertiary) {
        btnVariant = 'bg-white';
    }
    let btnSize = 'px-6 py-3 text-sm font-semibold';
    if (props.xl) {
        btnSize = 'px-10 py-5 text-2xl';
    }

    return (
        <Link
            href={props.href}
            scroll={false}
            target={props.target}
            className={`flex items-center gap-2 rounded-md leading-6 transition duration-150 shadow-sm hover:shadow-md ${btnVariant} ${btnSize}`}
        >
            {props.children}
        </Link>
    );
}
