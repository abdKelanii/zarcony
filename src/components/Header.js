import header from "../images/header.png"
import lebara from "../images/lebara.png"
import zain from "../images/zain_logo-5.svg"
import stc from "../images/stc.svg"
import zainMob from "../images/zain-mon.webp"
import mobily from "../images/mobily.svg"


export default function Header() {
    return(
        <div className="max-w-screen-sm md:max-w-full">
            <img className="hidden md:flex md:max-w-full" src={header} alt=""/>
            <div className="md:hidden px-3 w-full grid justify-items-center ">
                <img className="w-full mt-3 rounded-xl  md:hidden" src={header} alt=""/>
                <div className="flex mt-3">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-1 w-1 fill-current fill-primary cursor-pointer">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-1 w-1 fill-current fill-primary cursor-pointer">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="ml-1 h-1 w-1 fill-current fill-primary cursor-pointer">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                </div>
            </div>
            <div className="md:flex items-center gap-24 hidden justify-center pt-10">
                <a href="#"><img src={lebara} alt="" className="h-16"/></a>
                <a href="#"><img src={zain} alt="" className="h-14"/></a>
                <a href="#"><img src={stc} alt="" className="h-8"/></a>
                <a href="#"><img src={mobily} alt="" className="h-18"/></a>
            </div>
            <div className="md:hidden grid grid-cols-4 px-3  my-5">
                <a href="#" className="grid justify-items-center">
                    <img src={zainMob} alt="" className="h-14 w-14 rounded-full"/>
                    <span className="text-sm">زين</span>
                </a>
                <a href="#" className="grid justify-items-center">
                    <img src={zainMob} alt="" className="h-14 w-14 rounded-full"/>
                    <span className="text-sm">زين</span>
                </a>
                <a href="#" className="grid justify-items-center">
                    <img src={zainMob} alt="" className="h-14 w-14 rounded-full"/>
                    <span className="text-sm">زين</span>
                </a>
                <a href="#" className="grid justify-items-center">
                    <img src={zainMob} alt="" className="h-14 w-14 rounded-full"/>
                    <span className="text-sm">زين</span>
                </a>


            </div>
        </div>
    )
}