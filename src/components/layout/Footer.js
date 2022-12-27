// import background from '../../images/Mask-Group-72.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/Path.svg'
import twitter from '../../images/Path-1.svg'
export default function Footer(){
    return(
        <footer className="w-full h-380px bg-primary">
            <div className="container mx-auto px-12 text-white">
                <div className="w-full grid grid-cols-2 pt-32 ">
                    <div className="">
                        <span className="text-white text-4xl font-bold">LOGO</span>
                        <div className="flex gap-x-7 mt-16">
                            <a href="#" className="bg-social-media-bg/10 hover:bg-white/20  rounded-full w-9 h-9 grid place-items-center">
                                <img className="hover:text-primary" src={instagram} alt=""/>
                            </a>
                            <a href="#" className="bg-social-media-bg/10 hover:bg-white/20 rounded-full w-9 h-9 grid place-items-center">
                                <img src={facebook} alt=""/>
                            </a>
                            <a href="#" className="bg-social-media-bg/10 hover:bg-white/20 rounded-full w-9 h-9 grid place-items-center">
                                <img src={twitter} alt=""/>
                            </a>
                        </div>
                        <div className="mt-6">
                            <p className="leading-8 w-2/3 opacity-50">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="mt-2 font-bold pb-12 text-md">روابط مهمة</h3>
                        <div className="grid grid-cols-3 text-sm">
                            <ul className="gap-10 text-white/60 font-bold">
                                <a href="">
                                    <li className="pb-6 hover:text-white">الرئيسية</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">الباقات</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">الأسئلة الشائعة</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">خريطة الموقع</li>
                                </a>
                            </ul>

                            <ul className="gap-10 text-white/60 font-bold">
                                <a href="">
                                    <li className="pb-6 hover:text-white">سياسة الخصوصية</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">شروط الاستخدام</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">الشريحة الالكترونية</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">المدونة</li>
                                </a>
                            </ul>

                            <ul className="gap-10 text-white/60 font-bold">
                                <a href="">
                                    <li className="pb-6 hover:text-white">اتصل بنا</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">حقوق الاستخدام</li>
                                </a>
                                <a href="">
                                    <li className="pb-6 hover:text-white">الشكاوي</li>
                                </a>
                            </ul>

                        </div>
                    </div>
                </div>
                <hr className="mt-8 h-px opacity-50 bg-white border-0"/>
                <div className="w-full grid justify-items-center mt-2 opacity-50">
                    <span>جميع الحقوق محفوظة لمنصة 2022</span>
                </div>

            </div>
        </footer>
    )
}