import Header from "./Header";
import Announcement from "./Announcement";

export default function Layout(props){
    return(
        <>
            <Announcement />
            <Header />
            <div className="overflow-x-hidden container mx-auto max-w-6xl px-6 py-3 ">
                {props.children}
            </div>
        </>
    );
}