import background from '../images/Group-1406.svg'
import blueCard from "../images/blue-card.svg";
import bag from "../images/bag.png";

export default function ChoosePackage(){
    return(
        <div className="container mx-auto w-full">
            <div className="grid justify-items-center ">
                <div className="bg-cover bg-center md:flex hidden absolute bottom-235px  h-243px rounded-3xl rounded-3xl bg-no-repeat flex items-center justify-center justify-between"
                     style={{ backgroundImage: `url(${background})`}}>
                    <div className="pb-5 pr-28 max-w-xl leading-extra-sung text-btn-color text-5xl font-black">
                        <h2 className="pb-2">تمتع بالتكنلوجيا اينما كنت</h2>
                    </div>
                    <div className="">
                        <button className="ml-24 hover:bg-white bg-btn-color duration-200 py-4 px-9 text-xl rounded-md font-bold text-primary">
                          اختر باقتك الآن
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}