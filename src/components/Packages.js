import LightBlueCard from "../images/Mask-by-Rectangle-1.svg"
import lebara from "../images/lebara.png"
import zain from "../images/zain_logo-5.svg"
import stc from "../images/stc.svg"
import mobily from "../images/mobily.svg"
import sim from "../images/sim.svg"
import chip from "../images/chip.svg"
import signal from "../images/Signal-1.svg"
import phone from "../images/Phone_Rotate-2.svg"
import calendar from "../images/calendar.svg"

export default function Packages(){
    return(

        // TODO: props
        <div className="md:container md:mx-auto">

            {/*---Start Mobile Version---*/}
            <div id="center" className="h-300px w-full md:hidden mb-5 bg-white drop-shadow-md rounded-3xl  mt-9 ">

                <div id="parent" className="flex items-center px-5 justify-between bg-cover bg-center h-20 w-full bg-no-repeat rounded-2xl" style={{ backgroundImage: `url(${LightBlueCard})` }} >
                    <h3 className="text-white font-bold text-xl">اسم باقة الشركة</h3>

                    <img className="h-10" src={zain} alt=""/>

                </div>

                <div className="flex">
                    <div className="flex w-full">
                        <div className="mx-5 mt-6 flex justify-between w-full">
                            <div className="grid justify-items-center text-center">
                                <img src={signal} alt=""/>
                                <div className="font-bold">
                                    <span className="text-gray-400 text-sm">البيانات</span>
                                    <br/>
                                    <span className="text-primary">20 جيجابايت</span>
                                </div>
                            </div>

                            <div className="grid justify-items-center text-center">
                                <img src={phone} alt=""/>
                                <div className="font-bold">
                                    <span className="text-gray-400 text-sm">دقائق محلية</span>
                                    <br/>
                                    <span className="text-primary">لا محدودة</span>
                                </div>
                            </div>

                            <div className="grid justify-items-center text-center">
                                <img src={calendar} alt=""/>
                                <div className="font-bold">
                                    <span className="text-gray-400 text-sm">الصلاحية</span>
                                    <br/>
                                    <span className="text-primary">90 يوم </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-center">
                    <hr className="bg-gray-300 mt-5 w-10/12"/>
                </div>
                <div className="flex justify-between mr-5 mt-5">

                    <div>
                        <h4 className="text-medium text-primary font-bold mb-2"><span className="font-black text-2xl pt-3">90 </span>ريال</h4>
                        <h4 className="text-xs font-bold text-gray-400">+  ضريبة القيمة المضافة</h4>
                    </div>

                    <div>
                        <button className="py-2.5 mt-2 px-6 rounded-md border border-primary ml-5 font-semibold  text-primary">
                            تفاصيل الباقة
                        </button>
                    </div>

                </div>
            </div>
            {/*---End Mobile Version---*/}

            <div className="w-full h-64 mb-52 hidden md:flex">
                <div id="parent" className="bg-contain h-full w-full bg-no-repeat relative" style={{ backgroundImage: `url(${LightBlueCard})` }} >
                    <div className="flex justify-between items-start pt-10 px-5">
                        <h3 className="text-2xl font-black text-white">اسم باقة الشركة</h3>
                        <img src={stc} alt="" className="h-8 items-center"/>
                    </div>
                    <div id="center" className="h-300px w-90% absolute bg-white drop-shadow-xl rounded-3xl mr-4 mt-9">
                        <div className="flex">
                            <div className="flex w-full justify-between">
                                <div className="mr-5 mt-6">

                                    <div className="flex gap-4 mb-4">
                                        <img src={signal} alt=""/>
                                        <div className="font-bold">
                                            <span className="text-gray-400 text-sm">البيانات</span>
                                            <br/>
                                            <span className="text-primary">20 جيجابايت</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mb-4">
                                        <img src={phone} alt=""/>
                                        <div className="font-bold">
                                            <span className="text-gray-400 text-sm">دقائق محلية</span>
                                            <br/>
                                            <span className="text-primary">لا محدودة</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <img src={calendar} alt=""/>
                                        <div className="font-bold">
                                            <span className="text-gray-400 text-sm">الصلاحية</span>
                                            <br/>
                                            <span className="text-primary">90 يوم </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex ml-5 mt-6 gap-3">
                                    <img src={sim} alt="" className="h-5"/>
                                    <img src={chip} alt="" className="h-5"/>
                                </div>

                            </div>
                        </div>

                        <div className="flex justify-between mr-5 mt-5">

                            <div>
                                <h4 className="text-medium text-primary font-bold mb-2"><span className="font-black text-2xl pt-3">90 </span>ريال</h4>
                                <h4 className="text-xs font-bold text-gray-400">+  ضريبة القيمة المضافة</h4>
                            </div>

                            <div>
                                <button className="hover:bg-primary hover:text-white duration-200 bg-btn-color py-2.5 mt-2 px-6 rounded-md border border-primary ml-5 font-semibold  text-primary">
                                    تفاصيل الباقة
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}