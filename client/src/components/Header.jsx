import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import logo from '../assets/LOGO_blog.png'
import logo2 from '../assets/LOGO_blog2.png'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [show, setShow] = useState(true)
    let activeStyle = {
        color:"#e47332",
        textDecoration: "none",
        borderBottom: '3px solid #e47332',
        // marginLeft: '4px',
        // marginRight:'4px',
        transition:'500ms',
        // transitionTimingFunction:'ease-out',
        // padding: '6px'
    };
    return (
        <div>
                <header className={`p-4 dark:bg-gray-900 dark:text-white`}>
	                <div className={`container flex items-start lg:items-center justify-between lg:h-16 mx-auto ${show? "h-16" : "h-80"}`}>
		                <Link rel="noopener noreferrer" to={"/"} aria-label="Back to homepage" className="flex p-2">
		                    <img src={logo2} className='w-[10rem]'></img>
		                </Link>
		<ul className={`items-stretch lg:space-y-0 lg:mt-0 lg:space-x-3 lg:flex ${show ? "hidden" : "block space-y-8 mt-6"}`}>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to={"/"} style={({ isActive }) => isActive ? activeStyle : undefined} className="flex items-center px-4 py-2 -mb-1">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to={"/about"} style={({ isActive }) => isActive ? activeStyle : undefined} className="flex items-center px-4 py-2 -mb-1">About</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to={"/blogs"} style={({ isActive }) => isActive ? activeStyle : undefined} className="flex items-center px-4 py-2 -mb-1">Blogs</NavLink>
			</li>
			<li className="flex">
				<NavLink rel="noopener noreferrer" to={"projects"} style={({ isActive }) => isActive ? activeStyle : undefined} className="flex items-center px-4 py-2 -mb-1">Projects</NavLink>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 rounded">Sign in</button>
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-[#e47332] dark:text-white">Sign up</button>
		</div>
        {
            show?<button onClick={() => setShow(false)} className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>:<button className='p-4 lg:hidden text-2xl' onClick={() => setShow(true)}><IoClose /></button>
        }
		
        
	</div>
                </header>
        </div>
    );
};

export default Header;