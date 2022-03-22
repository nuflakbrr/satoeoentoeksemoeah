import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { Footer, Navbar, SEO } from '../components'
import Me from '../assets/images/Me.png'

export default function About() {
    return (
        <>
            <SEO title='Tentang - SATOE OENTOEK SEMOEAH' desc='' />
            <div className='dark:bg-gray-900 min-h-screen lg:overflow-x-auto overflow-x-hidden'>
                <Navbar />
                <div className='text-gray-300 y-6 sm:py-8 lg:py-12'>
                    <div className='max-w-screen-xl px-4 md:px-8 mx-auto'>
                        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
                            <div>
                                <div className='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
                                    <img src='https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750' loading='lazy' alt='Photo by Martin Sanchez' className='w-full h-full object-cover object-center' />
                                </div>
                            </div>

                            <div className='md:pt-8'>
                                <h1 className='text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>Tentang SATOEOENTOEKSEMOEAH.</h1>

                                <p className='text-gray-500 sm:text-lg mb-6 md:mb-8'>
                                    <span className='bg-gray-700 p-1 rounded font-mono'>SATOEOENTOEKSEMOEAH</span> adalah sebuah Website yang berisikan tentang semua kumpulan studi kasus yang diberikan oleh <a href='https://smktelkom-mlg.sch.id' className='text-blue-500 hover:text-blue-600 active:text-blue-700 underline transition duration-100'>SMK Telkom Malang</a>.<br /><br />

                                    Mengapa saya memilih nama <span className='bg-gray-700 p-1 rounded font-mono'>SATOEOENTOEKSEMOEAH</span>? Karena, nama tersebut saya ambil dari kalimat <i>Satoe Oentoek Semoea</i> dengan ejaan <i>Order Lama</i> yang memiliki arti <i>Satu Untuk Semua</i>. Hal tersebut sesuai dengan Website ini, satu Website yang memiliki banyak studi kasus yang bisa Anda nikmati.
                                </p>

                                <h2 className='text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>Tentang Naufal Akbar Nugroho</h2>

                                <div className='flex flex-col p-5'>
                                    <div>
                                        <div className='flex items-end justify-end mb-3'>
                                            <div className='flex flex-col md:text-md text-sm max-w-md mx-2 items-center'>
                                                <div>
                                                    <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-700 text-white'>Saya adalah seorang siswa SMK Telkom Malang yang mengambil bidang studi jurusan RPL (Rekayasa Perangkat Lunak). Hobi saya adalah bermain video game, membuat website dengan ReactJs. Saya juga tertarik untuk membuat kontribusi ke sumber terbuka terkait informasi teknologi!</span>
                                                </div>
                                            </div>
                                            <img src={Me} alt='Naufal Akbar Nugroho' className='md:w-18 md:h-18 w-16 h-16 rounded-full' />
                                        </div>
                                        <div className='flex items-end justify-end'>
                                            <div className='flex flex-col md:text-md text-sm max-w-md mx-2 items-center'>
                                                <div>
                                                    <span className='px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-700 text-white'>Anda dapat mengunjungi Website saya di <a href="https://naufalakbar.me" className='underline' rel='noopener noreferrer' target='_blank'>naufalakbar.me</a>, Terimakasih!</span>
                                                </div>
                                            </div>
                                            <img src={Me} alt='Naufal Akbar Nugroho' className='md:w-18 md:h-18 w-16 h-16 rounded-full' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
