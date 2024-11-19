import {useState} from 'react';

// images
import logo from '../../../assets/logo.png'

// icons
import { CiMenuFries } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function SingleBlogPage() {
    
    const [toggle, setToggle] = useState(false)


    return (
        <>
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
                            <a href='#' className="flex flex-row justify-center items-center gap-1">
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

            {/* START SECTION */}
            This is a single page
        </>
    )
}

export default SingleBlogPage