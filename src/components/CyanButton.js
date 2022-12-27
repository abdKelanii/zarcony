export default function WhiteButton(props){
    return(
        <div className="w-full grid justify-items-center mt-16">
            <button className="hover:bg-primary bg-btn-color hover:text-white duration-200 py-4 mt-2 px-9 text-xl rounded-md border border-primary ml-5 font-bold text-primary">
                {props.name}
            </button>
        </div>
    )
}

