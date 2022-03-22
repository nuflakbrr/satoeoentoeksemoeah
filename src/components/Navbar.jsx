import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Me from '../assets/images/Me.png'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const activeClass = 'text-white bg-gray-800'
    const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-800 transition duration-300 ease-in-out'
    const inactiveClassMenu = 'text-gray-700 hover:bg-gray-100 hover:bg-gray-800 transition duration-300 ease-in-out'

    const activeClasses = (path) => {
        return window.location.pathname === path ? activeClass : inactiveClass
    }

    const activeClassMob = (path) => {
        return window.location.pathname === path ? activeClass : inactiveClassMenu
    }

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
                                    <NavLink to='/' className={`px-3 py-2 rounded-md text-sm font-medium ${activeClasses('/')} ml-4`}>Beranda</NavLink>
                                    <NavLink to='/about' className={`px-3 py-2 rounded-md text-sm font-medium ${activeClasses('/about')} ml-4`}>Tentang</NavLink>
                                    <NavLink to='/bmi' className={`px-3 py-2 rounded-md text-sm font-medium ${activeClasses('/bmi')} ml-4`}>Studi Kasus</NavLink>
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
                                    <NavLink to='/' className={`block px-4 py-2 text-sm font-medium ${activeClassMob('/')}`}>Beranda</NavLink>
                                    <NavLink to='/about' className={`block px-4 py-2 text-sm font-medium ${activeClassMob('/about')}`}>Tentang</NavLink>
                                    <NavLink to='/bmi' className={`block px-4 py-2 text-sm font-medium ${activeClassMob('/bmi')}`}>Studi Kasus</NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
