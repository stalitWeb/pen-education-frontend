import {useState} from 'react';

// Images
import logo from '../../../assets/logo.png'
import blog3 from '../../../assets/blog3.png'
import blog1 from '../../../assets/blog1.png'
import author from '../../../assets/author.jpg'
import usr1 from '../../../assets/usr1.jpg'
import usr2 from '../../../assets/usr2.jpg'
import usr3 from '../../../assets/usr3.jpg'
import logo2 from '../../../assets/logo2.png'
import blog_1 from '../../../assets/blog-1.png'
import blog_2 from '../../../assets/blog-2.png'
import blog_3 from '../../../assets/blog-3.png'
import blog_4 from '../../../assets/blog-4.png'
import blog_5 from '../../../assets/blog-5.png'
import banner from '../../../assets/banner.jpg'


// Icons
import { CiMenuFries } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";
import { FaRegMap } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaPinterest } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

// Css
import './index.css'

function SingleBlogPage() {
    
    const [toggle, setToggle] = useState(false)


    return (
        <>
            {/* HEADER SECTION */}
            <header className='header flex justify-center items-center px-6 md:px-16'>
                <div className='containe w-full xl:max-w-[1280px]'>
                    <div className='layout-layer flex flex-col lg:flex-row justify-center capitalize py-6 gap-3 lg:gap-10'>
                        <div className='flex-[1.5] flex flex-row justify-between items-cente gap-5'>
                        <a href='/' className='w-[152px] h-[52px] flex flex-col justify-center items-center montserrat'>
                            <img src={logo} alt='' className='w-[100%] h-[1005] object-contai'/>
                        </a>
            
                        <ul className='hidden text-lightblue lg:flex flex-row justify-center items-center text-[16px] montserrat font-normal gap-5'>
                            <li className='desktop-menu relative flex flex-col'>
                            <a href='/'>home</a>
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
                                <a href=''>FAQs</a>
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
                                <a href=''>FAQs</a>
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
            <section className='start-section w-full flex justify-center items-center px-6 md:px-16'>
                <div className='box-width w-full xl:max-w-[1280px]'>
                    <div className='layout-layer w-full flex flex-col justify-center items-center py-12 md:py-24 gap-5'>
                        <h1 className='text-[52px] text-lightblue md:text-[72px] montserrat font-semibold'>Single Blog</h1>

                        <div className='bg-white poppins px-6 py-4 rounded-[5px]'>
                            <a href="" className='text-lightgreen montserrat'>Home</a>
                            <span>/ Single Blog</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN SECTION */}
            <section className='main-section flex jsutify-center items-center px-6 md:px-16'>
                <div className='box-width w-full xl:max-w-[1280px]'>
                    <div className='layout-layer flex flex-col md:flex-row justify-center items-start py-12 md:py-24 gap-10'>
                        <div className='flex-[1.5] flex flex-col gap-10'>
                            <div className='blog-content flex flex-col gap-5'>
                                <img src={blog3} alt='' className='w-full object-contain' />
                                <p className='text-[16px] text-lightgray poppins'>I almost couldn’t believe it was real! For my first test I had generate some website copy 
                                    for me. I provided about 50 words to describe my business along with my business name. 
                                    generated two variants of copy each with several paragraphs of professional sounding copy. 
                                    I immediately shared the results with a friend who couldn’t believe it was written by an AI. 
                                    is worth every penny and then some. Describe my business along with my business name. generated
                                     two variants of copy each with several paragraphs of professional sounding copy. I immediately 
                                     shared the results with a friend who couldn’t believe it was written by an AI. is worth every 
                                     penny and then some!</p>

                                     <h4 className='w-[95%] text-lightblue text-[30px] montserrat font-bold capitalize ml-auto'>Enhancing Your E-commerce Store With AI Writing Assistants</h4>

                                     <img src={blog1} alt='' className='w-full object-contain' />

                                     <p className='text-[16px] text-lightgray poppins'>I immediately shared the results with a friend who couldn’t believe it was written by an AI. 
                                        is worth every penny and then some. Describe my business along with my business name. generated 
                                        two variants of copy each with several paragraphs of professional sounding copy. I immediately 
                                        shared the results with a friend who couldn’t believe it was written by an AI. is worth every 
                                        penny and then some!</p>
                            </div>

                            <div className='blog-social-Wrapper w-full flex flex-col gap-5'>
                                <h4 className='text-[20px] text-lightblue montserrat font-semibold'>Share</h4>

                                <ul className='blog-social flex flex-row items-center gap-3'>
                                    <li>
                                        <a href="" className='flex flex-row justify-center items-center poppins capitalize px-6 py-4 gap-2'>
                                            <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                                                <FaFacebookF className='w-[100%] h-[100%]' />
                                            </span>
                                            <span>Faceboook</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" className='flex flex-row justify-center items-center poppins capitalize px-6 py-4 gap-2'>
                                            <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                                                <FaTwitter className='w-[100%] h-[100%]' />
                                            </span>
                                            <span>Twitter</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" className='flex flex-row justify-center items-center poppins capitalize px-6 py-4 gap-2'>
                                            <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                                                <FaInstagram className='w-[100%] h-[100%]' />
                                            </span>
                                            <span>instagram</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" className='flex flex-row justify-center items-center poppins capitalize px-6 py-4 gap-2'>
                                            <span className='w-[16px] h-[16px] flex flex-col justify-center items-center'>
                                                <FaLinkedinIn className='w-[100%] h-[100%]' />
                                            </span>
                                            <span>Linkedin</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='author-section flex flex-col gap-10'>
                                <h4 className='title text-lightblue montserrat font-semibold uppercase'>About the author</h4>

                                <div className='author-card flex flex-row gap-5'>
                                    <div className='img-box bg-green w-[120px] h-[120px] flex flex-col justify-center items-center relative z-[10] rounded-full'>
                                        <img src={author} alt='comment-image' className='w-[100%] h-[100%] object-contain absolute z-[2] rounded-full'/>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-3'>
                                        <h4 className='text-lightblue montserrat font-semibold'>Marina Mojo</h4>
                                        <p className='text-lightgray poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi,
                                             vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='comment-section w-full flex flex-col gap-10'>
                                <h4 className='title text-lightblue montserrat font-semibold uppercase'>Comments</h4>

                                <div className='w-full flex flex-col gap-10'>
                                    <div className='comment-card flex flex-row gap-5'>
                                        <div className='img-box bg-green w-[120px] h-[120px] flex flex-col justify-center items-center relative z-[10] rounded-full'>
                                            <img src={usr1} alt='comment-image' className='w-[100%] h-[100%] object-contain absolute z-[2] rounded-full'/>
                                        </div>

                                        <div className='flex-1 flex flex-col gap-3'>
                                            <h4 className='text-lightblue montserrat font-semibold uppercase'>Ayoub Fennouni</h4>
                                            <p className='text-lightgray poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi,
                                                vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.</p>
                                        </div>
                                    </div>

                                    <div className='reply-card flex flex-row gap-5'>
                                        <div className='img-box bg-green w-[120px] h-[120px] flex flex-col justify-center items-center relative z-[10] rounded-full'>
                                            <img src={usr2} alt='comment-image' className='w-[100%] h-[100%] object-contain absolute z-[2] rounded-full'/>
                                        </div>

                                        <div className='flex-1 flex flex-col gap-3'>
                                            <h4 className='text-lightblue montserrat font-semibold uppercase'>Kader Bhai</h4>
                                            <p className='text-lightgray poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi,
                                                vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.</p>
                                        </div>
                                    </div>

                                    <div className='comment-card flex flex-row gap-5'>
                                        <div className='img-box bg-green w-[120px] h-[120px] flex flex-col justify-center items-center relative z-[10] rounded-full'>
                                            <img src={usr3} alt='comment-image' className='w-[100%] h-[100%] object-contain absolute z-[2] rounded-full'/>
                                        </div>

                                        <div className='flex-1 flex flex-col gap-3'>
                                            <h4 className='text-lightblue montserrat font-semibold uppercase'>Mark Linomi</h4>
                                            <p className='text-lightgray poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi,
                                                vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='comment-form-section w-full flex flex-col gap-10'>
                                <h4 className='title text-lightblue montserrat font-semibold uppercase'>Add a Comment</h4>

                                <form className='w-full flex flex-col gap-10'>
                                    <div className='w-full form-group flex flex-wrap montserrat font-semibol gap-10'>
                                        <input  placeholder='Name' type='text' className='flex-1'/>
                                        <input  placeholder='Email' type='email' className='flex-1'/>
                                    </div>  

                                     <div className='w-full form-group flex flex-col montserrat font-semibol gap-5'>
                                        <input  placeholder='Subject' type='text' className='flex-1'/>
                                    </div>

                                    <div className='w-full form-group flex flex-col montserrat font-semibol gap-5'>
                                        <textarea  placeholder='Your Message' type='text' className='' />
                                    </div>    
 
                                     <div className='w-full form-group flex flex-row montserrat font-semibol gap-10'>
                                        <button className='cta outline-none text-lightblue hover:text-white border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#2eca7f]  flex flex-row justify-center items-center montserrat font-semibold capitalize px-6 py-4 gap-2'> Submit Comment</button>
                                    </div>                                   
                                </form>
                            </div>

                        </div>

                        <div className='flex-1 flex flex-col gap-10'>
                            <div className='form-wrapper w-full flex flex-col'>
                                <form  className='form-card w-full bg-blue flex flex-col text-white  gap-5'>
                                    <h4 className='text-[20px] montserrat font-semibold'>Subscribe To Get Update</h4>

                                    <p className='text-[16px] poppins'>I immediately shared the results with a friend who couldn’t 
                                        Describe my business generated. </p>

                                    <div className='flex flex-col poppins'>
                                        <input placeholder='Email' type='email' className='text-black'/>
                                    </div>

                                    <div className='w-full flex flex-col'> 
                                        <button className='cta bg-green outline-none text-white hover:text-black border-solid border-2 border-gray-400 hover:border-white rounded-full hover:bg-[#fff]  flex flex-row justify-center items-center montserrat font-semibold uppercase px-6 py-4 gap-2'>
                                            Subcribe
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className='post-list-section w-full flex flex-col gap-5'>
                                <h4 className='title text-[20px] text-lightblue montserrat font-semibold uppercase'>Popular post</h4>
                                
                                <div className='post-card w-full flex flex-col gap-5'>
                                    <div className='w-full flex flex-row gap-3'>
                                        <div className='bg-[#ddd] w-[90px] h-[70px] flex flex-col justify-center items-center rounded-[10px]'>
                                            <img src={blog_1} alt='blog-img' className='w-[100%] h-[100%] object-contai  rounded-[10px]'/>
                                        </div>

                                        <a href='' className='flex-1 text-lightgray poppins'>Supercharging Your SEO Game with AI Writing Assistants</a>
                                    </div>

                                    <div className='w-full flex flex-row gap-3'>
                                        <div className='bg-[#ddd] w-[90px] h-[70px] flex flex-col justify-center items-center rounded-[10px]'>
                                            <img src={blog_2} alt='blog-img' className='w-[100%] h-[100%] object-contai  rounded-[10px]'/>
                                        </div>

                                        <a href='' className='flex-1 text-lightgray poppins'>AI Writing Assistants and the Future of Content Marketing</a>
                                    </div>

                                    <div className='w-full flex flex-row gap-3'>
                                        <div className='bg-[#ddd] w-[90px] h-[70px] flex flex-col justify-center items-center rounded-[10px]'>
                                            <img src={blog_3} alt='blog-img' className='w-[100%] h-[100%] object-contai  rounded-[10px]'/>
                                        </div>

                                        <a href='' className='flex-1 text-lightgray poppins'>Enhancing Your E-commerce Store With AI Writing Assistants.</a>
                                    </div>

                                    <div className='w-full flex flex-row gap-3'>
                                        <div className='bg-[#ddd] w-[90px] h-[70px] flex flex-col justify-center items-center rounded-[10px]'>
                                            <img src={blog_4} alt='blog-img' className='w-[100%] h-[100%] object-contai  rounded-[10px]'/>
                                        </div>

                                        <a href='' className='flex-1 text-lightgray poppins'>Building your content strategy cannot get easier than this.</a>
                                    </div>

                                    <div className='w-full flex flex-row gap-3'>
                                        <div className='bg-[#ddd] w-[90px] h-[70px] flex flex-col justify-center items-center rounded-[10px]'>
                                            <img src={blog_5} alt='blog-img' className='w-[100%] h-[100%] object-contai  rounded-[10px]'/>
                                        </div>

                                        <a href='' className='flex-1 text-lightgray poppins'>This is the only read you would need before sitting down to prepare</a>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='follow-social-section sidebar-card'>
                                <h4 className='title text-[20px] montserrat font-semibold'>Follow us</h4>

                                <div className='text-[14px] text-white w-full grid grid-cols-2 poppins gap-5 '>
                                    <a  href='' className='bg-facebook flex flex-row justify-between px-2 py-2'>
                                        <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                                            <FaFacebookF className='w-[100%] h-[100%]'/>
                                        </span>

                                        <span className='capitalize'>150K Likes</span>
                                    </a>

                                    <a  href='' className='bg-twitter flex flex-row justify-between px-2 py-2'>
                                        <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                                            <FaTwitter className='w-[100%] h-[100%]'/>
                                        </span>

                                        <span className='capitalize'>1300K followers</span>
                                    </a>

                                    <a  href='' className='bg-youtube flex flex-row justify-between px-2 py-2'>
                                        <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                                            <TfiYoutube className='w-[100%] h-[100%]'/>
                                        </span>

                                        <span className='capitalize'>90k subscribers</span>
                                    </a>

                                    <a  href='' className='bg-pinterest flex flex-row justify-between px-2 py-2'>
                                        <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                                            <FaPinterest className='w-[100%] h-[100%]'/>
                                        </span>

                                        <span className='capitalize'>350k followers</span>
                                    </a>

                                    <a  href='' className='bg-tumbir flex flex-row justify-between px-2 py-2'>
                                        <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                                            <FaTumblr className='w-[100%] h-[100%]'/>
                                        </span>

                                        <span className='capitalize'>901 followers</span>
                                    </a>

                                    <a  href='' className='bg-rss flex flex-row justify-between px-2 py-2'>
                                        <span className='w-[15px] h-[15px] flex flex-col justify-center items-center'>
                                            <FaRss className='w-[100%] h-[100%]'/>
                                        </span>

                                        <span className='capitalize'>401 followers</span>
                                    </a>
                                </div>
                            </div>

                            <div className='sidebar-category-section sidebar-card flex flex-col gap-10'>
                                <h4 className='title text-lightblue text-[20px] montserrat font-semibold'>Categories</h4>

                                <div className='flex flex-wrap text-lightblue poppins gap-5'>
                                    <a href=''>
                                        <span>Education</span>
                                        <sup>11</sup>
                                    </a>

                                    <a href=''>
                                        <span>AI Content</span>
                                        <sup>44</sup>
                                    </a>

                                    <a href=''>
                                        <span>New Courses</span>
                                        <sup>33</sup>
                                    </a>

                                    <a href=''>
                                        <span>Marketing</span>
                                        <sup>14</sup>
                                    </a>

                                    <a href=''>
                                        <span>Software</span>
                                        <sup>21</sup>
                                    </a>

                                     <a href=''>
                                        <span>Design</span>
                                        <sup>01</sup>
                                    </a>                                    
                                </div>
                            </div>

                            <div className='sidebar-tag-section sidebar-card flex flex-col gap-10'>
                                <h4 className='title text-lightblue text-[20px] montserrat font-semibold'>Popular Tag</h4>

                                <div className='flex flex-wrap text-lightblue poppins gap-5'>
                                    <a href=''>
                                        Education
                                    </a>

                                    <a href=''>
                                        Course
                                    </a>

                                    <a href=''>
                                        Event
                                    </a>

                                    <a href=''>
                                        Copywriting
                                    </a>

                                    <a href=''>
                                       Clean Design
                                    </a>

                                     <a href=''>
                                       Digital Marketing
                                    </a> 

                                    <a href=''>
                                        All Projects
                                    </a>                                    
                                </div>
                            </div>

                            <div className='sidebar-banner sidebar-card w-full flex flex-col gap-5'>
                                <h4 className='title text-lightblue text-[20px] montserrat font-semibold'>Ad Banner</h4>

                                <div className='w-full flex flex-col justify-center items-center'>
                                    <img src={banner} alt='ad-banner' className='w-[100%] h-[100%] object-contain' />
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
        </>
    )
}

export default SingleBlogPage