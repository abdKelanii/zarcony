import subjectCardPhoto1 from '../images/Rectangle 193.png'
import arrowLeft from '../images/arrow-left-1.svg'
export default function Subjects(){
    return(
        <div className="container w-full mx-auto hover:-translate-y-3 cursor-pointer ease-in-out duration-200 md:flex hidden">
            <div className="w-full px-0">
                <img className="mb-3 w-full" src={subjectCardPhoto1} alt=""/>
                <span className="font-bold text-sm text-gray-500">التصنيف</span>
                <div className="w-full">
                    <h3 className="text-xl font-bold text-primary mt-1 mb-2">عطر ومكعب وحيوان آلي أليف..</h3>
                    <p className="text-sm text-gray-color leading-7 ">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
                </div>
                <div className="flex mt-2">
                    <a href="#" className="font-bold text-blue-color underline">تابع القراءة</a>
                    <img className="mr-2 pt-1 cursor-pointer" src={arrowLeft} alt=""/>
                </div>
            </div>
        </div>
    )
}