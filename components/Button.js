import Link from "next/link";

export default function Button(props){
    let btnVariant = "";
    if(props.primary){
        btnVariant = "text-white btn-primary-gradient hover:brightness-110";
    }else if(props.secondary){
        btnVariant = "text-gray-500 bg-white ring-1 ring-gray-500/50 hover:bg-gray-50 hover:text-primary";
    }
    
    return(
        <Link href={props.href}
            className={`btn ${btnVariant}`}
        >
            {props.children}
        </Link>
    );
}