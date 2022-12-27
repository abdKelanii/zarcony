export default function WhiteButton(props){
    return(
        <div className="w-full grid justify-items-center">
            <button className="hover:bg-primary hover:text-white duration-200 py-4 mt-2 px-9 text-xl rounded-md border border-primary ml-5 font-bold text-primary">
                {props.name}
            </button>
        </div>
    )
}

//transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-200