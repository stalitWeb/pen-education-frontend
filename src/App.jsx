import { useState } from 'react'

// images
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import homeImg from './assets/home-image.png'
import about from './assets/about1.png'
import logo from './assets/logo.png'
import cli1 from './assets/1.png'
import cli2 from './assets/2.png'
import cli3 from './assets/3.png'
import cli4 from './assets/4.png'
import cli5 from './assets/5.png'
import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c3 from './assets/c3.png'
import c4 from './assets/c4.png'
import c5 from './assets/c5.png'
import c6 from './assets/c6.png'
import promo from './assets/promo.png'
import ct1 from './assets/ct1.svg'
import ct2 from './assets/ct2.svg'
import ct3 from './assets/ct3.svg'
import ct4 from './assets/ct4.svg'
import ct5 from './assets/ct5.svg'
import ct6 from './assets/ct6.svg'
import e1 from './assets/e1.png'
import e2 from './assets/e2.png'
import t1 from './assets/t1.png'
import t2 from './assets/t2.png'
import t3 from './assets/t3.png'
import t4 from './assets/t4.png'
import team1 from './assets/team1.jpg'
import team2 from './assets/team2.jpg'
import team3 from './assets/team3.jpg'
import team4 from './assets/team4.jpg'
import b2 from './assets/b2.png'
import b3 from './assets/b3.png'
import logo2 from './assets/logo2.png'
// import './App.css'

// icons
import { CiMenuFries } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { TfiMedall } from "react-icons/tfi";
import { LuWand } from "react-icons/lu";
import { CiFaceSmile } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { TbAward } from "react-icons/tb";
// import { PiStudent } from "react-icons/pi";
import { PiStudentLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { BsCheckSquare } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiMobile } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { FaRegMap } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiper.css';

// import required modules
import { EffectCards } from 'swiper/modules';

// pages
import SingleBlogPage from './components/pages/blog'


