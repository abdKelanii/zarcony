import Title from './Title'
import CyanButton from './CyanButton'
import Speach from '../images/Speachbubble _@2x.png'
import Cube from '../images/Cube.png'

export default function CommonQuestion(){
    return(
        <div className="bg-gray-50 md:relative h-auto">
            <img src={Speach} className="h-40 md:flex hidden absolute left-0 mt-12" alt=""/>
            <div className="pt-10 md:flex hidden ">
                <Title title="الأسئلة الشائعة"/>
            </div>
            <div className="container mx-auto px-12 md:flex hidden ">
                <div className="grid grid-cols-2 grid-rows-2 gap-12">
                    <div>
                        <h3 className="text-primary text-xl font-bold mb-4"> كيف يمكنني تفعيل شريحة eSIM ؟</h3>
                        <p className="text-gray-color ">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                    <div>
                        <h3 className="text-primary text-xl font-bold mb-4"> كيف يمكنني تفعيل شريحة eSIM ؟</h3>
                        <p className="text-gray-color ">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                    <div>
                        <h3 className="text-primary text-xl font-bold mb-4"> كيف يمكنني تفعيل شريحة eSIM ؟</h3>
                        <p className="text-gray-color ">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                    <div>
                        <h3 className="text-primary text-xl font-bold mb-4"> كيف يمكنني تفعيل شريحة eSIM ؟</h3>
                        <p className="text-gray-color ">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-16 md:flex hidden ">
                <CyanButton name="شاهد المزيد"/>
            </div>
            <img className="h-48 absolute top-650px md:flex hidden  -right-16" src={Cube} alt=""/>
        </div>
    )
}