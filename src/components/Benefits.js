
export default function Benefits(props){
    return(
        <div className="container mx-auto md:h-56 flex h-12">
            <div className="md:w-full w-12 h-12 md:h-44 border border-gray-250 rounded-xl grid place-items-center">
                <div className="grid place-content-center gap-y-6 ">
                    <div className="justify-self-center">
                        <img className="h-6 md:h-14" src={props.image} alt=""/>
                    </div>
                    <div className="w-48 md:flex hidden items-center">
                        <div className="md:grid md:justify-self-center md:w-full">
                            <h4 className="text-center text-primary text-xl">{props.name}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <h4 className="font-bold text-primary text-xs mr-3">{props.name}</h4>
            </div>
        </div>
    )
}