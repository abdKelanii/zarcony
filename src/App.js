import './App.css';
import Navbar from'./components/layout/Navbar'
import Header from'./components/Header'
import Title from './components/Title'
import Selecting from './components/Selecting'
import Packages from './components/Packages'
import WhiteButton from './components/WhiteButton'
import CyanButton from './components/CyanButton'
import BestSeller from './components/BestSeller'
import Pagination from "./components/Pagination";
import Benefits from "./components/Benefits";
import CommonQuestion from "./components/CommonQuestion";
import Subjects from "./components/Subjects";
import ChoosePackage from "./components/ChoosePackage";
import Footer from "./components/layout/Footer";
import appleWatch from "./images/1.png"
import zainLogo from "./images/zain_logo-1.svg"
import samsung from "./images/Samsung.png"
import iphone from "./images/iPhone_12_Pro_Max-400x500-1.png"
import xbox from "./images/xbox.png"
import flash from "./images/Flash.svg";
import phoneShake from "./images/Phone_Shake.svg";
import crown from "./images/Crown.svg";
import trophy from "./images/Trophy.svg";

function App() {
  return (
   <div dir="" className="md:bg-white bg-gray-100">
        <Navbar/>
        <Header />
        <Title title="قم باختيار ماتريد القيام به"/>
       <Selecting/>
       <Title title="ابرز الباقات"/>

       <div className="md:grid md:grid-cols-3 md:container md:mx-auto md:gap-x-7 md:px-12 md:bg-white px-3">
           <Packages/>
           <Packages/>
           <Packages/>
           <Packages/>
           <Packages/>
           <Packages/>
       </div>

       <WhiteButton name="شاهد كافة الباقات"/>
       <Title title="الأكثر مبيعاً"/>

       <div className="grid md:grid-cols-4 grid-cols-2 md:container md:mx-auto md:gap-x-7 md:z-10 md:px-12 px-3 mb-2 md:mb-0 gap-3 md:gap-0">
           <BestSeller
               name="Apple Watch Series 5"
               price="5405"
               image={appleWatch}
               companyLogo={zainLogo}
           />
           <BestSeller
               name="Galaxy Note 10"
               price="5405"
               image={samsung}
               companyLogo={zainLogo}
           />

           <BestSeller
               name="Xbox"
               price="5405"
               image={xbox}
               companyLogo={zainLogo}
           />
           <BestSeller
               name="iphone 12 Pro Max"
               price="5405"
               image={iphone}
               companyLogo={zainLogo}
           />
       </div>
       <Pagination/>

       <WhiteButton name="شاهد كافة المنتجات" class='z-50'/>

       <Title title="فوائد الـeSIM"/>
      <div className="md:container md:mx-auto grid md:grid-cols-4 md:px-12 px-3 md:gap-7 gap-y-3 pt-5 md:pt-0">
          <Benefits
              name="سهولة التفعيل"
              image={flash}
          />
          <Benefits
              name="أكثر من خط على الجهاز"
              image={phoneShake}
          />

          <Benefits
              name="تمييز خط العمل عن الخط الشخصي"
              image={trophy}
          />
          <Benefits
              name="تنويع الاستعمالات حسب الحاجة"
              image={crown}
          />
      </div>


       <CommonQuestion />

      <div className="mt-28 md:flex hidden">
          <Title title="مواضيع"/>
      </div>

      <div className="grid grid-cols-3  container mx-auto px-12 gap-8">
          <Subjects />
          <Subjects />
          <Subjects />
      </div>

      <div className="md:flex hidden">
          <CyanButton name="شاهد المزيد من المقالات"/>
      </div>

      <div className="mt-40 relative">
          <ChoosePackage class="absolute"/>
          <div className="md:flex hidden">
              <Footer/>
          </div>
      </div>

   </div>
  );
}

export default App;
