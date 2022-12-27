import logo from '../../images/20634.svg';
import { NavLink } from 'react-router-dom'
import React from "react";
export default function Navbar(){
    return (
      <nav className="md:bg-gray-color bg-primary md:max-w-full w-full ">
          <div className="flex items-center h-24 justify-between container mx-auto md:px-12 px-3 ">

              <div className="md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-7 h-7 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
              </div>

              <div>
                  <span className="text-white text-4xl font-bold">LOGO</span>
              </div>

              <div className="md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-7 h-7 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
              </div>

              <div className="flex text-link gap-14 md:flex hidden">

                  <ul className="flex py-2 gap-14">
                      <a href="#">
                          <li className="font-bold hover:text-white"> الرئيسية </li>
                      </a>
                      <a href="#">
                          <li className="hover:text-white">الباقات</li>
                      </a>
                      <a href="#">
                          <li className="hover:text-white">الأسئلة الشائعة</li>
                      </a>
                  </ul>

                  <div className="flex gap-4">
                      <button>
                          <a href="" className="bg-btn-color hover:bg-white py-2 px-5 rounded text-sm font-bold text-primary">
                              تسجيل الدخول
                          </a>
                      </button>

                      {/*TODO*/}

                      <a href="#" className="pt-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                               className="text-white feather-shopping-cart">
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                      </a>
                  </div>
              </div>
          </div>

      </nav>
    );
}