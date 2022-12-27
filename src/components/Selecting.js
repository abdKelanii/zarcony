import blueCard from "../images/blue-card.svg"
import cup from "../images/cup.png"
import cupMob from "../images/cup-mob.png"
import bag from "../images/bag.png"
import bagMob from "../images/bag-mob.png"
import arrow from "../images/arrow-left-1.svg"

export default function Selecting(){
    return(
      <div className="md:container md:mx-auto md:px-12 px-3">

          {/*---Mobile Version---*/}
          <div className="md:hidden py-5 grid gap-y-3">
              <div className="bg-white rounded-md w-full h-20  flex items-center px-3">
                  <div className="ml-4">
                      <img className="h-16" src={bagMob} alt=""/>
                  </div>
                  <div className="">
                      <h3 className="text-primary font-bold">باقات رقم جديد</h3>
                      <p className="text-xs text-gray-500 mt-2">هذا النص هو مثال لنص يمكن أن يستبدل في نفس</p>
                  </div>
                  <div className=" bg-gray-100 p-1.5 rounded-full">
                      <img src={arrow} alt=""/>
                  </div>
              </div>
              <div className="bg-white rounded-md w-full h-20  flex items-center px-3">
                  <div className="ml-4">
                      <img className="h-16" src={cupMob} alt=""/>
                  </div>
                  <div className="">
                      <h3 className="text-primary font-bold">الأرقام المميزة</h3>
                      <p className="text-xs text-gray-500 mt-2">هذا النص هو مثال لنص يمكن أن يستبدل في نفس</p>
                  </div>
                  <div className=" bg-gray-100 p-1.5 rounded-full">
                      <img src={arrow} alt=""/>
                  </div>
              </div>
          </div>

          <div className="h-60 w-full md:flex gap-10 hidden">
              <a href="#" className="h-full w-1/2 delay-130 hover:scale-105 duration-200">
                  <div className="bg-cover rounded-3xl bg-no-repeat h-full w-full flex items-center justify-center justify-between"
                  style={{ backgroundImage: `url(${blueCard})`}}>
                      <div className="pb-5 pr-8">
                          <h2 className="text-white text-5xl font-black pb-2">باقات</h2>
                          <h2 className="text-white text-5xl font-black">رقم جديد</h2>
                      </div>
                      <img src={bag} alt="" className="h-48"/>
                  </div>
              </a>
              <a href="#" className="h-full w-1/2  delay-130  hover:scale-105 duration-200 ">
                  <div className="bg-cover rounded-3xl bg-no-repeat h-full w-full flex flex-1 items-center justify-center justify-between"
                       style={{ backgroundImage: `url(${blueCard})`}} >
                      <div className="pb-5 pr-8">
                          <h2 className="text-white text-5xl font-black pb-2">الأرقام</h2>
                          <h2 className="text-white text-5xl font-black">المميزة</h2>
                      </div>
                      <img src={cup} alt="" className="h-48"/>
                  </div>
              </a>

          </div>
      </div>
    );
}