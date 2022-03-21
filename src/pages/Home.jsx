import React from 'react'
import { Footer, Navbar } from '../components'

export default function Home() {
    return (
        <div className='dark:bg-gray-900 min-h-screen'>
            <Navbar />
            <section className='text-gray-300'>
                <div className='container flex flex-col px-5 py-24 mx-auto lg:items-center'>
                    <div className='flex flex-col w-full mb-12 text-left lg:text-center'>
                        <h2 className='mb-4 text-xs font-semibold tracking-widest text-gray-50 uppercase title-font'>
                            Hai, saya
                        </h2>
                        <h1 className='mb-6 text-2xl font-semibold tracking-tighter text-white sm:text-5xl title-font'>
                            {' '}
                            Naufal Akbar Nugroho
                        </h1>
                        <p className='mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3'>
                            Selamat Datang di Website <span className='bg-gray-700 p-1 rounded font-mono'>SATOEOENTOEKSEMOEAH</span>. Di Website ini, Anda dapat menikmati beberapa studi kasus yang sudah saya kerjakan. Semua studi kasus didalam Website ini adalah semua studi kasus yang saya dapat dari sekolah.
                        </p>
                    </div>
                    <div className='flex justify-left lg:justify-center '>
                        <a
                            href='https://github.com/nuflakbrr/'
                            title='github naufal akbar nugroho'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <button className='flex items-center px-6 py-2 mt-auto mr-3 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-800 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                Github
                            </button>
                        </a>
                        <a
                            href='https://www.naufalakbar.me/'
                            title='blog naufal akbar nugroho'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            <button className='flex items-center px-6 py-2 mt-auto font-semibold text-black transition duration-500 ease-in-out transform bg-white rounded-lg hover:bg-gray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2'>
                                Blog
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
