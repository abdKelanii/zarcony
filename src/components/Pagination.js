import dot from "../images/dot.svg";

export default function Pagination(){
    return(
        <div className="container mx-auto px-10 grid justify-items-center mb-9 z-50">
            <div className="md:flex hidden h-9 w-9">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="ml-1.5 fill-current fill-gray-400 cursor-pointer">
                    <circle cx="50" cy="50" r="50" />
                </svg>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer mr-1.5 fill-current fill-primary">
                    <circle cx="50" cy="50" r="50" />
                </svg>
            </div>
        </div>
    )
}