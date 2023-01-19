import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../asset/logo.png'

const NavBar = () => {
    const menuItems = <React.Fragment>
    <li>
        <NavLink to='/home'
            className={({ isActive }) =>
                isActive
                    ? " text-lime-300 font-bold  "
                    : "font-bold "
            }>Home
        </NavLink>
    </li>
    <li><NavLink to='/biography' className={({ isActive }) =>
        isActive
            ? " text-lime-300 font-bold "
            : "font-bold"
    }>Biography</NavLink></li>
    <li><NavLink to='/work' className={({ isActive }) =>
        isActive
            ? " text-lime-300 font-bold "
            : "font-bold"
    }>Work</NavLink></li>
    <li><NavLink to='/lab' className={({ isActive }) =>
        isActive
            ? " text-lime-300 font-bold "
            : "font-bold"
    }>Lab</NavLink></li>
    <li><NavLink to='/publications' className={({ isActive }) =>
        isActive
            ? " text-lime-300 font-bold "
            : "font-bold"
    }>Publications</NavLink></li>

    <li>
        <NavLink to='/photos' className={({ isActive }) =>
            isActive
                ? " text-lime-300 font-bold "
                : "font-bold"
        }>Photos
        </NavLink>
    </li>
</React.Fragment>
    return (
        <div className=" bg-[#7A1D2E] fixed h-20 z-10 w-full  text-white flex justify-between px-6">
        <div className="navbar-start flex flex-row">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-[#7A1D2E]  text-white rounded-box w-52">
                    {menuItems}
                </ul>

            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl">
                <div className='flex items-center pt-2'>
                    <img className='h-14 ' src={logo} alt="" />
                    {/* <h1 className='pl-2 text-3xl font-bold hover:text-orange-600'>Y A Joarder</h1> */}
                </div>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  p-0">
                {menuItems}
            </ul>

        </div>
        <div className="dropdown">
                <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                

            </div>
    </div>
    );
};

export default NavBar;