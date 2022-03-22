import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import Me from '../assets/images/me.png'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()

    const links = [
        { text: 'Beranda', to: '/' },
        { text: 'Tentang', to: '/about' },
    ]

    const dropdownLinks = [
        { text: 'BMI', to: '/bmi' },
        { text: 'CIcilan Bank', to: '/cicilan' },
        { text: 'Pajak PPN', to: '/pajak' },
    ]

    const activeClass = 'text-white bg-gray-800'
    const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-800 transition duration-300 ease-in-out'
    const inactiveClassMenu = 'text-gray-700 hover:bg-gray-100 hover:bg-gray-800 transition duration-300 ease-in-out'

    return (
        <nav>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-10'>
                    <div className='flex items-center'>
                        {/* Profile dropdown */}
                        <NavLink to='/'>
                            <div className='ml-3 relative'>
                                <div>
                                    <span className='sr-only'>Open user menu</span>
                                    <img
                                        className='h-10 w-10 rounded-full border-2'
                                        src={Me}
                                        alt='Naufal Akbar Nugroho'
                                    />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    {links.map((link, i) => (
                                        <NavLink
                                            key={link.text}
                                            to={link.to}
                                            className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === link.to
                                                ? activeClass
                                                : inactiveClass
                                                } ${i > 0 && 'ml-4'}`}
                                        >
                                            {link.text}
                                        </NavLink>
                                    ))}
                                    <div className='group relative'>
                                        <button className={`px-3 py-2 rounded-md text-sm font-medium ${inactiveClass}`}>Studi Kasus</button>
                                        <nav tabIndex='0' className='bg-white invisible rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1'>
                                            <ul className='py-1'>
                                                <li>
                                                    <p className='block px-4 py-2 text-xs text-gray-500 border-b-2'>React Js</p>
                                                </li>
                                                {dropdownLinks.map((link, i) => (
                                                    <li key={link.text}>
                                                        <NavLink
                                                            to={link.to}
                                                            className={`block px-4 py-2 text-sm ${location.pathname === link.to
                                                                ? activeClass
                                                                : inactiveClassMenu
                                                                }`}
                                                        >
                                                            {link.text}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
                        >
                            {/* Menu open: 'hidden', Menu closed: 'block' */}
                            <svg
                                className='block h-6 w-6'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                            {/* Menu open: 'block', Menu closed: 'hidden' */}
                            <svg
                                className='hidden h-6 w-6'
                                stroke='currentColor'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                        {showMenu && (
                            <div className='origin-top-right absolute right-5 mt-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'>
                                <div className='py-1 rounded-md bg-white shadow-xs' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                                    {links.map((link, i) => (
                                        <NavLink
                                            key={link.text}
                                            to={link.to}
                                            className={`block px-4 py-2 text-sm font-medium ${location.pathname === link.to
                                                ? activeClass
                                                : inactiveClassMenu
                                                } ${i > 0 && 'mt-1'}`}
                                        >
                                            {link.text}
                                        </NavLink>
                                    ))}
                                    <div className='group relative'>
                                        <button className={`px-3 py-2 rounded-md text-sm font-medium ${inactiveClassMenu}`}>Studi Kasus</button>
                                        <nav tabIndex='0' className='bg-white invisible rounded w-60 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1'>
                                            <ul className='py-1'>
                                                <li>
                                                    <NavLink to='#' className='block px-4 py-2 hover:bg-gray-100'>
                                                        Edit
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='#' className='block px-4 py-2 hover:bg-gray-100'>
                                                        Delete
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='#' className='block px-4 py-2 hover:bg-gray-100'>
                                                        Reply
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* <NavLink
                                        to='/'
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                        role='menuitem'
                                    >
                                        Home
                                    </NavLink> */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
