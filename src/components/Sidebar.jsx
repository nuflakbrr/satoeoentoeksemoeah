import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillInfoCircleFill, BsCalculatorFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FaMoneyBillWave, FaHome, FaBook, FaCalendarAlt, FaShoppingCart } from 'react-icons/fa'

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = useState('hidden')

    const activeClass = 'text-white hover:text-white text-xs uppercase py-3 font-bold flex'
    const inActiveClass = 'text-gray-500 hover:text-gray-400 text-xs uppercase py-3 font-bold flex'

    const activeClassses = (path) => {
        return window.location.pathname === path ? activeClass : inActiveClass
    }

    const links = [
        { path: '/bmi', name: 'BMI', icon: <BsCalculatorFill className='mr-2 text-lg' /> },
        { path: '/credit', name: 'Cicilan Bank', icon: <FaMoneyBillWave className='mr-2 text-lg' /> },
        { path: '/tax', name: 'PPN', icon: <FaMoneyBillWave className='mr-2 text-lg' /> },
        { path: '/convert/biner', name: 'Konversi Biner', icon: <BsCalculatorFill className='mr-2 text-lg' /> },
        { path: '/convert/octal', name: 'Konversi Oktal', icon: <BsCalculatorFill className='mr-2 text-lg' /> },
        { path: '/convert/decimal', name: 'Konversi Desimal', icon: <BsCalculatorFill className='mr-2 text-lg' /> },
        { path: '/convert/hexadecimal', name: 'Konversi Heksadesimal', icon: <BsCalculatorFill className='mr-2 text-lg' /> },
        { path: '/book', name: 'Galeri Buku', icon: <FaBook className='mr-2 text-lg' /> },
        { path: '/environment', name: 'Hari Lingkungan Hidup', icon: <FaCalendarAlt className='mr-2 text-lg' /> },
        { path: '/shopping', name: 'Keranjang Belanja', icon: <FaShoppingCart className='mr-2 text-lg' /> },
    ]

    return (
        <>
            <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-900 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
                <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
                    <NavLink className='md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0' to='/'>
                        SATOEOENTOEKSEMOEAH
                    </NavLink>

                    <button className='cursor-pointer text-white focus:text-white md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent' type='button' onClick={() => setCollapseShow('bg-gray-900 m-2 py-3 px-6')}>
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
                    </button>

                    {/* Collapse */}
                    <div className={'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' + collapseShow}>

                        {/* Collapse header */}
                        <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
                            <div className='flex flex-wrap'>
                                <div className='w-6/12'>
                                    <NavLink className='md:block text-left text-white md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0' to='/'>
                                        SATOEOENTOEKSEMOEAH
                                    </NavLink>
                                </div>
                                <div className='w-6/12 flex justify-end'>
                                    <button type='button' className='cursor-pointer text-white md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent' onClick={() => setCollapseShow('hidden')}>
                                        <AiOutlineClose />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <h6 className='md:min-w-full text-gray-600 text-xs uppercase font-bold block mb-1'>
                            Studi Kasus
                        </h6>

                        <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                            {links.map((link, index) => (
                                <li key={index} className='items-center'>
                                    <NavLink className={activeClassses(link.path)} to={link.path}>
                                        {link.icon}
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <hr className='my-4 md:min-w-full' />

                        {/* Navigation */}
                        <h6 className='md:min-w-full text-gray-600 text-xs uppercase font-bold block mb-1'>
                            Halaman
                        </h6>

                        <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
                            <li className='inline-flex'>
                                <NavLink className={activeClassses('/')} to='/'>
                                    <FaHome className='mr-2 text-lg' /> Beranda
                                </NavLink>
                            </li>

                            <li className='inline-flex'>
                                <NavLink className={activeClassses('/about')} to='/about'>
                                    <BsFillInfoCircleFill className='mr-2 text-lg' /> Tentang
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
