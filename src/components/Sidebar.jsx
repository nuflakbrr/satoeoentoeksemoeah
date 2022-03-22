import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineDashboard } from 'react-icons/ai'
import { FaMoneyBillWave, FaHome } from 'react-icons/fa'

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = useState('hidden')

    const activeClass = 'text-white hover:text-white text-xs uppercase py-3 font-bold flex'
    const inActiveClass = 'text-gray-500 hover:text-gray-400 text-xs uppercase py-3 font-bold flex'

    const activeClassses = (path) => {
        return window.location.pathname === path ? activeClass : inActiveClass
    }

    return (
        <>
            <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-900 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
                <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
                    <Link className='md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0' to='/'>
                        SATOEOENTOEKSEMOEAH
                    </Link>

                    <button className='cursor-pointer text-white md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent' type='button' onClick={() => setCollapseShow('bg-gray-900 m-2 py-3 px-6')}>
                        <BiMenuAltLeft />
                    </button>

                    {/* Collapse */}
                    <div className={'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' + collapseShow}>

                        {/* Collapse header */}
                        <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
                            <div className='flex flex-wrap'>
                                <div className='w-6/12'>
                                    <Link className='md:block text-left text-white md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0' to='/'>
                                        SATOEOENTOEKSEMOEAH
                                    </Link>
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
                            <li className='items-center'>
                                <Link className={activeClassses('/bmi')} to='/bmi'>
                                    <AiOutlineDashboard className='mr-2 text-lg' /> BMI
                                </Link>
                            </li>

                            <li className='items-center'>
                                <Link className={activeClassses('/cicilan')} to='/cicilan'>
                                    <FaMoneyBillWave className='mr-2 text-lg' /> Cicilan Bank
                                </Link>
                            </li>

                            <li className='items-center'>
                                <Link className={activeClassses('/pajak')} to='/'>
                                    <FaMoneyBillWave className='mr-2 text-lg' /> Pajak PPN
                                </Link>
                            </li>
                        </ul>

                        <hr className='my-4 md:min-w-full' />

                        {/* Navigation */}
                        <h6 className='md:min-w-full text-gray-600 text-xs uppercase font-bold block mb-1'>
                            Halaman
                        </h6>

                        <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
                            <li className='inline-flex'>
                                <Link className={activeClassses('/')} to='/'>
                                    <FaHome className='mr-2 text-lg' /> Beranda
                                </Link>
                            </li>

                            <li className='inline-flex'>
                                <Link className={activeClassses('/about')} to='/about'>
                                    <BsFillInfoCircleFill className='mr-2 text-lg' /> Tentang
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
