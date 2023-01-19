import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import carol from '../asset/carol.JPG'
import carol1 from '../asset/carol1.jpg'
import { SiDblp, SiGooglescholar } from 'react-icons/si'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Main = () => {
    return (
        <div className='h-screen'>


            <NavBar ></NavBar>


            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col mt-24">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='menu p-4 mt-20  z-0 w-72 bg-[#7A1D2E] text-base-content'>
                        <img className='h-48 w-48 mx-auto' src={carol1} alt="" />
                        <div>
                            <h3 className='font-bold text-2xl pt-3 text-center text-gray-300'>Carol Fung, PhD</h3>
                            <p className='text-gray-300 pt-3'>
                                Gina Cody Research Chair in Cybersecurity & Internet of Things
                                Office: E-4234 <br />
                                Phone: (804)828-9731 <br />
                                Fax: (804)828-2771 <br />
                                Email:
                                Cfung@Vcu Dot Edu <br />
                            </p>
                        </div>
                        <div className="flex justify-center pt-2 space-x-4 align-center">
                            <a rel="noopener noreferrer" href="https://scholar.google.com/citations?user=lIYpkGYAAAAJ&hl=en"  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                <SiGooglescholar className='text-2xl text-blue-600'></SiGooglescholar>
                            </a>
                            <a rel="noopener noreferrer" href="https://dblp.org/pid/43/6355.html" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                <SiDblp className='text-2xl text-yellow-600' ></SiDblp>
                            </a>
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/carol-fung-96b853a/"  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                <AiFillLinkedin className='text-2xl text-blue-800'></AiFillLinkedin>
                            </a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/carol_fung_ecommerce/?hl=en" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                <AiFillInstagram className='text-2xl text-white'></AiFillInstagram>
                            </a>
                        </div>

                    </div>


                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;