function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='body'>
      
      {/* HEADER SECTION */}
      <header className='header flex justify-center items-center px-6 md:px-16'>
        <div className='containe w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col lg:flex-row justify-center capitalize py-6 gap-3 lg:gap-10'>
            <div className='flex-[1.5] flex flex-row justify-between items-cente gap-5'>
              <a href='#' className='w-[152px] h-[52px] flex flex-col justify-center items-center montserrat'>
                <img src={logo} alt='' className='w-[100%] h-[1005] object-contai'/>
              </a>

              <ul className='hidden text-lightblue lg:flex flex-row justify-center items-center text-[16px] montserrat font-normal gap-5'>
                <li className='desktop-menu relative flex flex-col'>
                  <a href='#'>home</a>
                </li>

                <li className='desktop-menu relative flex flex-col'>
                  <a href='#' className='flex flex-row justify-center items-center gap-1'>
                    <span>Pages</span>

                    <span>
                      <FaAngleDown />
                    </span>
                  </a>

                  <ul className='desktop-sub-menu absolute top-[50px] left-[-50%] flex flex-col gap-4'>
                    <li>
                      <a href=''>About us</a>
                    </li>

                    <li>
                      <a href=''>Instructors</a>
                    </li>

                    <li>
                      <a href=''>Intructors details</a>
                    </li>

                    <li>
                      <a href=''>FAQ's</a>
                    </li>

                    <li>
                      <a href=''>Events</a>
                    </li>

                    <li>
                      <a href=''>Single Event</a>
                    </li>

                    <li>
                      <a href=''>404</a>
                    </li>

                    <li>
                      <a href=''>Login</a>
                    </li>

                    <li>
                      <a href=''>register</a>
                    </li>
                  </ul>
                </li>

                <li className='desktop-menu relative flex flex-col'>
                 <a href='#' className='flex flex-row justify-center items-center gap-1'>
                    <span>Courses</span>

                    <span>
                      <FaAngleDown />
                    </span>
                  </a>

                  <ul className='desktop-sub-menu absolute top-[50px] left-[-50%] flex flex-col gap-4'>
                    <li>
                      <a href=''>course 1</a>
                    </li>

                    <li>
                      <a href=''>Course 2</a>
                    </li>

                    <li>
                      <a href=''>Course details</a>
                    </li>
                  </ul>
                </li>

                <li className='desktop-menu relative flex flex-col'>
                  <a href='#' className='flex flex-row justify-center items-center gap-1'>
                    <span>Shop</span>

                    <span>
                      <FaAngleDown />
                    </span>
                  </a>

                  <ul className='desktop-sub-menu absolute top-[50px] left-[-50%] flex flex-col gap-4'>
                    <li>
                      <a>Single</a>
                    </li>

                    <li>
                      <a>Cart</a>
                    </li>

                    <li>
                      <a>Checkout</a>
                    </li>
                  </ul>
                </li>

                <li className='desktop-menu relative flex flex-col'>
                  <a href='#' className='flex flex-row justify-center items-center gap-1'>
                    <span>Blog</span>

                    <span>
                      <FaAngleDown />
                    </span>
                  </a>

                  <ul className='desktop-sub-menu absolute top-[50px] left-[-50%] flex flex-col gap-4'>
                    <li>
                      <a href=''>Blog list</a>
                    </li>

                    <li>
                      <a href=''>Single blog</a>
                    </li>
                  </ul>
                </li>

                <li className='desktop-menu relative flex flex-col'>
                  <a href='#'>contact</a>
                </li>
              </ul>

              <CiMenuFries className='flex lg:hidden text-[32px]' onClick={() => {setToggle(!toggle)}}/>
            </div>

            <div className={!toggle? 'mobile-menu menu h-[0px] overflow-hidden  flex flex-col lg:hidden text-[16px] montserrat font-normal gap-5' : 'menu w-full overflow-hidde flex flex-col lg:hidden text-[16px] montserrat font-normal py-4 gap-5'}>
              <ul className='flex flex-col text-[15px] text-lightblue montserrat font-normal gap-5'>
                <li className='mobile-menu-link relative'>
                  <a href='#'>home</a>
                </li>

                <li className='mobile-menu-link flex flex-col relative'>
                  <a href='#' className='flex flex-row items-center gap-1'>
                    <span>Pages</span>

                    <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                      <FaAngleRight className='w-[100px] h-[100px]' />
                    </span>
                  </a>

                  <ul className='mobile-sub-menu absolute top-[10%] left-[110%] z-[100] flex flex-col gap-4'>
                    <li>
                      <a href=''>About us</a>
                    </li>

                    <li>
                      <a href=''>Instructors</a>
                    </li>

                    <li>
                      <a href=''>Intructors details</a>
                    </li>

                    <li>
                      <a href=''>FAQ's</a>
                    </li>

                    <li>
                      <a href=''>Events</a>
                    </li>

                    <li>
                      <a href=''>Single Event</a>
                    </li>

                    <li>
                      <a href=''>404</a>
                    </li>

                    <li>
                      <a href=''>Login</a>
                    </li>

                    <li>
                      <a href=''>register</a>
                    </li>
                  </ul>
                </li>

                <li className='mobile-menu-link relative'>
                 <a href='#' className='flex flex-row items-center gap-1'>
                    <span>Courses</span>

                    <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                      <FaAngleRight className='w-[100%] h-[100%]' />
                    </span>
                  </a>

                  <ul className='mobile-sub-menu absolute top-[10%] left-[110%] z-[100] flex flex-col gap-4'>
                    <li>
                      <a href=''>course 1</a>
                    </li>

                    <li>
                      <a href=''>Course 2</a>
                    </li>

                    <li>
                      <a href=''>Course details</a>
                    </li>
                  </ul>
                </li>

                <li className='mobile-menu-link relative'>
                  <a href='#' className='flex flex-row items-center gap-1'>
                    <span>Shop</span>

                    <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                      <FaAngleRight className='w-[100%] h-[100%]' />
                    </span>
                  </a>

                  <ul className='mobile-sub-menu absolute top-[10%] left-[110%] z-[100] flex flex-col gap-4'>
                    <li>
                      <a>Single</a>
                    </li>

                    <li>
                      <a>Cart</a>
                    </li>

                    <li>
                      <a>Checkout</a>
                    </li>
                  </ul>
                </li>

                <li className='mobile-menu-link relative'>
                  <a href='#' className='flex flex-row items-center gap-1'>
                    <span>Blog</span>

                    <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                      <FaAngleRight className='w-[100%] h-[100%]' />
                    </span>
                  </a>

                  <ul className='mobile-sub-menu absolute top-[10%] left-[110%] z-[100] flex flex-col gap-4'>
                    <li>
                      <a href=''>Blog list</a>
                    </li>

                    <li>
                      <a href=''>Single blog</a>
                    </li>
                  </ul>
                </li>

                <li className='mobile-menu-link relative'>
                  <a href='#'>contact</a>
                </li>
              </ul>
            </div>

            <div className='flex-1 flex justify-between items-center gap-10'>
              <div className='flex flex-row justify-center items-center  text-lightblue gap-6'>
                  <a href='' className='w-[26px] h-[26px] flex flex-col justify-center items-center '>
                   <LuHeart className='w-[100%] h-[100%] ' />
                  </a>
                
                 <a href='' className='w-[26px] h-[26px] justify-center flex flex-col items-center '>
                  <RiShoppingCartLine className='w-[100%] h-[100%] ' />
                 </a>
              </div>

              <div className='flex flex-row justify-center items-between montserrat font-semibold gap-3'>
                <a href='#' className='btn text-center text-white px-4 py-4 outline-none rounded-[10px] '>login</a>
                <a href='#' className='btn text-center text-white px-4 py-4 outline-none rounded-[10px] '> sign up</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className='hero-section flex justify-center items-center'>
        <div className='containe w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col md:flex-row justify-center items-start py-12 md:py-12 gap-10'>
            <div className='flex-1 flex flex-col px-6 md:px-16 gap-5'>
              <h1 className='w-full text-lightblue text-[52px] md:text-[72px] leading-[72px md:leading-[100px] montserrat font-semibold'>
               Better {" "}
               <span className="text-lightgreen">Learning Future</span>{" "}
               Starts With Penn
              </h1>

              <p className='w-[400px] text-[18px] poppins font-normal mb-5 '>It is a long established fact that reader will be distracted readable content of a page when.</p>
              
              <a href='' className='cta outline-none w-[167px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                  <span className=''>explore</span>
                  <FaArrowRight className='w-[16px] h-[16px]'/>
              </a>
            </div>

            <div className='flex-1 flex flex-col justify-center items-center'>
             <img src={homeImg} alt='' className='relative w-[100%] h-[100%] object-contain'/>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO FEATURES SECTION */}
      <section className='promo-feacture flex justify-center items-center px-6 md:px-16'>
        <div className='containe w-full xl:max-w-[1280px]'> 
          <div className='layout-layer flex flex-wrap py-12 gap-5'>
            <div className='promo-feature-card flex-1 flex flex-col px-6 py-4 gap-5'>
              <h4 className='text-lightblue text-[20px] montserrat font-semibold '>Quality Education</h4>

              <p className='max-w-[400px] text-lightgray text-[16px] poppins font-normal mb-5'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>

              <a href='' className='cta outline-none w-[167px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f]  flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                <span className=''>explore</span>
                <FaArrowRight className='w-[16px] h-[16px]'/>
              </a>
            </div>

            <div className='promo-feature-card flex-1 flex flex-col px-6 py-4 gap-5'>
              <h4 className='text-lightblue text-[20px] montserrat font-semibold '>Experienced Teachers</h4>

              <p className='max-w-[400px] text-lightgray text-[16px] poppins font-normal mb-5'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>

              <a href='' className='cta outline-none w-[167px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f]  flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                <span className=''>explore</span>
                <FaArrowRight className='w-[16px] h-[16px]'/>
              </a>
            </div>

            <div className='promo-feature-card flex-1 flex flex-col px-6 py-4 gap-5'>
              <h4 className='text-lightblue text-[20px] montserrat font-semibold '>Delicious Food</h4>

              <p className='max-w-[400px] text-lightgray text-[16px] poppins font-normal mb-5'>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>

                <a href='' className='cta outline-none w-[167px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                  <span className=''>explore</span>
                  <FaArrowRight className='w-[16px] h-[16px]'/>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/*ABOUT SECTON*/}
      <section className='about-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col md:flex-row justify-center items-start py-12 gap-10'>
            <div className='flex-1 flex flex-col'>
              <img src={about} alt='' className='w-[100%] h-[100%] object-contain'/>
            </div>
            <div className='flex-1 flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                  <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-semibold capitalize'>Learn new skills to go 
                    <span className='text-lightgreen'>{" "}
                      <u>ahead for your</u>{" "}
                      </span>
                    career.</h2>

                  <p className='max-w-[400px] text-lightgray text-[16px] poppins '>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply</p>
                </div>

              <div className='w-full flex flex-col justify-center items-center gap-5'>
                <div className='home-card w-full flex flex-row justify-center p- gap-3'>
                  <div className='w-[64px] h-[64px] bg-[#2eca7f33] flex flex-col justify-center items-center rounded-full'>
                    <TfiMedall className='w-[50%] h-[50%] text-[#2eca7f] '  />
                  </div>

                  <div className='flex-1 flex flex-col gap-3'>
                    <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Our Mission</h4>
                    <p className='text-lightgray text-[16px] max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                  </div>    
                </div>

                <div className='home-card w-full flex flex-row justify-center p- gap-3'>
                  <div className='w-[64px] h-[64px] bg-[#2eca7f33] flex flex-col justify-center items-center rounded-full'>
                    <LuWand className='w-[50%] h-[50%] text-[#2eca7f] '  />
                  </div>

                  <div className='flex-1 flex flex-col gap-3'>
                    <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Our Mission</h4>
                    <p className='text-lightgray text-[16px] max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                  </div>    
                </div>
              </div>

                <a href='' className='cta outline-none w-[167px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                  <span className=''>explore</span>
                  <FaArrowRight className='w-[16px] h-[16px]'/>
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className='stats-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col justify-center items-center py-12 gap-10'>
            <div className='w-full flex flex-col'>
              <div className='w-full flex flex-row items-center gap-3'>
                <h4 className='text-lightgreen montserrat font-semibold uppercase'>Some Fun Fact</h4>
                <span className='title-line w-[150px]'></span>
              </div>
              <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold'>Our Great {' '}
                <span className='text-lightgreen'>
                  <u>Achievement</u>
                </span>
                </h2>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              <div className='stats-card flex-1 flex flex-row items-center px-4 py-4 gap-2'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                 <CiUser className='w-[100%] h-[100%] text-[#4154f1]' />
                </div>

                <div>
                  <h4 className='text-[30px] text-lightblue montserrat font-semibold'>8232</h4>
                  <p className='text-lightgray text-[15px] poppins'>Enrolled Students</p>
                </div>
              </div>

              <div className='stats-card flex-1 flex flex-row  items-center px-4 py-4 gap-2'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                 <CiFaceSmile className='w-[100%] h-[100%] text-[#ee6c20]' />
                </div>

                <div>
                  <h4 className='text-[30px] text-lightblue montserrat font-semibold'>8232</h4>
                  <p className='text-lightgray text-[15px] poppins'>Academic Programs</p>
                </div>
              </div>

              <div className='stats-card flex-1 flex flex-row items-center px-4 py-4 gap-2'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                 <TbAward className='w-[100%] h-[100%] text-[#15be56]' />
                </div>

                <div>
                  <h4 className='text-[30px] text-lightblue montserrat font-semibold'>8232</h4>
                  <p className='text-lightgray text-[15px] poppins'>Winning Award</p>
                </div>
              </div>

              <div className='stats-card flex-1 flex flex-row items-center px-4 py-4 gap-2'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                 <PiStudentLight className='w-[100%] h-[100%] text-[#bb0852]' />
                </div>

                <div>
                  <h4 className='text-[30px] text-lightblue montserrat font-semibold'>8232</h4>
                  <p className='text-lightgray text-[15px] poppins'>Certified Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT-SECTION */}
      <section className='client-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer  flex flex-col gap-10 py-12'>
            <h4 className='max-w-[550px] m-auto bg-[#2eca7f1a] text-center text-lightgreen text-[24px] montserrat font-semibold px-6 py-4 rounded-full'>Trusted Company Arround The World!</h4>
            <div className='w-full flex flex-wrap gap-5'>
              <img src={cli1} alt='client' className='max-w-[200px] h-[80px] m-aut flex-1 object-contain'/>
              <img src={cli2} alt='client' className='max-w-[200px] h-[80px] m-aut flex-1 object-contain'/>
              <img src={cli3} alt='client' className='max-w-[200px] h-[80px] m-aut flex-1 object-contain'/>
              <img src={cli4} alt='client' className='max-w-[200px] h-[80px] m-aut flex-1 object-contain'/>
              <img src={cli5} alt='client' className='max-w-[200px] h-[80px] m-aut flex-1 object-contain'/>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS/FEATURE SECTION */}
      <section className='business-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col justify-center items-center py-12 gap-10'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row items-center gap-3'>
                  <h4 className='text-lightgreen montserrat font-semibold uppercase'>Some Fun Fact</h4>
                  <span className='title-line w-[150px]'></span>
                </div>
                <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold'>Our Great {' '}
                  <span className='text-lightgreen'>
                    <u>Achievement</u>
                  </span>
                </h2>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <div className='business-card flex- flex flex-col px-6 py-4 gap-3'>
                <div className='w-full flex flex-row gap-3'>
                  <div className='bg-[#e8f5ff] w-[74px] h-[74px] flex flex-col justify-center items-center rounded-full'>
                    <CiUser className='w-[50%] h-[50%] text-[#4154f1]' />
                  </div>
                  <h4 className='flex-1 text-[22px] text-lightblue montserrat font-semibold'>Learn More Anywhere</h4>
                </div>

                <p className='max-w-[400px text-lightgray text-[16px] poppiins'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>

              <div className='business-card flex- flex flex-col px-6 py-4 gap-3'>
                <div className='w-full flex flex-row gap-3'>
                  <div className='bg-[#e8f5ff] w-[74px] h-[74px] flex flex-col justify-center items-center rounded-full'>
                    <CiUser className='w-[50%] h-[50%] text-[#4154f1]' />
                  </div>
                  <h4 className='flex-1 text-[22px] text-lightblue montserrat font-semibold'>Expert Instructor</h4>
                </div>

                <p className='max-w-[400px text-lightgray text-[16px] poppiins'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>

              <div className='business-card flex- flex flex-col px-6 py-4 gap-3'>
                <div className='w-full flex flex-row gap-3'>
                  <div className='bg-[#e8f5ff] w-[74px] h-[74px] flex flex-col justify-center items-center rounded-full'>
                    <CiUser className='w-[50%] h-[50%] text-[#4154f1]' />
                  </div>
                  <h4 className='flex-1 text-[22px] text-lightblue montserrat font-semibold'>Team Management</h4>
                </div>

                <p className='max-w-[400px text-lightgray text-[16px] poppiins'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>

              <div className='business-card flex- flex flex-col px-6 py-4 gap-3'>
                <div className='w-full flex flex-row gap-3'>
                  <div className='bg-[#e8f5ff] w-[74px] h-[74px] flex flex-col justify-center items-center rounded-full'>
                    <CiUser className='w-[50%] h-[50%] text-[#4154f1]' />
                  </div>
                  <h4 className='flex-1 text-[22px] text-lightblue montserrat font-semibold'>Course Planing</h4>
                </div>

                <p className='max-w-[400px text-lightgray text-[16px] poppiins'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>

              <div className='business-card flex- flex flex-col px-6 py-4 gap-3'>
                <div className='w-full flex flex-row gap-3'>
                  <div className='bg-[#e8f5ff] w-[74px] h-[74px] flex flex-col justify-center items-center rounded-full'>
                    <CiUser className='w-[50%] h-[50%] text-[#4154f1]' />
                  </div>
                  <h4 className='flex-1 text-[22px] text-lightblue montserrat font-semibold'>Teacher Monitoring</h4>
                </div>

                <p className='max-w-[400px text-lightgray text-[16px] poppiins'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>

              <div className='business-card flex- flex flex-col px-6 py-4 gap-3'>
                <div className='w-full flex flex-row gap-3'>
                  <div className='bg-[#e8f5ff] w-[74px] h-[74px] flex flex-col justify-center items-center rounded-full'>
                    <CiUser className='w-[50%] h-[50%] text-[#4154f1]' />
                  </div>
                  <h4 className='flex-1 text-[22px] text-lightblue montserrat font-semibold'>24/7 Strong Support</h4>
                </div>

                <p className='max-w-[400px text-lightgray text-[16px] poppiins'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* BEST COURSE SHOWCASE SECTION */}
      <section className='best-course-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col py-12 gap-10'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row items-center gap-3'>
                  <h4 className='text-lightgreen montserrat font-semibold uppercase'>Popular Courses</h4>
                  <span className='title-line w-[150px]'></span>
                </div>
                <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold'>Choose Our {' '}
                  <span className='text-lightgreen'>
                    <u>Top Courses</u>
                  </span>
                </h2>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center gap-5'>
              <div className='course-card flex-1 flex flex-col gap-5'>
                <div className='w-full flex flex-col justify-center items-center relative'>
                  <img src={c1} alt='' className='w-[100%] h-[100%] object-contain'/>
                  <div className='bg-green w-[64px] h-[64px] flex flex-col justify-center items-center absolute top-[10%] left-[5%] rounded-full'>
                    <span className='text-[20px] text-white poppins font-semibold'>$49</span>
                  </div>
                </div>
                
                <div className='w-full flex flex-col gap-5 px-6 py-4'>
                  <a href='' className='min-w-[200px] max-w-[200px] inline bg-green text-center text-white text-[16px] poppins font-semibold px-4 py-2 rounded-[5px]'>Arts & Design</a>

                  <h4 className='max-w-[300px] text-lightblue text-[20px] montserrat font-semibold'>
                    <a href=''>Basic Fundamentals of Interior & Graphics Design</a>
                  </h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row items-center gap-2'>
                      <span className='text-lightgreen'>
                        <IoCalendarOutline />
                        {/* <Button/> */}
                      </span>
                      <span className='text-[16px] text-lightblue poppins '>3 Lessons</span>
                    </li>

                    <li className='flex flex-row  items-center gap-2'>
                      <span className='text-lightgreen'>
                        <LuClock9/>
                      </span>
                      <span className='text-[16px] text-lightblue poppins '>3h 45m</span>
                    </li>

                    <li className='flex flex-row items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaStar/>
                      </span>
                      <span className='text-[16px] text-lightblue poppins '>4.9</span>
                    </li>

                    <li className='flex flex-row items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaTableCells/>
                      </span>
                      <span className='text-[16px] text-lightblue poppins font-semibold'>30 Seats Available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='course-card flex-1 flex flex-col gap-5'>
                <div className='w-full flex flex-col jsutify-center items-center relative'>
                  <img src={c2} alt='' className='w-[100%] h-[100%] object-contain'/>
                  <div className='bg-green w-[64px] h-[64px] flex flex-col justify-center items-center absolute top-[10%] left-[5%] rounded-full'>
                    <span className='text-[20px] text-white poppins font-semibold'>$49</span>
                  </div>
                </div>
                
                <div className='w-full flex flex-col gap-5 px-6 py-4'>
                  <a href='' className='min-w-[200px] max-w-[200px] inline bg-green text-center text-white text-[16px] poppins font-semibold px-4 py-2 rounded-[5px]'>Social</a>

                  <h4 className='max-w-[300px] text-[20px] text-lightblue montserrat font-semibold'>
                    <a href=''>Increasing Engagement with Instagram & Facebook</a>
                  </h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <IoCalendarOutline />
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3 Lessons</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <LuClock9/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3h 45m</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaStar/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>4.9</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaTableCells/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins font-semibold'>30 Seats Available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='course-card flex-1 flex flex-col gap-5'>
                <div className='w-full flex flex-col jsutify-center items-center relative'>
                  <img src={c3} alt='' className='w-[100%] h-[100%] object-contain'/>
                  <div className='bg-green w-[64px] h-[64px] flex flex-col justify-center items-center absolute top-[10%] left-[5%] rounded-full'>
                    <span className='text-[20px] text-white poppins font-semibold'>$49</span>
                  </div>
                </div>
                
                <div className='w-full flex flex-col gap-5 px-6 py-4'>
                  <a href='' className='min-w-[200px] max-w-[200px] inline bg-green text-center text-white text-[16px] poppins font-semibold px-4 py-2 rounded-[5px]'>Design</a>

                  <h4 className='max-w-[300px] text-[20px] text-lightblue montserrat font-semibold'>
                    <a href=''>Introduction to Color Theory & Basic UI/UX</a>
                  </h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <IoCalendarOutline />
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3 Lessons</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <LuClock9/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3h 45m</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaStar/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>4.9</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaTableCells/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins font-semibold'>30 Seats Available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='course-card flex-1 flex flex-col gap-5'>
                <div className='w-full flex flex-col jsutify-center items-center relative'>
                  <img src={c4} alt='' className='w-[100%] h-[100%] object-contain'/>
                  <div className='bg-green w-[64px] h-[64px] flex flex-col justify-center items-center absolute top-[10%] left-[5%] rounded-full'>
                    <span className='text-[20px] text-white poppins font-semibold'>$49</span>
                  </div>
                </div>
                
                <div className='w-full flex flex-col gap-5 px-6 py-4'>
                  <a href='' className='min-w-[200px] max-w-[200px] inline bg-green text-center text-white text-[16px] poppins font-semibold px-4 py-2 rounded-[5px]'>Technology</a>

                  <h4 className='max-w-[300px] text-[20px] text-lightblue montserrat font-semibold'>
                    <a href=''>Financial Security Thinking and Principles Theory</a>
                  </h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <IoCalendarOutline />
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3 Lessons</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <LuClock9/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3h 45m</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaStar/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>4.9</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaTableCells/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins font-semibold'>30 Seats Available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='course-card flex-1 flex flex-col gap-5'>
                <div className='w-full flex flex-col jsutify-center items-center relative'>
                  <img src={c5} alt='' className='w-[100%] h-[100%] object-contain'/>
                  <div className='bg-green w-[64px] h-[64px] flex flex-col justify-center items-center absolute top-[10%] left-[5%] rounded-full'>
                    <span className='text-[20px] text-white poppins font-semibold'>$49</span>
                  </div>
                </div>
                
                <div className='w-full flex flex-col gap-5 px-6 py-4'>
                  <a href='' className='min-w-[200px] max-w-[200px] inline bg-green text-center text-white text-[16px] poppins font-semibold px-4 py-2 rounded-[5px]'>Data Science</a>

                  <h4 className='max-w-[300px] text-[20px] text-lightblue montserrat font-semibold'>
                    <a href=''>Logo Design: From Concept to Presentation</a>
                  </h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <IoCalendarOutline />
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3 Lessons</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <LuClock9/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3h 45m</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaStar/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>4.9</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaTableCells/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins font-semibold'>30 Seats Available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='course-card flex-1 flex flex-col gap-5'>
                <div className='w-full flex flex-col jsutify-center items-center relative'>
                  <img src={c6} alt='' className='w-[100%] h-[100%] object-contain'/>
                  <div className='bg-green w-[64px] h-[64px] flex flex-col justify-center items-center absolute top-[10%] left-[5%] rounded-full'>
                    <span className='text-[20px] text-white poppins font-semibold'>$49</span>
                  </div>
                </div>
                
                <div className='w-full flex flex-col gap-5 px-6 py-4'>
                  <a href='' className='min-w-[200px] max-w-[200px] inline bg-green text-center text-white text-[16px] poppins font-semibold px-4 py-2 rounded-[5px]'>Development</a>

                  <h4 className='max-w-[300px] text-[20px] text-lightblue montserrat font-semibold'>
                    <a href=''>Professional Ceramic Moulding for Beginners</a>
                  </h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <IoCalendarOutline />
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3 Lessons</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <LuClock9/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>3h 45m</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaStar/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins'>4.9</span>
                    </li>

                    <li className='flex flex-row justify-center items-center gap-2'>
                      <span className='text-lightgreen'>
                        <FaTableCells/>
                      </span>
                      <span className='text-lightblue text-[16px] poppins font-semibold'>30 Seats Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <a href='' className='cta outline-none w-[196px] text-[15px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold capitalize m-auto px-6 py-4 gap-2'>View All Course</a>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE PROMOTION SECTION */}
      <section className='course-promo flex jusifify-center items-center px-6 md:px-16'>
        <div className='box-width w-full x:max-w-[1280px]'> 
          <div className='layout-layer flex flex-col md:flex-row justify-center items-start py-12 gap-10'>
            <div className='flex-1 flex flex-col gap-5'>
              <h4 className='text-[18px] text-lightgreen montserrat font-semibold'>Best Online Learning Platform</h4>
              
              <h2 className='text-[30px] text-lightblue md:text-[40px] montserrat font-bold capitalize leading-[52px]'>One Platfrom & Many {' '} 
                <span className='text-lightgreen'>
                  <u>Courses</u>
                </span> For You
              </h2>
              
              <p className='text-[16px] text-lightgray poppins'>From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
             
              <ul className='flex flex-col mb-5 gap-3'>
                <li className='w-full flex flex-row items-center gap-3'>
                  <div className='bg-green w-[32px] h-[32px] flex flex-col justify-center items-center px-2'>
                    <FaCheck className='w-[100%] h-[100%] text-white'/>
                  </div>
                  <span className='flex-1 text-[16px] poppins font-semibold capitalize'>9/10 Average Satisfaction Rate</span>
                </li>

                <li className='w-full flex flex-row items-center gap-3'>
                  <div className='bg-green w-[32px] h-[32px] flex flex-col justify-center items-center px-2'>
                    <FaCheck className='w-[100%] h-[100%] text-white'/>
                  </div>
                  <span className='flex-1 text-[16px] poppins font-semibold capitalize'>96% Completitation Rate</span>
                </li>

                <li className='w-full flex flex-row items-center gap-3'>
                  <div className='bg-green w-[32px] h-[32px] flex flex-col justify-center items-center px-2'>
                    <FaCheck className='w-[100%] h-[100%] text-white'/>
                  </div>
                  <span className='flex-1 text-[16px] poppins font-semibold capitalize'>Friendly Environment & Expert Teacher</span>
                </li>
              </ul>

              <a href='' className='cta outline-none w-[300px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                <span>Explore Our Courses </span>
                <FaArrowRight className='w-[16px] h-[16px]'/>
              </a>
            </div>

            <div className='flex-1 flex flex-col justify-center items-center'>
              <img src={promo} alt='' className='w-[100%] h-[100%] ' />
            </div>
          </div>
        </div>
      </section>

      {/* NEWS-LETTER SECTION */}
      <section className='news-letter flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer bg-black= grid grid-cols-12 justify-center items-center py-12 md:py-12'> 
            <div className='news-letter-form text-center col-start-1 col-span-12 md:col-start-4 md:col-span-6 flex flex-col gap-5'>
              <h2 className='w-[95%] text-[30px] md:text-[40px] text-lightblue montserrat font-bold capitalize leading-[] md:leading-[52px] m-auto'>Subscribe to our newsletter, We don't make any spam.</h2>

              <p className='text-[16px] text-lightgray poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>

              <div className='newsletter-form-input w-full h-[52px] flex flex-row rounded-full'>
                <input type='text' placeholder='Enter Your Email Address' className='flex-1 outline-none montserrat font-semibold capitalize  p-5' />
                <div className='bg-green w-[52px] h-[100%] flex flex-col justify-center items-center text-white poppins font-bold rounded-full'>
                  <FaRegPaperPlane className='w-[22px] h-[22px]'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC CONTENT SECTION */}
      <section className='topic-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col justify-center items-center py-12 gap-10'>
            <div className='w-full flex flex-col'>
              <div className='w-full flex flex-row items-center gap-3'>
                <h4 className='text-lightgreen montserrat font-semibold uppercase'>Start Learning</h4>
                <span className='title-line w-[150px]'></span>
              </div>
              <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold'>Popular {' '}
                <span className='text-lightgreen'>
                <u>Topics To Learn</u>
                </span>{' '}n
                From Today.
              </h2>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 '>
              <div className='topic-card flex-1 flex flex-row gap-3'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                  <img src={ct1} alt='' className='w-[100%] h-[100%]' />
                </div>

                <div className='flex-1 flex flex-col gap-3'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold'>UI/UX Design</h4>
                  <p className='text-[18px] text-lightgreen poppins '>71 Courses</p>
                </div>
              </div>

              <div className='topic-card flex-1 flex flex-row gap-3'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                  <img src={ct2} alt='' className='w-[100%] h-[100%]' />
                </div>

                <div className='flex-1 flex flex-col gap-3'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Digital Program</h4>
                  <p className='text-[18px] text-lightgreen poppins '>59 Courses</p>
                </div>
              </div>

              <div className='topic-card flex-1 flex flex-row gap-3'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                  <img src={ct3} alt='' className='w-[100%] h-[100%]' />
                </div>

                <div className='flex-1 flex flex-col gap-3'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Finance</h4>
                  <p className='text-[18px] text-lightgreen poppins '>68 Courses</p>
                </div>
              </div>

              <div className='topic-card flex-1 flex flex-row gap-3'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                  <img src={ct4} alt='' className='w-[100%] h-[100%]' />
                </div>

                <div className='flex-1 flex flex-col gap-3'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Modern Physics</h4>
                  <p className='text-[18px] text-lightgreen poppins '>83 Courses</p>
                </div>
              </div>

              <div className='topic-card flex-1 flex flex-row gap-3'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                  <img src={ct5} alt='' className='w-[100%] h-[100%]' />
                </div>

                <div className='flex-1 flex flex-col gap-3'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Music Production</h4>
                  <p className='text-[18px] text-lightgreen poppins '>37 Courses</p>
                </div>
              </div>

              <div className='topic-card flex-1 flex flex-row gap-3'>
                <div className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                  <img src={ct6} alt='' className='w-[100%] h-[100%]' />
                </div>

                <div className='flex-1 flex flex-col gap-3'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Data Science</h4>
                  <p className='text-[18px] text-lightgreen poppins '>51 Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT SECTION */}
      <section className='event-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col py-12 md:py-12 gap-10'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row items-center gap-3'>
                  <h4 className='text-lightgreen montserrat font-semibold uppercase'>Upcoming Events</h4>
                  <span className='title-line w-[150px]'></span>
                </div>
                <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold capitalize'>Join With Us {' '}
                  <span className='text-lightgreen'>
                    <u>Our Events</u>
                  </span>
                </h2>
            </div>

            <div className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <div className='event-card'>
                <div className='w-full relative'>
                  <img src={e1} alt='event-img' className='w-[100%]' />
                  <div className='flex flex-row text-[20px] text-white montserrat font-semibol capitalize absolute top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>20</span>
                    <span className='bg-green px-6 py-2'>Oct</span>
                  </div>
                </div>

                <div className='event-card-content w-full flex flex-col p-6 gap-5'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold cursor-pointer'>Electrical Engineering of Batparder new event</h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <LuClock9 className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>10.00AM - 12.00PM</span>
                    </li>

                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <IoCalendarOutline className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>At Penn School</span>
                    </li>
                  </ul>

                  <p className='text-[16px] text-lightgray'>Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
                </div>
              </div>
              
              <div className='event-card'>
                <div className='w-full relative'>
                  <img src={e2} alt='event-img' className='w-[100%]' />
                  <div className='flex flex-row text-[20px] text-white montserrat font-semibol capitalize absolute top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>20</span>
                    <span className='bg-green px-6 py-2'>Oct</span>
                  </div>
                </div>

                <div className='event-card-content w-full flex flex-col px-6 py-4 gap-5'>
                  <h4 className='text-[20px] text-lightblue montserrat font-semibold cursor-pointer'>Architecture Design of International Art Fair 2023</h4>

                  <ul className='w-full flex flex-wrap gap-3'>
                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <LuClock9 className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>10.00AM - 12.00PM</span>
                    </li>

                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <IoCalendarOutline className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>At Penn School</span>
                    </li>
                  </ul>

                  <p className='text-[16px] text-lightgray'>Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
                </div>
              </div>

              <div className='event-card flex-1 flex flex-col gap-10'>
                <div className='event-card-content flex flex-col gap-5'>
                  <div className='flex flex-row text-[20px] text-white montserrat font-semibol capitalize absolut top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>20</span>
                    <span className='bg-green px-6 py-2'>Oct</span>
                  </div>

                  <h4 className='text-[20px] montserrat font-semibold'>Chiter astana event</h4>

                  <ul className='w-full flex flex-wrap text-[16px] gap-3'>
                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <LuClock9 className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>10.00AM - 12.00PM</span>
                    </li>

                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <IoCalendarOutline className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>At Penn School</span>
                    </li>
                  </ul>

                  <p className='text-lightgray'>Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
                </div>

                <div className='event-card-content flex flex-col gap-5'>
                  <div className='flex flex-row text-[20px] text-white montserrat font-semibol capitalize absolut top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>20</span>
                    <span className='bg-green px-6 py-2'>Oct</span>
                  </div>

                  <h4 className='text-[20px] montserrat font-semibold'>Chiter astana event</h4>

                  <ul className='w-full flex flex-wrap text-[16px] gap-3'>
                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <LuClock9 className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>10.00AM - 12.00PM</span>
                    </li>

                    <li className='flex flex-row items-center gap-2'>
                      <span className='w-[16px] h-[16px] text-lightgreen flex flex-col justify-center items-center font-bold'>
                        <IoCalendarOutline className='w-[100%] h-[100%]' />
                      </span>
                      <span className='text-lightblue poppins font-semibol capitalize'>At Penn School</span>
                    </li>
                  </ul>

                  <p className='text-lightgray'>Lorem ipsum dolor sit amet magna consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEEDBACK/TESTIMONIAL SECTION */}
      <section className='feedback-section flex justify-center items-center px-6 md:px-16'>
        <div className='w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col py-12 gap-10'>
            <div className='w-full flex flex-col'>
              <div className='w-full flex flex-row items-center gap-3'>
                <h4 className='text-lightgreen montserrat font-semibold uppercase'>Testimonial</h4>
                <span className='title-line w-[150px]'></span>
              </div>
              <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold capitalize'>What Says {' '}
                <span className='text-lightgreen'>
                  <u>Our Students</u>
                </span>
              </h2>
            </div>

            {/* <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'> */}

            <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightblu text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-[#eee] flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t1} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>James Clayton</h4>
                    <p className='text-[14px] text-lightblue poppins'>- Design Expert</p>
                  </div>
                </div>
              </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightblu text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-lightpink flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t2} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>James Simmons</h4>
                    <p className='text-[14px] text-lightblue poppins'>- Marketing Expert</p>
                  </div>
                </div>
              </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightblu text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-coral flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t3} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>Alex Feroundo</h4>
                    <p className='text-[14px] text-lightblue poppins'>- Founder</p>
                  </div>
                </div>
              </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightblu text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-[#eee] flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t4} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>Kallu Mastan</h4>
                    <p className='text-[14px] text-lightblue poppins'>- Mastan Group</p>
                  </div>
                </div>
              </div>
        </SwiperSlide>
       
        <SwiperSlide>
        <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightgra text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-lightpink flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t1} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>David Max</h4>
                    <p className='text-[14px] text-lightblue poppins'>- Max INC</p>
                  </div>
                </div>
              </div>
        </SwiperSlide>
      </Swiper>

              {/* <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightgray text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-tealgreen flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t1} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>James Clayton</h4>
                    <p className='text-[14px] poppins'>- Design Expert</p>
                  </div>
                </div>
              </div>

              <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightgray text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-lightpink flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t2} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>James Simmons</h4>
                    <p className='text-[14px] poppins'>- Marketing Expert</p>
                  </div>
                </div>
              </div>

              <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightgray text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-coral flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t3} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>Alex Feroundo</h4>
                    <p className='text-[14px] poppins'>- Founder</p>
                  </div>
                </div>
              </div>

              <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightgray text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-tealgreen flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t4} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>Kallu Mastan</h4>
                    <p className='text-[14px] poppins'>- Mastan Group</p>
                  </div>
                </div>
              </div>

              <div className='feedback-card flex flex-col'>
                <div className='w-full flex flex-col p-6 gap-5'>
                  <ul className='text-[#ffbd35] flex flex-row gap-1'>
                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>

                    <li className='flex flex-col justify-center items-center w-[22px] h-[22px]'>
                      <FaStar className='w-[100%] h-[100%]' />
                    </li>
                  </ul>
                  <p className='text-lightgray text-[16px] poppins'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor.</p>
                </div>
                
                <div className='w-full bg-lightpink flex flex-row justify-center items-center p-4 gap-3'>
                  <div className='flex flex-col w-[70px] h-[70px] rounded-full'>
                    <img src={t1} alt='feedback-img' className='w-[100%] h-[100%] object-contain rounded-full' />
                  </div>

                  <div className='flex-1 flex flex-col justify-center capitalize gap-2'>
                    <h4 className='text-[20px] text-lightblue poppins font-semibold'>David Max</h4>
                    <p className='text-[14px] poppins'>- Max INC</p>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className='team-section flex jsutify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col py-12 gap-10'>
          <div className='w-full flex flex-col'>
              <div className='w-full flex flex-row items-center gap-3'>
                <h4 className='text-lightgreen montserrat font-semibold uppercase'>Team Member</h4>
                <span className='title-line w-[150px]'></span>
              </div>
              <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold capitalize'>Our Expert {' '}
                <span className='text-lightgreen'>
                  <u>Instructors</u>
                </span>
              </h2>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='team-card'>
              <div className='team-img-box relative flex flex-col justify-center items-center'>
                <img src={team1} alt='' className='w-[100%] h-[100%] object-contain'/>
              </div>

              <div className='w-[90%] text-white bg-green flex flex-col justify-center items-center m-auto px-6 py-4 gap-2 relative bottom-[120px] rounded-[10px]'>
                <h5 className='text-[20px] montserrat font-semibold'>Marina Mojo</h5>
                <p className='text-[16px] poppins'>Developer</p>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                    <FaRegFile className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>5 Courses</u>
                  </span>
                </div>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span>
                    <FaUserGroup className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>12 Students</u>
                  </span>
                </div>
                <div className='w-full text-black flex flex-row justify-center items-center gap-2'>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaFacebookF /> 
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaTwitter />
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className='team-card'>
              <div className='team-img-box relative flex flex-col justify-center items-center'>
                <img src={team2} alt='' className='w-[100%] h-[100%] object-contain'/>
              </div>

              <div className='w-[90%] text-white bg-green flex flex-col justify-center items-center m-auto px-6 py-4 gap-2 relative bottom-[120px] rounded-[10px]'>
                <h5 className='text-[20px] montserrat font-semibold'>Marina Mojo</h5>
                <p className='text-[16px] poppins'>Developer</p>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                    <FaRegFile className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>5 Courses</u>
                  </span>
                </div>

                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span>
                    <FaUserGroup className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>12 Students</u>
                  </span>
                </div>
                <div className='w-full text-black flex flex-row justify-center items-center gap-2'>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaFacebookF /> 
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaTwitter />
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className='team-card'>
              <div className='team-img-box relative flex flex-col justify-center items-center'>
                <img src={team3} alt='' className='w-[100%] h-[100%] object-contain'/>
              </div>

              <div className='w-[90%] text-white bg-green flex flex-col justify-center items-center m-auto px-6 py-4 gap-2 relative bottom-[120px] rounded-[10px]'>
                <h5 className='text-[20px] montserrat font-semibold'>Marina Mojo</h5>
                <p className='text-[16px] poppins'>Developer</p>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                    <FaRegFile className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>5 Courses</u>
                  </span>
                </div>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span>
                    <FaUserGroup className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>12 Students</u>
                  </span>
                </div>
                <div className='w-full text-black flex flex-row justify-center items-center gap-2'>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaFacebookF /> 
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaTwitter />
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className='team-card'>
              <div className='team-img-box relative flex flex-col justify-center items-center'>
                <img src={team4} alt='' className='w-[100%] h-[100%] object-contain'/>
              </div>

              <div className='w-[90%] text-white bg-green flex flex-col justify-center items-center m-auto px-6 py-4 gap-2 relative bottom-[120px] rounded-[10px]'>
                <h5 className='text-[20px] montserrat font-semibold'>Marina Mojo</h5>
                <p className='text-[16px] poppins'>Developer</p>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                    <FaRegFile className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>5 Courses</u>
                  </span>
                </div>
                <div className='w-full flex flex-row justify-center items-center gap-2'>
                  <span>
                    <FaUserGroup className='w-[100%] h-[100%] '/>
                  </span>
                  <span className='text-[16px] poppins'>
                    <u>12 Students</u>
                  </span>
                </div>
                <div className='w-full text-black flex flex-row justify-center items-center gap-2'>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaFacebookF /> 
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaTwitter />
                  </a>
                  <a href='' className='w-[40px] h-[40px] bg-white hover:text-[#2eca7f] flex flex-col justify-center items-center rounded-full'>
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className='blog-section blog-gradient flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col py-12 md:py-12 gap-10'>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-row items-center gap-3'>
                  <h4 className='text-lightgreen montserrat font-semibold uppercase'>News</h4>
                  <span className='title-line w-[150px]'></span>
                </div>
                <h2 className='text-lightblue text-[30px] md:text-[40px] montserrat font-bold capitalize'>Our Latest {' '}
                  <span className='text-lightgreen'>
                    <u>Blogs</u>
                  </span>
                </h2>
            </div>

            <div className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='blog-card flex-1 flex flex-col gap-5'>
                <div className='blog-card-content flex flex-col gap-5'>
                  <div className='flex flex-row text-[16px] text-white montserrat font-semibol capitalize absolut top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>August 25, 2023</span>
                    <a href='' className='bg-green px-6 py-2'>Design</a>
                  </div>

                  <h4 className='text-[20px] text-lightblue hover:text-[#2eca7f] montserrat font-semibold'>
                    <a href=''>Professional Mobile Painting and Sculpting</a>
                  </h4>

                  <a href='' className='cta outline-none w-[193px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                    <span className=''>read more</span>
                    <FaArrowRight className='w-[16px] h-[16px]'/>
                  </a>
                </div>

                <div className='blog-card-content flex flex-col gap-5'>
                  <div className='flex flex-row text-[16px] text-white montserrat capitalize'>
                    <span className='bg-blue px-6 py-2'>August 25, 2023</span>
                    <a href='' className='bg-green px-6 py-2'>Design</a>
                  </div>

                  <h4 className='text-[20px] text-lightblue hover:text-[#2eca7f] montserrat font-semibold'>
                    <a href=''>Professional Mobile Painting and Sculpting</a>
                  </h4>

                  <a href='' className='cta outline-none w-[193px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                    <span className=''>read more</span>
                    <FaArrowRight className='w-[16px] h-[16px]'/>
                  </a>
                </div>
              </div>
              
              <div className='blog-card'>
                <div className='w-full relative'>
                  <img src={b2} alt='blog-img' className='w-[100%]' />
                  <div className='flex flex-row text-[16px] text-white montserrat capitalize absolute top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>August 26, 2023</span>
                    <span className='bg-green px-6 py-2'>Education</span>
                  </div>
                </div>

                <div className='blog-card-content w-full flex flex-col p-6 gap-5'>
                  <h4 className='text-[20px] text-lightblue hover:text-[#2eca7f] montserrat font-semibold'>
                    <a href=''>Professional Mobile Painting and Sculpting</a>
                  </h4>

                  <a href='' className='cta outline-none w-[193px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                    <span className=''>read more</span>
                    <FaArrowRight className='w-[16px] h-[16px]'/>
                  </a>
                  
                </div>
              </div>
              
              <div className='blog-card'>
                <div className='w-full relative'>
                  <img src={b3} alt='blog-img' className='w-[100%]' />
                  <div className='flex flex-row text-[16px] text-white montserrat font-semibol capitalize absolute top-[30px] left-[15px]'>
                    <span className='bg-blue px-6 py-2'>August 28, 2023</span>
                    <span className='bg-green px-6 py-2'>Programming</span>
                  </div>
                </div>

                <div className='blog-card-content w-full flex flex-col px-6 py-4 gap-5'>
                  <h4 className='text-[20px] text-lightblue hover:text-[#2eca7f] montserrat font-semibold'>
                    <a href=''>Education Is About Create Leaders For Tomorrow</a>
                  </h4>

                  <a href='' className='cta outline-none w-[193px] text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f] flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                    <span className=''>read more</span>
                    <FaArrowRight className='w-[16px] h-[16px]'/>
                  </a>
                  
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className='footer-section flex justify-center items-center px-6 md:px-16'>
        <div className='box-width w-full xl:max-w-[1280px]'>
          <div className='layout-layer flex flex-col py-12 gap-10'>
            <div className='w-full flex flex-col md:flex-row gap-10'>
              <div className='text-white flex-1 flex flex-col gap-5'>
                <a href=''>
                  <img src={logo2} alt='logo' className='' />
                </a>
                
                <p className='max-w-[400px] montserrat text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim.</p>

                <ul className='w-full flex flex-row montserrat uppercase gap-3'>
                  <li>
                    <a href=''>
                      <u>TW</u>
                    </a>
                  </li>

                  <li>
                    <a href=''>
                      <u>fb</u>
                    </a>
                  </li>

                  <li>
                    <a href=''>
                      <u>ins</u>
                    </a>
                  </li>

                  <li>
                    <a href=''>
                      <u>tb</u>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='flex-[1.5] flex flex-wrap gap-10'>
                <div className='text-white flex flex-col capitalize gap-5 '>
                  <h4 className='text-[20px] montserratt font-semibold'>courses</h4>

                  <ul className='text-[15px] flex flex-col montserrat font-normal gap-3'>
                    <li>
                      <a href=''>- creaive writing</a>
                    </li>

                    <li>
                      <a href=''>- digital marketing</a>
                    </li>

                    <li>
                      <a href=''>- SEO business</a>
                    </li>

                    <li>
                      <a href=''>- social marketing</a>
                    </li>

                    <li>
                      <a href=''>- graphic design</a>
                    </li>

                    <li>
                      <a href=''>- website development</a>
                    </li>
                  </ul>
                </div>

                <div className='text-white flex flex-col capitalize gap-5 '>
                  <h4 className='text-[20px] montserratt font-semibold'>company</h4>

                  <ul className='text-[15px] flex flex-col montserrat gap-3'>
                    <li>
                      <a href=''>- about us</a>
                    </li>

                    <li>
                      <a href=''>- knowledge base</a>
                    </li>

                    <li>
                      <a href=''>- affiliate program</a>
                    </li>

                    <li>
                      <a href=''>- community</a>
                    </li>

                    <li>
                      <a href=''>- market API</a>
                    </li>

                    <li>
                      <a href=''>- support team</a>
                    </li>
                  </ul>
                </div>

                <div className='text-white flex flex-col capitalize gap-5 '>
                  <h4 className='text-[20px] montserratt font-semibold'>contact info</h4>

                  <ul className='text-[16px] flex flex-col montserrat gap-5'>
                    <li className='w-full flex flex-row gap-3'>
                      <div className='w-[30px] h-[30px] flex flex-col justify-center items-center m-2'>
                        <TfiMobile className='w-[100%] h-[100%] text-lightgreen' />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <span className='text-[18px] font-semibold'>phone number</span>
                        <span className='text-[14px]'>+88 541 856 595</span>
                      </div>
                    </li>

                    <li className='w-full flex flex-row gap-3'>
                      <div className='w-[30px] h-[30px] flex flex-col justify-center items-center m-2'>
                        <TfiEmail className='w-[100%] h-[100%] text-lightgreen' />
                      </div>
                      <div className='flex-1 flex flex-col justify-start gap-1'>
                        <span className='text-[18px] font-semibold'>email address</span>
                        <span className='text-[14px]'>info@penn.com</span>
                      </div>
                    </li>

                    <li className='w-full flex flex-row gap-3'>
                      <div className='w-[30px] h-[30px] flex flex-col justify-center items-center m-2'>
                        <FaRegMap className='w-[100%] h-[100%] text-lightgreen' />
                      </div>
                      <div className='flex flex-col gap-1'>
                        <span className='text-[18px] font-semibold'>office address</span>
                        <span className='text-[14px]'>california USA</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>      
            </div>

            <div className='footer-bottom text-[16px] text-white flex flex-col md:flex-row justify-between items-center montserrat pt-10 gap-2'>
              <div>
                <p>2024. All Rights Reserved.</p>
              </div>

              <div>
                <ul className='flex flex-row items-center gap-5'>
                  <li>
                    <a href=''>Terms of use</a>
                  </li>

                  <li>
                    <a href=''>Privacy Policy</a>
                  </li>

                  <li>
                    <a href=''>Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <SingleBlogPage />

    </div>
  )
}

export default App
