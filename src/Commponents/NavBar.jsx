import React, { useEffect, useState } from "react";
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate ,useLocation} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);
    const [showManue, setShowManue] = useState(false);
    const [token, setToken] = useState(true);
   const menu = [
    { key: '/', value: 'Home' },
    { key: '/doctors', value: 'All Docters' },
    { key: '/about', value: 'About' },
    { key: '/contact', value: 'Contact' },
    { key: '/login', value: 'Login' },
    // Add more items as needed
    ];
    
    const handleClick = (key) => {
        setActiveItem(key);
    };

      useEffect(() => {
        // Get the first path segment after the root
        const pathSegments = location.pathname.split('/');
          const currentSegment = pathSegments[1] || '/'; // Default to '/' if there's no segment
        setActiveItem(currentSegment);
    }, [location.pathname]);
    
    return (
        <div className="flex items-center justify-between text-sm py-4  mb-5 border-b border-b-gray-500">
            <img className='w-44 cursor-pointer shadow-inner shadow-gray-800 duration-300 hover:cursor-pointer py-3 px-3 rounded' onClick={() => navigate('/')} src={assets.logo} alt="" />
            <ul className="hidden md:flex items-start gap-5 font-medium">
                 {menu.map((item) => (
                    <li key={item.key}>
                        <NavLink
                            to={item.key}
                            onClick={() => handleClick(item.key)}
                        >
                            {item.value}
                        </NavLink>
                        {(activeItem === item.key || location.pathname === item.key) && (
                            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
                        )}
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-4">
                {
                    token ? <div className="flex items-center gap-2 cursor-pointer group relative">
                        <img className="w-8 rounded-full shadow-xl shadow-gray-800  duration-300 hover:cursor-pointer" src={assets.profile_pic} alt="" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-400  text-blue-500 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => navigate('/my-profile')} className="hover:text-black curser-pointer">My Profile</p>
                                <p onClick={() => navigate('/my-appoinment')} className="hover:text-black cursor-pointer">Appoinments</p>
                                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer ">Logout</p>
                            </div>
                        </div>
                    </div> : <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3  rounded-full font-light hidden md:block">Create account</button>
                }
                <img onClick={() => setShowManue(true)} src={assets.menu_icon} className="w-6 md:hidden" alt="" />
                {/* ------Mobile Manue------- */}
                <div className={`${showManue?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className="flex item-center justify-between px-5 py-6">
                    <img className="w-36" src={assets.logo} alt="" />
                    <img className="w-7" onClick={()=>setShowManue(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 text-lg px-5 font-medium">
                        <NavLink onClick={()=>setShowManue(false)}  to={'/'}> <p className='px-4 py-2 rounded inline-block'>Home</p> </NavLink>
                        <NavLink onClick={()=>setShowManue(false)}  to={'/doctors'}><p className='px-4 py-2 rounded inline-block'>All Docters</p></NavLink>
                        <NavLink onClick={()=>setShowManue(false)}  to={'/about'}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
                        <NavLink onClick={()=>setShowManue(false)}  to={'/contact'}><p className='px-4 py-2 rounded inline-block'>Contact us</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default NavBar;