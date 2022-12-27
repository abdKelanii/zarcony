import GreenCard from "../images/green-bg.svg"
import dot from  "../images/dot.svg"
import React from "react";
export default function BestSeller(props){
    return(
        <div className="md:container md:mx-auto md:h-auto h-56">

            {/*---Start Mobile Version---*/}
            <div className="md:hidden">
                <div className="bg-white rounded-xl h-56 my-5">
                    <div className=" grid justify-items-center">
                        <img className="h-32" src={props.image} alt=""/>
                    </div>
                    <div className="mr-4">
                        <h3 className="text-primary font-bold">{props.name}</h3>
                        <span className="text-xs text-gray-500">زين</span>
                        <br/>
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-sm my-2">
                                <span className="font-bold text-black text-xl">{props.price} </span>
                                ر.س
                            </span>
                            <div className="bg-gray-100 rounded-full h-8 w-8 grid justify-items-center ml-3 mt-1">
                                {/*Online Shopping Basket*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     className="text-black feather-shopping-cart mt-2.5 mr-0.5">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*---End Mobile Version---*/}
            <div className="md:flex hidden">
                <div className="relative w-full h-10 bottom-12 pb-420px hover:-translate-y-3 cursor-pointer ease-in-out duration-200">
                    <img src={props.image} alt="" className="absolute pr-3 h-295px z-50"/>
                    <div className="w-full h-64 absolute top-252px z-10 ">
                        <div className="w-full h-40 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${GreenCard})` }}>
                            <div className="pt-7 pr-5">
                                <h3 className="text-white text-2xl font-black">{props.name}</h3>
                                <div className="flex justify-between">
                                    <div className="mt-2">
                                        <span className="text-white text-sm font-bold">يبدأ من</span>
                                        <br/>
                                        <span className="text-white">
                                        <span className="font-bold text-xl">{props.price}</span>
                                        ريال</span>
                                    </div>
                                    <img src={props.companyLogo} alt="" className="pl-6 mt-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}