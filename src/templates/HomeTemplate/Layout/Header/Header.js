import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../../../../src/assets/image/Logo.png';
const Header = (props) => {
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-40 bg-black text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <a href="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img alt="LogoCinema" style={{ width: 80, height: 60, }} src={Logo}></img>
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink activeClassName="border-b-2 border-white text-red-500 " to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white hover:text-red-600 ">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink style={{ textDecoration: 'none' }} activeClassName="border-b-2 border-white text-red-500" to="/contact" className="flex items-center px-4 text-white  -mb-1 border-b-2 border-transparent hover:text-red-600">Contact</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink style={{ textDecoration: 'none' }} activeClassName="border-b-2 border-white text-red-500" to="/news" className="flex items-center px-4 text-white  -mb-1 border-b-2 border-transparent hover:text-red-600">News</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <NavLink to="/login">
                        <button className="self-center px-8 py-3 rounded text-white hover:text-red-600">Sign in</button>
                    </NavLink>
                    <NavLink to="/register">
                        <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50 text-white hover:text-red-600">Sign up</button>
                    </NavLink>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}

export default Header;
